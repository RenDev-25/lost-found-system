# Setup Guide

## 1. Frontend
```bash
cd frontend
npm install
npm run dev
```

## 2. Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## 3. Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000/api
```

### Backend (.env)
```
DB_DATABASE=lost_found_db
DB_USERNAME=root
DB_PASSWORD=
SANCTUM_STATEFUL_DOMAINS=localhost:5173
```
