"use client";

import {
    useState
}
    from "react";

import ExecutionTimeline
    from "@/components/playground/ExecutionTimeline";

import {
    defaultSteps
}
    from "@/lib/execution";

export default function Playground() {
    const [
        steps,
        setSteps
    ]
        =
        useState(
            []
        );

    async function runScenario() {
        const copy =
            structuredClone(
                defaultSteps
            );

        setSteps(
            copy
        );

        for (
            let i = 0;
            i <
            copy.length;
            i++
        ) {
            copy[i].status =
                "running";

            setSteps(
                [...copy]
            );

            await new Promise(
                r =>
                    setTimeout(
                        r,
                        700
                    )
            );

            copy[i].status =
                "completed";

            setSteps(
                [...copy]
            );
        }
    }

    return (

        <main
            className="
max-w-6xl
mx-auto
p-10
"
        >

            <h1
                className="
text-5xl
font-bold
"
            >

                Playground

            </h1>

            <button
                onClick={
                    runScenario
                }
                className="
mt-8
border
rounded
px-6
py-3
"
            >

                Run Scenario

            </button>

            <div
                className="
mt-10
"
            >

                <ExecutionTimeline
                    steps={
                        steps
                    }
                />

            </div>

        </main>

    );
}