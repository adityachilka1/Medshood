# Medshood Testing Strategy
**Comprehensive Testing Framework for Healthcare E-Commerce Platform**

---

## Executive Summary

This document outlines a complete testing strategy for the Medshood health tech platform, a Next.js 16 medical e-commerce application handling sensitive health data and eligibility determination for GLP-1 weight loss treatments. Given the healthcare context and zero existing testing infrastructure, this strategy prioritizes reliability, compliance, and comprehensive coverage with an **80%+ target** for critical health-related code paths.

### Current State
- **Platform**: Next.js 16, React 19, TypeScript
- **Testing Infrastructure**: ZERO (no test files, frameworks, or CI/CD)
- **Critical Flows**: 7-step medical quiz, BMI calculation, eligibility determination
- **Compliance Requirement**: Healthcare data handling requires high reliability

---

## 1. Testing Pyramid Architecture

### 1.1 Unit Tests (60% of test suite)
**Focus**: Component logic, utilities, calculations, validation functions

**Coverage Target**: 85%+ for business logic

**Test Categories**:
- **BMI Calculation Logic** (CRITICAL)
  - Formula accuracy: `weight / (height^2)`
  - Edge cases: zero values, negative numbers, extreme values
  - Decimal precision (1 decimal place)
  - Unit conversion (cm to meters)

- **Eligibility Determination** (CRITICAL)
  - Age validation (≥18)
  - BMI threshold: ≥30 OR (BMI ≥27 AND has medical conditions)
  - Medical conditions array handling
  - Boundary conditions (BMI exactly 27, 30)

- **Form Validation**
  - Email format validation
  - Phone number format (international with country code)
  - Age range (18-100)
  - Weight/height input validation
  - Required field checks

- **Component Rendering**
  - Header desktop/mobile navigation
  - Footer links rendering
  - Quiz step progression (1-7 + results)
  - Pricing plan display
  - Form input states

### 1.2 Integration Tests (30% of test suite)
**Focus**: Multi-component interactions, form flows, state management

**Coverage Target**: 75%+ for user flows

**Test Scenarios**:
- **Quiz Flow Integration**
  - Complete 7-step journey with valid data
  - Step navigation (next/previous)
  - Progress bar calculation
  - Form data persistence across steps
  - Results page rendering (eligible/ineligible)

- **Form Validation Flow**
  - Error message display
  - Field-level validation feedback
  - Checkbox/radio group behavior
  - Multi-select medical conditions

- **Navigation Integration**
  - Header links routing
  - Mobile menu toggle
  - CTA button navigation to quiz
  - Results page action buttons

### 1.3 End-to-End Tests (10% of test suite)
**Focus**: Complete user journeys, critical business paths

**Coverage Target**: 100% of critical paths

**Critical Flows**:
1. **Eligible User Journey**
   - Landing page → Check Eligibility CTA → Quiz (all 7 steps) → Eligible result → View Pricing

2. **Ineligible User Journey**
   - Quiz completion → Ineligible result → Contact specialist

3. **Pricing to Quiz Flow**
   - Pricing page → Select plan → Start quiz

4. **Mobile User Journey**
   - Mobile menu navigation → Quiz on mobile → Form submission

---

## 2. Testing Framework Recommendations

### 2.1 Unit & Integration Testing

#### **RECOMMENDED: Vitest + React Testing Library**

**Justification**:
- **Vitest**: Native Vite integration, faster than Jest for Next.js 16
- **React Testing Library**: Best practices for React 19 component testing
- **TypeScript Support**: First-class TS support
- **Modern**: Built for ESM and modern JS tooling

**Alternative**: Jest + Testing Library (more established, larger ecosystem)

**Setup**:
```bash
npm install -D vitest @vitejs/plugin-react jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

**Configuration**: `vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        '.next/',
        'coverage/',
        '**/*.config.{js,ts}',
        '**/types/**'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 75,
        statements: 80
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
```

### 2.2 End-to-End Testing

#### **RECOMMENDED: Playwright**

**Justification**:
- **Multi-browser**: Chromium, Firefox, WebKit (Safari)
- **Modern**: Better Next.js 16 support than Cypress
- **API Testing**: Built-in API interception
- **Performance**: Faster execution, better parallelization
- **Mobile**: Device emulation for mobile testing
- **Trace Viewer**: Excellent debugging experience

**Alternative**: Cypress (simpler API, better for developers new to E2E)

**Setup**:
```bash
npm install -D @playwright/test
npx playwright install
```

**Configuration**: `playwright.config.ts`
```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'playwright-report/results.json' }],
    ['junit', { outputFile: 'playwright-report/results.xml' }]
  ],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 13'] }
    }
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI
  }
})
```

### 2.3 Visual Regression Testing

#### **RECOMMENDED: Playwright Visual Comparisons + Percy (optional)**

**Justification**:
- **Playwright Built-in**: Free visual snapshots with `toHaveScreenshot()`
- **Percy**: Advanced visual diffing, CI integration (paid but powerful)
- **Chromatic**: Alternative for Storybook integration

**Setup** (Playwright native):
```bash
# Already included with Playwright
```

**Setup** (Percy for advanced needs):
```bash
npm install -D @percy/cli @percy/playwright
```

### 2.4 Accessibility Testing

#### **RECOMMENDED: axe-core + pa11y + Lighthouse CI**

**Justification**:
- **axe-core**: Industry standard, 50+ accessibility rules
- **pa11y**: CLI tool for automated WCAG 2.1 AA/AAA testing
- **Lighthouse CI**: Google's performance + accessibility audits

**Setup**:
```bash
npm install -D axe-core @axe-core/playwright pa11y-ci @lhci/cli
```

**Configuration**: `.pa11yci.json`
```json
{
  "defaults": {
    "standard": "WCAG2AA",
    "runners": ["axe"],
    "timeout": 30000,
    "wait": 1000
  },
  "urls": [
    "http://localhost:3000",
    "http://localhost:3000/quiz",
    "http://localhost:3000/pricing",
    "http://localhost:3000/weight-loss"
  ]
}
```

### 2.5 Performance Testing

#### **RECOMMENDED: Lighthouse CI + k6 (future API testing)**

**Justification**:
- **Lighthouse CI**: Core Web Vitals monitoring
- **k6**: Load testing for future backend APIs

**Setup**:
```bash
npm install -D @lhci/cli
npm install -g k6  # For API load testing later
```

**Configuration**: `lighthouserc.json`
```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000",
        "http://localhost:3000/quiz",
        "http://localhost:3000/pricing"
      ],
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.9 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

### 2.6 Security Testing

#### **RECOMMENDED: OWASP ZAP (free) + npm audit + ESLint security plugins**

**Setup**:
```bash
npm install -D eslint-plugin-security eslint-plugin-no-secrets
```

---

## 3. Detailed Test Cases for Critical Flows

### 3.1 BMI Calculation Tests

**File**: `/tests/unit/bmi-calculator.test.ts`

```typescript
import { describe, it, expect } from 'vitest'

// Test data
describe('BMI Calculation', () => {
  it('calculates BMI correctly for standard inputs', () => {
    const weight = 85 // kg
    const height = 170 // cm
    const expectedBMI = '29.4' // 85 / (1.7 * 1.7) = 29.41

    const bmi = calculateBMI(weight, height)
    expect(bmi).toBe(expectedBMI)
  })

  it('returns correct BMI with 1 decimal precision', () => {
    const weight = 90
    const height = 180
    const bmi = calculateBMI(weight, height)

    expect(bmi).toMatch(/^\d+\.\d$/) // Single decimal
  })

  it('handles decimal weight and height', () => {
    const weight = 75.5
    const height = 165.5
    const bmi = calculateBMI(weight, height)

    expect(parseFloat(bmi)).toBeCloseTo(27.6, 1)
  })

  it('returns "0" for invalid inputs', () => {
    expect(calculateBMI(0, 170)).toBe('0')
    expect(calculateBMI(85, 0)).toBe('0')
    expect(calculateBMI(-85, 170)).toBe('0')
    expect(calculateBMI(85, -170)).toBe('0')
  })

  it('handles extreme values safely', () => {
    const weight = 300 // morbidly obese
    const height = 150 // short
    const bmi = calculateBMI(weight, height)

    expect(parseFloat(bmi)).toBeGreaterThan(100)
  })

  it('converts cm to meters correctly', () => {
    const weight = 100
    const height = 200 // 2 meters
    const bmi = calculateBMI(weight, height)

    // 100 / (2 * 2) = 25.0
    expect(bmi).toBe('25.0')
  })
})
```

### 3.2 Eligibility Determination Tests

**File**: `/tests/unit/eligibility.test.ts`

```typescript
import { describe, it, expect } from 'vitest'

describe('Eligibility Determination', () => {
  // Age validation
  it('requires age >= 18', () => {
    const formData = { age: 17, weight: 90, height: 170, medicalConditions: [] }
    expect(isEligible(formData)).toBe(false)
  })

  it('allows age exactly 18', () => {
    const formData = { age: 18, weight: 100, height: 165, medicalConditions: [] }
    expect(isEligible(formData)).toBe(true) // BMI = 36.7
  })

  // BMI >= 30 (no conditions required)
  it('is eligible with BMI >= 30 and no medical conditions', () => {
    const formData = { age: 30, weight: 100, height: 165, medicalConditions: [] }
    // BMI = 36.7
    expect(isEligible(formData)).toBe(true)
  })

  it('is eligible with BMI exactly 30', () => {
    const formData = { age: 30, weight: 81, height: 165, medicalConditions: [] }
    // BMI = 29.8 (just under) - should be false
    const bmi = 81 / (1.65 * 1.65) // 29.75
    expect(bmi).toBeLessThan(30)
    expect(isEligible(formData)).toBe(false)

    // Adjust to exactly 30
    const adjusted = { ...formData, weight: 81.7 }
    const adjustedBMI = 81.7 / (1.65 * 1.65) // 30.01
    expect(adjustedBMI).toBeGreaterThanOrEqual(30)
    expect(isEligible(adjusted)).toBe(true)
  })

  // BMI >= 27 with medical conditions
  it('is eligible with BMI >= 27 AND has medical conditions', () => {
    const formData = {
      age: 30,
      weight: 75,
      height: 165,
      medicalConditions: ['Type 2 Diabetes']
    }
    // BMI = 27.5
    expect(isEligible(formData)).toBe(true)
  })

  it('is NOT eligible with BMI >= 27 but NO medical conditions', () => {
    const formData = {
      age: 30,
      weight: 75,
      height: 165,
      medicalConditions: []
    }
    // BMI = 27.5 but no conditions
    expect(isEligible(formData)).toBe(false)
  })

  it('is eligible with BMI exactly 27 and medical condition', () => {
    const formData = {
      age: 30,
      weight: 73.5,
      height: 165,
      medicalConditions: ['High Blood Pressure']
    }
    const bmi = 73.5 / (1.65 * 1.65) // 27.0
    expect(bmi).toBeCloseTo(27, 1)
    expect(isEligible(formData)).toBe(true)
  })

  it('is NOT eligible with BMI < 27 regardless of conditions', () => {
    const formData = {
      age: 30,
      weight: 70,
      height: 165,
      medicalConditions: ['Type 2 Diabetes', 'High Blood Pressure']
    }
    // BMI = 25.7
    expect(isEligible(formData)).toBe(false)
  })

  it('handles "None of the above" in medical conditions', () => {
    const formData = {
      age: 30,
      weight: 75,
      height: 165,
      medicalConditions: ['None of the above']
    }
    // Should treat as having conditions (edge case to test)
    // Business logic decision needed
    expect(isEligible(formData)).toBe(true) // or false?
  })

  it('handles multiple medical conditions', () => {
    const formData = {
      age: 30,
      weight: 75,
      height: 165,
      medicalConditions: ['Type 2 Diabetes', 'High Cholesterol', 'Sleep Apnea']
    }
    expect(isEligible(formData)).toBe(true)
  })
})
```

### 3.3 Quiz Flow Integration Tests

**File**: `/tests/integration/quiz-flow.test.tsx`

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Quiz from '@/app/quiz/page'

describe('Quiz Flow Integration', () => {
  it('renders step 1 initially', () => {
    render(<Quiz />)
    expect(screen.getByText(/Let's start with some basics/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Enter your age/i)).toBeInTheDocument()
  })

  it('shows progress bar with correct percentage', () => {
    render(<Quiz />)
    expect(screen.getByText('Step 1 of 7')).toBeInTheDocument()
    expect(screen.getByText('14% Complete')).toBeInTheDocument() // 1/7 * 100
  })

  it('disables Previous button on step 1', () => {
    render(<Quiz />)
    const prevButton = screen.getByText('← Previous')
    expect(prevButton).toBeDisabled()
  })

  it('advances to step 2 when Next clicked', async () => {
    const user = userEvent.setup()
    render(<Quiz />)

    const nextButton = screen.getByText('Next →')
    await user.click(nextButton)

    expect(screen.getByText(/Your current measurements/i)).toBeInTheDocument()
    expect(screen.getByText('Step 2 of 7')).toBeInTheDocument()
  })

  it('persists form data across steps', async () => {
    const user = userEvent.setup()
    render(<Quiz />)

    // Step 1: Enter age
    const ageInput = screen.getByPlaceholderText(/Enter your age/i)
    await user.type(ageInput, '30')

    // Select gender
    const maleButton = screen.getByText('Male')
    await user.click(maleButton)

    // Go to step 2
    await user.click(screen.getByText('Next →'))

    // Go back to step 1
    await user.click(screen.getByText('← Previous'))

    // Verify data persisted
    expect(ageInput).toHaveValue(30)
    expect(maleButton).toHaveClass('bg-primary') // Selected state
  })

  it('displays BMI calculation in step 2', async () => {
    const user = userEvent.setup()
    render(<Quiz />)

    // Navigate to step 2
    await user.click(screen.getByText('Next →'))

    // Enter weight and height
    await user.type(screen.getByPlaceholderText(/e.g., 85/i), '85')
    await user.type(screen.getByPlaceholderText(/e.g., 170/i), '170')

    // Check BMI display
    expect(screen.getByText(/Your BMI:/i)).toBeInTheDocument()
    expect(screen.getByText('29.4')).toBeInTheDocument() // 85/(1.7*1.7)
  })

  it('completes entire quiz flow', async () => {
    const user = userEvent.setup()
    render(<Quiz />)

    // Step 1: Age and gender
    await user.type(screen.getByPlaceholderText(/Enter your age/i), '30')
    await user.click(screen.getByText('Male'))
    await user.click(screen.getByText('Next →'))

    // Step 2: Measurements
    await user.type(screen.getByPlaceholderText(/e.g., 85/i), '100')
    await user.type(screen.getByPlaceholderText(/e.g., 170/i), '165')
    await user.type(screen.getByPlaceholderText(/e.g., 70/i), '75')
    await user.click(screen.getByText('Next →'))

    // Step 3: Medical conditions (select Type 2 Diabetes)
    const diabetesCheckbox = screen.getByLabelText(/Type 2 Diabetes/i)
    await user.click(diabetesCheckbox)
    await user.click(screen.getByText('Next →'))

    // Step 4: Medications (skip)
    await user.click(screen.getByText('Next →'))

    // Step 5: Previous attempts
    await user.click(screen.getByLabelText(/Diet and exercise/i))
    await user.click(screen.getByText('Next →'))

    // Step 6: Activity level
    await user.click(screen.getByLabelText(/Lightly Active/i))
    await user.click(screen.getByText('Next →'))

    // Step 7: Contact info
    await user.type(screen.getByPlaceholderText(/your.email@example.com/i), 'test@example.com')
    await user.type(screen.getByPlaceholderText(/\+91/i), '+91 9876543210')
    await user.click(screen.getByText('View Results'))

    // Results page (should be eligible: BMI=36.7, has diabetes)
    expect(screen.getByText(/Great news! You may be eligible/i)).toBeInTheDocument()
    expect(screen.getByText(/Schedule Doctor Consultation/i)).toBeInTheDocument()
  })

  it('shows ineligible result for BMI < 27', async () => {
    const user = userEvent.setup()
    render(<Quiz />)

    // Complete quiz with low BMI
    await user.type(screen.getByPlaceholderText(/Enter your age/i), '30')
    await user.click(screen.getByText('Male'))
    await user.click(screen.getByText('Next →'))

    await user.type(screen.getByPlaceholderText(/e.g., 85/i), '65') // Low weight
    await user.type(screen.getByPlaceholderText(/e.g., 170/i), '170')
    await user.type(screen.getByPlaceholderText(/e.g., 70/i), '60')
    await user.click(screen.getByText('Next →'))

    // Skip through remaining steps
    await user.click(screen.getByText('Next →')) // Medical conditions
    await user.click(screen.getByText('Next →')) // Medications
    await user.click(screen.getByLabelText(/Diet and exercise/i))
    await user.click(screen.getByText('Next →')) // Previous attempts
    await user.click(screen.getByLabelText(/Sedentary/i))
    await user.click(screen.getByText('Next →')) // Activity

    await user.type(screen.getByPlaceholderText(/your.email@example.com/i), 'test@example.com')
    await user.type(screen.getByPlaceholderText(/\+91/i), '+919876543210')
    await user.click(screen.getByText('View Results'))

    // Should show ineligible result
    expect(screen.getByText(/Let's explore your options/i)).toBeInTheDocument()
    expect(screen.getByText(/Speak with a Specialist/i)).toBeInTheDocument()
  })
})
```

### 3.4 Form Validation Tests

**File**: `/tests/unit/validation.test.ts`

```typescript
import { describe, it, expect } from 'vitest'

describe('Email Validation', () => {
  it('accepts valid email formats', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
    expect(isValidEmail('test.user+tag@domain.co.uk')).toBe(true)
    expect(isValidEmail('user123@subdomain.example.com')).toBe(true)
  })

  it('rejects invalid email formats', () => {
    expect(isValidEmail('invalid')).toBe(false)
    expect(isValidEmail('user@')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
    expect(isValidEmail('user@domain')).toBe(false)
    expect(isValidEmail('user @domain.com')).toBe(false)
  })

  it('rejects empty email', () => {
    expect(isValidEmail('')).toBe(false)
  })
})

describe('Phone Number Validation', () => {
  it('accepts valid international formats', () => {
    expect(isValidPhone('+91 98765 43210')).toBe(true)
    expect(isValidPhone('+1 (555) 123-4567')).toBe(true)
    expect(isValidPhone('+44 20 7946 0958')).toBe(true)
  })

  it('accepts phone without spaces', () => {
    expect(isValidPhone('+919876543210')).toBe(true)
  })

  it('requires country code (+)', () => {
    expect(isValidPhone('9876543210')).toBe(false) // No +
  })

  it('requires minimum length', () => {
    expect(isValidPhone('+91 123')).toBe(false) // Too short
  })

  it('rejects non-numeric characters', () => {
    expect(isValidPhone('+91 abcd')).toBe(false)
  })
})

describe('Age Validation', () => {
  it('accepts ages 18-100', () => {
    expect(isValidAge(18)).toBe(true)
    expect(isValidAge(50)).toBe(true)
    expect(isValidAge(100)).toBe(true)
  })

  it('rejects ages < 18', () => {
    expect(isValidAge(17)).toBe(false)
    expect(isValidAge(0)).toBe(false)
  })

  it('rejects ages > 100', () => {
    expect(isValidAge(101)).toBe(false)
    expect(isValidAge(150)).toBe(false)
  })
})

describe('Weight/Height Validation', () => {
  it('accepts valid ranges', () => {
    expect(isValidWeight(40)).toBe(true) // Minimum realistic
    expect(isValidWeight(300)).toBe(true) // Maximum realistic
  })

  it('rejects negative values', () => {
    expect(isValidWeight(-10)).toBe(false)
  })

  it('rejects zero', () => {
    expect(isValidWeight(0)).toBe(false)
    expect(isValidHeight(0)).toBe(false)
  })
})
```

### 3.5 E2E Test Cases

**File**: `/e2e/quiz-journey.spec.ts`

```typescript
import { test, expect } from '@playwright/test'

test.describe('Eligible User Journey', () => {
  test('completes quiz and sees eligible result', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/')

    // Click Check Eligibility CTA
    await page.getByRole('link', { name: /check eligibility/i }).click()

    // Verify quiz page loaded
    await expect(page).toHaveURL('/quiz')
    await expect(page.getByText('Step 1 of 7')).toBeVisible()

    // Step 1: Enter age and gender
    await page.getByPlaceholder(/enter your age/i).fill('35')
    await page.getByRole('button', { name: 'Male' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 2: Measurements
    await page.getByPlaceholder(/e.g., 85/i).fill('95')
    await page.getByPlaceholder(/e.g., 170/i).fill('175')

    // Verify BMI calculation
    await expect(page.getByText(/Your BMI:/)).toBeVisible()
    await expect(page.getByText('31.0')).toBeVisible() // 95/(1.75^2) = 31.0

    await page.getByPlaceholder(/e.g., 70/i).fill('80')
    await page.getByRole('button', { name: /next/i }).click()

    // Step 3: Medical conditions
    await page.getByLabel(/Type 2 Diabetes/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 4: Medications (skip)
    await page.getByRole('button', { name: /next/i }).click()

    // Step 5: Previous attempts
    await page.getByLabel(/Diet and exercise/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 6: Activity level
    await page.getByLabel(/Moderately Active/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 7: Contact information
    await page.getByPlaceholder(/your.email@example.com/i).fill('eligible@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+91 9876543210')
    await page.getByRole('button', { name: /view results/i }).click()

    // Verify eligible result
    await expect(page.getByText(/Great news! You may be eligible/i)).toBeVisible()
    await expect(page.getByText(/Your BMI: 31.0/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Schedule Doctor Consultation/i })).toBeVisible()

    // Click View Pricing
    await page.getByRole('link', { name: /View Pricing/i }).click()
    await expect(page).toHaveURL('/pricing')
  })

  test('ineligible user sees alternative options', async ({ page }) => {
    await page.goto('/quiz')

    // Complete quiz with BMI < 27
    await page.getByPlaceholder(/enter your age/i).fill('25')
    await page.getByRole('button', { name: 'Female' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByPlaceholder(/e.g., 85/i).fill('60')
    await page.getByPlaceholder(/e.g., 170/i).fill('165')
    await page.getByPlaceholder(/e.g., 70/i).fill('55')
    await page.getByRole('button', { name: /next/i }).click()

    // No medical conditions
    await page.getByLabel(/None of the above/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Skip through
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/This is my first serious attempt/i).check()
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/Sedentary/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByPlaceholder(/your.email@example.com/i).fill('ineligible@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+919123456789')
    await page.getByRole('button', { name: /view results/i }).click()

    // Verify ineligible result
    await expect(page.getByText(/Let's explore your options/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Speak with a Specialist/i })).toBeVisible()
  })
})

test.describe('Mobile Navigation', () => {
  test('mobile menu works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // iPhone SE
    await page.goto('/')

    // Open mobile menu
    await page.getByRole('button', { name: /menu/i }).click()

    // Verify menu items visible
    await expect(page.getByRole('link', { name: /Weight Loss Programme/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /How We Work/i })).toBeVisible()

    // Click Check Eligibility
    await page.getByRole('link', { name: /Check Eligibility/i }).click()
    await expect(page).toHaveURL('/quiz')

    // Verify mobile menu closed
    await expect(page.getByRole('link', { name: /Weight Loss Programme/i })).not.toBeVisible()
  })
})

test.describe('Visual Regression', () => {
  test('quiz page visual snapshot', async ({ page }) => {
    await page.goto('/quiz')
    await expect(page).toHaveScreenshot('quiz-step-1.png')
  })

  test('pricing page visual snapshot', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page).toHaveScreenshot('pricing-page.png')
  })
})
```

### 3.6 Accessibility Tests

**File**: `/e2e/accessibility.spec.ts`

```typescript
import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility Tests', () => {
  test('homepage has no accessibility violations', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('quiz page is keyboard accessible', async ({ page }) => {
    await page.goto('/quiz')

    // Tab through form
    await page.keyboard.press('Tab')
    await expect(page.getByPlaceholder(/enter your age/i)).toBeFocused()

    // Enter value with keyboard
    await page.keyboard.type('30')

    // Tab to gender buttons
    await page.keyboard.press('Tab')
    await expect(page.getByRole('button', { name: 'Male' })).toBeFocused()

    // Select with Enter
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: 'Male' })).toHaveClass(/bg-primary/)
  })

  test('form inputs have proper labels', async ({ page }) => {
    await page.goto('/quiz')

    // Check ARIA labels
    const ageInput = page.getByPlaceholder(/enter your age/i)
    const label = await ageInput.getAttribute('aria-label')
    expect(label || await page.getByText(/What is your age/i).isVisible()).toBeTruthy()
  })

  test('color contrast meets WCAG AA', async ({ page }) => {
    await page.goto('/')

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .include(['button', 'a', 'h1', 'h2'])
      .analyze()

    const contrastViolations = results.violations.filter(v => v.id === 'color-contrast')
    expect(contrastViolations).toHaveLength(0)
  })
})
```

---

## 4. Testing Roadmap

### Phase 1: Foundation (Week 1-2) - PRIORITY 1

**Goal**: Critical path coverage for quiz and eligibility

**Tasks**:
1. Install and configure Vitest + React Testing Library
2. Set up test folder structure
3. Create utility test helpers (test data factories)
4. Write BMI calculation unit tests
5. Write eligibility determination unit tests
6. Write basic component rendering tests (Header, Footer)
7. Set up GitHub Actions for CI
8. Target: 40% overall coverage, 90% for business logic

**Deliverables**:
- `/tests/unit/bmi-calculator.test.ts`
- `/tests/unit/eligibility.test.ts`
- `/tests/unit/validation.test.ts`
- `/tests/components/Header.test.tsx`
- `/vitest.config.ts`
- `/.github/workflows/test.yml`

### Phase 2: Integration Testing (Week 3-4) - PRIORITY 1

**Goal**: Complete quiz flow validation

**Tasks**:
1. Write quiz flow integration tests (all 7 steps)
2. Test form state persistence across steps
3. Test results page rendering (eligible/ineligible)
4. Test navigation integration
5. Mock data utilities for synthetic medical data
6. Target: 60% overall coverage

**Deliverables**:
- `/tests/integration/quiz-flow.test.tsx`
- `/tests/integration/navigation.test.tsx`
- `/tests/utils/test-data-factory.ts`

### Phase 3: E2E Testing (Week 5-6) - PRIORITY 2

**Goal**: Critical user journeys automated

**Tasks**:
1. Install and configure Playwright
2. Write eligible user journey test
3. Write ineligible user journey test
4. Write pricing-to-quiz flow test
5. Write mobile navigation test
6. Set up Playwright in CI/CD
7. Target: 100% critical path coverage

**Deliverables**:
- `/e2e/quiz-journey.spec.ts`
- `/e2e/mobile.spec.ts`
- `/playwright.config.ts`

### Phase 4: Specialized Testing (Week 7-8) - PRIORITY 3

**Goal**: Accessibility, visual, and performance validation

**Tasks**:
1. Set up axe-core accessibility testing
2. Run pa11y on all pages
3. Configure Lighthouse CI
4. Set up visual regression snapshots
5. Write keyboard navigation tests
6. Target: WCAG 2.1 AA compliance, LCP < 2.5s

**Deliverables**:
- `/e2e/accessibility.spec.ts`
- `/.pa11yci.json`
- `/lighthouserc.json`
- Visual baseline snapshots

### Phase 5: Advanced Coverage (Week 9-10) - PRIORITY 3

**Goal**: Comprehensive test suite

**Tasks**:
1. Unit test all components (20+ components)
2. Test edge cases and error handling
3. Security testing with ESLint plugins
4. Performance benchmarks
5. Test data management utilities
6. Target: 80%+ overall coverage

### Phase 6: CI/CD & Monitoring (Week 11-12) - PRIORITY 2

**Goal**: Production-ready pipeline

**Tasks**:
1. Set up pre-commit hooks (Husky)
2. Configure branch protection rules
3. Set up test result reporting (Codecov)
4. Create test execution dashboard
5. Document testing procedures
6. Set up scheduled E2E tests

**Deliverables**:
- `.husky/pre-commit`
- CI/CD pipeline enhancements
- Test coverage reporting
- Team documentation

---

## 5. CI/CD Testing Pipeline

### 5.1 GitHub Actions Configuration

**File**: `/.github/workflows/test.yml`

```yaml
name: Test Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

env:
  NODE_VERSION: '20'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run ESLint
        run: npm run lint

      - name: Security audit
        run: npm audit --audit-level=high

  unit-tests:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test:unit

      - name: Generate coverage report
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v4
        with:
          files: ./coverage/lcov.info
          flags: unit
          name: unit-coverage

      - name: Check coverage thresholds
        run: |
          if [ $(jq '.total.lines.pct' coverage/coverage-summary.json | cut -d. -f1) -lt 80 ]; then
            echo "Coverage below 80%"
            exit 1
          fi

  integration-tests:
    runs-on: ubuntu-latest
    needs: unit-tests
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run integration tests
        run: npm run test:integration

  e2e-tests:
    runs-on: ubuntu-latest
    needs: integration-tests
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps

      - name: Build application
        run: npm run build

      - name: Run E2E tests
        run: npm run test:e2e

      - name: Upload Playwright report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30

  accessibility-tests:
    runs-on: ubuntu-latest
    needs: e2e-tests
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build and start server
        run: |
          npm run build
          npm run start &
          npx wait-on http://localhost:3000

      - name: Run pa11y
        run: npm run test:a11y

      - name: Run Lighthouse CI
        run: npm run test:lighthouse

  visual-regression:
    runs-on: ubuntu-latest
    needs: e2e-tests
    if: github.event_name == 'pull_request'
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright
        run: npx playwright install --with-deps

      - name: Run visual regression tests
        run: npm run test:visual

  security-scan:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v4

      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
          format: 'sarif'
          output: 'trivy-results.sarif'

      - name: Upload Trivy results to GitHub Security
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: 'trivy-results.sarif'

  test-summary:
    runs-on: ubuntu-latest
    needs: [unit-tests, integration-tests, e2e-tests, accessibility-tests]
    if: always()
    steps:
      - name: Test Summary
        run: |
          echo "Unit Tests: ${{ needs.unit-tests.result }}"
          echo "Integration Tests: ${{ needs.integration-tests.result }}"
          echo "E2E Tests: ${{ needs.e2e-tests.result }}"
          echo "Accessibility Tests: ${{ needs.accessibility-tests.result }}"
```

### 5.2 Pre-commit Hooks

**File**: `/.husky/pre-commit`

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

echo "Running pre-commit checks..."

# Run linter
npm run lint || {
  echo "ESLint failed. Please fix errors before committing."
  exit 1
}

# Run unit tests for staged files
npm run test:staged || {
  echo "Unit tests failed. Please fix failing tests before committing."
  exit 1
}

# Check TypeScript types
npm run type-check || {
  echo "TypeScript type check failed. Please fix type errors before committing."
  exit 1
}

echo "Pre-commit checks passed!"
```

### 5.3 Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx --max-warnings 0",
    "type-check": "tsc --noEmit",

    "test": "vitest",
    "test:unit": "vitest run --coverage",
    "test:integration": "vitest run --config vitest.integration.config.ts",
    "test:watch": "vitest watch",
    "test:coverage": "vitest run --coverage",
    "test:staged": "vitest related --run",

    "test:e2e": "playwright test",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:debug": "playwright test --debug",
    "test:e2e:ui": "playwright test --ui",

    "test:a11y": "pa11y-ci",
    "test:lighthouse": "lhci autorun",
    "test:visual": "playwright test --grep @visual",

    "prepare": "husky install"
  }
}
```

---

## 6. Test Coverage Targets

### 6.1 Overall Coverage Goals

| Category | Target | Critical Code Target | Priority |
|----------|--------|---------------------|----------|
| **Lines** | 80% | 90%+ | High |
| **Functions** | 80% | 90%+ | High |
| **Branches** | 75% | 85%+ | High |
| **Statements** | 80% | 90%+ | High |

### 6.2 Component-Level Targets

| Component | Target | Rationale |
|-----------|--------|-----------|
| **BMI Calculator** | 95% | Critical health calculation |
| **Eligibility Logic** | 95% | Business rule validation |
| **Quiz Form** | 85% | Primary user interaction |
| **Validation Utils** | 90% | Data integrity |
| **Header/Footer** | 70% | Presentational components |
| **Pricing** | 75% | Informational page |

### 6.3 Critical Path Coverage

**Must have 100% coverage**:
1. BMI calculation (`calculateBMI()`)
2. Eligibility determination (`isEligible()`)
3. Form submission validation
4. Quiz step progression logic
5. Results page rendering (both outcomes)

### 6.4 Coverage Enforcement

**Branch Protection Rules**:
- Require status checks to pass before merging
- Require code coverage > 80% for PR approval
- Require passing E2E tests for critical paths
- Require accessibility checks to pass

**Codecov Configuration** (`.codecov.yml`):
```yaml
coverage:
  status:
    project:
      default:
        target: 80%
        threshold: 2%
        if_ci_failed: error
    patch:
      default:
        target: 70%
        threshold: 5%
        if_ci_failed: error

comment:
  layout: "reach, diff, flags, files"
  behavior: default
  require_changes: false
  require_base: false
  require_head: true

ignore:
  - "**/*.config.*"
  - "next.config.ts"
  - "public/**"
  - ".next/**"
```

---

## 7. Testing for Future Backend APIs

### 7.1 API Testing Strategy

**When Backend is Implemented**:
- **Contract Testing**: Use Pact for consumer-driven contracts
- **API Integration Tests**: Use Supertest or MSW (Mock Service Worker)
- **Load Testing**: k6 for performance validation
- **Security Testing**: OWASP ZAP automated scans

### 7.2 API Test Structure

**File**: `/tests/api/quiz-submission.test.ts` (Future)

```typescript
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Mock API server
const server = setupServer(
  rest.post('/api/quiz/submit', (req, res, ctx) => {
    const { age, weight, height, medicalConditions } = req.body

    // Validate request
    if (!age || !weight || !height) {
      return res(ctx.status(400), ctx.json({ error: 'Missing required fields' }))
    }

    // Calculate eligibility
    const bmi = weight / ((height / 100) ** 2)
    const eligible = age >= 18 && (bmi >= 30 || (bmi >= 27 && medicalConditions.length > 0))

    return res(
      ctx.status(200),
      ctx.json({
        eligible,
        bmi: bmi.toFixed(1),
        recommendedPlan: eligible ? 'monthly' : null
      })
    )
  })
)

beforeEach(() => server.listen())
afterEach(() => server.resetHandlers())
afterEach(() => server.close())

describe('Quiz Submission API', () => {
  it('returns eligible status for valid submission', async () => {
    const response = await fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        age: 30,
        weight: 95,
        height: 170,
        medicalConditions: ['Type 2 Diabetes']
      })
    })

    const data = await response.json()
    expect(response.status).toBe(200)
    expect(data.eligible).toBe(true)
    expect(data.bmi).toBe('32.9')
  })

  it('validates required fields', async () => {
    const response = await fetch('/api/quiz/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ age: 30 }) // Missing weight, height
    })

    expect(response.status).toBe(400)
    const data = await response.json()
    expect(data.error).toBe('Missing required fields')
  })
})
```

### 7.3 Load Testing with k6

**File**: `/load-tests/quiz-submission.js`

```javascript
import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp up to 50 users
    { duration: '3m', target: 50 },  // Stay at 50 users
    { duration: '1m', target: 100 }, // Spike to 100 users
    { duration: '2m', target: 100 }, // Stay at 100 users
    { duration: '1m', target: 0 }    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests under 500ms
    http_req_failed: ['rate<0.01']    // Less than 1% errors
  }
}

export default function () {
  const payload = JSON.stringify({
    age: 30 + Math.floor(Math.random() * 40),
    weight: 60 + Math.floor(Math.random() * 80),
    height: 150 + Math.floor(Math.random() * 50),
    medicalConditions: ['Type 2 Diabetes'],
    email: `test${Date.now()}@example.com`
  })

  const params = {
    headers: { 'Content-Type': 'application/json' }
  }

  const response = http.post('http://localhost:3000/api/quiz/submit', payload, params)

  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
    'eligible field present': (r) => JSON.parse(r.body).hasOwnProperty('eligible')
  })

  sleep(1)
}
```

---

## 8. Test Data Management Strategy

### 8.1 Synthetic Medical Data

**File**: `/tests/utils/test-data-factory.ts`

```typescript
import { faker } from '@faker-js/faker'

// Medical conditions
const MEDICAL_CONDITIONS = [
  'Type 2 Diabetes',
  'High Blood Pressure',
  'High Cholesterol',
  'Sleep Apnea',
  'Fatty Liver Disease',
  'PCOS',
  'Heart Disease'
]

const ACTIVITY_LEVELS = [
  'Sedentary',
  'Lightly Active',
  'Moderately Active',
  'Very Active',
  'Extremely Active'
]

const PREVIOUS_ATTEMPTS = [
  'Diet and exercise',
  'Commercial weight loss programs (Weight Watchers, etc.)',
  'Meal replacement shakes',
  'Prescription weight loss medications',
  'Bariatric surgery',
  'This is my first serious attempt',
  'Other'
]

// Factory functions
export const generateEligibleUser = (overrides = {}) => ({
  age: faker.number.int({ min: 18, max: 65 }),
  gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
  weight: faker.number.int({ min: 90, max: 150 }), // High weight for BMI ≥ 30
  height: faker.number.int({ min: 160, max: 180 }),
  targetWeight: faker.number.int({ min: 70, max: 85 }),
  medicalConditions: faker.helpers.arrayElements(MEDICAL_CONDITIONS, { min: 1, max: 3 }),
  currentMedications: faker.lorem.sentence(),
  previousAttempts: faker.helpers.arrayElement(PREVIOUS_ATTEMPTS),
  activityLevel: faker.helpers.arrayElement(ACTIVITY_LEVELS),
  email: faker.internet.email(),
  phone: `+91 ${faker.string.numeric(10)}`,
  ...overrides
})

export const generateIneligibleUser = (overrides = {}) => ({
  age: faker.number.int({ min: 18, max: 65 }),
  gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
  weight: faker.number.int({ min: 50, max: 70 }), // Low weight for BMI < 27
  height: faker.number.int({ min: 160, max: 180 }),
  targetWeight: faker.number.int({ min: 45, max: 60 }),
  medicalConditions: [], // No conditions
  currentMedications: '',
  previousAttempts: faker.helpers.arrayElement(PREVIOUS_ATTEMPTS),
  activityLevel: faker.helpers.arrayElement(ACTIVITY_LEVELS),
  email: faker.internet.email(),
  phone: `+1 ${faker.string.numeric(10)}`,
  ...overrides
})

export const generateBoundaryEligibleUser = () => ({
  age: 18, // Exactly minimum age
  gender: 'Male',
  weight: 81.7, // BMI exactly 30 with height 165
  height: 165,
  targetWeight: 75,
  medicalConditions: [],
  currentMedications: '',
  previousAttempts: 'Diet and exercise',
  activityLevel: 'Sedentary',
  email: 'boundary@test.com',
  phone: '+91 9876543210'
})

export const generateBoundaryConditionEligibleUser = () => ({
  age: 30,
  gender: 'Female',
  weight: 73.5, // BMI exactly 27 with height 165
  height: 165,
  targetWeight: 65,
  medicalConditions: ['Type 2 Diabetes'], // Has condition, so eligible at BMI 27
  currentMedications: 'Metformin 500mg',
  previousAttempts: 'Prescription weight loss medications',
  activityLevel: 'Lightly Active',
  email: 'boundary-condition@test.com',
  phone: '+91 9123456789'
})

// Edge case generators
export const generateMinorUser = () => generateEligibleUser({ age: 17 }) // Under 18
export const generateExtremeWeightUser = () => generateEligibleUser({ weight: 250, height: 150 })
export const generateZeroValuesUser = () => ({ ...generateEligibleUser(), weight: 0, height: 0 })
export const generateNegativeValuesUser = () => ({ ...generateEligibleUser(), weight: -10, height: -10 })

// Batch generators
export const generateUserBatch = (count: number, type: 'eligible' | 'ineligible' = 'eligible') => {
  const generator = type === 'eligible' ? generateEligibleUser : generateIneligibleUser
  return Array.from({ length: count }, () => generator())
}

// GDPR-compliant data anonymization
export const anonymizeUserData = (userData: any) => ({
  ...userData,
  email: `user${faker.string.alphanumeric(8)}@anonymized.test`,
  phone: `+${faker.string.numeric(12)}`,
  currentMedications: '[REDACTED]'
})
```

### 8.2 Data Privacy & Compliance

**Principles**:
1. **No Real Patient Data**: Never use actual user data in tests
2. **Synthetic Generation**: Use Faker.js for realistic fake data
3. **Anonymization**: Strip PII from any test logs
4. **Encryption**: Encrypt test data at rest if stored
5. **GDPR Compliance**: Ensure test data doesn't violate privacy laws

**Test Data Storage**:
- Store test fixtures in `/tests/fixtures/` (Git-tracked)
- Never commit real email/phone numbers
- Use `.env.test` for sensitive test configuration
- Rotate test API keys regularly

---

## 9. Production Readiness Checklist

### 9.1 Pre-Launch Testing Checklist

#### Critical Path Testing
- [ ] All 7 quiz steps complete successfully
- [ ] BMI calculation accurate to 1 decimal place
- [ ] Eligibility logic validated for all scenarios (BMI ≥30, BMI 27-30 + conditions, BMI <27)
- [ ] Eligible result page displays correctly
- [ ] Ineligible result page displays correctly
- [ ] Email validation prevents invalid formats
- [ ] Phone validation enforces country code
- [ ] Age validation rejects users under 18

#### Cross-Browser Testing
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

#### Mobile Testing
- [ ] iOS Safari (iPhone 13, 14, 15)
- [ ] Android Chrome (Samsung Galaxy, Pixel)
- [ ] Mobile menu navigation works
- [ ] Form inputs usable on mobile keyboards
- [ ] Touch targets minimum 44x44px

#### Accessibility Testing
- [ ] WCAG 2.1 AA compliance (pa11y)
- [ ] Screen reader compatible (NVDA, JAWS, VoiceOver)
- [ ] Keyboard navigation functional
- [ ] Focus indicators visible
- [ ] Color contrast minimum 4.5:1 for text
- [ ] Form labels properly associated
- [ ] ARIA attributes correct

#### Performance Testing
- [ ] Lighthouse Performance score ≥ 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Total Blocking Time < 300ms
- [ ] Time to Interactive < 3.5s

#### Security Testing
- [ ] No XSS vulnerabilities (input sanitization)
- [ ] CSRF protection enabled
- [ ] Content Security Policy configured
- [ ] HTTPS enforced
- [ ] No sensitive data in client-side logs
- [ ] npm audit shows no high/critical vulnerabilities

#### Data Integrity
- [ ] Form data persists across quiz steps
- [ ] No data loss on page refresh (localStorage)
- [ ] Invalid inputs rejected gracefully
- [ ] Error messages user-friendly
- [ ] Success states clearly indicated

#### E2E User Journeys
- [ ] Eligible user: Homepage → Quiz → Eligible Result → Pricing
- [ ] Ineligible user: Homepage → Quiz → Ineligible Result → Contact
- [ ] Direct quiz access via URL
- [ ] Back button navigation works
- [ ] Mobile user completes quiz

#### Integration Testing
- [ ] Header navigation functional
- [ ] Footer links working
- [ ] Pricing page CTAs route correctly
- [ ] Mobile menu toggles properly
- [ ] Progress bar updates accurately

### 9.2 Test Coverage Validation

- [ ] Overall line coverage ≥ 80%
- [ ] Business logic coverage ≥ 90%
- [ ] Critical paths covered 100%
- [ ] All edge cases tested
- [ ] Boundary conditions validated

### 9.3 CI/CD Pipeline

- [ ] All tests run on PR
- [ ] Tests must pass before merge
- [ ] Coverage reports generated
- [ ] E2E tests in staging environment
- [ ] Accessibility tests automated
- [ ] Performance budgets enforced
- [ ] Security scans scheduled

### 9.4 Documentation

- [ ] Testing strategy documented (this document)
- [ ] Test data generation documented
- [ ] CI/CD pipeline documented
- [ ] Known issues/limitations documented
- [ ] Test maintenance guide created
- [ ] Onboarding guide for new developers

### 9.5 Monitoring & Alerting

- [ ] Test failure notifications (Slack/Email)
- [ ] Coverage threshold alerts
- [ ] Performance regression alerts
- [ ] Accessibility violation alerts
- [ ] Security vulnerability alerts

---

## 10. Test Maintenance Guidelines

### 10.1 Test Hygiene

1. **Keep Tests Fast**: Unit tests < 100ms, integration < 1s, E2E < 30s per test
2. **Independent Tests**: No shared state between tests
3. **Clear Assertions**: One logical assertion per test
4. **Descriptive Names**: Use "should" or "it" pattern
5. **Clean Test Data**: Use factories, avoid hardcoded values

### 10.2 When to Update Tests

- **Feature Changes**: Update affected tests immediately
- **Bug Fixes**: Add regression test before fixing bug
- **Refactoring**: Tests should remain green during refactors
- **Coverage Drops**: Investigate and add missing tests
- **Flaky Tests**: Fix or remove immediately

### 10.3 Test Review Checklist

- [ ] Tests cover new functionality
- [ ] Tests cover edge cases
- [ ] Tests are readable and maintainable
- [ ] No hardcoded test data
- [ ] No test duplication
- [ ] Tests fail when they should
- [ ] Tests pass consistently

### 10.4 Red Flags

- Tests with random failures
- Tests with `sleep()` or `setTimeout()`
- Tests that modify global state
- Tests that depend on external services (without mocks)
- Tests that take > 5 minutes to run
- Tests commented out or skipped without tickets

---

## 11. Tools & Resources

### 11.1 Testing Libraries

| Tool | Purpose | Install Command |
|------|---------|----------------|
| **Vitest** | Unit/Integration testing | `npm i -D vitest` |
| **React Testing Library** | Component testing | `npm i -D @testing-library/react` |
| **Playwright** | E2E testing | `npm i -D @playwright/test` |
| **axe-core** | Accessibility testing | `npm i -D @axe-core/playwright` |
| **pa11y** | CLI accessibility testing | `npm i -D pa11y-ci` |
| **Lighthouse CI** | Performance testing | `npm i -D @lhci/cli` |
| **MSW** | API mocking | `npm i -D msw` |
| **Faker.js** | Test data generation | `npm i -D @faker-js/faker` |
| **Husky** | Git hooks | `npm i -D husky` |

### 11.2 Learning Resources

- **Vitest**: https://vitest.dev/guide/
- **Playwright**: https://playwright.dev/docs/intro
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Next.js Testing**: https://nextjs.org/docs/app/building-your-application/testing

### 11.3 Team Training

**Recommended Training**:
1. TDD fundamentals workshop (1 day)
2. Playwright hands-on session (half day)
3. Accessibility testing training (half day)
4. CI/CD pipeline deep dive (half day)

---

## 12. Success Metrics

### 12.1 Testing KPIs

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Test Coverage** | 80% | 0% | Not Started |
| **Critical Path Coverage** | 100% | 0% | Not Started |
| **CI/CD Pass Rate** | 95% | N/A | Not Started |
| **E2E Test Duration** | < 10 min | N/A | Not Started |
| **Flaky Test Rate** | < 1% | N/A | Not Started |
| **Accessibility Score** | 100% | Unknown | Not Started |
| **Performance Score** | 90+ | Unknown | Not Started |

### 12.2 Quality Gates

**Pre-Merge Requirements**:
- All tests passing (unit, integration, E2E)
- Coverage thresholds met (80%+ overall, 90%+ critical)
- No accessibility violations
- No security vulnerabilities
- Performance budgets met

**Pre-Production Requirements**:
- All production readiness checklist items completed
- Staging E2E tests passing
- Load testing successful (500 concurrent users)
- Security scan clean
- Accessibility audit passed

---

## 13. Conclusion

This testing strategy provides a comprehensive, healthcare-grade quality assurance framework for the Medshood platform. The phased approach prioritizes critical paths (quiz, eligibility, BMI calculation) while building toward 80%+ coverage and full production readiness.

**Key Priorities**:
1. **Phase 1-2** (Weeks 1-4): Critical business logic coverage
2. **Phase 3** (Weeks 5-6): E2E automation of user journeys
3. **Phase 4** (Weeks 7-8): Accessibility and performance validation
4. **Phase 5-6** (Weeks 9-12): Comprehensive coverage and CI/CD maturity

**Next Steps**:
1. Review and approve this strategy
2. Provision CI/CD environment
3. Begin Phase 1 implementation
4. Schedule weekly testing sync meetings
5. Set up test result dashboards

For questions or clarifications, please contact the QA Engineering team.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-11
**Owner**: QA Engineering Team
**Reviewers**: Development Team, Product Management, Compliance
