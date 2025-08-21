#!/usr/bin/env bash
set -e

echo "🔄 Applying development migration..."

docker compose -f docker-compose.dev.yml exec backend npm run migration:up
echo "✅ Migration(s) applied successfully."