import McpResult from "./McpResult";

type Message = {
  role: "user" | "assistant";
  content: string;
  result?: any;
};

export default function Conversation({
  messages,
  onDiagnose,
  expandedIndex,
  setExpandedIndex,
}: {
  messages: Message[];
  onDiagnose: (txn: string) => void;

  expandedIndex: number | null;

  setExpandedIndex: (index: number | null) => void;
}) {
  if (messages.length === 0) {
    return (
      <div
        className="
border
rounded-3xl
min-h-[260px]
flex
items-center
justify-center
text-center
bg-neutral-950
"
      >
        <div className="space-y-4">
          <div
            className="
text-4xl
opacity-50
"
          >
            →
          </div>

          <div
            className="
text-3xl
text-neutral-400
"
          >
            Start an operational workflow
          </div>

          <div
            className="
text-neutral-500
"
          >
            Scenario → Tool Resolution → Validation → Policy → Execution →
            Response
          </div>

          <div
            className="
text-sm
text-neutral-600
"
          >
            GatewayOps will simulate orchestration, policy checks and tool
            execution.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
space-y-12
animate-in
fade-in
duration-300
"
    >
      {messages.map((message, index) => {
        const expanded = message.role === "user" || expandedIndex === index;

        return (
          <div
            key={index}
            className={
              message.role === "user"
                ? `
flex
justify-end
`
                : `
flex
justify-start
`
            }
          >
            <div
              className={
                message.role === "user"
                  ? `
max-w-[45%]
`
                  : `
w-full
`
              }
            >
              <div
                className="
text-xs
uppercase
tracking-widest
text-neutral-500
mb-3
"
              >
                {message.role === "user" ? "Operator" : "Workflow Output"}
              </div>

              <div
                onClick={() => {
                  if (message.role === "assistant") {
                    setExpandedIndex(expanded ? -1 : index);
                  }
                }}
                className={
                  message.role === "user"
                    ? `
border
rounded-full
px-6
py-4
cursor-default
`
                    : `
border
rounded-3xl
p-6
bg-neutral-950
cursor-pointer
transition
hover:border-white
`
                }
              >
                {message.role === "user" ? (
                  <div>{message.content}</div>
                ) : (
                  <>
                    <div
                      className="
flex
justify-between
items-center
mb-4
"
                    >
                      <div
                        className="
text-xs
uppercase
tracking-wide
text-neutral-500
"
                      >
                        Workflow Result
                      </div>

                      <div
                        className="
text-neutral-500
"
                      >
                        {expanded ? "▼" : "▶"}
                      </div>
                    </div>

                    <div
                      className="
text-3xl
font-medium
"
                    >
                      {message.content}
                    </div>

                    {expanded && message.result && (
                      <div className="mt-6">
                        <McpResult
                          result={message.result}
                          onDiagnose={onDiagnose}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
