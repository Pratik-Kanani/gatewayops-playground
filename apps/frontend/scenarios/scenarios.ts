export const scenarios =
    [
        {
            id: "payment-failure",

            title:
                "Payment Failure",

            prompt:
                "Why did transaction TXN123 fail?",

            result:
            {
                tool:
                    "DiagnosePaymentIssue",

                response:
                    "Transaction failed due to bank timeout"
            }
        },

        {
            id: "payment-link",

            title:
                "Create Payment Link",

            prompt:
                "Create payment request for ₹500",

            result:
            {
                tool:
                    "CreatePaymentLink",

                response:
                    "Payment link generated"
            }
        },

        {
            id: "approval",

            title:
                "Approval Workflow",

            prompt:
                "Refund transaction",

            result:
            {
                tool:
                    "RefundPayment",

                response:
                    "Confirmation required"
            }
        }
    ];