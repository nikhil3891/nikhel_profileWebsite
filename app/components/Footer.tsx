export default function Footer() {
  return (
    <footer className="border-t border-[#1E2D45] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-white font-bold text-lg"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            NT<span style={{ color: "#3B82F6" }}>.</span>
          </span>
          <span className="text-[#4B6282] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} Nikhel Tiwariy. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:8.nikhil3@gmail.com"
            className="text-[#4B6282] hover:text-[#60A5FA] transition-colors"
            aria-label="Email"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-tiwari-n1991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4B6282] hover:text-[#60A5FA] transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a
            href="tel:+919625905712"
            className="text-[#4B6282] hover:text-[#60A5FA] transition-colors"
            aria-label="Phone"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.13 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
        </div>

        <p
          className="text-[#4B6282] text-xs"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
