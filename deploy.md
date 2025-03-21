# Deploying Paisa Track Landing Page to Netlify

This guide walks you through the process of deploying the Paisa Track landing page to Netlify.

## Prerequisites

- A GitHub account
- A Netlify account (can be created for free at [netlify.com](https://www.netlify.com/))

## Option 1: Deploy via Netlify UI (easiest)

1. **Create a ZIP file of your site**
   - Select all files in the `paisa_track_landing` directory
   - Create a ZIP file (right-click → Send to → Compressed (zipped) folder)

2. **Deploy to Netlify**
   - Go to [netlify.com](https://www.netlify.com/) and sign in
   - Go to the "Sites" section
   - Drag and drop your ZIP file onto the Netlify dashboard where it says "Drag and drop your site folder here"
   - Wait for the deployment to complete
   - Your site will be live at a Netlify subdomain (e.g., `random-name.netlify.app`)

3. **Configure custom domain (optional)**
   - In your site settings on Netlify, go to "Domain management"
   - Follow the instructions to add and configure your custom domain

## Option 2: Deploy via GitHub

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com/) and create a new repository
   - Name it whatever you like (e.g., `paisa-track-landing`)

2. **Push your code to GitHub**
   ```bash
   cd paisa_track_landing
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/paisa-track-landing.git
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com/) and sign in
   - Click "New site from Git"
   - Select GitHub as your Git provider
   - Authorize Netlify to access your GitHub account
   - Select your repository
   - Configure build settings (leave blank if using our included netlify.toml)
   - Click "Deploy site"

4. **Configure custom domain (optional)**
   - In your site settings on Netlify, go to "Domain management"
   - Follow the instructions to add and configure your custom domain

## Updating Your Site

### If deployed via UI (Option 1)
- Make changes to your local files
- Create a new ZIP file
- Go to your site on Netlify
- Go to "Deploys" and drag the new ZIP file to update

### If deployed via GitHub (Option 2)
- Make changes to your local files
- Commit and push to GitHub
- Netlify will automatically deploy the updated site

## Additional Features

### SEO Optimization
The Paisa Track landing page includes several SEO optimizations:

1. **Sitemap.xml**: 
   - A complete sitemap is included at `/sitemap.xml`
   - Update the domain in the sitemap from "your-domain.com" to your actual domain after deployment
   - The sitemap helps search engines discover and index your pages

2. **Robots.txt**:
   - Controls which pages search engines can crawl
   - Prevents indexing of form submission success pages
   - Points to the sitemap for better discovery

3. **Meta Tags**:
   - All pages include proper meta descriptions and titles
   - Images have alt attributes for better accessibility and SEO

4. **Structured Navigation**:
   - Clean URL structure
   - Proper heading hierarchy (h1, h2, h3)
   - Internal linking between pages

### Netlify Configuration
The site includes a comprehensive `netlify.toml` configuration file with:

1. **Performance Optimizations**:
   - Asset compression and minification
   - Cache control headers
   - Image optimization

2. **Security Headers**:
   - Content Security Policy
   - X-Frame-Options
   - XSS Protection
   - And more

3. **Redirects**:
   - Custom 404 page handling
   - Form submission redirects

### Enable Forms
The contact form on the Contact page is already configured to work with Netlify's form handling feature. Here's how the process works:

1. **Form Detection**:
   - Netlify automatically detects forms in your deployed HTML files that have the `data-netlify="true"` attribute
   - Our contact form has been pre-configured with this attribute

2. **View and Manage Submissions**:
   - After your site is deployed, go to your site settings on Netlify
   - Go to "Forms" in the left sidebar
   - You'll see a list of active forms (in our case, the "contact" form)
   - Click on it to view submissions

3. **Form Notifications**:
   - To receive email notifications when someone submits the form:
     - Go to "Forms" → "Form notifications" 
     - Add a notification method (email, Slack, or webhook)

4. **Spam Filtering**:
   - Netlify automatically includes spam filtering for form submissions
   - The honeypot field (`netlify-honeypot="bot-field"`) has been added to prevent spam bots

5. **Customization**:
   - You can modify the form's success message by adding a custom success page
   - In the form settings, set "Success path" to a custom page URL (e.g., `/thank-you.html`)

6. **Form Limitations on Free Plan**:
   - Free Netlify plan includes 100 form submissions per month
   - Check Netlify's pricing page for higher limits if needed

### Environment Variables
If you need to add API keys or other environment variables:
1. Go to your site settings on Netlify
2. Go to "Build & deploy" → "Environment"
3. Add your environment variables

## Troubleshooting

- **404 errors**: Make sure your netlify.toml file is properly configured
- **CSS/JS not loading**: Check that all paths in your HTML are correct
- **Form submission not working**: Ensure you've enabled Netlify forms

For more help, visit [Netlify Support](https://www.netlify.com/support/). 