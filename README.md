# 🚀 Student Planner - Deployment Ready

A full-stack student task planner with automated workflows powered by n8n.

## 📁 Project Structure

```
n8n-render/
├── automation/              # Frontend (React + Vite)
│   ├── src/
│   ├── public/
│   └── package.json
├── student-planner-backend/ # Backend (n8n)
│   ├── Dockerfile
│   ├── render.yaml
│   └── n8n/
└── DEPLOYMENT_GUIDE.md      # Complete deployment instructions
```

## 🎯 Features

- ✅ Task creation with priority levels
- ✅ Deadline management
- ✅ Email notifications via n8n
- ✅ Modern, responsive UI
- ✅ Real-time form validation

## 🚀 Quick Deploy

### Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)

### Deployment Steps

**See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.**

#### Quick Summary:

1. **Deploy Backend (n8n) to Render**
   - Push code to GitHub
   - Connect to Render
   - Deploy with Docker
   - Configure environment variables

2. **Deploy Frontend to Vercel**
   - Update `.env` with Render URL
   - Connect to Vercel
   - Deploy automatically

## 💻 Local Development

### Frontend
```bash
cd automation
npm install
npm run dev
```

### Backend
```bash
cd student-planner-backend/n8n
docker-compose up
```

Access n8n at: `http://localhost:5678`
- Username: `admin`
- Password: `admin123`

## 🌐 Live URLs (After Deployment)

- **Frontend**: `https://your-app.vercel.app`
- **Backend**: `https://your-n8n.onrender.com`

## 📝 Environment Variables

### Frontend (.env)
```env
VITE_N8N_WEBHOOK_URL=https://your-n8n-app.onrender.com
VITE_ENV=production
```

### Backend (Render)
```env
N8N_BASIC_AUTH_ACTIVE=true
N8N_BASIC_AUTH_USER=admin
N8N_BASIC_AUTH_PASSWORD=admin123
N8N_PROTOCOL=https
NODE_ENV=production
```

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- TailwindCSS
- Framer Motion
- Axios

**Backend:**
- n8n (Workflow Automation)
- Docker
- SQLite

**Hosting:**
- Vercel (Frontend)
- Render (Backend)

## 📦 Free Tier Limits

**Render:**
- Spins down after 15 min inactivity
- 750 hours/month
- 1 GB persistent storage

**Vercel:**
- 100 GB bandwidth/month
- Unlimited deployments

## 🔒 Security

- Basic authentication on n8n
- Environment variable management
- CORS configuration
- HTTPS on production

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

## 📄 License

MIT

## 📞 Support

For deployment help, check [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

---

**Made with ❤️ for students**
