import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jb",
});

export const metadata: Metadata = {
  title: "Sevanth A G — full-stack, backend, AI",
  description:
    "Full-stack developer building real-time and AI-powered web applications with React, TypeScript, Node.js and PostgreSQL/MongoDB. Open to work.",
  keywords: [
    "Sevanth A G",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Sevanth A G" }],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Sevanth A G — full-stack, backend, AI",
    description:
      "Full-stack developer building real-time and AI-powered web applications. Open to work.",
    type: "website",
    url: "https://sevanth.dev",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0e0f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${jetbrains.className}`}>
      <body>{children}</body>
    </html>
  );
}
