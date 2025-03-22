# Customizing Your Paisa Track Logo and App Icons

This guide will help you replace the default Paisa Track logo and app icons with your own custom ones.

## Option 1: Use the Built-in Logo Generator

We've included a simple logo generator tool that can create a basic logo for Paisa Track:

1. Open `paisa_track_landing/images/logo-generator.html` in your browser
2. The generator will display a canvas with a logo featuring a gradient background and ₹ symbol
3. Click the "Download Logo" button to save the generated logo
4. Save the file as `paisa-track-logo.png` in the `paisa_track_landing/images` directory
5. Refresh your website to see the changes

## Option 2: Replace with Your Custom Logo

If you have your own logo design:

1. Prepare your logo image with the following specifications:
   - Recommended size: 160×160 pixels (1:1 ratio)
   - File format: PNG with transparency
   - File name: `paisa-track-logo.png`

2. Replace the existing logo file:
   - Copy your logo file to `paisa_track_landing/images/paisa-track-logo.png`, overwriting the existing file

3. For best results, make sure your logo:
   - Has a transparent background
   - Is clearly visible at small sizes
   - Matches your brand colors

## Adding App Screenshots/Mockups

The placeholder instructions in `paisa_track_landing/images/placeholders/README.txt` indicate you'll need:

1. **App Mockups for Various Sections:**
   - app-mockup.png - Main app preview (600×800px)
   - setup-screenshot.png - Setup process (300×600px)
   - tracking-screenshot.png - Expense tracking (300×600px)
   - reports-screenshot.png - Reports and analytics (300×600px)
   - device-mockups.png - App on multiple devices (800×500px)

2. **Store Badges (if applicable):**
   - google-play-badge.png - Google Play Store badge (200×60px)
   - app-store-badge.png - Apple App Store badge (200×60px)

## Creating a Favicon

To add a favicon (the small icon shown in browser tabs):

1. Create a 32×32 pixel icon from your logo
2. Save it as `favicon.ico` in the `paisa_track_landing` root directory
3. Add the following line to the `<head>` section of all HTML files:
   ```html
   <link rel="icon" href="favicon.ico" type="image/x-icon">
   ```

## Updating App Icon in the Website

Currently, the website uses placeholder images for app screenshots. To replace these:

1. In the HTML files, search for instances of `https://placehold.co` 
2. Replace these URLs with paths to your own images in the `images` directory

Example replacement:
```html
<!-- From this -->
<img src="https://placehold.co/600x800/6366f1/ffffff?text=Paisa+Track+App" alt="Paisa Track App">

<!-- To this -->
<img src="images/app-mockup.png" alt="Paisa Track App">
```

## Testing Your Changes

After replacing images:

1. Open the landing page locally to make sure everything looks correct
2. Check the page on different screen sizes to ensure responsiveness
3. Commit and push your changes to GitHub
4. Netlify will automatically deploy the updated site

## More Customization Options

- **CSS Colors:** Edit the CSS variables in `paisa_track_landing/css/styles.css` to match your logo colors
- **Fonts:** Update the Google Fonts link in the HTML files if you want to use different fonts
- **Theme:** Adjust the primary and secondary colors in the CSS to match your branding 