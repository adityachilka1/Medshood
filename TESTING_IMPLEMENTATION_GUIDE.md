# Medshood Testing Implementation Guide

## Quick Start

### 1. Install Testing Dependencies

```bash
# Core testing frameworks
npm install -D vitest @vitejs/plugin-react jsdom
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

# E2E testing
npm install -D @playwright/test
npx playwright install

# Accessibility testing
npm install -D @axe-core/playwright pa11y-ci

# Performance testing
npm install -D @lhci/cli

# Test utilities
npm install -D @faker-js/faker

# Git hooks
npm install -D husky
npx husky install
```

### 2. Update package.json Scripts

Add these scripts to your `package.json`:

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

    "test:all": "npm run test:unit && npm run test:e2e && npm run test:a11y",

    "prepare": "husky install"
  }
}
```

### 3. Run Your First Tests

```bash
# Run unit tests
npm run test:unit

# Run E2E tests (starts dev server automatically)
npm run test:e2e

# Run all tests
npm run test:all
```

---

## Directory Structure

```
medshood/
├── tests/
│   ├── unit/
│   │   ├── bmi-calculator.test.ts       # BMI calculation tests
│   │   ├── eligibility.test.ts          # Eligibility logic tests
│   │   └── validation.test.ts           # Form validation tests
│   ├── integration/
│   │   ├── quiz-flow.test.tsx           # Quiz flow integration tests
│   │   └── navigation.test.tsx          # Navigation integration tests
│   └── utils/
│       ├── test-helpers.ts              # Shared test utilities
│       └── test-data-factory.ts         # Synthetic data generators
├── e2e/
│   ├── quiz-journey.spec.ts             # E2E quiz tests
│   ├── accessibility.spec.ts            # Accessibility E2E tests
│   └── mobile.spec.ts                   # Mobile-specific tests
├── .github/
│   └── workflows/
│       └── test.yml                     # CI/CD pipeline
├── vitest.config.ts                     # Vitest configuration
├── vitest.setup.ts                      # Vitest setup file
├── playwright.config.ts                 # Playwright configuration
├── .pa11yci.json                        # Accessibility config
├── lighthouserc.json                    # Performance config
└── .codecov.yml                         # Coverage reporting config
```

---

## Phase 1: Critical Path Testing (Week 1-2)

### Step 1: Extract Business Logic

Create utility functions in `/lib/utils.ts`:

```typescript
// /lib/utils.ts

export function calculateBMI(weight: number, height: number): string {
  if (!weight || !height || weight <= 0 || height <= 0) {
    return '0'
  }
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  return bmi.toFixed(1)
}

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
```

### Step 2: Update Quiz Component

Refactor `/app/quiz/page.tsx` to use extracted utilities:

```typescript
import { calculateBMI, isEligible } from '@/lib/utils'

// In the Quiz component:
const bmi = calculateBMI(parseFloat(formData.weight), parseFloat(formData.height))
const eligible = isEligible({
  age: formData.age,
  weight: formData.weight,
  height: formData.height,
  medicalConditions: formData.medicalConditions
})
```

### Step 3: Run Unit Tests

```bash
npm run test:unit
```

Expected output:
```
✓ tests/unit/bmi-calculator.test.ts (20 tests)
✓ tests/unit/eligibility.test.ts (25 tests)
✓ tests/unit/validation.test.ts (30 tests)

Test Files  3 passed (3)
Tests  75 passed (75)
Coverage  85.2%
```

---

## Phase 2: E2E Testing (Week 3-4)

### Step 1: Start Development Server

```bash
npm run dev
```

### Step 2: Run E2E Tests

In a new terminal:

```bash
npm run test:e2e
```

### Step 3: Debug Failed Tests

```bash
# Run with UI mode
npm run test:e2e:ui

# Run with browser visible
npm run test:e2e:headed

# Run specific test
npx playwright test quiz-journey.spec.ts --debug
```

### Step 4: View Test Reports

```bash
npx playwright show-report
```

---

## Phase 3: Accessibility Testing (Week 5-6)

### Step 1: Run pa11y

```bash
# Start server
npm run build
npm run start

# In another terminal
npm run test:a11y
```

### Step 2: Run Lighthouse CI

```bash
npm run test:lighthouse
```

### Step 3: Review Reports

Lighthouse reports will be saved in `.lighthouseci/` directory.

---

## CI/CD Integration

### GitHub Actions Setup

1. **Create GitHub Repository Secrets**:
   - `CODECOV_TOKEN` (get from codecov.io)

2. **Enable Branch Protection**:
   - Go to Settings > Branches
   - Add rule for `main` branch
   - Require status checks to pass
   - Require tests to pass before merge

3. **Monitor Test Results**:
   - View workflow runs in Actions tab
   - Check coverage reports on Codecov
   - Review Playwright reports in artifacts

---

## Writing New Tests

### Unit Test Example

```typescript
// tests/unit/my-feature.test.ts
import { describe, it, expect } from 'vitest'
import { myFunction } from '@/lib/my-feature'

describe('My Feature', () => {
  it('does something correctly', () => {
    const result = myFunction(input)
    expect(result).toBe(expectedOutput)
  })

  it('handles edge cases', () => {
    expect(myFunction(null)).toBe(null)
    expect(myFunction('')).toBe('')
  })
})
```

### Component Test Example

```typescript
// tests/unit/MyComponent.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })

  it('handles user interaction', async () => {
    const user = userEvent.setup()
    render(<MyComponent />)

    await user.click(screen.getByRole('button'))
    expect(screen.getByText('Clicked!')).toBeInTheDocument()
  })
})
```

### E2E Test Example

```typescript
// e2e/my-feature.spec.ts
import { test, expect } from '@playwright/test'

test('user completes the flow', async ({ page }) => {
  await page.goto('/my-page')

  await page.getByRole('button', { name: 'Start' }).click()

  await expect(page).toHaveURL('/next-page')
  await expect(page.getByText('Success')).toBeVisible()
})
```

---

## Troubleshooting

### Tests Failing Locally

1. **Clear cache**:
   ```bash
   rm -rf node_modules .next coverage
   npm install
   ```

2. **Check Node version**:
   ```bash
   node -v  # Should be 20+
   ```

3. **Verify ports**:
   ```bash
   lsof -i :3000  # Check if port 3000 is in use
   ```

### E2E Tests Timing Out

1. **Increase timeout** in `playwright.config.ts`:
   ```typescript
   timeout: 60 * 1000  // 60 seconds
   ```

2. **Use explicit waits**:
   ```typescript
   await page.waitForSelector('.my-element', { timeout: 10000 })
   ```

### Coverage Not Reaching Target

1. **Identify uncovered code**:
   ```bash
   npm run test:coverage
   open coverage/index.html
   ```

2. **Add missing tests** for red/yellow highlighted code

3. **Exclude non-critical files** in `vitest.config.ts`:
   ```typescript
   coverage: {
     exclude: ['**/*.stories.tsx', 'tests/**']
   }
   ```

---

## Best Practices

### 1. Test Naming

```typescript
// ✅ Good
it('calculates BMI correctly for standard inputs', () => {})

// ❌ Bad
it('test1', () => {})
```

### 2. Arrange-Act-Assert Pattern

```typescript
it('validates email format', () => {
  // Arrange
  const email = 'test@example.com'

  // Act
  const result = isValidEmail(email)

  // Assert
  expect(result).toBe(true)
})
```

### 3. Use Test Data Factories

```typescript
// ✅ Good
const user = generateEligibleUser()

// ❌ Bad
const user = {
  age: '30',
  weight: '85',
  height: '170',
  // ... 10 more fields
}
```

### 4. Avoid Test Interdependence

```typescript
// ❌ Bad - Tests depend on execution order
let userId
it('creates user', () => { userId = createUser() })
it('updates user', () => { updateUser(userId) })

// ✅ Good - Tests are independent
it('creates user', () => {
  const userId = createUser()
  expect(userId).toBeDefined()
})
it('updates user', () => {
  const userId = createUser()
  updateUser(userId)
  expect(getUser(userId)).toBe(updatedData)
})
```

### 5. Clean Up After Tests

```typescript
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})
```

---

## Performance Optimization

### Parallel Test Execution

```bash
# Run tests in parallel (default)
vitest run

# Limit workers
vitest run --reporter=verbose --threads=2
```

### Test Filtering

```bash
# Run specific test file
vitest run bmi-calculator.test.ts

# Run tests matching pattern
vitest run --grep "BMI"

# Run only changed tests
vitest related
```

### Faster E2E Tests

```typescript
// playwright.config.ts
export default defineConfig({
  workers: process.env.CI ? 1 : 4,  // More workers locally
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0
})
```

---

## Next Steps

1. **Week 1-2**: Implement Phase 1 (Unit Tests)
   - Extract business logic
   - Write BMI & eligibility tests
   - Achieve 80% coverage on critical code

2. **Week 3-4**: Implement Phase 2 (E2E Tests)
   - Write quiz journey tests
   - Test mobile navigation
   - Set up visual regression

3. **Week 5-6**: Implement Phase 3 (Accessibility & Performance)
   - Run pa11y on all pages
   - Configure Lighthouse CI
   - Fix accessibility issues

4. **Week 7-8**: CI/CD Integration
   - Set up GitHub Actions
   - Configure branch protection
   - Enable coverage reporting

5. **Ongoing**: Maintenance
   - Update tests with new features
   - Monitor test performance
   - Review coverage reports

---

## Resources

- **Vitest Docs**: https://vitest.dev/guide/
- **Playwright Docs**: https://playwright.dev/docs/intro
- **Testing Library**: https://testing-library.com/docs/react-testing-library/intro
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Lighthouse**: https://developer.chrome.com/docs/lighthouse/overview/

---

## Support

For questions or issues:
1. Check the troubleshooting section above
2. Review test examples in `/tests/` directory
3. Consult the main TESTING_STRATEGY.md document
4. Reach out to the QA team

---

**Happy Testing!** 🧪
