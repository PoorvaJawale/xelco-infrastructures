# XelCo InfraTechnologies - Monorepo

This project has been restructured into a scalable monorepo architecture with independent frontend and backend packages.

## Structure
- `frontend/`: React Vite application
- `backend/`: Node.js Express application

## Environment Setup

Create `.env` files using the examples provided:
- `frontend/.env.example` -> `frontend/.env`
- `backend/.env.example` -> `backend/.env`

## Run Locally

### Frontend
1. cd `frontend`
2. `npm install`
3. `npm run dev`
(Build for production using `npm run build`)

### Backend
1. cd `backend`
2. `npm install`
3. `npm run dev`
(Start for production using `npm run build` and `npm run start`)
