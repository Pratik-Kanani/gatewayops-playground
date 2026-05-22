export default function PlaygroundBanner() {
    return (

        <div
            className="
border
rounded-xl
p-2
mb-8
space-y-3
"
        >

            <div
                className="
font-semibold
"
            >

                Deterministic Support Simulation

            </div>

            <div
                className="
text-neutral-400
"
            >

                This demo intentionally does not include AI.

                Requests are interpreted by a deterministic orchestration engine
                that simulates MCP-style tool execution.

                LLMs can be integrated externally without changing
                execution, governance, or tool layers.

            </div>
            <div
                className="
text-sm
text-neutral-400
"
            >

                Mode:
                Deterministic Simulation

            </div>

        </div>

    );
}