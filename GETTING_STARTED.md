# Getting Started with Paisa Track Landing Page

This document will help you get started with the Paisa Track landing page project.

## Quick Start

1. Open the landing page by:
   - Double-clicking the `open.bat` file (Windows)
   - Or manually opening `index.html` in your preferred browser

## Structure

- `index.html` - The main HTML file containing the landing page structure
- `css/styles.css` - All styles for the landing page
- `js/main.js` - JavaScript functionality for interactivity
- `images/` - Directory for storing images (currently using placeholder images)

## Customization

### Replace Placeholder Images

All images are currently using online placeholder services. To use real images:

1. Add your images to the `images/` directory
2. Update the image paths in `index.html` from:
   ```html
   <img src="https://placehold.co/600x800/6366f1/ffffff?text=Paisa+Track+App" alt="Paisa Track App">
   ```
   To:
   ```html
   <img src="images/app-mockup.png" alt="Paisa Track App">
   ```

### Update Content

1. Modify text in `index.html` to match your specific branding and messaging
2. Update links (especially app store links) when they are available

### Styling Changes

1. Modify colors in `css/styles.css` by changing the CSS variables at the top:
   ```css
   :root {
       --primary-color: #6366f1;
       --primary-dark: #4f46e5;
       --secondary-color: #0ea5e9;
       /* other variables */
   }
   ```

## Development

This is a simple static website with no build process required. To make changes:

1. Edit the HTML, CSS, or JavaScript files
2. Refresh your browser to see changes

## Next Steps

Once your landing page is ready:

1. Deploy to your preferred web hosting service
2. Configure your domain name
3. Set up analytics to track visitor engagement
4. Update with real app store links when available 