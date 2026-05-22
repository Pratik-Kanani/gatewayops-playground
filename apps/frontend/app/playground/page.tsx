const scenarios = [
    {
        id: 1,
        title: "Payment Failure"
    },
    {
        id: 2,
        title: "Payment Link"
    },
    {
        id: 3,
        title: "Approval Workflow"
    },
    {
        id: 4,
        title: "Rate Limiting"
    }
];

export default function Playground() {
    return (

        <main className="p-10">

            <h1 className="text-5xl font-bold">
                Playground
            </h1>

            <p className="mt-3 text-neutral-500">
                Choose a scenario
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

                {
                    scenarios.map(s => (
                        <div
                            key={s.id}
                            className=" 
                            border
                            rounded-xl
                            p-6
                            cursor-pointer
                            hover:scale-[1.02]
                            transition"
                        >

                            <h2 className="text-xl font-semibold">
                                {s.title}
                            </h2>

                        </div>
                    ))
                }

            </div>

        </main>

    );
}