FROM python:3.12-slim

WORKDIR /app

COPY pyproject.toml ./
COPY src ./src

ENV PYTHONPATH=/app/src

EXPOSE 8000

CMD ["python", "-m", "orchestrator.main"]
