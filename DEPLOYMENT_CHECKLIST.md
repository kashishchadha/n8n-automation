# 📋 Deployment Checklist

Use this checklist to ensure smooth deployment.

## ✅ Pre-Deployment

### Accounts Setup
- [ ] GitHub account created
- [ ] Vercel account created (sign up with GitHub)
- [ ] Render account created (sign up with GitHub)

### Code Preparation
- [ ] All files saved
- [ ] `.gitignore` file present
- [ ] Environment variables configured

---

## 🔧 Backend Deployment (Render)

### Step 1: Push to GitHub
- [ ] Git initialized: `git init`
- [ ] Files added: `git add .`
- [ ] Committed: `git commit -m "Ready for deployment"`
- [ ] GitHub repository created
- [ ] Remote added: `git remote add origin <your-repo-url>`
- [ ] Pushed: `git push -u origin main`

### Step 2: Deploy on Render
- [ ] Logged into Render Dashboard
- [ ] Clicked "New +" → "Web Service"
- [ ] Connected GitHub repository
- [ ] Selected correct repository
- [ ] Configuration set:
  - [ ] Name: `n8n-student-planner`
  - [ ] Root Directory: `student-planner-backend`
  - [ ] Runtime: Docker
  - [ ] Instance Type: Free
- [ ] Environment variables added:
  - [ ] `N8N_BASIC_AUTH_ACTIVE=true`
  - [ ] `N8N_BASIC_AUTH_USER=admin`
  - [ ] `N8N_BASIC_AUTH_PASSWORD=admin123`
  - [ ] `N8N_PROTOCOL=https`
  - [ ] `NODE_ENV=production`
- [ ] Persistent disk added:
  - [ ] Name: `n8n-data`
  - [ ] Mount Path: `/home/node/.n8n`
  - [ ] Size: 1 GB
- [ ] Clicked "Create Web Service"
- [ ] Deployment successful (waited 5-10 mins)
- [ ] n8n URL copied: `https://_________.onrender.com`

### Step 3: Configure n8n
- [ ] Opened n8n URL
- [ ] Logged in (admin/admin123)
- [ ] Workflows imported/created
- [ ] Webhook tested
- [ ] Webhook URL noted: `https://_________.onrender.com/webhook-test/task/create`

---

## 🎨 Frontend Deployment (Vercel)

### Step 1: Update Environment
- [ ] Updated `automation/.env`:
  ```
  VITE_N8N_WEBHOOK_URL=https://your-n8n.onrender.com
  VITE_ENV=production
  ```
- [ ] Committed: `git add . && git commit -m "Add production URL"`
- [ ] Pushed: `git push`

### Step 2: Deploy on Vercel
- [ ] Logged into Vercel Dashboard
- [ ] Clicked "Add New..." → "Project"
- [ ] Imported GitHub repository
- [ ] Configuration set:
  - [ ] Framework: Vite
  - [ ] Root Directory: `automation`
  - [ ] Build Command: `npm run build`
  - [ ] Output Directory: `dist`
- [ ] Environment variables added:
  - [ ] `VITE_N8N_WEBHOOK_URL` = (your Render URL)
  - [ ] `VITE_ENV=production`
- [ ] Clicked "Deploy"
- [ ] Deployment successful (waited 2-3 mins)
- [ ] Frontend URL copied: `https://_________.vercel.app`

---

## 🧪 Testing

### Backend Testing
- [ ] n8n interface accessible
- [ ] Can login to n8n
- [ ] Webhooks responding
- [ ] No errors in Render logs

### Frontend Testing
- [ ] Website loads correctly
- [ ] Form displays properly
- [ ] Can submit task
- [ ] Receives success message
- [ ] No console errors

### Integration Testing
- [ ] Frontend can reach backend
- [ ] No CORS errors
- [ ] Task creation works end-to-end
- [ ] Email notifications triggered (if configured)

---

## 🎯 Post-Deployment

### Documentation
- [ ] URLs documented:
  - Frontend: `https://_________.vercel.app`
  - Backend: `https://_________.onrender.com`
- [ ] Credentials saved securely
- [ ] Webhook URLs noted

### Optimization
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)
- [ ] Error monitoring setup (optional)

### Monitoring
- [ ] Render dashboard bookmarked
- [ ] Vercel dashboard bookmarked
- [ ] First deployment email received

---

## ⚠️ Important Notes

**Free Tier Limitations:**
- ⏰ Render spins down after 15 min → First request takes 30-60s
- 📊 Monitor usage in dashboards
- 💾 1 GB storage limit on Render

**Security:**
- 🔒 Change default n8n password in production
- 🔑 Keep environment variables secret
- 🌐 Configure CORS properly

---

## 🐛 Troubleshooting

If something doesn't work:

1. **Check logs:**
   - Render: Dashboard → Service → Logs
   - Vercel: Dashboard → Project → Deployments → Logs

2. **Verify environment variables:**
   - Both platforms: Settings → Environment Variables

3. **Test individually:**
   - Backend: Visit n8n URL directly
   - Frontend: Check browser console

4. **Common fixes:**
   - Redeploy if env vars changed
   - Check URL typos
   - Wait for cold start (Render)
   - Clear browser cache

---

## ✨ Success!

When all boxes are checked, your app is live! 🎉

**Share your URLs:**
- 🌐 Frontend: _________________
- ⚙️ Backend: _________________

---

**Next Steps:**
1. Share with friends/classmates
2. Gather feedback
3. Add new features
4. Consider custom domain
