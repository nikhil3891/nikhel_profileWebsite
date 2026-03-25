import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikhel Tiwariy — MERN Stack Developer",
  description:
    "Full-stack MERN developer with 2.5+ years experience in Node.js, React, React Native & scalable backend systems. Available for hire and freelance.",
  keywords: [
    "MERN Stack Developer",
    "Node.js Developer",
    "React Developer",
    "React Native",
    "Backend Developer",
    "Nikhel Tiwariy",
    "Full Stack Developer India",
    "Freelance Developer",
  ],
  authors: [{ name: "Nikhel Tiwariy" }],
  openGraph: {
    title: "Nikhel Tiwariy — MERN Stack Developer",
    description: "Full-stack MERN developer available for hire and freelance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
