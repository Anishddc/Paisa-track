# Deploying Paisa Track Landing Page via GitHub

This step-by-step guide will walk you through deploying your Paisa Track landing page to Netlify using GitHub.

## Prerequisites
- Git installed on your computer ([Download Git](https://git-scm.com/downloads))
- GitHub account ([Sign up for GitHub](https://github.com/join))
- Netlify account ([Sign up for Netlify](https://app.netlify.com/signup))

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in to your account
2. Click the "+" icon in the top-right corner and select "New repository"
3. Enter a repository name (e.g., `paisa-track-landing`)
4. Leave it as a public repository (or select private if you prefer)
5. Click "Create repository"

## Step 2: Prepare Your Local Code

1. Open your command line terminal
2. Navigate to your Paisa Track landing page directory:
   ```bash
   cd path/to/paisa_track_landing
   ```

## Step 3: Initialize Git and Push to GitHub

Run the following commands in your terminal:

```bash
# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit of Paisa Track landing page"

# Add GitHub as the remote repository (replace with your GitHub username)
git remote add origin https://github.com/your-username/paisa-track-landing.git

# Push to GitHub (you may need to authenticate)
git push -u origin main
```

Note: If your default branch is called "master" instead of "main", use:
```bash
git push -u origin master
```

## Step 4: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com/) and sign in
2. Click "New site from Git"
3. Select "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub repositories if prompted
5. Select the repository you just created (`paisa-track-landing`)
6. Configure your build settings:
   - **Branch to deploy**: `main` (or `master`)
   - **Build command**: Leave empty (as specified in netlify.toml)
   - **Publish directory**: Leave empty (as specified in netlify.toml)
7. Click "Deploy site"

## Step 5: Configure Your Site

After the initial deployment completes:

1. **Add a Custom Domain (Optional)**
   - Go to "Domain settings" in your site dashboard
   - Click "Add custom domain"
   - Follow the instructions to set up your domain

2. **Enable Forms**
   - Your contact form is already configured with `data-netlify="true"`
   - Netlify will automatically detect and enable form handling
   - To view submissions, go to "Forms" in your site dashboard

3. **Verify Redirects**
   - Check that the form submission redirects to the thank-you page
   - Test the custom 404 page

4. **Update Your Sitemap**
   - Once your domain is set up, edit `sitemap.xml` to replace "your-domain.com" with your actual domain
   - Commit and push this change to GitHub:
     ```bash
     git add sitemap.xml
     git commit -m "Update sitemap with actual domain"
     git push
     ```

## Step 6: Making Future Updates

Whenever you want to make changes to your site:

1. Make your changes to the local files
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
3. Push to GitHub:
   ```bash
   git push
   ```
4. Netlify will automatically detect the changes and deploy the updates

## Troubleshooting

- **Build Fails**: Check your Netlify build log for errors
- **Forms Not Working**: Verify that your form has the proper Netlify attributes
- **404 Errors**: Ensure your netlify.toml redirects are correctly configured
- **Deployment Issues**: Check that all file paths are correct and use relative paths

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Guides](https://guides.github.com/)
- [Git Documentation](https://git-scm.com/doc)

For more detailed information on specific features, refer to the main deployment guide in `deploy.md`. 