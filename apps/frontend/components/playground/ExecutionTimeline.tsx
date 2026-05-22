"use client";

import { ExecutionStep }
    from "@/lib/execution";

export default function ExecutionTimeline(
    {
        steps
    }:
        {
            steps:
            ExecutionStep[]
        }) {
    return (
        <div
            className="
            border
            rounded-xl
            p-6
            space-y-4">
            {
                steps.map(
                    step => (
                        <div
                            key={step.id}
                            className="
                            flex
                            justify-between">

                            <span>

                                {
                                    step.name
                                }

                            </span>

                            <span>

                                {
                                    step.status === "completed"
                                        ? "✓"
                                        : step.status === "running"
                                            ? "…"
                                            : "○"
                                }

                            </span>
                        </div>
                    ))
            }
        </div>
    );
}