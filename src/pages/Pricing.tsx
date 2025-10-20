

const PLANS = [
  { title: "Free", price: "₹0", bullets: ["Basic wallet", "Agent cash-in/out"], cta: "Start free" },
  { title: "Business", price: "₹999/mo", bullets: ["Priority support", "Higher limits", "Reports"], cta: "Start trial" },
  { title: "Enterprise", price: "Contact", bullets: ["SLA", "Custom integrations"], cta: "Contact sales" },
];

export default function Pricing() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.title} className="p-6 border rounded-lg flex flex-col">
            <div className="text-sm text-muted-foreground">{p.title}</div>
            <div className="text-3xl font-bold mt-2">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
              {p.bullets.map((b) => <li key={b}>• {b}</li>)}
            </ul>
            <button className="mt-4 btn btn-primary">{p.cta}</button>
          </div>
        ))}
      </div>
    </main>
  );
}
