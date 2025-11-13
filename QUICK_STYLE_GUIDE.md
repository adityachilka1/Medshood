# Medshood Quick Style Guide

**Quick reference for consistent styling across the website**

---

## Colors

### Brand Colors
```css
--color-primary: #0F3F77      /* Main brand blue */
--color-secondary: #1E5A8E    /* Lighter blue */
--color-accent: #0A2E57       /* Dark blue */
--color-novo-gray: #F5F5F5    /* Light gray background */
```

### Standard Gradients
```tsx
// Hero sections (ONLY)
className="bg-gradient-to-br from-primary to-secondary"

// Section backgrounds (transitions)
className="bg-gradient-to-b from-white to-novo-gray"

// Feature cards (sparingly)
className="bg-gradient-to-br from-blue-500 to-blue-600"
```

### Text Colors
```tsx
// Primary body text
className="text-gray-900"

// Secondary text / descriptions
className="text-gray-700"

// Tertiary / muted text
className="text-gray-600"

// Labels / metadata
className="text-gray-500"

// On dark backgrounds
className="text-white"
className="text-blue-100"  // Slightly muted on gradients
```

### Background Colors
```tsx
// Page background
className="bg-white"

// Section backgrounds
className="bg-novo-gray"      // Use this, NOT bg-blue-50
className="bg-gray-50"        // For trust/compliance sections

// Card backgrounds
className="bg-white"
```

---

## Typography

### Headings
```tsx
// H1 - Page title (hero)
className="text-5xl md:text-6xl font-bold leading-tight"

// H2 - Main section heading
className="text-4xl font-bold text-primary mb-6"

// H2 - Subsection heading
className="text-3xl font-bold text-gray-900 mb-4"

// H3 - Card/component title
className="text-2xl font-bold text-gray-900 mb-3"

// H3 - Smaller title
className="text-xl font-bold text-gray-900 mb-2"
```

### Body Text
```tsx
// Hero subtitle (on dark)
className="text-xl md:text-2xl text-blue-100"

// Section description
className="text-xl text-gray-700"

// Body paragraph
className="text-base text-gray-900 leading-relaxed"

// Small text / helper text
className="text-sm text-gray-600"
```

### Font Weights
```tsx
font-bold       // Headings H1-H3, buttons
font-semibold   // Headings H4-H6, labels, emphasis
font-normal     // Body text (default)
```

### Line Heights
```tsx
leading-tight    // Headings
leading-relaxed  // Body text
// No class needed for buttons/labels
```

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl">
  Button Text
</button>
```

#### Secondary Button (White on Primary)
```tsx
<button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
  Button Text
</button>
```

#### Outline Button
```tsx
<button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm">
  Button Text
</button>
```

#### Button Sizes
```tsx
// Large (default)
px-8 py-4 text-lg

// Medium
px-6 py-3 text-base

// Small
px-4 py-2 text-sm
```

---

### Cards

#### Content Card (White Background)
```tsx
<div className="bg-white p-8 rounded-2xl card-shadow hover:card-shadow-lg transition-all duration-300 hover:-translate-y-1">
  {/* Content */}
</div>
```

#### Feature Card (Gradient)
```tsx
<div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white hover:scale-105 transition-all duration-300 card-shadow-lg">
  {/* Content */}
</div>
```

#### Interactive Card (Clickable)
```tsx
<Link href="/..." className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
  <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
    {/* Header */}
  </div>
  <div className="p-6">
    {/* Content */}
  </div>
</Link>
```

---

### Badges

#### Default Badge
```tsx
<span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
  Badge Text
</span>
```

#### Status Badge
```tsx
<span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
  Status
</span>
```

#### Floating Badge (Hero)
```tsx
<span className="inline-block bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/30 shadow-lg">
  Floating Badge
</span>
```

---

### Form Inputs

#### Text Input
```tsx
<input
  type="text"
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
  placeholder="Placeholder text"
/>
```

#### Textarea
```tsx
<textarea
  rows={3}
  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900"
  placeholder="Placeholder text"
/>
```

#### Label
```tsx
<label className="block font-semibold text-gray-900 mb-2">
  Label Text
</label>
```

---

### Hero Sections

#### Standard Hero
```tsx
<section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Page Title
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
        Subtitle text
      </p>
    </div>
  </div>
</section>
```

#### Hero with Badge
```tsx
<div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm text-primary border border-white/30 shadow-lg">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
  </span>
  Badge Text
</div>
```

---

### Stats Display

#### Light Background
```tsx
<div className="text-center">
  <div className="text-4xl font-bold gradient-text mb-2">5,000+</div>
  <div className="text-gray-900 font-semibold">Medicines Available</div>
  <div className="text-sm text-gray-800">Description</div>
</div>
```

#### Dark Background
```tsx
<div className="text-center">
  <div className="text-4xl font-bold text-white mb-2">98%</div>
  <div className="text-sm text-blue-200">Customer Satisfaction</div>
</div>
```

---

## Layout

### Section Container
```tsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</section>
```

### Section Spacing
```tsx
// Small sections
py-12

// Standard sections (most common)
py-20

// Major sections
py-24

// Hero sections
py-20 md:py-28
```

### Content Widths
```tsx
// Full-width (default for most sections)
max-w-7xl mx-auto

// Content sections (articles, forms)
max-w-4xl mx-auto

// Narrow content (hero text, centered)
max-w-3xl mx-auto
```

### Grids
```tsx
// 2-column
grid grid-cols-1 md:grid-cols-2 gap-6

// 3-column
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

// 4-column
grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8
```

### Spacing
```tsx
// Tight spacing
gap-4

// Normal spacing
gap-6

// Loose spacing
gap-8

// Section spacing
gap-12
```

---

## Effects

### Shadows
```tsx
// Use ONLY these custom classes (from globals.css)
card-shadow      // Default cards
card-shadow-lg   // Important cards
card-shadow-xl   // Featured cards

// Hover effect
hover:card-shadow-lg  // Add next level up
```

### Glassmorphism
```tsx
// Use on overlays only
glass            // Basic glass effect
glass-dark       // Dark variant
glass-light      // Light variant
glass-card       // Card variant
```

### Transitions
```tsx
// Standard (use this)
transition-all duration-300

// From globals.css
transition-smooth  // Same as above

// Fast interactions
duration-300

// Medium interactions
duration-500
```

### Hover Effects
```tsx
// Cards
hover:-translate-y-1 transition-all duration-300

// Buttons
hover:shadow-xl transition-all duration-300

// Links
hover:text-secondary hover:underline transition-smooth

// Scale (use sparingly)
hover:scale-105 transition-all duration-300
```

---

## Animations

### Entrance Animations
```tsx
// Fade in from bottom (most common)
animate-fade-in-up

// Simple fade in
animate-fade-in

// Slide from left
animate-slide-in

// With delay (cards in grid)
animate-fade-in-up
style={{animationDelay: `${index * 0.1}s`}}
```

### Continuous Animations
```tsx
// Floating effect (decorative)
animate-float

// Subtle pulse (status indicators)
animate-pulse-subtle

// Ping (live indicators)
animate-ping
```

---

## Accessibility

### Focus States
```tsx
// Already handled globally in globals.css
// All interactive elements get:
focus:ring-2 focus:ring-primary focus:border-transparent outline-none

// For custom focus (rare)
focus-visible:outline-3 focus-visible:outline-primary focus-visible:outline-offset-2
```

### Screen Reader Only
```tsx
<span className="sr-only">
  Text for screen readers only
</span>
```

### Reduced Motion
```tsx
// Automatically handled in globals.css
@media (prefers-reduced-motion: reduce) {
  // All animations become instant
}
```

---

## Border Radius

```tsx
// Buttons
rounded-xl

// Cards
rounded-2xl

// Large cards/sections
rounded-3xl

// Inputs
rounded-xl

// Badges/Pills
rounded-full

// Images
rounded-lg
```

---

## Common Patterns

### CTA Section
```tsx
<section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold mb-6">
      CTA Heading
    </h2>
    <p className="text-xl mb-8 text-blue-100">
      Description text
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300">
        Primary CTA
      </button>
      <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300">
        Secondary CTA
      </button>
    </div>
  </div>
</section>
```

### Trust Badges Section
```tsx
<section className="py-16 bg-gray-50 border-t border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Section Title
      </h2>
      <p className="text-lg text-gray-600">
        Description
      </p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {/* Badge cards */}
    </div>
  </div>
</section>
```

### Empty State
```tsx
<div className="text-center py-16">
  <div className="text-5xl mb-4">🔍</div>
  <h3 className="text-2xl font-bold text-gray-900 mb-2">
    No Results Found
  </h3>
  <p className="text-gray-600">
    Try adjusting your search
  </p>
</div>
```

---

## Don'ts

### ❌ Don't Use
```tsx
// Different gradients per page
from-primary via-secondary to-accent  // Only on homepage
from-primary to-primary-dark          // Don't use

// Tailwind shadows (use custom classes)
shadow-sm
shadow-md
shadow-lg
shadow-xl
shadow-2xl

// Blue-50 backgrounds (use novo-gray)
bg-blue-50

// Inconsistent text grays
text-gray-800  // Don't use for body text

// Rounded-md (use rounded-xl or rounded-2xl)
rounded-md

// Font-semibold on buttons (use font-bold)
<button className="font-semibold">  // Wrong

// Emojis without aria-label
<div>📞</div>  // Wrong
```

### ✅ Do Use
```tsx
// Standard gradient
from-primary to-secondary

// Custom shadow classes
card-shadow
card-shadow-lg
card-shadow-xl

// Novo-gray background
bg-novo-gray

// Proper text colors
text-gray-900  // Body text
text-gray-700  // Secondary text

// Standard border radius
rounded-xl     // Buttons, inputs
rounded-2xl    // Cards

// Bold buttons
<button className="font-bold">  // Correct

// Accessible icons
<span role="img" aria-label="Phone">📞</span>
```

---

## Quick Checklist

Before pushing code, verify:
- [ ] Hero uses `from-primary to-secondary` gradient
- [ ] H1 is `text-5xl md:text-6xl font-bold`
- [ ] Buttons use `rounded-xl font-bold`
- [ ] Cards use `card-shadow` classes (not Tailwind)
- [ ] Sections use `py-20` spacing
- [ ] Text uses proper gray scale (900/700/600)
- [ ] No `bg-blue-50` (use `bg-novo-gray`)
- [ ] Form inputs use `border-2 border-gray-200 rounded-xl`
- [ ] All interactive elements have hover states
- [ ] Animations respect `prefers-reduced-motion`

---

## Resources

- **Full Audit:** `/DESIGN_CONSISTENCY_AUDIT.md`
- **Fix Checklist:** `/DESIGN_FIX_CHECKLIST.md`
- **Summary:** `/DESIGN_AUDIT_SUMMARY.md`
- **Globals CSS:** `/app/globals.css` (color variables, animations)
- **Design Tokens:** (TO BE CREATED) `/constants/design-tokens.ts`

---

**Last Updated:** 2025-11-12
**Questions?** Ask UI Art Director
