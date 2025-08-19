#!/usr/bin/env bash
set -e

docker compose -f docker-compose.prod.yml down
echo "✅ Prod stack stopped."