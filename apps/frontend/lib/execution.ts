export type ExecutionStep = {
  label: string;

  status: "pending" | "running" | "completed";
};

export const defaultSteps: ExecutionStep[] = [
  {
    label: "Resolve Tool",
    status: "pending",
  },

  {
    label: "Extract Parameters",
    status: "pending",
  },

  {
    label: "Validate",
    status: "pending",
  },

  {
    label: "Apply Policy",
    status: "pending",
  },

  {
    label: "Execute",
    status: "pending",
  },

  {
    label: "Respond",
    status: "pending",
  },
];
