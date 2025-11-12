import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  isValidPhone,
  isValidAge,
  isValidWeight,
  isValidHeight
} from '../utils/test-helpers'
import { getInvalidEmails, getValidEmails, getInvalidPhones, getValidPhones } from '../utils/test-data-factory'

/**
 * Form Validation Tests
 *
 * CRITICAL: Ensures data integrity for medical information
 */
describe('Email Validation', () => {
  it('accepts valid email formats', () => {
    const validEmails = getValidEmails()
    validEmails.forEach(email => {
      expect(isValidEmail(email)).toBe(true)
    })
  })

  it('rejects invalid email formats', () => {
    const invalidEmails = getInvalidEmails()
    invalidEmails.forEach(email => {
      expect(isValidEmail(email)).toBe(false)
    })
  })

  it('rejects empty email', () => {
    expect(isValidEmail('')).toBe(false)
  })

  it('rejects whitespace-only email', () => {
    expect(isValidEmail('   ')).toBe(false)
  })

  it('accepts email with plus sign', () => {
    expect(isValidEmail('user+tag@example.com')).toBe(true)
  })

  it('accepts email with subdomain', () => {
    expect(isValidEmail('user@mail.example.com')).toBe(true)
  })

  it('accepts email with numbers', () => {
    expect(isValidEmail('user123@example456.com')).toBe(true)
  })

  it('rejects email with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false)
    expect(isValidEmail('user@ example.com')).toBe(false)
  })

  it('rejects email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false)
  })

  it('rejects email without domain', () => {
    expect(isValidEmail('user@')).toBe(false)
  })

  it('rejects email without local part', () => {
    expect(isValidEmail('@example.com')).toBe(false)
  })

  it('rejects email without TLD', () => {
    expect(isValidEmail('user@example')).toBe(false)
  })
})

describe('Phone Number Validation', () => {
  it('accepts valid international formats', () => {
    const validPhones = getValidPhones()
    validPhones.forEach(phone => {
      expect(isValidPhone(phone)).toBe(true)
    })
  })

  it('rejects invalid phone formats', () => {
    const invalidPhones = getInvalidPhones()
    invalidPhones.forEach(phone => {
      expect(isValidPhone(phone)).toBe(false)
    })
  })

  it('accepts phone without spaces', () => {
    expect(isValidPhone('+919876543210')).toBe(true)
  })

  it('accepts phone with spaces', () => {
    expect(isValidPhone('+91 98765 43210')).toBe(true)
  })

  it('accepts phone with dashes', () => {
    expect(isValidPhone('+1-555-123-4567')).toBe(true)
  })

  it('accepts phone with parentheses', () => {
    expect(isValidPhone('+1 (555) 123-4567')).toBe(true)
  })

  it('requires country code (+)', () => {
    expect(isValidPhone('9876543210')).toBe(false)
  })

  it('requires minimum length (10 digits)', () => {
    expect(isValidPhone('+91 123')).toBe(false)
    expect(isValidPhone('+1 555')).toBe(false)
  })

  it('accepts up to 15 digits', () => {
    expect(isValidPhone('+123456789012345')).toBe(true)
  })

  it('rejects more than 15 digits', () => {
    expect(isValidPhone('+1234567890123456')).toBe(false)
  })

  it('rejects non-numeric characters', () => {
    expect(isValidPhone('+91 abcd')).toBe(false)
    expect(isValidPhone('+91 98765abc10')).toBe(false)
  })

  it('rejects empty phone', () => {
    expect(isValidPhone('')).toBe(false)
  })

  it('rejects just plus sign', () => {
    expect(isValidPhone('+')).toBe(false)
  })
})

describe('Age Validation', () => {
  it('accepts ages 18-100', () => {
    expect(isValidAge(18)).toBe(true)
    expect(isValidAge(50)).toBe(true)
    expect(isValidAge(100)).toBe(true)
  })

  it('accepts exact boundaries', () => {
    expect(isValidAge(18)).toBe(true) // Minimum
    expect(isValidAge(100)).toBe(true) // Maximum
  })

  it('rejects ages < 18', () => {
    expect(isValidAge(17)).toBe(false)
    expect(isValidAge(10)).toBe(false)
    expect(isValidAge(0)).toBe(false)
  })

  it('rejects ages > 100', () => {
    expect(isValidAge(101)).toBe(false)
    expect(isValidAge(150)).toBe(false)
  })

  it('rejects negative ages', () => {
    expect(isValidAge(-1)).toBe(false)
    expect(isValidAge(-18)).toBe(false)
  })

  it('accepts middle-aged adults', () => {
    expect(isValidAge(25)).toBe(true)
    expect(isValidAge(40)).toBe(true)
    expect(isValidAge(65)).toBe(true)
  })
})

describe('Weight Validation', () => {
  it('accepts valid weight range', () => {
    expect(isValidWeight(40)).toBe(true) // Low but realistic
    expect(isValidWeight(100)).toBe(true) // Average
    expect(isValidWeight(300)).toBe(true) // High but realistic
  })

  it('accepts decimal weights', () => {
    expect(isValidWeight(75.5)).toBe(true)
    expect(isValidWeight(82.3)).toBe(true)
  })

  it('rejects zero weight', () => {
    expect(isValidWeight(0)).toBe(false)
  })

  it('rejects negative weight', () => {
    expect(isValidWeight(-10)).toBe(false)
    expect(isValidWeight(-75)).toBe(false)
  })

  it('rejects unrealistic high weight', () => {
    expect(isValidWeight(501)).toBe(false)
    expect(isValidWeight(1000)).toBe(false)
  })

  it('accepts boundary values', () => {
    expect(isValidWeight(0.1)).toBe(true) // Just above zero
    expect(isValidWeight(500)).toBe(true) // Maximum
  })
})

describe('Height Validation', () => {
  it('accepts valid height range (cm)', () => {
    expect(isValidHeight(150)).toBe(true) // Short but realistic
    expect(isValidHeight(170)).toBe(true) // Average
    expect(isValidHeight(200)).toBe(true) // Tall but realistic
  })

  it('accepts decimal heights', () => {
    expect(isValidHeight(165.5)).toBe(true)
    expect(isValidHeight(172.3)).toBe(true)
  })

  it('rejects zero height', () => {
    expect(isValidHeight(0)).toBe(false)
  })

  it('rejects negative height', () => {
    expect(isValidHeight(-10)).toBe(false)
    expect(isValidHeight(-170)).toBe(false)
  })

  it('rejects unrealistic high height', () => {
    expect(isValidHeight(301)).toBe(false)
    expect(isValidHeight(500)).toBe(false)
  })

  it('accepts boundary values', () => {
    expect(isValidHeight(0.1)).toBe(true) // Just above zero
    expect(isValidHeight(300)).toBe(true) // Maximum
  })
})

describe('Combined Validation Scenarios', () => {
  it('validates complete valid form data', () => {
    const age = 30
    const weight = 85
    const height = 170
    const email = 'user@example.com'
    const phone = '+91 9876543210'

    expect(isValidAge(age)).toBe(true)
    expect(isValidWeight(weight)).toBe(true)
    expect(isValidHeight(height)).toBe(true)
    expect(isValidEmail(email)).toBe(true)
    expect(isValidPhone(phone)).toBe(true)
  })

  it('detects invalid form data', () => {
    const age = 17 // Too young
    const weight = -10 // Negative
    const height = 0 // Zero
    const email = 'invalid' // No @
    const phone = '9876543210' // No country code

    expect(isValidAge(age)).toBe(false)
    expect(isValidWeight(weight)).toBe(false)
    expect(isValidHeight(height)).toBe(false)
    expect(isValidEmail(email)).toBe(false)
    expect(isValidPhone(phone)).toBe(false)
  })
})

describe('Security: Input Sanitization', () => {
  it('email validation prevents XSS attempts', () => {
    expect(isValidEmail('<script>alert("xss")</script>@test.com')).toBe(false)
    expect(isValidEmail('user<script>@test.com')).toBe(false)
  })

  it('phone validation prevents script injection', () => {
    expect(isValidPhone('+91<script>9876543210')).toBe(false)
  })

  it('rejects SQL injection patterns in email', () => {
    expect(isValidEmail("user'; DROP TABLE users--@test.com")).toBe(false)
  })
})
