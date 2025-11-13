# Design Consistency Fix Checklist

Use this checklist to track progress on fixing design inconsistencies.

---

## Phase 1: CRITICAL Issues (Week 1)

### Color Standardization
- [ ] **C-1: Hero Gradient** - Pick and apply one gradient to all hero sections
  - [ ] Homepage: /app/page.tsx
  - [ ] Categories: /app/categories/page.tsx
  - [ ] Patient Assistance: /app/patient-assistance/page.tsx
  - [ ] Reviews: /app/reviews/page.tsx
  - [ ] Specialty Biologics: /app/specialty-biologics/page.tsx
  - [ ] FAQs: /app/faqs/page.tsx
  - [ ] Support: /app/support/page.tsx
  - [ ] Contact: /app/contact/page.tsx
  - [ ] About: /app/about/page.tsx
  - **Decision:** Use `bg-gradient-to-br from-primary to-secondary`

### Typography Standardization
- [ ] **F-1: H1 Sizes** - Standardize all H1 headings
  - [ ] Homepage: Change from `text-7xl` to `text-6xl`
  - [ ] Verify all others are `text-5xl md:text-6xl`
  - **Standard:** `text-5xl md:text-6xl font-bold leading-tight`

### Component Creation
- [ ] **UI-1: Button Component** - Create /components/ui/Button.tsx
  - [ ] Create Button component with variants:
    - [ ] Primary variant
    - [ ] Secondary variant
    - [ ] Outline variant
  - [ ] Add size props (sm, md, lg)
  - [ ] Add disabled state
  - [ ] Add loading state
  - [ ] Document props in comments
  - **Standard styles:**
    ```tsx
    // Primary
    bg-primary text-white px-8 py-4 rounded-xl font-bold
    hover:bg-secondary transition-all duration-300

    // Secondary
    bg-white text-primary px-8 py-4 rounded-xl font-bold
    hover:bg-gray-50 transition-all duration-300

    // Outline
    border-2 border-white text-white px-8 py-4 rounded-xl font-bold
    hover:bg-white hover:text-primary transition-all duration-300
    ```

- [ ] **Replace buttons on all pages:**
  - [ ] Homepage (6 buttons)
  - [ ] Categories (2 buttons)
  - [ ] Patient Assistance (5+ buttons)
  - [ ] Upload Prescription (4 buttons)
  - [ ] Reviews (1 button)
  - [ ] Specialty Biologics (2 buttons)
  - [ ] FAQs (2 buttons)
  - [ ] Support (1 button)
  - [ ] Contact (1 button)
  - [ ] About (1 button)

### Content Fixes
- [ ] **FQ-1: FAQs Content** - Replace GLP-1 weight loss content
  - [ ] Remove weight loss program FAQs
  - [ ] Write specialty pharmacy FAQs
  - [ ] Cover topics: cold chain, prior auth, rare diseases, delivery
  - [ ] Review with content team

- [ ] **AB-1: About Content** - Replace weight loss program content
  - [ ] Remove weight loss mission/vision
  - [ ] Write specialty pharmacy about content
  - [ ] Cover: company history, pharmacy license, team
  - [ ] Review with content team

---

## Phase 2: HIGH Priority (Week 2)

### Color System
- [ ] **C-2: Gray Scale Hierarchy** - Define and apply
  - [ ] Create design-tokens.ts with gray scale
  - [ ] Primary text: `text-gray-900`
  - [ ] Secondary text: `text-gray-700`
  - [ ] Tertiary text: `text-gray-600`
  - [ ] Replace all instances across 10 pages

- [ ] **C-3: Background Colors** - Standardize section backgrounds
  - [ ] Replace all `bg-blue-50` with `bg-novo-gray`
  - [ ] Standardize gradient backgrounds to `from-white to-novo-gray`
  - [ ] Audit all 10 pages

- [ ] **C-4: Badge Backgrounds** - Standardize badge styles
  - [ ] Create Badge component
  - [ ] Default: `bg-primary/10 text-primary`
  - [ ] Status: `bg-blue-100 text-blue-800`
  - [ ] Floating: `bg-white/90 text-primary border border-white/30`
  - [ ] Replace badges on all pages

### Typography
- [ ] **F-2: H2 Sizes** - Standardize H2 headings
  - [ ] Main section H2: `text-4xl font-bold text-primary mb-6`
  - [ ] Subsection H2: `text-3xl font-bold text-gray-900 mb-4`
  - [ ] Update all pages

- [ ] **F-3: Body Text** - Define hierarchy
  - [ ] Hero subtitle: `text-xl md:text-2xl`
  - [ ] Section description: `text-xl text-gray-700`
  - [ ] Body paragraph: `text-base text-gray-900 leading-relaxed`
  - [ ] Update all pages

- [ ] **F-4: Font Weights** - Standardize weights
  - [ ] H1-H3: `font-bold`
  - [ ] Buttons: `font-bold`
  - [ ] Labels: `font-semibold`
  - [ ] Body: `font-normal`

### Components
- [ ] **UI-2: Card Shadows** - Use only custom classes
  - [ ] Audit all shadow usage
  - [ ] Replace Tailwind shadows with card-shadow classes
  - [ ] Default: `card-shadow`
  - [ ] Important: `card-shadow-lg`
  - [ ] Featured: `card-shadow-xl`

- [ ] **UI-3: Form Inputs** - Standardize forms
  - [ ] Update FormInput component (if exists)
  - [ ] Standard style:
    ```tsx
    w-full px-4 py-3 border-2 border-gray-200 rounded-xl
    focus:ring-2 focus:ring-primary focus:border-transparent
    ```
  - [ ] Apply to Upload Prescription
  - [ ] Apply to Patient Assistance
  - [ ] Apply to Contact

- [ ] **UI-4: Card Types** - Create Card component
  - [ ] Feature Card (gradient background)
  - [ ] Content Card (white background)
  - [ ] Interactive Card (hover effects)
  - [ ] Document usage in /docs

- [ ] **UI-5: Section Spacing** - Standardize vertical rhythm
  - [ ] Small sections: `py-12`
  - [ ] Standard sections: `py-20`
  - [ ] Major sections: `py-24`
  - [ ] Hero sections: `py-20 md:py-28`
  - [ ] Audit and fix all pages

### Page Fixes
- [ ] **H-1: Hero Heights** - Standardize heights
  - [ ] All heroes: `py-20 md:py-28`
  - [ ] Remove custom homepage padding
  - [ ] Update all 9 pages with heroes

- [ ] **UP-1: Upload Page Header** - Add missing component
  - [ ] Import Header component
  - [ ] Remove custom header
  - [ ] Test navigation

---

## Phase 3: MEDIUM Priority (Week 3-4)

### Color Refinements
- [ ] **C-5: Link Styles** - Standardize link hover
  - [ ] Text links: `hover:text-secondary hover:underline transition-smooth`
  - [ ] Button links: Use Button component
  - [ ] Apply across all pages

### Typography Refinements
- [ ] **F-5: Line Heights** - Consistent line heights
  - [ ] Headings: `leading-tight`
  - [ ] Body: `leading-relaxed`
  - [ ] Apply everywhere

### Component Refinements
- [ ] **UI-6: Icon System** - Standardize icons
  - [ ] Audit icon usage (custom components, SVG, emoji)
  - [ ] Create icon component library
  - [ ] Replace emojis with proper icons
  - [ ] Document in design system

- [ ] **UI-7: Badge Variations** - Apply Badge component
  - [ ] Replace all badge instances
  - [ ] Use standard variants only

- [ ] **UI-8: Stat Display** - Create Stat component
  - [ ] Light background variant
  - [ ] Dark background variant
  - [ ] Apply to Homepage, Reviews, Patient Assistance, About

### Hero Section Refinements
- [ ] **H-2: Hero Layouts** - Define templates
  - [ ] Homepage: 2-column (unique)
  - [ ] Standard: Centered content
  - [ ] With Search: Add search component
  - [ ] Document each template

- [ ] **H-3: Hero Badges** - Consistent badge usage
  - [ ] Animated badges: Only for live/time-sensitive
  - [ ] Static badges: Default
  - [ ] Audit and update

### Content & Layout
- [ ] **CO-1: Empty States** - Create component
  - [ ] Design empty state component
  - [ ] Apply to Categories search
  - [ ] Document for future use

- [ ] **CO-2: Trust Sections** - Standardize trust badges
  - [ ] Create consistent trust section
  - [ ] Apply to Homepage, Categories, Upload

- [ ] **CO-3: Progress Indicator** - Extract component
  - [ ] Create reusable ProgressSteps component
  - [ ] Document in component library

### Responsive
- [ ] **R-1: Grid Breakpoints** - Standardize grids
  - [ ] 2-column: `grid-cols-1 md:grid-cols-2`
  - [ ] 3-column: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  - [ ] 4-column: `grid-cols-2 md:grid-cols-2 lg:grid-cols-4`
  - [ ] Apply everywhere

- [ ] **R-2: Mobile Buttons** - Consistent mobile layout
  - [ ] CTA groups: `flex flex-col sm:flex-row gap-4`
  - [ ] Single buttons: `w-full sm:w-auto`
  - [ ] Test on mobile

### Accessibility
- [ ] **A-1: Focus States** - Audit focus indicators
  - [ ] Test keyboard navigation on all pages
  - [ ] Verify focus-visible works
  - [ ] Fix any issues

- [ ] **A-2: Color Contrast** - WCAG compliance
  - [ ] Run automated contrast checker
  - [ ] Fix any AA failures
  - [ ] Document contrast ratios

- [ ] **A-3: Emoji Accessibility** - Fix screen reader issues
  - [ ] Replace decorative emojis with icons
  - [ ] Add aria-label to remaining emojis
  - [ ] Test with screen reader

### Motion
- [ ] **M-1: Animations** - Consistent entrance animations
  - [ ] Hero: Always animate
  - [ ] First section: Animate
  - [ ] Subsequent: Optional
  - [ ] Verify prefers-reduced-motion

- [ ] **M-2: Transitions** - Standardize timing
  - [ ] Fast (hover): `duration-300`
  - [ ] Medium (modal): `duration-500`
  - [ ] Apply consistently

### Layout
- [ ] **L-1: Container Widths** - Define hierarchy
  - [ ] Full-width: `max-w-7xl`
  - [ ] Content: `max-w-4xl`
  - [ ] Narrow: `max-w-3xl`
  - [ ] Document usage

- [ ] **L-2: Horizontal Padding** - Consistent padding
  - [ ] All sections: `px-4 sm:px-6 lg:px-8`
  - [ ] Verify everywhere

---

## Phase 4: LOW Priority (Week 5+)

### Component Details
- [ ] **UI-9: Hover Animations** - Define patterns
  - [ ] Cards: `hover:-translate-y-1`
  - [ ] Buttons: `hover:shadow-xl`
  - [ ] Links: `hover:underline`
  - [ ] Document patterns

- [ ] **UI-10: Border Radius** - Standardize scale
  - [ ] Buttons: `rounded-xl`
  - [ ] Cards: `rounded-2xl`
  - [ ] Inputs: `rounded-xl`
  - [ ] Badges: `rounded-full`
  - [ ] Apply everywhere

### Layout Details
- [ ] **L-3: Gap Spacing** - Define gap scale
  - [ ] Tight: `gap-4`
  - [ ] Normal: `gap-6`
  - [ ] Loose: `gap-8`
  - [ ] Section: `gap-12`
  - [ ] Apply consistently

### Page-Specific
- [ ] **UP-2: Upload Page Labels** - Use FormInput
  - [ ] Replace custom labels
  - [ ] Use FormInput component

- [ ] **RV-1: Star Rating** - Create component
  - [ ] Extract StarRating component
  - [ ] Apply to Reviews page
  - [ ] Document component

---

## Documentation Tasks

### Create Documentation
- [ ] **/docs/design-system/README.md** - Overview
- [ ] **/docs/design-system/colors.md** - Color guidelines
- [ ] **/docs/design-system/typography.md** - Font hierarchy
- [ ] **/docs/design-system/components.md** - Component usage
- [ ] **/docs/design-system/patterns.md** - Common patterns
- [ ] **/docs/design-system/spacing.md** - Spacing system
- [ ] **/docs/design-system/motion.md** - Animation guidelines

### Create Design Tokens
- [ ] **/constants/design-tokens.ts** - Export all tokens
  - [ ] Colors
  - [ ] Typography
  - [ ] Spacing
  - [ ] Shadows
  - [ ] Border radii
  - [ ] Transitions

### Component Library
- [ ] **/components/ui/Button.tsx** - ✅ Done in Phase 1
- [ ] **/components/ui/Card.tsx**
- [ ] **/components/ui/Badge.tsx**
- [ ] **/components/ui/FormInput.tsx** - Update existing
- [ ] **/components/ui/Hero.tsx**
- [ ] **/components/ui/Stat.tsx**
- [ ] **/components/ui/EmptyState.tsx**
- [ ] **/components/ui/ProgressSteps.tsx**
- [ ] **/components/ui/StarRating.tsx**
- [ ] **/components/ui/Icon.tsx**

---

## Testing & Validation

### Visual Regression
- [ ] Set up visual regression testing (Percy/Chromatic)
- [ ] Create baseline screenshots
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile viewports

### Manual Testing
- [ ] Homepage: Check all sections
- [ ] Categories: Check search, grid, hover states
- [ ] Patient Assistance: Check form, animations
- [ ] Upload Prescription: Check multi-step flow
- [ ] Reviews: Check testimonial cards
- [ ] Specialty Biologics: Check content sections
- [ ] FAQs: Check content, navigation
- [ ] Support: Check help categories
- [ ] Contact: Check form submission
- [ ] About: Check team section

### Accessibility Testing
- [ ] Run axe DevTools on all pages
- [ ] Test keyboard navigation
- [ ] Test with screen reader (NVDA/JAWS)
- [ ] Verify color contrast
- [ ] Check focus indicators
- [ ] Test with reduced motion enabled

### Performance Testing
- [ ] Check Lighthouse scores
- [ ] Verify no CSS bloat
- [ ] Check animation performance
- [ ] Test on slow network

---

## Sign-Off

### Phase 1 Complete
- [ ] All CRITICAL issues fixed
- [ ] Button component created and applied
- [ ] Hero gradients standardized
- [ ] H1 sizes consistent
- [ ] Content fixed (FAQs, About)
- [ ] Peer review completed
- [ ] Deployed to staging

### Phase 2 Complete
- [ ] All HIGH issues fixed
- [ ] Typography hierarchy defined
- [ ] Card system standardized
- [ ] Form inputs consistent
- [ ] Upload page fixed
- [ ] Peer review completed
- [ ] Deployed to staging

### Phase 3 Complete
- [ ] All MEDIUM issues fixed
- [ ] Component library complete
- [ ] Documentation written
- [ ] Accessibility audited
- [ ] Peer review completed
- [ ] Deployed to staging

### Phase 4 Complete
- [ ] All LOW issues fixed
- [ ] Visual regression tests passing
- [ ] Design system fully documented
- [ ] Final stakeholder approval
- [ ] Deployed to production

---

## Notes & Decisions

### Decision Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2025-11-12 | Use `from-primary to-secondary` for hero gradient | Most common usage, simpler than 3-color |
| | | |

### Blockers
| Issue | Blocker | Resolution |
|-------|---------|------------|
| | | |

### Questions
| Question | Answer | Asked By |
|----------|--------|----------|
| | | |

---

**Last Updated:** 2025-11-12
**Updated By:** UI Art Director
