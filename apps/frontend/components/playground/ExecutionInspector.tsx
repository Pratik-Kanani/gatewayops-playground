type Props = {
  metadata: any;
};

export default function ExecutionInspector({ metadata }: Props) {
  if (!metadata) {
    return (
      <div
        className="
border
rounded-3xl
p-10
text-center
text-neutral-500
"
      >
        Run a workflow to inspect execution
      </div>
    );
  }

  const parameters: [string, unknown][] = metadata.parameters
    ? Object.entries(metadata.parameters)
    : [];

  return (
    <div
      className="
border
rounded-3xl
p-8
space-y-8
"
    >
      <div
        className="
uppercase
text-xs
tracking-[0.25em]
text-neutral-500
"
      >
        Execution
      </div>

      <Section title="Tool" value={metadata.tool} emphasize />

      <Section title="Risk" value={metadata.risk} />

      <Section title="Duration" value={`${metadata.duration ?? 0} ms`} />

      <div className="space-y-3">
        <Label>Parameters</Label>

        {parameters?.length ? (
          <div className="space-y-2">
            {parameters.map(([k, v]: [string, unknown]) => (
              <div
                key={k}
                className="
flex
justify-between
text-sm
border-b
border-neutral-900
pb-2
"
              >
                <span className="text-neutral-500">{k}</span>

                <span>{String(v)}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-neutral-500">No parameters</div>
        )}
      </div>

      <div className="space-y-2">
        <Label>Status</Label>

        <div
          className={`
inline-flex
items-center
px-3
py-1
rounded-full
text-sm
border

${
  metadata.status === "SUCCESS"
    ? "text-green-400 border-green-900"
    : "text-red-400 border-red-900"
}
`}
        >
          {metadata.status === "SUCCESS" ? "✓ SUCCESS" : "✕ BLOCKED"}
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
uppercase
text-xs
tracking-[0.18em]
text-neutral-500
"
    >
      {children}
    </div>
  );
}

function Section({
  title,
  value,
  emphasize,
}: {
  title: string;
  value?: string;
  emphasize?: boolean;
}) {
  return (
    <div className="space-y-2">
      <Label>{title}</Label>

      <div className={emphasize ? "text-3xl font-semibold" : "text-2xl"}>
        {value || "-"}
      </div>
    </div>
  );
}
