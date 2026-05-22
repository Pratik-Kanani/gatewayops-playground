export const transactions =
    [
        {
            id: "TXN001",
            amount: 500,
            status: "FAILED",
            reason: "BANK_TIMEOUT",
            merchant: "Merchant Alpha"
        },

        {
            id: "TXN002",
            amount: 2500,
            status: "SUCCESS",
            merchant: "Merchant Alpha"
        },

        {
            id: "TXN003",
            amount: 1200,
            status: "FAILED",
            reason: "UPI_DECLINED",
            merchant: "Merchant Beta"
        },

        {
            id: "TXN004",
            amount: 1800,
            status: "SUCCESS",
            merchant: "Merchant Gamma"
        },

        {
            id: "TXN005",
            amount: 800,
            status: "FAILED",
            reason: "PROCESSOR_TIMEOUT",
            merchant: "Merchant Gamma"
        }
    ];