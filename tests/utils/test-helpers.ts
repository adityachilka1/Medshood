/**
 * Test helper utilities for Medshood testing
 */

import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

/**
 * Custom render function with common providers
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { ...options })
}

/**
 * BMI calculation utility (extracted from quiz logic)
 */
export function calculateBMI(weight: number, height: number): string {
  if (!weight || !height || weight <= 0 || height <= 0) {
    return '0'
  }
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  return bmi.toFixed(1)
}

/**
 * Eligibility determination utility (extracted from quiz logic)
 */
export function isEligible(formData: {
  age: string | number
  weight: string | number
  height: string | number
  medicalConditions: string[]
}): boolean {
  const age = typeof formData.age === 'string' ? parseInt(formData.age) : formData.age
  const weight = typeof formData.weight === 'string' ? parseFloat(formData.weight) : formData.weight
  const height = typeof formData.height === 'string' ? parseFloat(formData.height) : formData.height

  if (!age || !weight || !height) return false

  const bmi = parseFloat(calculateBMI(weight, height))

  return age >= 18 && (bmi >= 30 || (bmi >= 27 && formData.medicalConditions.length > 0))
}

/**
 * Email validation utility
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.trim() === '') return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Phone validation utility (requires country code)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || phone.trim() === '') return false
  // Must start with + and have at least 10 digits
  const phoneRegex = /^\+\d{10,15}$/
  const cleanPhone = phone.replace(/[\s\-()]/g, '') // Remove spaces, dashes, parentheses
  return phoneRegex.test(cleanPhone)
}

/**
 * Age validation utility
 */
export function isValidAge(age: number): boolean {
  return age >= 18 && age <= 100
}

/**
 * Weight validation utility (kg)
 */
export function isValidWeight(weight: number): boolean {
  return weight > 0 && weight <= 500 // Reasonable upper bound
}

/**
 * Height validation utility (cm)
 */
export function isValidHeight(height: number): boolean {
  return height > 0 && height <= 300 // Reasonable upper bound
}

/**
 * Wait for async operations (useful in tests)
 */
export function waitFor(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Create mock form data
 */
export function createMockFormData(overrides = {}) {
  return {
    age: '30',
    gender: 'Male',
    weight: '85',
    height: '170',
    targetWeight: '75',
    medicalConditions: [] as string[],
    currentMedications: '',
    previousAttempts: '',
    activityLevel: '',
    email: '',
    phone: '',
    ...overrides
  }
}
