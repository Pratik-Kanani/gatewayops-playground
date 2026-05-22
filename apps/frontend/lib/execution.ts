export type ExecutionStep =
    {
        id: number;

        name: string;

        status:
        | "pending"
        | "running"
        | "completed";
    };

export const defaultSteps:
    ExecutionStep[] =
    [
        {
            id: 1,
            name: "Resolve Tool",
            status: "pending"
        },

        {
            id: 2,
            name: "Extract Parameters",
            status: "pending"
        },

        {
            id: 3,
            name: "Validate",
            status: "pending"
        },

        {
            id: 4,
            name: "Apply Policy",
            status: "pending"
        },

        {
            id: 5,
            name: "Execute",
            status: "pending"
        },

        {
            id: 6,
            name: "Respond",
            status: "pending"
        }
    ];