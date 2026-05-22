"use client";

import { useState } from "react";

export default function ChatPanel({
  onSend,
}: {
  onSend: (prompt: string) => Promise<void>;
}) {
  const [input, setInput] = useState("");

  return (
    <div
      className="
border
rounded-xl
p-6
space-y-4
"
    >
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="
Search transactions or execute workflow...
"
        className="
w-full
border
rounded
p-3
"
      />

      <button
        onClick={async () => {
          if (!input) return;

          await onSend(input);

          setInput("");
        }}
        className="
border
rounded
px-4
py-2
"
      >
        Execute Action
      </button>
    </div>
  );
}
