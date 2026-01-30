# 🎯 QUICK START GUIDE

**Welcome! Here's how to deploy your Student Planner in 3 simple steps:**

---

## 📌 What You're Deploying

✅ **Frontend** (React App) → **Vercel** (Free)
✅ **Backend** (n8n Automation) → **Render** (Free)

---

## 🚀 3-Step Deployment

### STEP 1️⃣: Setup Accounts (5 minutes)

Create these **free** accounts:

1. **GitHub**: https://github.com/signup
   - Use email to sign up
   
2. **Vercel**: https://vercel.com/signup
   - Click "Continue with GitHub"
   
3. **Render**: https://render.com/register
   - Click "Sign up with GitHub"

---

### STEP 2️⃣: Upload to GitHub (5 minutes)

1. **Run the setup script:**
   ```powershell
   cd c:\Users\hp\Desktop\n8n-render
   .\deploy-setup.ps1
   ```

2. **Create GitHub repository:**
   - Go to: https://github.com/new
   - Repository name: `student-planner` (or any name)
   - Make it **Public**
   - Click "Create repository"

3. **Push your code:**
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/student-planner.git
   git branch -M main
   git push -u origin main
   ```
   _(Replace YOUR_USERNAME with your GitHub username)_

---

### STEP 3️⃣: Deploy (15 minutes)

#### A) Deploy Backend to Render

1. **Go to**: https://dashboard.render.com/
2. **Click**: "New +" → "Web Service"
3. **Connect** your GitHub repository
4. **Fill in**:
   - Name: `n8n-student-planner`
   - Root Directory: `student-planner-backend`
   - Environment: `Docker`
   - Plan: **Free**

5. **Add Environment Variables** (click "Advanced"):
   ```
   N8N_BASIC_AUTH_ACTIVE=true
   N8N_BASIC_AUTH_USER=admin
   N8N_BASIC_AUTH_PASSWORD=admin123
   N8N_PROTOCOL=https
   NODE_ENV=production
   ```

6. **Add Disk** (for data storage):
   - Name: `n8n-data`
   - Mount Path: `/home/node/.n8n`
   - Size: 1 GB

7. **Click**: "Create Web Service"
8. **Wait**: 5-10 minutes for deployment
9. **Copy your URL**: `https://YOUR-APP.onrender.com`

#### B) Update Frontend Config

1. **Open**: `automation/.env`
2. **Replace** with your Render URL:
   ```env
   VITE_N8N_WEBHOOK_URL=https://YOUR-APP.onrender.com
   VITE_ENV=production
   ```
3. **Save and push**:
   ```powershell
   git add .
   git commit -m "Update production URL"
   git push
   ```

#### C) Deploy Frontend to Vercel

1. **Go to**: https://vercel.com/new
2. **Import** your GitHub repository
3. **Fill in**:
   - Root Directory: `automation`
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Add Environment Variable**:
   - Name: `VITE_N8N_WEBHOOK_URL`
   - Value: `https://YOUR-APP.onrender.com` (your Render URL)

5. **Click**: "Deploy"
6. **Wait**: 2-3 minutes
7. **Your app is LIVE!** 🎉

---

## 🎉 YOU'RE DONE!

### Your Live URLs:
- 🌐 **Frontend**: `https://your-app.vercel.app`
- ⚙️ **Backend**: `https://your-app.onrender.com`

### Test Your App:
1. Open your Vercel URL
2. Fill out the task form
3. Submit!

---

## 📚 Need More Help?

- 📖 **Detailed Guide**: Open `DEPLOYMENT_GUIDE.md`
- ✅ **Checklist**: Open `DEPLOYMENT_CHECKLIST.md`
- 🐛 **Issues**: Check the troubleshooting section in the guide

---

## ⚠️ Important Notes

1. **First Load Slow**: Render free tier spins down after 15 mins of inactivity
   - First request takes 30-60 seconds to wake up
   - This is normal!

2. **n8n Login**:
   - URL: `https://your-app.onrender.com`
   - Username: `admin`
   - Password: `admin123`
   - ⚠️ **Change this password** in production!

3. **Free Tier Limits**:
   - ✅ Unlimited users can access your app
   - ✅ 750 hours/month on Render
   - ✅ 100 GB bandwidth on Vercel

---

## 🔥 Pro Tips

- 📱 **Share your app**: Send the Vercel URL to friends
- 🎨 **Custom domain**: Add in Vercel settings (optional)
- 📊 **Monitor usage**: Check Render & Vercel dashboards
- 🔄 **Auto-deploy**: Every git push updates your app automatically!

---

## 🆘 Quick Troubleshooting

**App not loading?**
- Wait 60 seconds (Render cold start)
- Check if service is "Live" in Render dashboard

**Form not submitting?**
- Check browser console (F12)
- Verify VITE_N8N_WEBHOOK_URL is correct
- Check Render logs

**Can't access n8n?**
- Wait 5-10 mins after first deployment
- Try different browser
- Check Render service status

---

**Questions?** Check the full guides or Render/Vercel documentation!

**Happy Deploying! 🚀**
