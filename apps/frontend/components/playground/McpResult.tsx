import TransactionTable from "./TransactionTable";

export default function McpResult({
  result,
  onDiagnose,
}: {
  result: any;

  onDiagnose: (txn: string) => void;
}) {
  const unavailable = result?.tool === "ScenarioUnavailable";
  if (!result) return null;

  if (result.tool === "ListTransactions") {
    return <TransactionTable items={result.data} onDiagnose={onDiagnose} />;
  }
  if (unavailable) {
    return (
      <div
        className="
border
rounded-2xl
p-8
space-y-4
"
      >
        <div
          className="
uppercase
text-xs
tracking-[0.2em]
text-neutral-500
"
        >
          Workflow unavailable
        </div>

        <div
          className="
text-2xl
"
        >
          Scenario not implemented
        </div>

        <div
          className="
text-neutral-400
leading-7
"
        >
          This workflow exists as a UI placeholder. Execution logic has not been
          connected yet.
        </div>

        <div
          className="
flex
flex-wrap
gap-2
pt-2
"
        >
          {[
            "Show Failed Transactions",
            "Diagnose Timeout",
            "Investigate UPI Failure",
          ].map((item) => (
            <div
              key={item}
              className="
px-3
py-1
border
rounded-full
text-sm
"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="
border
rounded-xl
p-6
"
    >
      <div
        className="
text-sm
text-neutral-400
mb-3
"
      >
        Executed Tool
      </div>

      <div
        className="
font-semibold
mb-6
"
      >
        {result.tool}
      </div>

      <pre>{JSON.stringify(result.data, null, 2)}</pre>
    </div>
  );
}
