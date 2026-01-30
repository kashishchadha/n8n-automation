# 🏗️ Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         YOUR PROJECT                             │
│                                                                  │
│  ┌──────────────────┐              ┌────────────────────┐      │
│  │    FRONTEND      │              │     BACKEND        │      │
│  │   (React/Vite)   │              │      (n8n)         │      │
│  │                  │              │                    │      │
│  │  - Task Form     │              │  - Webhooks        │      │
│  │  - UI Components │              │  - Automation      │      │
│  │  - API Calls     │──────────────>  - Email Send     │      │
│  │                  │              │  - Database        │      │
│  └──────────────────┘              └────────────────────┘      │
│          │                                   │                  │
└──────────│───────────────────────────────────│──────────────────┘
           │                                   │
           │ DEPLOY                            │ DEPLOY
           ▼                                   ▼
  ┌─────────────────┐                ┌──────────────────┐
  │    VERCEL       │                │     RENDER       │
  │   (Frontend)    │                │    (Backend)     │
  │                 │                │                  │
  │ ✅ Free Tier    │                │ ✅ Free Tier     │
  │ ✅ Auto SSL     │                │ ✅ Auto SSL      │
  │ ✅ Global CDN   │                │ ✅ Docker        │
  │ ✅ Auto Deploy  │                │ ✅ Persistent    │
  │                 │                │                  │
  └─────────────────┘                └──────────────────┘
           │                                   │
           │                                   │
           ▼                                   ▼
  https://your-app                   https://your-n8n
    .vercel.app                         .onrender.com
           │                                   │
           │              HTTPS                │
           └───────────────────────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │                  │
              │      USERS       │
              │   (Worldwide)    │
              │                  │
              └──────────────────┘
```

---

## 🔄 Data Flow

```
1. USER ACTION
   │
   ├─> Opens: https://your-app.vercel.app
   │
   ├─> Fills task form
   │
   └─> Clicks "Submit"
       │
       ▼

2. FRONTEND (Vercel)
   │
   ├─> Validates form data
   │
   ├─> Creates API request
   │
   └─> Sends to: https://your-n8n.onrender.com/webhook-test/task/create
       │
       ▼

3. BACKEND (Render - n8n)
   │
   ├─> Receives webhook
   │
   ├─> Processes task data
   │
   ├─> Saves to database
   │
   ├─> Triggers email workflow
   │
   └─> Returns success response
       │
       ▼

4. FRONTEND RESPONSE
   │
   ├─> Receives success
   │
   ├─> Shows SuccessModal
   │
   └─> User sees confirmation ✅
```

---

## 🌐 Deployment Flow

```
LOCAL DEVELOPMENT
    │
    ├─> Write Code
    │   ├─> Frontend: automation/
    │   └─> Backend: student-planner-backend/
    │
    ▼
GITHUB REPOSITORY
    │
    ├─> git push
    │
    ├──────────────┬──────────────┐
    │              │              │
    ▼              ▼              ▼
VERCEL         RENDER        AUTOMATIC
(Frontend)    (Backend)      DEPLOYMENT
    │              │
    ├─> Build      ├─> Docker Build
    ├─> Deploy     ├─> Deploy
    ├─> CDN        └─> Container Run
    │
    ▼
PRODUCTION (LIVE!)
```

---

## 📦 File Organization

```
n8n-render/
│
├── 📄 START_HERE.md              ← Start with this!
├── 📄 DEPLOYMENT_GUIDE.md        ← Detailed instructions
├── 📄 DEPLOYMENT_CHECKLIST.md    ← Track your progress
├── 📄 README.md                  ← Project overview
├── 🚀 deploy-setup.ps1           ← Setup script
├── 📄 .gitignore                 ← Git ignore rules
│
├── automation/                    ← FRONTEND
│   ├── 📄 package.json
│   ├── 📄 vercel.json            ← Vercel config
│   ├── 📄 .env                   ← Environment vars
│   ├── 📄 .env.example
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SuccessModal.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   └── services/
│   │       └── api.js           ← API calls to n8n
│   └── public/
│
└── student-planner-backend/      ← BACKEND
    ├── 📄 Dockerfile             ← Docker config
    ├── 📄 render.yaml            ← Render config
    └── n8n/
        ├── docker-compose.yml
        └── n8n_data/             ← Persistent data
```

---

## 🔑 Environment Variables Flow

```
DEVELOPMENT (.env file)
    │
    └─> VITE_N8N_WEBHOOK_URL=http://localhost:5678
        │
        ▼
    Code reads: import.meta.env.VITE_N8N_WEBHOOK_URL
        │
        ▼
    Used in: src/services/api.js
        │
        ▼
    Makes requests to: localhost:5678

────────────────────────────────────────────

PRODUCTION (Vercel Settings)
    │
    └─> VITE_N8N_WEBHOOK_URL=https://your-app.onrender.com
        │
        ▼
    Vercel injects during build
        │
        ▼
    Code reads: import.meta.env.VITE_N8N_WEBHOOK_URL
        │
        ▼
    Used in: src/services/api.js
        │
        ▼
    Makes requests to: your-app.onrender.com
```

---

## 🔒 Security Layer

```
USER REQUEST
    │
    ├─> HTTPS Only ✅
    │
    ▼
VERCEL (Frontend)
    │
    ├─> SSL Certificate ✅
    ├─> CORS Headers ✅
    │
    ▼
RENDER (Backend - n8n)
    │
    ├─> SSL Certificate ✅
    ├─> Basic Auth ✅
    ├─> Environment Vars ✅
    │
    ▼
DATABASE
    │
    └─> Encrypted Storage ✅
```

---

## 💰 Cost Breakdown

```
VERCEL (Frontend)
├─> FREE TIER
│   ├─ 100 GB Bandwidth/month
│   ├─ Unlimited Deployments
│   ├─ Auto SSL
│   ├─ Global CDN
│   └─ $0/month

RENDER (Backend)
├─> FREE TIER
│   ├─ 750 hours/month
│   ├─ 512 MB RAM
│   ├─ 1 GB Disk
│   ├─ Auto SSL
│   ├─ Spins down after 15 min
│   └─ $0/month

TOTAL COST: $0/month ✅
```

---

## ⚡ Performance Characteristics

```
VERCEL (Frontend)
├─> Response Time: ~50ms (Global CDN)
├─> First Load: Instant
├─> Subsequent: Instant
└─> Uptime: 99.99%

RENDER (Backend)
├─> Response Time: ~100-200ms (Active)
├─> First Load: 30-60s (Cold start)
├─> Subsequent: 100-200ms (Warm)
└─> Auto-sleep: After 15 min inactivity

USER EXPERIENCE
├─> First visit: 30-60s (Backend wakeup)
├─> Active usage: Fast (~200ms)
└─> After 15 min: Cold start again
```

---

## 🔄 Update & Deployment Cycle

```
1. CODE CHANGE
   │
   └─> Edit files locally
       │
       ▼

2. COMMIT & PUSH
   │
   └─> git add .
   └─> git commit -m "Update feature"
   └─> git push
       │
       ▼

3. AUTOMATIC DEPLOYMENT
   │
   ├──────────┬──────────┐
   │          │          │
   Vercel     Render     Both
   Detects    Detects    Deploy
   Change     Change     Automatically
   │          │
   ▼          ▼

4. LIVE IN ~2-5 MINUTES
   │
   └─> No manual intervention needed!
```

---

## 🎯 Key Benefits

```
✅ FREE forever (on free tiers)
✅ AUTO-DEPLOY on git push
✅ SSL CERTIFICATES automatic
✅ GLOBAL CDN for frontend
✅ PERSISTENT storage for n8n
✅ EASY to setup (3 steps)
✅ SCALABLE when needed
```

---

**Now you understand the full architecture! 🚀**
**Ready to deploy? Follow START_HERE.md**
