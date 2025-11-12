import { describe, it, expect } from 'vitest'
import { calculateBMI } from '../utils/test-helpers'

/**
 * BMI Calculation Tests
 *
 * CRITICAL: BMI is used for medical eligibility determination
 * Formula: weight (kg) / (height (m))^2
 * Must be accurate to 1 decimal place
 */
describe('BMI Calculation', () => {
  describe('Standard Cases', () => {
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

      expect(bmi).toMatch(/^\d+\.\d$/) // Single decimal place
      expect(parseFloat(bmi)).toBeCloseTo(27.8, 1)
    })

    it('handles decimal weight and height', () => {
      const weight = 75.5
      const height = 165.5
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeCloseTo(27.6, 1)
    })
  })

  describe('Edge Cases', () => {
    it('returns "0" for zero weight', () => {
      expect(calculateBMI(0, 170)).toBe('0')
    })

    it('returns "0" for zero height', () => {
      expect(calculateBMI(85, 0)).toBe('0')
    })

    it('returns "0" for negative weight', () => {
      expect(calculateBMI(-85, 170)).toBe('0')
    })

    it('returns "0" for negative height', () => {
      expect(calculateBMI(85, -170)).toBe('0')
    })

    it('returns "0" for both zero', () => {
      expect(calculateBMI(0, 0)).toBe('0')
    })

    it('handles extreme weight values safely', () => {
      const weight = 300 // morbidly obese
      const height = 150 // short
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeGreaterThan(100)
      expect(parseFloat(bmi)).toBeCloseTo(133.3, 1)
    })

    it('handles very low BMI', () => {
      const weight = 40 // underweight
      const height = 180
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeLessThan(15)
      expect(parseFloat(bmi)).toBeCloseTo(12.3, 1)
    })
  })

  describe('Height Conversion', () => {
    it('converts cm to meters correctly', () => {
      const weight = 100
      const height = 200 // 2 meters
      const bmi = calculateBMI(weight, height)

      // 100 / (2 * 2) = 25.0
      expect(bmi).toBe('25.0')
    })

    it('handles height in cm (150-220 range)', () => {
      expect(calculateBMI(70, 150)).toBe('31.1') // 150cm
      expect(calculateBMI(70, 175)).toBe('22.9') // 175cm
      expect(calculateBMI(70, 200)).toBe('17.5') // 200cm
      expect(calculateBMI(70, 220)).toBe('14.5') // 220cm
    })
  })

  describe('Boundary Cases for Eligibility', () => {
    it('calculates BMI exactly 30 (eligibility threshold)', () => {
      const weight = 81.7
      const height = 165
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeGreaterThanOrEqual(30)
      expect(bmi).toBe('30.0')
    })

    it('calculates BMI exactly 27 (with-condition threshold)', () => {
      const weight = 73.5
      const height = 165
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeGreaterThanOrEqual(27)
      expect(parseFloat(bmi)).toBeLessThan(28)
      expect(bmi).toBe('27.0')
    })

    it('calculates BMI just below 27 (ineligible)', () => {
      const weight = 72
      const height = 165
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeLessThan(27)
      expect(bmi).toBe('26.4')
    })

    it('calculates BMI just below 30', () => {
      const weight = 80
      const height = 165
      const bmi = calculateBMI(weight, height)

      expect(parseFloat(bmi)).toBeLessThan(30)
      expect(bmi).toBe('29.4')
    })
  })

  describe('Realistic Use Cases', () => {
    it('calculates BMI for typical overweight user', () => {
      const weight = 95
      const height = 175
      const bmi = calculateBMI(weight, height)

      expect(bmi).toBe('31.0')
    })

    it('calculates BMI for typical obese user', () => {
      const weight = 110
      const height = 170
      const bmi = calculateBMI(weight, height)

      expect(bmi).toBe('38.1')
    })

    it('calculates BMI for normal weight user', () => {
      const weight = 70
      const height = 175
      const bmi = calculateBMI(weight, height)

      expect(bmi).toBe('22.9')
    })
  })

  describe('Precision and Rounding', () => {
    it('rounds to 1 decimal place correctly (round down)', () => {
      const weight = 85.2
      const height = 175
      const bmi = calculateBMI(weight, height)

      // 85.2 / 3.0625 = 27.82... should round to 27.8
      expect(bmi).toBe('27.8')
    })

    it('rounds to 1 decimal place correctly (round up)', () => {
      const weight = 85.5
      const height = 175
      const bmi = calculateBMI(weight, height)

      // 85.5 / 3.0625 = 27.92... should round to 27.9
      expect(bmi).toBe('27.9')
    })

    it('handles exact decimal values', () => {
      const weight = 76.5625
      const height = 175
      const bmi = calculateBMI(weight, height)

      // Should be exactly 25.0
      expect(bmi).toBe('25.0')
    })
  })
})
