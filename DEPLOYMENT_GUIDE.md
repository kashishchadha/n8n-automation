# 🚀 Deployment Guide - Student Planner

## Overview
This guide will help you deploy:
- **Frontend** (React/Vite) → Vercel
- **Backend** (n8n) → Render

---

## 📋 Prerequisites

1. **GitHub Account** - [Sign up](https://github.com)
2. **Vercel Account** - [Sign up](https://vercel.com)
3. **Render Account** - [Sign up](https://render.com)

---

## 🔧 Part 1: Deploy Backend (n8n) to Render

### Step 1: Push Code to GitHub

```bash
# Navigate to your project root
cd c:\Users\hp\Desktop\n8n-render

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit - Ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy n8n on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `n8n-student-planner` (or your choice)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Root Directory**: `student-planner-backend`
   - **Runtime**: `Docker`
   - **Instance Type**: `Free`
   
5. **Environment Variables** (Add these):
   ```
   N8N_BASIC_AUTH_ACTIVE=true
   N8N_BASIC_AUTH_USER=admin
   N8N_BASIC_AUTH_PASSWORD=admin123
   N8N_PROTOCOL=https
   NODE_ENV=production
   ```

6. **Add Persistent Disk**:
   - Click "Advanced" → "Add Disk"
   - **Name**: `n8n-data`
   - **Mount Path**: `/home/node/.n8n`
   - **Size**: 1 GB

7. Click **"Create Web Service"**

8. **Wait for deployment** (5-10 minutes)

9. **Copy your n8n URL**: `https://your-app-name.onrender.com`

### Step 3: Configure n8n Webhooks

1. Open your n8n URL: `https://your-app-name.onrender.com`
2. Login with:
   - Username: `admin`
   - Password: `admin123`
3. Set up your workflows and webhooks
4. Note your webhook URL: `https://your-app-name.onrender.com/webhook-test/task/create`

---

## 🎨 Part 2: Deploy Frontend to Vercel

### Step 1: Update Environment Variables

1. Navigate to frontend folder:
   ```bash
   cd automation
   ```

2. Update `.env` file with your Render n8n URL:
   ```env
   VITE_N8N_WEBHOOK_URL=https://your-n8n-app.onrender.com
   VITE_ENV=production
   ```

3. Commit the changes:
   ```bash
   git add .
   git commit -m "Update production API URL"
   git push
   ```

### Step 2: Deploy to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. **Import** your GitHub repository
4. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `automation`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   
5. **Environment Variables** (Add these):
   ```
   VITE_N8N_WEBHOOK_URL=https://your-n8n-app.onrender.com
   VITE_ENV=production
   ```

6. Click **"Deploy"**

7. **Wait for deployment** (2-3 minutes)

8. **Your app is live!** 🎉
   - URL: `https://your-app-name.vercel.app`

---

## 🔒 Security Configuration

### Update CORS Settings in n8n

1. In your n8n instance, go to **Settings**
2. Add your Vercel frontend URL to allowed origins
3. Update webhook security settings if needed

---

## ✅ Testing Your Deployment

1. **Open your Vercel app**: `https://your-app-name.vercel.app`
2. **Fill out the task form**
3. **Submit** and check if it works
4. **Verify in n8n**: Check webhook execution logs

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: Render app keeps restarting
- **Solution**: Check logs in Render dashboard
- Ensure environment variables are set correctly

**Problem**: Can't access n8n interface
- **Solution**: Wait 5-10 mins for first deployment
- Check if service is "Live" in Render

### Frontend Issues

**Problem**: API calls failing (CORS errors)
- **Solution**: Update n8n CORS settings
- Ensure `VITE_N8N_WEBHOOK_URL` is correct

**Problem**: Environment variables not loading
- **Solution**: Rebuild on Vercel after adding env vars
- Check variable names start with `VITE_`

---

## 📊 Free Tier Limitations

### Render Free Tier
- **Spins down after 15 minutes of inactivity**
- **Takes 30-60 seconds to wake up**
- 750 hours/month free
- 1 GB persistent disk

### Vercel Free Tier
- 100 GB bandwidth/month
- Unlimited deployments
- Serverless function execution

---

## 🔄 Updating Your App

### Frontend Updates
```bash
cd automation
# Make your changes
git add .
git commit -m "Update features"
git push
# Vercel auto-deploys!
```

### Backend Updates
```bash
cd student-planner-backend
# Make your changes
git add .
git commit -m "Update n8n config"
git push
# Render auto-deploys!
```

---

## 🎯 Alternative Free Hosting Options

### Frontend Alternatives
- **Netlify** - Similar to Vercel
- **GitHub Pages** - Static hosting
- **Cloudflare Pages** - Fast CDN

### Backend Alternatives
- **Railway** - Free tier available
- **Fly.io** - Free tier with limits
- **Koyeb** - Docker hosting

---

## 📞 Need Help?

- Check Render logs: Dashboard → Your Service → Logs
- Check Vercel logs: Dashboard → Your Project → Deployments
- Test webhook: Use Postman or curl

---

## 🎉 You're Done!

Your app is now live and accessible worldwide! 🌍

**Frontend**: `https://your-app-name.vercel.app`
**Backend**: `https://your-n8n-app.onrender.com`

**Next Steps**:
1. Share your app link!
2. Monitor usage in dashboards
3. Set up custom domain (optional)
4. Implement additional features

---

**Note**: Remember that free tier services may have cold starts. For production apps with high traffic, consider upgrading to paid plans.
