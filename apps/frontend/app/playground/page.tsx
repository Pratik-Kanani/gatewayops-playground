"use client";

import { useState } from "react";

import Conversation from "@/components/playground/Conversation";
import ExecutionInspector from "@/components/playground/ExecutionInspector";
import ExecutionTimeline from "@/components/playground/ExecutionTimeline";
import PlaygroundBanner from "@/components/playground/PlaygroundBanner";

import { Message } from "@/lib/chat";
import { defaultSteps, ExecutionStep } from "@/lib/execution";

import { execute } from "@/lib/scenario-engine/mcpClient";

import { supportScenarios } from "@/scenarios/supportScenarios";
import ToolCatalog
from
"@/components/playground/ToolCatalog";

import {
tools
}
from
"@/scenarios/tools";

export default function Playground() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<any>(null);
  const [steps, setSteps] = useState<ExecutionStep[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [running, setRunning] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  async function diagnose(txn: string) {
    await run(`diagnose ${txn}`);
  }

  async function run(prompt: string) {
    setActiveScenario(prompt);
    setRunning(true);

    let current = structuredClone(defaultSteps);

    setSteps(current);

    for (let i = 0; i < current.length; i++) {
      current = current.map((step, index) =>
        index === i
          ? {
              ...step,
              status: "running",
            }
          : step,
      );

      setSteps([...current]);

      await new Promise((resolve) => setTimeout(resolve, 400));

      current = current.map((step, index) =>
        index === i
          ? {
              ...step,
              status: "completed",
            }
          : step,
      );

      setSteps([...current]);
    }

    setMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: prompt,
      },
    ]);

    const response = await execute(prompt);

    setMetadata(response.metadata);

    setMessages((previous): Message[] => {
      const next: Message[] = [
        ...previous,
        {
          role: "assistant",
          content: `Executed ${response.tool}`,
          result: response as any,
        },
      ];

      setExpandedIndex(next.length - 1);

      return next;
    });

    setHistory((previous) => [prompt, ...previous]);

    setActiveScenario(prompt);

    setRunning(false);
  }

  return (
    <main
      className="
max-w-[1500px]
mx-auto
px-8
py-10
"
    >
      <h1
        className="
text-5xl
font-bold
mb-8
"
      >
        GatewayOps Support Playground
      </h1>

      <div
        className="
grid
grid-cols-1
xl:grid-cols-[1.8fr_0.9fr]
gap-10
"
      >
        <section
          className="
space-y-8
min-w-0
"
        >
          <div
            className="
inline-flex
items-center
gap-2
mt-2
text-xs
border
rounded-full
px-3
py-1
text-neutral-400
"
          >
            <div>DEMO</div>

            <div>•</div>

            <div>No AI</div>

            <div>•</div>

            <div>MCP Simulation</div>
          </div>
          <PlaygroundBanner />

          <div
            className="
flex
gap-3
text-sm
text-neutral-500
px-1
"
          >
            <div>Mode: Deterministic</div>

            <div>•</div>

            <div>
              Tools:
              {supportScenarios.length}
            </div>

            <div>•</div>

            <div>
              Status:
              {running ? " Running" : " Ready"}
            </div>
          </div>

          {history.length > 0 && (
            <div
              className="
space-y-3
"
            >
              <div
                className="
flex
items-center
justify-between
"
              >
                <div
                  className="
text-xs
uppercase
tracking-wider
text-neutral-600
"
                >
                  Recent Runs
                </div>

                <button
                  onClick={() => setHistory([])}
                  className="
text-xs
text-neutral-600
hover:text-white
"
                >
                  Clear
                </button>
              </div>

              <div
                className="
flex
flex-wrap
gap-2
"
              >
                {history.map((item, index) => (
                  <div
                    key={index}
                    className="
text-xs
border
rounded-full
bg-neutral-950
px-3
py-2
text-neutral-400
"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          )}

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
              Prebuilt Operational Workflows
            </div>

            <div
              className="
flex
flex-wrap
gap-3
"
            >
              {supportScenarios.map((scenario) => (
                <button
                  key={scenario.prompt}
                  onClick={() => {
                    setSelectedScenario(scenario.prompt);

                    run(scenario.prompt);
                  }}
                  className={`
px-5
py-2
rounded-xl
border
text-sm
transition

${
activeScenario===scenario.prompt
? `
bg-white
text-black
`
: `
hover:border-white
`
}
`}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>

          <ToolCatalog
tools={
tools
}
/>

          <Conversation
            messages={messages}
            onDiagnose={diagnose}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
        </section>

        <aside
          className="
space-y-5
xl:sticky
xl:top-8
self-start
"
        >
          {steps.length > 0 && <ExecutionTimeline steps={steps} />}

          <div
            className="
transition-all
duration-300
"
          >
            {metadata ? (
              <ExecutionInspector metadata={metadata} />
            ) : (
              <div
                className="
border
rounded-3xl
p-12
text-center
text-neutral-600
"
              >
                Run a workflow to inspect execution
              </div>
            )}
          </div>
        </aside>
      </div>
    </main>
  );
}
