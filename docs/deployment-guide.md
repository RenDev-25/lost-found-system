# Deployment Guide

## Frontend → Vercel
1. Push `frontend/` to GitHub
2. Import repo at vercel.com
3. Set Framework: Vite, Output: dist
4. Add env var: `VITE_API_URL=https://your-backend-url.com/api`
5. Deploy

## Backend → Railway / Render
1. Push `backend/` to GitHub
2. Connect repo to Railway or Render
3. Set environment variables from `.env`
4. Run: `php artisan migrate --seed`
