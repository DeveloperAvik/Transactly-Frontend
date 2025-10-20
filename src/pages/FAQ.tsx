import { useState } from "react";

const FAQS = [
  { q: "How do I register?", a: "Go to register page, sign up with your email or phone and complete KYC if required." },
  { q: "How to top-up my wallet?", a: "Use an agent near you for cash-in or link a bank account for transfers." },
  { q: "What are the fees?", a: "Fees depend on transaction type — view Pricing for details." },
  { q: "How secure is the wallet?", a: "We use TLS, encrypted storage, and multi-factor authentication for account security." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {FAQS.map((f, i) => (
          <div key={f.q} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left p-4 flex justify-between items-center"
            >
              <div>
                <div className="font-medium">{f.q}</div>
                <div className="text-sm text-muted-foreground">{open === i ? "Open" : "Tap to expand"}</div>
              </div>
              <div className="text-muted-foreground">{open === i ? "−" : "+"}</div>
            </button>
            {open === i && (
              <div className="p-4 pt-0 text-sm text-muted-foreground border-t">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
