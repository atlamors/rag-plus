from __future__ import annotations

import json
import os
from http.server import BaseHTTPRequestHandler, HTTPServer

from orchestrator.metrics import metrics_payload


class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:  # noqa: N802
        if self.path == "/health":
            body = json.dumps({"ok": True}).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        if self.path == "/metrics":
            body = metrics_payload().encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/plain; version=0.0.4; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return

        body = json.dumps({"error": "Not found"}).encode("utf-8")
        self.send_response(404)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, format: str, *args: object) -> None:
        return


def run() -> None:
    port = int(os.getenv("ORCHESTRATOR_PORT", "8000"))
    server = HTTPServer(("0.0.0.0", port), RequestHandler)
    print(f"orchestrator listening on {port}")
    server.serve_forever()


if __name__ == "__main__":
    run()
