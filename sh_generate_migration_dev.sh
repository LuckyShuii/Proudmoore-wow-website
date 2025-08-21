#!/usr/bin/env bash
set -e

echo "🔄 Starting development migration..."

read -p "➡️  Enter migration name: " MIGRATION_NAME

if [ -z "$MIGRATION_NAME" ]; then
  echo "❌ Migration name cannot be empty."
  exit 1
fi

docker compose -f docker-compose.dev.yml exec backend npm run migration:generate -- src/migrations/"$MIGRATION_NAME"

echo "✅ Migration '$MIGRATION_NAME' generated successfully."