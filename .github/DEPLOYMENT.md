# Vercel Deployment Setup

This repo auto-deploys to Vercel when you push to the `main` branch.

## Required: Add GitHub Secrets

Add these secrets in your GitHub repo: **Settings → Secrets and variables → Actions → New repository secret**

| Secret | How to get it |
|--------|---------------|
| `VERCEL_TOKEN` | [vercel.com/account/tokens](https://vercel.com/account/tokens) → Create token |
| `VERCEL_ORG_ID` | Vercel project → Settings → General → scroll to "Project ID" (or from `.vercel/project.json` after linking) |
| `VERCEL_PROJECT_ID` | Same as above – it's the Project ID from your Vercel project |

### Getting Org ID and Project ID

1. Go to your Vercel project dashboard
2. **Settings** → **General**
3. Scroll to **Project ID** – that's `VERCEL_PROJECT_ID`
4. For **Org ID**: Run `vercel link` locally in `price-spy-nz`, then check `.vercel/project.json` for `orgId`

Or use the Vercel API:
```bash
# Install Vercel CLI: npm i -g vercel
cd price-spy-nz && vercel link
# Then read .vercel/project.json for orgId and projectId
```

## First-time setup

1. Create a Vercel project from the `evoveotech/Scrapper` repo (Root Directory: `price-spy-nz`)
2. Add the three secrets above to GitHub
3. Push to `main` – deployment runs automatically
