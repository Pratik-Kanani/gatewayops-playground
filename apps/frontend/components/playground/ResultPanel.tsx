export default function ResultPanel(
    {
        tool,
        response
    }
        :
        {
            tool: string;

            response: string;
        }) {
    return (

        <div
            className="
border
rounded-xl
p-6
space-y-3
"
        >

            <div>

                Tool:

                <strong>

                    {
                        tool
                    }

                </strong>

            </div>

            <div>

                {
                    response
                }

            </div>

        </div>

    );
}