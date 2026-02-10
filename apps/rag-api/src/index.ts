import http from "node:http";
import { healthPayload } from "./health.js";
import { metricsPayload } from "./metrics.js";

const port = Number.parseInt(process.env.RAG_API_PORT ?? "3002", 10);

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/health") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(healthPayload()));
    return;
  }

  if (req.method === "GET" && req.url === "/metrics") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; version=0.0.4; charset=utf-8");
    res.end(metricsPayload());
    return;
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: "Not found" }));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`rag-api listening on ${port}`);
});
