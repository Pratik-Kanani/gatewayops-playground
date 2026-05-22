export default function ScenarioRail(
    {
        items,
        onSelect
    }
        : any) {
    return (

        <div
            className="
space-y-3
"
        >

            <div
                className="
font-semibold
mb-4
"
            >

                Scenarios

            </div>

            {
                items.map(
                    (
                        s: any
                    ) => (

                        <button
                            key={
                                s.prompt
                            }

                            onClick={
                                () =>
                                    onSelect(
                                        s.prompt
                                    )
                            }

                            className="
w-full
text-left
border
rounded-xl
p-4
"
                        >

                            {
                                s.title
                            }

                        </button>

                    ))
            }

        </div>

    );
}