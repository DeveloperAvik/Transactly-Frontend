

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">About Our Wallet</h1>
        <p className="text-lg text-muted-foreground">
          Our mission is to provide accessible digital financial services for everyone — individuals, agents, and businesses. We focus on simplicity, security, and low costs.
        </p>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div>
            <h2 className="text-xl font-semibold">Our Story</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Founded by a small team of fintech engineers and payments veterans, our wallet started with a single idea: make sending and receiving money as easy as sending a message.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Mission & Values</h2>
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>• Financial inclusion for all</li>
              <li>• Transparent and fair fees</li>
              <li>• Secure by design</li>
              <li>• Local agent network for cash-in/cash-out</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold">Team</h2>
          <div className="grid gap-4 md:grid-cols-3 mt-4">
            {[
              { name: "Avik Das", role: "Founder & CTO" },
              { name: "Priya Sen", role: "Head of Product" },
              { name: "Rohan Das", role: "Head of Operations" },
            ].map((m) => (
              <div key={m.name} className="p-4 border rounded">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center font-bold">
                  {m.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
                <div className="mt-3">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-muted-foreground">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
