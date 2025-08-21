#!/usr/bin/env bash
set -e

echo "[1/2] Pulling latest changes..."
git pull origin main

echo "[2/2] Running migrations..."
docker exec prod-proudmoore-website-backend npm run migration:up:prod

echo "✅ Migrations applied successfully."
