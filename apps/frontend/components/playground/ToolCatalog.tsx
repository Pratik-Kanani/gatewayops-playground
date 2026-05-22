"use client";

import { useState } from "react";

import { Tool } from "@/scenarios/tools";

export default function ToolCatalog({ tools }: { tools: Tool[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="
border
rounded-3xl
p-5
space-y-5
"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="
w-full
flex
justify-between
items-center
"
      >
        <div>
          <div
            className="
text-sm
text-neutral-500
"
          >
            MCP
          </div>

          <div
            className="
text-xl
"
          >
            Available Tools
          </div>
        </div>

        <div
          className="
text-neutral-500
"
        >
          {expanded ? "▲" : "▼"}
        </div>
      </button>

      {expanded && (
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
      )}
    </div>
  );
}
