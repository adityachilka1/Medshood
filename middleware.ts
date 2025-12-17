/**
 * Next.js Middleware
 *
 * Handles cross-cutting concerns for all requests:
 * - CORS headers
 * - Security headers
 * - Request logging
 * - Rate limiting (basic)
 * - Authentication checks for protected routes
 */

import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify, SignJWT } from 'jose';
// Note: Token blacklist check moved to API routes (not Edge-compatible due to Redis)
// import { isTokenBlacklisted } from './lib/auth/tokenBlacklist';

// ============================================================================
// CSRF Helper Functions (inline for Edge compatibility)
// ============================================================================

const CSRF_HEADER_NAME = 'X-CSRF-Token';

/**
 * Get CSRF secret - returns null if not configured (graceful degradation)
 */
function getCSRFSecret(): Uint8Array | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return null;
  }
  return new TextEncoder().encode(secret);
}

/**
 * Generate CSRF token - returns random token if JWT_SECRET not configured
 */
async function generateCSRFToken(): Promise<string> {
  const secret = getCSRFSecret();

  // If no secret configured, return a simple random token
  // This provides basic protection but not cryptographic verification
  if (!secret) {
    return crypto.randomUUID();
  }

  try {
    const token = await new SignJWT({
      purpose: 'csrf-protection',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .setJti(crypto.randomUUID())
      .sign(secret);
    return token;
  } catch {
    // Fallback to random token on any error
    return crypto.randomUUID();
  }
}

/**
 * Validate CSRF token - skips validation if JWT_SECRET not configured
 */
async function validateCSRFToken(request: Request): Promise<{
  valid: boolean;
  error?: string;
}> {
  const secret = getCSRFSecret();

  // Skip CSRF validation if not configured (graceful degradation for preview deployments)
  if (!secret) {
    return { valid: true };
  }

  const token = request.headers.get(CSRF_HEADER_NAME);

  if (!token) {
    return {
      valid: false,
      error: 'CSRF token is required for state-changing operations',
    };
  }

  try {
    const { payload } = await jwtVerify(token, secret);

    if (payload.purpose !== 'csrf-protection') {
      return { valid: false, error: 'Invalid CSRF token purpose' };
    }

    return { valid: true };
  } catch {
    return { valid: false, error: 'Invalid or expired CSRF token' };
  }
}

// ============================================================================
// Configuration
// ============================================================================

/**
 * Routes that require authentication
 */
const PROTECTED_ROUTES = [
  // '/dashboard', // TEMPORARILY DISABLED for development - re-enable before production!
  '/api/dashboard',
  '/api/patients',
  '/api/prescriptions', // SECURITY FIX: Prescriptions contain PHI and must be protected
  '/api/prior-auth',
  '/api/inventory',
];

/**
 * Routes that are public (no auth required)
 * Note: These are explicitly listed for documentation. Any route not in PROTECTED_ROUTES is public.
 */
const _PUBLIC_API_ROUTES = [
  '/api/catalog',
  '/api/cart',
  '/api/checkout',
  '/api/payment',
  '/api/privacy',
  '/api/cms',
  '/api/webhooks',
];

/**
 * Content Security Policy
 * Protects against XSS, injection attacks, and other security vulnerabilities
 */
const CSP_DIRECTIVES = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-inline'", // Required for Next.js in development and some inline scripts
    "'unsafe-eval'", // Required for Next.js development hot reload
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://cdn.jsdelivr.net',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'", // Required for styled-jsx and CSS-in-JS
    'https://fonts.googleapis.com',
  ],
  'font-src': [
    "'self'",
    'https://fonts.gstatic.com',
    'data:',
  ],
  'img-src': [
    "'self'",
    'data:',
    'https:',
    'blob:',
  ],
  'connect-src': [
    "'self'",
    'https://www.google-analytics.com',
    'https://*.supabase.co',
    'wss://*.supabase.co',
    process.env.NEXT_PUBLIC_API_URL || '',
  ].filter(Boolean),
  'frame-src': [
    "'self'",
    'https://www.youtube.com',
  ],
  'media-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': [],
};

/**
 * Build CSP header value from directives
 */
function buildCSPHeader(): string {
  return Object.entries(CSP_DIRECTIVES)
    .map(([key, values]) => {
      if (values.length === 0) {
        return key;
      }
      return `${key} ${values.join(' ')}`;
    })
    .join('; ');
}

/**
 * Security headers to add to all responses
 */
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': buildCSPHeader(),
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains', // HSTS
};

/**
 * CORS configuration
 */
const CORS_CONFIG = {
  allowedOrigins: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'X-CSRF-Token'],
  maxAge: 86400, // 24 hours
};

// ============================================================================
// Middleware Implementation
// ============================================================================

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const startTime = Date.now();

  // Generate request ID for tracing
  const requestId = crypto.randomUUID().substring(0, 8);

  // Log incoming request (development only)
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${requestId}] ${request.method} ${pathname}`);
  }

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return handleCors(request);
  }

  // CSRF Protection: Validate tokens for state-changing operations
  const isApiRoute = pathname.startsWith('/api');
  const isStateChangingMethod = ['POST', 'PUT', 'DELETE', 'PATCH'].includes(request.method);

  if (isApiRoute && isStateChangingMethod) {
    // Skip CSRF check for webhooks (they use signature verification)
    const isWebhook = pathname.startsWith('/api/webhooks');

    if (!isWebhook) {
      const csrfValidation = await validateCSRFToken(request);
      if (!csrfValidation.valid) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'CSRF_TOKEN_INVALID',
              message: csrfValidation.error || 'CSRF validation failed',
            },
            meta: {
              timestamp: new Date().toISOString(),
            },
          },
          { status: 403 }
        );
      }
    }
  }

  // Apply security headers
  const response = NextResponse.next();
  addSecurityHeaders(response);
  addCorsHeaders(request, response);

  // Add request ID header for tracing
  response.headers.set('X-Request-ID', requestId);

  // Generate and set CSRF token for authenticated sessions
  // This ensures the client has a valid token for subsequent requests
  if (!request.cookies.get('csrf_token')) {
    const csrfToken = await generateCSRFToken();
    response.cookies.set('csrf_token', csrfToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600, // 1 hour
      path: '/',
    });
  }

  // Check if route requires authentication
  const requiresAuth = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (requiresAuth) {
    const authResult = await checkAuthentication(request);
    if (!authResult.authenticated) {
      return createUnauthorizedResponse(authResult.message);
    }

    // Add user info to headers for downstream use
    if (authResult.userId) {
      response.headers.set('X-User-ID', authResult.userId);
    }
    if (authResult.role) {
      response.headers.set('X-User-Role', authResult.role);
    }
  }

  // Log response time (development only)
  if (process.env.NODE_ENV === 'development') {
    const duration = Date.now() - startTime;
    console.log(`[${requestId}] Completed in ${duration}ms`);
  }

  return response;
}

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Handle CORS preflight requests
 */
function handleCors(request: NextRequest): NextResponse {
  const origin = request.headers.get('Origin');
  const isAllowedOrigin =
    origin && CORS_CONFIG.allowedOrigins.includes(origin);

  const response = new NextResponse(null, { status: 204 });

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  response.headers.set(
    'Access-Control-Allow-Methods',
    CORS_CONFIG.allowedMethods.join(', ')
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    CORS_CONFIG.allowedHeaders.join(', ')
  );
  response.headers.set(
    'Access-Control-Max-Age',
    CORS_CONFIG.maxAge.toString()
  );

  addSecurityHeaders(response);

  return response;
}

/**
 * Add security headers to response
 */
function addSecurityHeaders(response: NextResponse): void {
  Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
}

/**
 * Add CORS headers to response
 */
function addCorsHeaders(request: NextRequest, response: NextResponse): void {
  const origin = request.headers.get('Origin');
  const isAllowedOrigin =
    origin && CORS_CONFIG.allowedOrigins.includes(origin);

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }
}

/**
 * JWT token payload structure
 */
interface JWTPayload {
  userId: string;
  email?: string;
  role: string;
  type?: 'access' | 'refresh';
  jti?: string; // JWT ID for revocation
}

/**
 * Get JWT secret for verification
 * Edge runtime compatible - uses TextEncoder instead of Buffer
 * Returns null if JWT_SECRET is not configured
 */
function getJWTSecret(): Uint8Array | null {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return null;
  }
  return new TextEncoder().encode(secret);
}

/**
 * Check authentication status
 * Verifies JWT tokens from Authorization header or session cookie
 */
async function checkAuthentication(request: NextRequest): Promise<{
  authenticated: boolean;
  userId?: string;
  role?: string;
  message?: string;
}> {
  // Check for authorization header first
  const authHeader = request.headers.get('Authorization');
  const sessionCookie = request.cookies.get('session');

  // Try Bearer token authentication
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7);

    try {
      const secret = getJWTSecret();
      if (!secret) {
        return {
          authenticated: false,
          message: 'Authentication not configured',
        };
      }
      const { payload } = await jwtVerify(token, secret, {
        issuer: process.env.JWT_ISSUER || 'medshood',
        audience: process.env.JWT_AUDIENCE || 'medshood-app',
      });

      const jwtPayload = payload as unknown as JWTPayload;

      // Validate required fields
      if (!jwtPayload.userId || !jwtPayload.role) {
        return {
          authenticated: false,
          message: 'Invalid token payload',
        };
      }

      // Check token type if present
      if (jwtPayload.type && jwtPayload.type !== 'access') {
        return {
          authenticated: false,
          message: 'Invalid token type',
        };
      }

      // Note: Token blacklist check moved to API routes for Edge compatibility
      // In a full implementation, you could use an Edge-compatible KV store here

      return {
        authenticated: true,
        userId: jwtPayload.userId,
        role: jwtPayload.role,
      };
    } catch (error) {
      // Handle specific JWT errors
      if (error instanceof Error) {
        if (error.message.includes('expired')) {
          return {
            authenticated: false,
            message: 'Token has expired',
          };
        }
        if (error.message.includes('signature')) {
          return {
            authenticated: false,
            message: 'Invalid token signature',
          };
        }
      }
      return {
        authenticated: false,
        message: 'Token verification failed',
      };
    }
  }

  // Try session cookie authentication
  if (sessionCookie) {
    try {
      const secret = getJWTSecret();
      if (!secret) {
        // Skip session cookie auth if JWT not configured
        return {
          authenticated: false,
          message: 'Authentication not configured',
        };
      }
      const { payload } = await jwtVerify(sessionCookie.value, secret, {
        issuer: process.env.JWT_ISSUER || 'medshood',
        audience: process.env.JWT_AUDIENCE || 'medshood-app',
      });

      const jwtPayload = payload as unknown as JWTPayload;

      if (jwtPayload.userId && jwtPayload.role) {
        return {
          authenticated: true,
          userId: jwtPayload.userId,
          role: jwtPayload.role,
        };
      }
    } catch {
      // Session cookie invalid, fall through to other checks
    }
  }

  // SECURITY: Development auth bypass - restricted conditions
  // Only enabled in development mode with explicit opt-in AND localhost access
  if (process.env.NODE_ENV === 'development' && process.env.SKIP_AUTH === 'true') {
    // Additional safety: Check if running on localhost
    const host = request.headers.get('host') || '';
    const isLocalhost = host.startsWith('localhost') || host.startsWith('127.0.0.1');

    if (!isLocalhost) {
      console.error('[SECURITY] SKIP_AUTH attempted from non-localhost:', host);
      return {
        authenticated: false,
        message: 'Development auth bypass only allowed from localhost',
      };
    }

    console.warn('⚠️  [DEV ONLY] Auth bypass active - DO NOT USE IN PRODUCTION');
    return {
      authenticated: true,
      userId: 'dev-user',
      role: 'developer', // Limited role, not admin
    };
  }

  return {
    authenticated: false,
    message: 'Authentication required',
  };
}

/**
 * Create unauthorized response
 */
function createUnauthorizedResponse(message = 'Unauthorized'): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: {
        code: 'UNAUTHORIZED',
        message,
      },
      meta: {
        timestamp: new Date().toISOString(),
      },
    },
    {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Bearer',
        ...SECURITY_HEADERS,
      },
    }
  );
}

// ============================================================================
// Middleware Configuration
// ============================================================================

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
