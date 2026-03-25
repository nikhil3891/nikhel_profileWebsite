"use client";
import { useState, useRef, useEffect } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  type: "employer" | "freelance" | "other";
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  type: "employer",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm(initialForm);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section id="contact" ref={ref} className="fade-in-section py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p
          className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          // get in touch
        </p>
        <h2
          className="text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Let&apos;s <span style={{ color: "#3B82F6" }}>Work Together</span>
        </h2>
        <p
          className="text-[#8BA3C0] mb-12 max-w-xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Whether you have a job opportunity, a freelance project, or just want to connect —
          I&apos;d love to hear from you. I typically respond within 24 hours.
        </p>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left info panel */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {[
              {
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: "Email",
                value: "8.nikhil3@gmail.com",
                href: "mailto:8.nikhil3@gmail.com",
              },
              {
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                ),
                label: "Phone",
                value: "+91 9625905712",
                href: "tel:+919625905712",
              },
              {
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
                label: "LinkedIn",
                value: "nikhil-tiwari-n1991",
                href: "https://www.linkedin.com/in/nikhil-tiwari-n1991",
              },
              {
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: "Location",
                value: "Greater Noida, India",
                href: null,
              },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 bg-[#0D1420] border border-[#1E2D45] rounded-xl p-4 card-hover">
                <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#4B6282] text-xs mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-[#E2EAF4] text-sm hover:text-[#60A5FA] transition-colors"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#E2EAF4] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Currently Available
                </span>
              </div>
              <p className="text-[#8BA3C0] text-xs leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Open to full-time roles, part-time consulting, and freelance projects. Based in India — available for remote work globally.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 bg-[#0D1420] border border-[#1E2D45] rounded-2xl p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                  <svg width="32" height="32" fill="none" stroke="#4ade80" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-white text-xl font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Message Sent!
                </h3>
                <p className="text-[#8BA3C0] mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2 border border-[#1E2D45] hover:border-[#3B82F6] text-[#8BA3C0] hover:text-white rounded-lg text-sm transition-all"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                {/* Inquiry type toggle */}
                <div>
                  <label className="block text-[#8BA3C0] text-sm mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    I&apos;m reaching out for <span className="text-red-400">*</span>
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {(["employer", "freelance", "other"] as const).map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, type: t }))}
                        className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                          form.type === t
                            ? "bg-[#3B82F6] text-white border border-[#3B82F6]"
                            : "bg-[#111827] text-[#8BA3C0] border border-[#1E2D45] hover:border-[#3B82F6] hover:text-white"
                        }`}
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {t === "employer" ? "🏢 Job Opportunity" : t === "freelance" ? "💼 Freelance Work" : "💬 Other"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8BA3C0] text-sm mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#8BA3C0] text-sm mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Phone + Subject */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8BA3C0] text-sm mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Phone <span className="text-[#4B6282] text-xs">(optional)</span>
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-[#8BA3C0] text-sm mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="e.g. Node.js Developer Role"
                      className="form-input w-full px-4 py-2.5 rounded-xl text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#8BA3C0] text-sm mb-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project details, timeline, budget..."
                    rows={5}
                    className="form-input w-full px-4 py-2.5 rounded-xl text-sm resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                {/* Error */}
                {errorMsg && (
                  <p className="text-red-400 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    ⚠ {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin" width="18" height="18" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
