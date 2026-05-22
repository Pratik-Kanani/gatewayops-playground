import { getTransaction, getTransactions } from "./gatewayClient";

function randomExecution() {
  return;
  Math.floor(150 + Math.random() * 300);
}

export async function execute(prompt: string) {
  const input = prompt.toLowerCase();

  if (input.includes("failed")) {
    const data = getTransactions().filter((x) => x.status === "FAILED");

    return {
      tool: "ListTransactions",

      metadata: {
        tool: "ListTransactions",

        risk: "LOW",

        executionMs: randomExecution(),

        parameters: {
          status: "FAILED",
        },

        status: "SUCCESS",
      },

      data,
    };
  }

  const match = prompt.match(/txn\d+/i);

  if (match) {
    return {
      tool: "DiagnosePaymentIssue",

      metadata: {
        tool: "DiagnosePaymentIssue",

        risk: "LOW",

        executionMs: randomExecution(),

        parameters: {
          transactionId: match[0],
        },

        status: "SUCCESS",
      },

      data: getTransaction(match[0]),
    };
  }

  return {
    tool: "ScenarioUnavailable",

    metadata: {
      tool: "ScenarioUnavailable",

      risk: "LOW",

      executionMs: 0,

      parameters: {},

      status: "NOT_SUPPORTED",
    },

    data: null,
  };
}
