"use client";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="fade-in-section py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <p
            className="text-[#3B82F6] text-sm font-mono mb-3 tracking-widest uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about me
          </p>
          <h2
            className="text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Turning complex problems into<br />
            <span style={{ color: "#3B82F6" }}>elegant solutions</span>
          </h2>
          <p
            className="text-[#8BA3C0] mb-4 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I&apos;m a MERN Stack Developer based in Greater Noida, India with 2.5+ years of
            experience designing and building production-grade applications. My core strength
            lies in Node.js backend architecture — crafting scalable REST APIs, multi-tenant
            systems, and database-optimised services.
          </p>
          <p
            className="text-[#8BA3C0] mb-6 leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Beyond backend, I work confidently across the full stack with React.js and
            React Native, allowing me to own features end-to-end. I&apos;ve worked across
            fintech, CRM, attendance management, and business directory platforms —
            always focused on clean code and real impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:8.nikhil3@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              8.nikhil3@gmail.com
            </a>
            <span className="text-[#1E2D45]">|</span>
            <a
              href="tel:+919625905712"
              className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +91 9625905712
            </a>
          </div>
        </div>

        {/* Right: info cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: "🏢", label: "Current Role", value: "MERN Stack Dev @ Devolyt" },
            { icon: "📍", label: "Location", value: "Greater Noida, India" },
            { icon: "⚡", label: "Expertise", value: "Node.js & Express" },
            { icon: "📱", label: "Also builds", value: "React Native Apps" },
            { icon: "🎓", label: "Education", value: "B.Tech Engineering" },
            { icon: "🌐", label: "Languages", value: "English & Hindi" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#0D1420] border border-[#1E2D45] rounded-xl p-4 card-hover"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div
                className="text-xs text-[#4B6282] mb-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.label}
              </div>
              <div
                className="text-sm text-[#E2EAF4] font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
