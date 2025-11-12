/**
 * Test data factory for generating synthetic medical data
 * IMPORTANT: This data is SYNTHETIC and should NEVER contain real patient information
 */

// Medical conditions from the quiz
export const MEDICAL_CONDITIONS = [
  'Type 2 Diabetes',
  'High Blood Pressure',
  'High Cholesterol',
  'Sleep Apnea',
  'Fatty Liver Disease',
  'PCOS',
  'Heart Disease',
  'None of the above'
] as const

export const ACTIVITY_LEVELS = [
  'Sedentary',
  'Lightly Active',
  'Moderately Active',
  'Very Active',
  'Extremely Active'
] as const

export const PREVIOUS_ATTEMPTS = [
  'Diet and exercise',
  'Commercial weight loss programs (Weight Watchers, etc.)',
  'Meal replacement shakes',
  'Prescription weight loss medications',
  'Bariatric surgery',
  'This is my first serious attempt',
  'Other'
] as const

export const GENDERS = ['Male', 'Female', 'Other'] as const

/**
 * Generate random integer between min and max (inclusive)
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Generate random element from array
 */
function randomElement<T>(array: readonly T[]): T {
  return array[randomInt(0, array.length - 1)]
}

/**
 * Generate random subset of array
 */
function randomElements<T>(array: readonly T[], minCount: number, maxCount: number): T[] {
  const count = randomInt(minCount, Math.min(maxCount, array.length))
  const shuffled = [...array].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

/**
 * Generate eligible user (BMI >= 30 OR BMI >= 27 with conditions)
 */
export function generateEligibleUser(overrides: Partial<any> = {}) {
  const age = randomInt(18, 65)
  const height = randomInt(160, 185)
  const weight = randomInt(90, 150) // High weight for BMI >= 30
  const targetWeight = weight - randomInt(15, 30)

  return {
    age: age.toString(),
    gender: randomElement(GENDERS),
    weight: weight.toString(),
    height: height.toString(),
    targetWeight: targetWeight.toString(),
    medicalConditions: randomElements(MEDICAL_CONDITIONS.slice(0, -1), 1, 3), // Exclude "None"
    currentMedications: randomInt(0, 1) === 1 ? 'Metformin 500mg twice daily' : '',
    previousAttempts: randomElement(PREVIOUS_ATTEMPTS),
    activityLevel: randomElement(ACTIVITY_LEVELS),
    email: `eligible${randomInt(1000, 9999)}@test.medshood.com`,
    phone: `+91 ${randomInt(9000000000, 9999999999)}`,
    ...overrides
  }
}

/**
 * Generate ineligible user (BMI < 27 or age < 18)
 */
export function generateIneligibleUser(overrides: Partial<any> = {}) {
  const age = randomInt(18, 65)
  const height = randomInt(160, 180)
  const weight = randomInt(50, 70) // Low weight for BMI < 27
  const targetWeight = weight - randomInt(5, 10)

  return {
    age: age.toString(),
    gender: randomElement(GENDERS),
    weight: weight.toString(),
    height: height.toString(),
    targetWeight: targetWeight.toString(),
    medicalConditions: [], // No conditions
    currentMedications: '',
    previousAttempts: randomElement(PREVIOUS_ATTEMPTS),
    activityLevel: randomElement(ACTIVITY_LEVELS),
    email: `ineligible${randomInt(1000, 9999)}@test.medshood.com`,
    phone: `+1 ${randomInt(2000000000, 9999999999)}`,
    ...overrides
  }
}

/**
 * Generate user with BMI exactly 30 (boundary case)
 */
export function generateBoundaryEligibleUser() {
  const height = 165 // cm
  const weight = 81.7 // kg - gives BMI ~30.0

  return {
    age: '18', // Minimum age
    gender: 'Male',
    weight: weight.toString(),
    height: height.toString(),
    targetWeight: '75',
    medicalConditions: [],
    currentMedications: '',
    previousAttempts: 'Diet and exercise',
    activityLevel: 'Sedentary',
    email: 'boundary@test.medshood.com',
    phone: '+91 9876543210'
  }
}

/**
 * Generate user with BMI exactly 27 + medical condition (boundary case)
 */
export function generateBoundaryConditionEligibleUser() {
  const height = 165 // cm
  const weight = 73.5 // kg - gives BMI ~27.0

  return {
    age: '30',
    gender: 'Female',
    weight: weight.toString(),
    height: height.toString(),
    targetWeight: '65',
    medicalConditions: ['Type 2 Diabetes'],
    currentMedications: 'Metformin 500mg',
    previousAttempts: 'Prescription weight loss medications',
    activityLevel: 'Lightly Active',
    email: 'boundary-condition@test.medshood.com',
    phone: '+91 9123456789'
  }
}

/**
 * Generate minor user (age < 18)
 */
export function generateMinorUser() {
  return generateEligibleUser({ age: '17' })
}

/**
 * Generate user with extreme weight (edge case)
 */
export function generateExtremeWeightUser() {
  return generateEligibleUser({ weight: '250', height: '150' })
}

/**
 * Generate user with zero values (edge case)
 */
export function generateZeroValuesUser() {
  return generateEligibleUser({ weight: '0', height: '0' })
}

/**
 * Generate user with negative values (edge case)
 */
export function generateNegativeValuesUser() {
  return generateEligibleUser({ weight: '-10', height: '-170' })
}

/**
 * Generate batch of users
 */
export function generateUserBatch(
  count: number,
  type: 'eligible' | 'ineligible' = 'eligible'
) {
  const generator = type === 'eligible' ? generateEligibleUser : generateIneligibleUser
  return Array.from({ length: count }, () => generator())
}

/**
 * Anonymize user data (GDPR compliance)
 */
export function anonymizeUserData(userData: any) {
  return {
    ...userData,
    email: `user${randomInt(10000, 99999)}@anonymized.test`,
    phone: `+${randomInt(10, 99)} ${randomInt(1000000000, 9999999999)}`,
    currentMedications: userData.currentMedications ? '[REDACTED]' : ''
  }
}

/**
 * Generate invalid email test cases
 */
export function getInvalidEmails() {
  return [
    '',
    'invalid',
    'user@',
    '@domain.com',
    'user@domain',
    'user @domain.com',
    'user@.com',
    'user@@domain.com'
  ]
}

/**
 * Generate valid email test cases
 */
export function getValidEmails() {
  return [
    'user@example.com',
    'test.user+tag@domain.co.uk',
    'user123@subdomain.example.com',
    'first.last@company.org'
  ]
}

/**
 * Generate invalid phone test cases
 */
export function getInvalidPhones() {
  return [
    '',
    '9876543210', // No country code
    '+91 123', // Too short
    '+91 abcd', // Non-numeric
    '123-456-7890', // No country code
    '+' // Just plus
  ]
}

/**
 * Generate valid phone test cases
 */
export function getValidPhones() {
  return [
    '+91 98765 43210',
    '+919876543210',
    '+1 (555) 123-4567',
    '+44 20 7946 0958',
    '+61 2 1234 5678'
  ]
}
