import React, { useState } from "react";
import { toast } from "react-toastify";

type Form = { name: string; email: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! We received your inquiry — we'll respond shortly.");
      setForm({ name: "", email: "", message: "" });
    }, 900);
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-sm text-muted-foreground mb-6">Send us your questions or partnership inquiries.</p>

      <form onSubmit={onSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg border">
        <label className="block">
          <div className="text-sm font-medium">Name</div>
          <input required value={form.name} onChange={onChange("name")} className="input mt-1 w-full" />
        </label>

        <label className="block">
          <div className="text-sm font-medium">Email</div>
          <input required type="email" value={form.email} onChange={onChange("email")} className="input mt-1 w-full" />
        </label>

        <label className="block">
          <div className="text-sm font-medium">Message</div>
          <textarea required value={form.message} onChange={onChange("message")} rows={6} className="input mt-1 w-full" />
        </label>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">Or email us at <span className="font-medium">support@wallet.app</span></div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </main>
  );
}
