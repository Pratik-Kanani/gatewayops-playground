export type ExecutionMetadata =
    {
        tool: string;

        risk:
        "LOW"
        |
        "MEDIUM"
        |
        "HIGH";

        executionMs: number;

        parameters:
        Record<
            string,
            string
        >;

        status:
        "SUCCESS"
        |
        "BLOCKED";
    };