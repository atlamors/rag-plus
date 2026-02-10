if (-not (Test-Path ".env")) {
  Copy-Item ".env.example" ".env"
  Write-Host "Created .env from .env.example"
} else {
  Write-Host ".env already exists; leaving as-is"
}

docker compose -f infra/docker-compose.yml up -d

Write-Host ""
Write-Host "rag-plus services:"
Write-Host "- Docs: http://localhost:3001"
Write-Host "- RAG API health: http://localhost:3002/health"
Write-Host "- Orchestrator health: http://localhost:8000/health"
Write-Host "- Qdrant: http://localhost:6333"
Write-Host "- Postgres: localhost:5432"
Write-Host "- Prometheus: http://localhost:9090"
Write-Host "- Grafana: http://localhost:3000"
Write-Host "- Jaeger: http://localhost:16686"
