import { transactions } from "../scenario-engine-data/transactions"

export function getTransactions() {
    return transactions;
}

export function getTransaction(
    id: string
) {
    return transactions.find(
        t =>
            t.id === id
    );
}