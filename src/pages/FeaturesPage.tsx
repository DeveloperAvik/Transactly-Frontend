import React from "react";

type Feature = { title: string; desc: string; icon?: React.ReactNode };

const FEATURES: Feature[] = [
  { title: "Instant Transfers", desc: "Real-time transfers across the network." },
  { title: "Agent Cash-in", desc: "Top-up wallets through our nationwide agent network." },
  { title: "Reports & Analytics", desc: "Detailed transaction history & export." },
  { title: "Multi-role Access", desc: "Users, Agents, and Admins with tailored dashboards." },
  { title: "Secure Auth", desc: "JWT + OTP + KYC flows for secure access." },
  { title: "Low Fees", desc: "Transparent pricing for all transactions." },
];

export default function FeaturesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Features</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="p-6 border rounded-lg hover:shadow transition">
            <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
              {/* small placeholder icon */}
              <span className="font-semibold text-primary">{f.title.split(" ")[0].slice(0,2)}</span>
            </div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
