export type Tool = {
  name: string;

  type: "READ" | "WRITE";

  description: string;

  parameters: string[];
};

export const tools: Tool[] = [
  {
    name: "ListTransactions",

    type: "READ",

    description: "Fetch transactions using filters",

    parameters: ["status"],
  },

  {
    name: "DiagnosePaymentIssue",

    type: "READ",

    description: "Inspect payment failures",

    parameters: ["transactionId"],
  },

  {
    name: "GeneratePaymentLink",

    type: "WRITE",

    description: "Create payment request",

    parameters: ["amount"],
  },

  {
    name: "RaiseSupportTicket",

    type: "WRITE",

    description: "Escalate operational issue",

    parameters: ["merchantId"],
  },
];
