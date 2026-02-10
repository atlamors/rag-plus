export function metricsPayload() {
  return [
    "# HELP rag_api_up Indicates if rag-api process is up",
    "# TYPE rag_api_up gauge",
    "rag_api_up 1",
    ""
  ].join("\n");
}
