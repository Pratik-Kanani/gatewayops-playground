type Transaction = {
  id: string;

  amount: number;

  status: string;

  reason?: string;

  merchant: string;
};

export default function TransactionTable({
  items,
  onDiagnose,
}: {
  items: Transaction[];

  onDiagnose: (txn: string) => void;
}) {
  return (
    <div
      className="
space-y-3
"
    >
      {items.map((t) => (
        <div
          key={t.id}
          className="
border
rounded-xl
p-4
"
        >
          <div
            className="
flex
justify-between
"
          >
            <strong>{t.id}</strong>

            <span>₹{t.amount}</span>
          </div>

          <div
            className="
mt-2
"
          >
            {t.status}
          </div>

          {t.reason && (
            <div
              className="
text-neutral-500
"
            >
              {t.reason}
            </div>
          )}

          <div
            className="
mt-3
"
          >
            <button
              onClick={() => onDiagnose(t.id)}
              className="
mt-3
inline-flex
items-center
gap-2
border
border-neutral-700
rounded-full
px-4
py-2
text-sm
font-medium
text-neutral-300
hover:text-white
hover:border-white
hover:bg-neutral-900
active:scale-[0.98]
transition-all
duration-200
"
            >
              Diagnose
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
