import { Tool } from "@/scenarios/tools";

export default function ToolCatalog({ tools }: { tools: Tool[] }) {
  return (
    <div
      className="
space-y-3
"
    >
      <div
        className="
text-sm
text-neutral-500
"
      >
        Available Tools
      </div>

      <div
        className="
grid
grid-cols-2
gap-3
"
      >
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="
border
rounded-2xl
p-4
space-y-3
hover:border-white
transition
"
          >
            <div
              className="
flex
justify-between
"
            >
              <div
                className="
font-medium
"
              >
                {tool.name}
              </div>

              <div
                className={`
text-xs
px-2
py-1
rounded-full

${tool.type === "READ" ? "border" : "bg-white text-black"}
`}
              >
                {tool.type}
              </div>
            </div>

            <div
              className="
text-sm
text-neutral-500
"
            >
              {tool.description}
            </div>

            <div
              className="
flex
gap-2
flex-wrap
"
            >
              {tool.parameters.map((p) => (
                <div
                  key={p}
                  className="
text-xs
border
rounded-full
px-2
py-1
"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
