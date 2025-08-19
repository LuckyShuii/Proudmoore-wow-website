#!/usr/bin/env bash
set -e

# Build frontend (Vite) -> ./frontend/dist using Dockerfile.prod
echo "[1/2] Building frontend..."
rm -rf frontend/dist
DOCKER_BUILDKIT=1 docker build -f frontend/Dockerfile.prod -o ./frontend/dist ./frontend

echo "[2/2] Setting permissions..."
chmod -R a+rX frontend/dist
find frontend/dist -type d -exec chmod 755 {} \;
find frontend/dist -type f -exec chmod 644 {} \;

# Start/Update the production stack (build backend image, start everything)
echo "[3/3] Starting production stack..."
docker compose -f docker-compose.prod.yml up -d --build

echo "✅ Done. Front is served by Nginx from ./frontend/dist. Backend is running in Docker."
