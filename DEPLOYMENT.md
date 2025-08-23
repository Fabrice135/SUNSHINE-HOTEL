# Netlify Deployment Guide

## Prerequisites
- Your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- You have a Netlify account

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your Git provider and select your repository

2. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (or higher)

3. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Build your project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

## Configuration Files

The following files have been added to ensure proper deployment:

- **`netlify.toml`** - Main Netlify configuration
- **`_redirects`** - Handles SPA routing (redirects all routes to index.html)
- **`public/_redirects`** - Ensures redirects are copied to build output

## Important Notes

- **Build output directory:** `dist` (Vite default)
- **SPA routing:** All routes redirect to `index.html` for client-side routing
- **Node version:** Set to 18 for compatibility
- **Build command:** `npm run build`

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (use 18+)
   - Ensure all dependencies are installed
   - Check build logs in Netlify dashboard

2. **Routes not working:**
   - Verify `_redirects` file is in the `public` folder
   - Check that `netlify.toml` has correct redirect rules

3. **Assets not loading:**
   - Ensure build completes successfully
   - Check that `dist` folder contains all built files

### Environment Variables:
If you need environment variables, add them in the Netlify dashboard under:
Site settings → Environment variables

## Automatic Deployments

Once connected, Netlify will automatically:
- Deploy when you push to your main branch
- Show preview deployments for pull requests
- Provide a unique URL for your site
