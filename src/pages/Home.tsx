import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-[70vh]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-10 pointer-events-none" />
        <div className="container relative mx-auto px-4 py-24 grid gap-10 md:grid-cols-2 items-center">
          {/* TEXT COLUMN */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
              Simplify Your Money.<br />
              <span className="text-white/90">Send — Receive — Grow.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
              Experience a secure, fast, and user-friendly digital wallet built for everyone — from individuals to agents and businesses. 
              Enjoy lightning-fast transfers, transparent fees, and top-tier security.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/register" className="inline-block">
                <button className="px-6 py-3 rounded-lg bg-white text-primary font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-200">
                  🚀 Get Started
                </button>
              </Link>
              <Link to="/features" className="inline-block">
                <button className="px-6 py-3 rounded-lg border border-white/30 text-white font-medium hover:bg-white/10 hover:shadow-lg transition duration-200">
                  🔍 Explore Features
                </button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-10 pt-8">
              {[
                { label: "Users", value: "2M+" },
                { label: "Transactions", value: "₹120B" },
                { label: "Support", value: "24/7" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-extrabold">{item.value}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* WALLET PREVIEW / SKELETON */}
          <div className="flex justify-center items-center relative">
            {loading ? (
              <div className="w-full max-w-md p-6 bg-white/10 rounded-2xl animate-pulse backdrop-blur-sm border border-white/20">
                <div className="h-48 bg-white/20 rounded-xl mb-6" />
                <div className="h-4 bg-white/30 rounded mb-3 w-4/5" />
                <div className="h-4 bg-white/30 rounded w-2/3" />
              </div>
            ) : (
              <div className="w-full max-w-md bg-white text-gray-900 rounded-2xl p-6 shadow-2xl transform transition duration-300 hover:scale-[1.02]">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">Wallet balance</div>
                    <div className="text-3xl font-semibold mt-1">₹ 8,423.50</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Status</div>
                    <div className="text-sm font-medium text-green-600">KYC Complete</div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {["Send", "Receive", "Top-up"].map((action) => (
                    <button
                      key={action}
                      className="py-2 px-3 rounded-lg border border-gray-200 font-medium text-sm hover:bg-primary/10 hover:text-primary transition"
                    >
                      {action}
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="text-xs text-gray-500">Recent Activity</div>
                  <ul className="mt-3 space-y-2">
                    <li className="flex justify-between text-sm">
                      <span>Payment - Grocery</span>
                      <span className="font-medium text-red-500">-₹ 520</span>
                    </li>
                    <li className="flex justify-between text-sm">
                      <span>Received - John</span>
                      <span className="font-medium text-green-600">+₹ 1,200</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Why choose <span className="text-primary">Our Wallet?</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "⚡ Instant Transfers",
              desc: "Send money in seconds to any registered user, anytime.",
            },
            {
              title: "💰 Low Fees",
              desc: "Transparent transaction fees and competitive subscription tiers.",
            },
            {
              title: "🔒 Secure & Trusted",
              desc: "TLS encryption, JWT authentication, and strong KYC verification.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white rounded-xl shadow-sm border hover:shadow-lg transition duration-200 hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
