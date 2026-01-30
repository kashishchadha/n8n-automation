# Task & Deadline Manager

A modern, interactive task management frontend that integrates with n8n automation workflows. Built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Interactive UI**: Physics-based animations with Matter.js and proximity-based effects
- **Modern Design**: Minimal black theme with vibrant gradient accents
- **n8n Integration**: Seamless webhook connectivity for automated task management
- **Smart Validation**: Client-side form validation with helpful error messages
- **Responsive**: Mobile-first design that works on all devices
- **Fast**: Built with Vite for lightning-fast development and optimized production builds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- n8n instance running (for backend integration)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd automation
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
cp .env.example .env
```

4. Configure your n8n webhook URL in `.env`:
```env
VITE_N8N_WEBHOOK_URL=http://localhost:5678
```

5. Start the development server:
```bash
npm run dev
```

Visit `http://localhost:5173` to see the app in action!

## 📦 Build for Production

Build the optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The production files will be in the `dist/` directory, ready to deploy.

## 🎨 Tech Stack

- **React 19** - Modern UI library with latest features
- **Vite 7** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Matter.js** - 2D physics engine for interactive animations
- **Axios** - HTTP client for API requests

## 🔧 Configuration

### n8n Webhook Setup

1. Create a new workflow in n8n
2. Add a Webhook trigger node
3. Set the path to `/webhook/task/create`
4. Configure the webhook to accept POST requests with JSON payload:
   ```json
   {
     "title": "string",
     "deadline": "ISO datetime string",
     "user_email": "string",
     "priority": "LOW|MEDIUM|HIGH",
     "notes": "string (optional)"
   }
   ```

### Environment Variables

- `VITE_N8N_WEBHOOK_URL` - Base URL of your n8n instance (default: http://localhost:5678)
- `VITE_ENV` - Environment mode (development/production)

## 📁 Project Structure

```
automation/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── FallingText.jsx        # Matter.js physics animation
│   │   ├── VariableProximity.jsx  # Mouse proximity effects
│   │   ├── Navbar.jsx             # Navigation header
│   │   ├── TaskForm.jsx           # Task creation form
│   │   └── SuccessModal.jsx       # Success confirmation
│   ├── pages/           # Page components
│   │   └── Home.jsx               # Landing page
│   ├── services/        # API and external services
│   │   └── api.js                 # n8n webhook integration
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind config
├── .env.example         # Environment variables template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── tailwind.config.js   # Tailwind CSS configuration (if needed)
```

## 🎯 Features Breakdown

### Interactive Components

- **FallingText**: Physics-based word animation with drag interaction
- **VariableProximity**: Dynamic font weight changes based on mouse position
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Page Transitions**: Animated view changes with Framer Motion

### Form Features

- Real-time validation
- Deadline warning for tasks due within 3 days
- Priority level selection with visual feedback
- Email validation
- Character count and requirements
- Loading states and error handling

## 🚢 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Environment Variables for Production

Don't forget to set your environment variables in your hosting platform:
- `VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality

This project uses:
- ESLint for code linting
- Prettier-friendly formatting
- React best practices

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React + Vite
