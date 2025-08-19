#!/usr/bin/env bash
set -e

echo "🔄 Reloading Proudmoore production stack..."

# 1. Stop current stack
docker compose -f docker-compose.prod.yml down
echo "✅ Stack stopped."

# 2. Build frontend (Vite) -> ./frontend/dist
echo "[1/3] Building frontend..."
rm -rf frontend/dist
DOCKER_BUILDKIT=1 docker build -f frontend/Dockerfile.prod -o ./frontend/dist ./frontend

echo "[2/3] Setting permissions..."
chmod -R a+rX frontend/dist
find frontend/dist -type d -exec chmod 755 {} \;
find frontend/dist -type f -exec chmod 644 {} \;

# 3. Build backend + restart stack
echo "[3/3] Building backend & restarting production stack..."
DOCKER_BUILDKIT=1 docker compose -f docker-compose.prod.yml up -d --build --force-recreate

echo "✅ Reload complete! Front is served by Nginx, backend rebuilt & running."
