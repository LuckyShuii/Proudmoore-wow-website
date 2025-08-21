#!/usr/bin/env bash
set -e

echo "🔄 Reloading Proudmoore production stack..."

# 1. Stop current stack
docker compose -f docker-compose.prod.yml down
echo "✅ Stack stopped."

# 2. Pull latest changes from github
echo "[1/4] Pulling latest changes..."
git pull origin main

# 3. Build frontend (Vite) -> ./frontend/dist
echo "[2/4] Building frontend..."
rm -rf frontend/dist
DOCKER_BUILDKIT=1 docker build -f frontend/Dockerfile.prod -o ./frontend/dist ./frontend

echo "[3/4] Setting permissions..."
chmod -R a+rX frontend/dist
find frontend/dist -type d -exec chmod 755 {} \;
find frontend/dist -type f -exec chmod 644 {} \;

# 4. Build backend + restart stack
echo "[4/4] Building backend & restarting production stack..."
DOCKER_BUILDKIT=1 docker compose -f docker-compose.prod.yml up -d --build --force-recreate

echo "✅ Reload complete! Front is served by Nginx, backend rebuilt & running."
