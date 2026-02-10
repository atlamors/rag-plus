# rag-plus

Monorepo scaffold for RAG Plus platform services, orchestration stubs, documentation, and local observability infrastructure.

## Apps

- `apps/rag-api`: Node/TypeScript platform core service stub
- `apps/orchestrator`: Python orchestration service stub
- `apps/docs`: Next.js docs site for project/spec documentation

## Infrastructure

`infra/docker-compose.yml` defines local dependencies and observability stack (Prometheus, Grafana, OpenTelemetry Collector, Jaeger, Postgres, Qdrant).
