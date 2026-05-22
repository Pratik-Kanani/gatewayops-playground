export default function Home() {
    return (
        <main className="min-h-screen">

            <section className="max-w-7xl mx-auto p-10">

                <div className="space-y-8">

                    <div>

                        <h1 className="text-6xl font-bold">
                            GatewayOps Playground
                        </h1>

                        <p className="mt-4 text-neutral-500">
                            Interactive showcase for governed AI execution.
                        </p>

                    </div>

                    <div className="flex gap-4">

                        <a
                            href="/playground"
                            className="
                border
                rounded
                px-6
                py-3
              "
                        >
                            Open Playground
                        </a>

                        <a
                            href="/architecture"
                            className="
                border
                rounded
                px-6
                py-3
              "
                        >
                            View Architecture
                        </a>

                    </div>

                </div>

            </section>

        </main>
    );
}