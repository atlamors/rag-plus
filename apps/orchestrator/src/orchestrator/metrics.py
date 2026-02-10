def metrics_payload() -> str:
    return "\n".join(
        [
            "# HELP orchestrator_up Indicates if orchestrator process is up",
            "# TYPE orchestrator_up gauge",
            "orchestrator_up 1",
            "",
        ]
    )
