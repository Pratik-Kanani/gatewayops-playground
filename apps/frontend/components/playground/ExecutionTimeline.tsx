export default function ExecutionTimeline({ steps }: { steps: any[] }) {
  return (
    <div
      className="
border
rounded-3xl
p-6
space-y-4
"
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className="
flex
justify-between
items-center
"
        >
          <div>{step.label}</div>

          <div>
            {step.status === "completed"
              ? "✓"
              : step.status === "running"
                ? "●"
                : "○"}
          </div>
        </div>
      ))}
    </div>
  );
}
