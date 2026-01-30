# Quick Start - Deployment Script
# Run this in PowerShell

Write-Host "🚀 Student Planner - Deployment Setup" -ForegroundColor Cyan
Write-Host "====================================`n" -ForegroundColor Cyan

# Check if git is installed
Write-Host "Checking prerequisites..." -ForegroundColor Yellow
if (!(Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Git is installed`n" -ForegroundColor Green

# Initialize git repository
Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
if (!(Test-Path .git)) {
    git init
    Write-Host "✅ Git initialized`n" -ForegroundColor Green
} else {
    Write-Host "✅ Git already initialized`n" -ForegroundColor Green
}

# Add all files
Write-Host "📁 Adding files to git..." -ForegroundColor Yellow
git add .
Write-Host "✅ Files added`n" -ForegroundColor Green

# Commit
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit - Ready for deployment"
Write-Host "✅ Commit created`n" -ForegroundColor Green

# Instructions
Write-Host "`n🎯 Next Steps:" -ForegroundColor Cyan
Write-Host "=============" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor White
Write-Host "   👉 https://github.com/new" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Then run these commands (replace with your details):" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git" -ForegroundColor Yellow
Write-Host "   git branch -M main" -ForegroundColor Yellow
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Follow the deployment guide:" -ForegroundColor White
Write-Host "   👉 Open DEPLOYMENT_GUIDE.md" -ForegroundColor Yellow
Write-Host "   👉 Open DEPLOYMENT_CHECKLIST.md" -ForegroundColor Yellow
Write-Host ""
Write-Host "🌐 Hosting Services:" -ForegroundColor Cyan
Write-Host "   • Backend (n8n): https://render.com" -ForegroundColor Yellow
Write-Host "   • Frontend: https://vercel.com" -ForegroundColor Yellow
Write-Host ""
Write-Host "✨ You're all set! Good luck with deployment! 🚀" -ForegroundColor Green
