#!/usr/bin/env sh
set -eu

if [ ! -f ".env" ]; then
  cp ".env.example" ".env"
  echo "Created .env from .env.example"
else
  echo ".env already exists; leaving as-is"
fi

docker compose -f infra/docker-compose.yml up -d

echo ""
echo "rag-plus services:"
echo "- Docs: http://localhost:3001"
echo "- RAG API health: http://localhost:3002/health"
echo "- Orchestrator health: http://localhost:8000/health"
echo "- Qdrant: http://localhost:6333"
echo "- Postgres: localhost:5432"
echo "- Prometheus: http://localhost:9090"
echo "- Grafana: http://localhost:3000"
echo "- Jaeger: http://localhost:16686"
