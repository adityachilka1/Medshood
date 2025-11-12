import { test, expect } from '@playwright/test'

/**
 * E2E Tests for Quiz Journey
 *
 * CRITICAL: Tests complete user flows from landing to results
 */

test.describe('Eligible User Journey', () => {
  test('completes quiz and sees eligible result with high BMI', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/')
    await expect(page).toHaveTitle(/Medshood/i)

    // Click Check Eligibility CTA in header
    await page.getByRole('link', { name: /check eligibility/i }).first().click()

    // Verify quiz page loaded
    await expect(page).toHaveURL('/quiz')
    await expect(page.getByText('Step 1 of 7')).toBeVisible()
    await expect(page.getByText('14% Complete')).toBeVisible()

    // Step 1: Enter age and gender
    await page.getByPlaceholder(/enter your age/i).fill('35')
    await page.getByRole('button', { name: 'Male' }).click()

    // Verify gender button selected
    await expect(page.getByRole('button', { name: 'Male' })).toHaveClass(/bg-primary/)

    await page.getByRole('button', { name: /next/i }).click()

    // Step 2: Measurements
    await expect(page.getByText('Step 2 of 7')).toBeVisible()
    await page.getByPlaceholder(/e.g., 85/i).fill('95')
    await page.getByPlaceholder(/e.g., 170/i).fill('175')

    // Verify BMI calculation displays
    await expect(page.getByText(/Your BMI:/)).toBeVisible()
    await expect(page.getByText('31.0')).toBeVisible() // 95/(1.75^2) = 31.0

    await page.getByPlaceholder(/e.g., 70/i).fill('80')
    await page.getByRole('button', { name: /next/i }).click()

    // Step 3: Medical conditions
    await expect(page.getByText('Step 3 of 7')).toBeVisible()
    await page.getByLabel(/Type 2 Diabetes/i).check()
    await page.getByLabel(/High Blood Pressure/i).check()

    // Verify checkboxes checked
    await expect(page.getByLabel(/Type 2 Diabetes/i)).toBeChecked()
    await expect(page.getByLabel(/High Blood Pressure/i)).toBeChecked()

    await page.getByRole('button', { name: /next/i }).click()

    // Step 4: Medications
    await expect(page.getByText('Step 4 of 7')).toBeVisible()
    await page.getByPlaceholder(/e.g., Metformin/i).fill('Metformin 500mg twice daily')
    await page.getByRole('button', { name: /next/i }).click()

    // Step 5: Previous attempts
    await expect(page.getByText('Step 5 of 7')).toBeVisible()
    await page.getByLabel(/Diet and exercise/i).check()
    await expect(page.getByLabel(/Diet and exercise/i)).toBeChecked()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 6: Activity level
    await expect(page.getByText('Step 6 of 7')).toBeVisible()
    await page.getByLabel(/Moderately Active/i).check()
    await expect(page.getByLabel(/Moderately Active/i)).toBeChecked()
    await page.getByRole('button', { name: /next/i }).click()

    // Step 7: Contact information
    await expect(page.getByText('Step 7 of 7')).toBeVisible()
    await expect(page.getByText('100% Complete')).toBeVisible()
    await page.getByPlaceholder(/your.email@example.com/i).fill('eligible@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+91 9876543210')
    await page.getByRole('button', { name: /view results/i }).click()

    // Verify eligible result page
    await expect(page.getByText(/Great news! You may be eligible/i)).toBeVisible()
    await expect(page.getByText(/Your BMI: 31.0/i)).toBeVisible()
    await expect(page.getByText(/Target Weight Loss: 15.0 kg/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Schedule Doctor Consultation/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /View Pricing/i })).toBeVisible()

    // Click View Pricing
    await page.getByRole('link', { name: /View Pricing/i }).click()
    await expect(page).toHaveURL('/pricing')
    await expect(page.getByText(/Simple, transparent pricing/i)).toBeVisible()
  })

  test('ineligible user sees alternative options', async ({ page }) => {
    await page.goto('/quiz')

    // Complete quiz with BMI < 27
    await page.getByPlaceholder(/enter your age/i).fill('25')
    await page.getByRole('button', { name: 'Female' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    // Low weight for BMI < 27
    await page.getByPlaceholder(/e.g., 85/i).fill('60')
    await page.getByPlaceholder(/e.g., 170/i).fill('165')
    await page.getByPlaceholder(/e.g., 70/i).fill('55')
    await page.getByRole('button', { name: /next/i }).click()

    // No medical conditions
    await page.getByLabel(/None of the above/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Skip medications
    await page.getByRole('button', { name: /next/i }).click()

    // Previous attempts
    await page.getByLabel(/This is my first serious attempt/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Activity level
    await page.getByLabel(/Sedentary/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Contact info
    await page.getByPlaceholder(/your.email@example.com/i).fill('ineligible@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+919123456789')
    await page.getByRole('button', { name: /view results/i }).click()

    // Verify ineligible result
    await expect(page.getByText(/Let's explore your options/i)).toBeVisible()
    await expect(page.getByRole('link', { name: /Speak with a Specialist/i })).toBeVisible()
    await expect(page.getByRole('link', { name: /Back to Home/i })).toBeVisible()
  })

  test('boundary case: BMI exactly 27 with medical condition - eligible', async ({ page }) => {
    await page.goto('/quiz')

    await page.getByPlaceholder(/enter your age/i).fill('30')
    await page.getByRole('button', { name: 'Male' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    // Weight 73.5kg, Height 165cm = BMI 27.0
    await page.getByPlaceholder(/e.g., 85/i).fill('73.5')
    await page.getByPlaceholder(/e.g., 170/i).fill('165')

    // Verify BMI shows 27.0
    await expect(page.getByText('27.0')).toBeVisible()

    await page.getByPlaceholder(/e.g., 70/i).fill('65')
    await page.getByRole('button', { name: /next/i }).click()

    // Select medical condition
    await page.getByLabel(/High Cholesterol/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    // Skip through remaining steps
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/Diet and exercise/i).check()
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/Lightly Active/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByPlaceholder(/your.email@example.com/i).fill('boundary@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+919876543210')
    await page.getByRole('button', { name: /view results/i }).click()

    // Should be eligible (BMI 27 + condition)
    await expect(page.getByText(/Great news! You may be eligible/i)).toBeVisible()
  })
})

test.describe('Quiz Navigation', () => {
  test('Previous button navigates backward and preserves data', async ({ page }) => {
    await page.goto('/quiz')

    // Fill step 1
    await page.getByPlaceholder(/enter your age/i).fill('30')
    await page.getByRole('button', { name: 'Male' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    // Fill step 2
    await page.getByPlaceholder(/e.g., 85/i).fill('85')
    await page.getByPlaceholder(/e.g., 170/i).fill('170')
    await page.getByRole('button', { name: /next/i }).click()

    // Verify step 3
    await expect(page.getByText('Step 3 of 7')).toBeVisible()

    // Go back to step 2
    await page.getByRole('button', { name: /previous/i }).click()
    await expect(page.getByText('Step 2 of 7')).toBeVisible()

    // Verify data persisted
    await expect(page.getByPlaceholder(/e.g., 85/i)).toHaveValue('85')
    await expect(page.getByPlaceholder(/e.g., 170/i)).toHaveValue('170')

    // Go back to step 1
    await page.getByRole('button', { name: /previous/i }).click()
    await expect(page.getByText('Step 1 of 7')).toBeVisible()

    // Verify data persisted
    await expect(page.getByPlaceholder(/enter your age/i)).toHaveValue('30')
    await expect(page.getByRole('button', { name: 'Male' })).toHaveClass(/bg-primary/)

    // Verify Previous button disabled on step 1
    await expect(page.getByRole('button', { name: /previous/i })).toBeDisabled()
  })

  test('progress bar updates correctly', async ({ page }) => {
    await page.goto('/quiz')

    const steps = [
      { step: 1, percentage: '14%' },
      { step: 2, percentage: '29%' },
      { step: 3, percentage: '43%' },
      { step: 4, percentage: '57%' },
      { step: 5, percentage: '71%' },
      { step: 6, percentage: '86%' },
      { step: 7, percentage: '100%' }
    ]

    for (const { step, percentage } of steps) {
      await expect(page.getByText(`Step ${step} of 7`)).toBeVisible()
      await expect(page.getByText(`${percentage} Complete`)).toBeVisible()

      if (step < 7) {
        await page.getByRole('button', { name: /next/i }).click()
      }
    }
  })
})

test.describe('Mobile Quiz Journey', () => {
  test('completes quiz on mobile device', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // iPhone SE

    await page.goto('/')

    // Open mobile menu
    await page.locator('button:has-text("☰")').click()

    // Click Check Eligibility
    await page.getByRole('link', { name: /Check Eligibility/i }).click()
    await expect(page).toHaveURL('/quiz')

    // Complete step 1
    await page.getByPlaceholder(/enter your age/i).fill('30')
    await page.getByRole('button', { name: 'Male' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    // Verify mobile-friendly layout
    const nextButton = page.getByRole('button', { name: /next/i })
    await expect(nextButton).toBeVisible()

    // Complete step 2
    await page.getByPlaceholder(/e.g., 85/i).fill('100')
    await page.getByPlaceholder(/e.g., 170/i).fill('165')
    await page.getByPlaceholder(/e.g., 70/i).fill('75')

    // Verify BMI calculation on mobile
    await expect(page.getByText(/Your BMI:/)).toBeVisible()
  })
})

test.describe('Visual Regression', () => {
  test('quiz step 1 visual snapshot', async ({ page }) => {
    await page.goto('/quiz')
    await expect(page).toHaveScreenshot('quiz-step-1.png', {
      fullPage: true,
      mask: [] // No elements to mask
    })
  })

  test('eligible result page visual snapshot', async ({ page }) => {
    // Fast-forward to results by directly setting state would require mocking
    // For now, we'll navigate through the quiz quickly
    await page.goto('/quiz')

    // Quick completion
    await page.getByPlaceholder(/enter your age/i).fill('30')
    await page.getByRole('button', { name: 'Male' }).click()
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByPlaceholder(/e.g., 85/i).fill('100')
    await page.getByPlaceholder(/e.g., 170/i).fill('165')
    await page.getByPlaceholder(/e.g., 70/i).fill('75')
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByLabel(/Type 2 Diabetes/i).check()
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/Diet and exercise/i).check()
    await page.getByRole('button', { name: /next/i }).click()
    await page.getByLabel(/Sedentary/i).check()
    await page.getByRole('button', { name: /next/i }).click()

    await page.getByPlaceholder(/your.email@example.com/i).fill('test@test.com')
    await page.getByPlaceholder(/\+91/i).fill('+919876543210')
    await page.getByRole('button', { name: /view results/i }).click()

    // Take snapshot of results page
    await expect(page).toHaveScreenshot('eligible-results.png', {
      fullPage: true
    })
  })
})
