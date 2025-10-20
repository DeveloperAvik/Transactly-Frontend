import React, { useState } from "react";
import { toast } from "react-toastify";

type Form = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange =
    (key: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("✅ Message sent successfully! We'll respond shortly.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <main className="container mx-auto px-6 py-20 max-w-3xl">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground mt-3 text-sm md:text-base">
          Have a question, feedback, or partnership idea? Drop us a message — we’d love to hear from you.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="bg-card text-card-foreground border rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-8 space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={onChange("name")}
            className="w-full border border-input rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={onChange("email")}
            className="w-full border border-input rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            rows={6}
            required
            value={form.message}
            onChange={onChange("message")}
            className="w-full border border-input rounded-lg px-4 py-2.5 text-sm resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4">
          <div className="text-sm text-muted-foreground">
            Or email us directly at{" "}
            <span className="font-semibold text-primary">support@wallet.app</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm shadow-md transition-all duration-200 ${
              loading
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90 hover:shadow-lg"
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>

      {/* Support info */}
      <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>
          Our support team is available <span className="font-medium text-foreground">24/7</span>.
        </p>
        <p className="mt-1">Average response time: under 1 hour.</p>
      </div>
    </main>
  );
}
