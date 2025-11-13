const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Icon generation script for PWA using sharp
// Converts SVG to PNG in all required sizes

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const publicDir = path.join(__dirname, '..', 'public');
const svgIcon = path.join(publicDir, 'icon.svg');

console.log('Generating PWA icons from SVG...');

// Check if icon.svg exists
if (!fs.existsSync(svgIcon)) {
  console.error('❌ Error: icon.svg not found in public directory');
  process.exit(1);
}

// Generate PNG files for each size
async function generateIcons() {
  try {
    for (const size of sizes) {
      const filename = `icon-${size}x${size}.png`;
      const filepath = path.join(publicDir, filename);

      await sharp(svgIcon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(filepath);

      console.log(`✓ Generated ${filename} (${size}×${size}px)`);
    }

    // Also create apple-touch-icon.png as an alias for 192x192
    await sharp(svgIcon)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('✓ Generated apple-touch-icon.png (192×192px)');

    // Create a README for icons
    const iconReadme = `# PWA Icons

## Generated Icons

All icons have been automatically generated from icon.svg:

${sizes.map(size => `- ✅ icon-${size}x${size}.png (${size}×${size}px)`).join('\n')}
- ✅ apple-touch-icon.png (192×192px)

## Icon Specifications:

- **Source**: icon.svg (medical shield with cross design)
- **Format**: PNG with transparency
- **Purpose**: Progressive Web App installability
- **Theme Color**: #0EA5E9 (primary brand color)

## PWA Requirements Met:

✅ manifest.json configured
✅ icon.svg source file created
✅ PNG icons generated in all sizes
✅ Service worker with offline support
✅ Apple touch icon configured

## Regenerating Icons:

To regenerate icons from a new SVG source:

\`\`\`bash
npm run generate-icons
\`\`\`

Or manually:

\`\`\`bash
node scripts/generate-icons.js
\`\`\`
`;

    fs.writeFileSync(path.join(publicDir, 'ICONS-README.md'), iconReadme);

    console.log('\n✅ All PWA icons generated successfully!');
    console.log('📝 See public/ICONS-README.md for details');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
