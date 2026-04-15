import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayham Huq — Software Engineer",
  description:
    "Portfolio of Ayham Huq, a software engineer and OSU graduate building full-stack applications and cloud infrastructure.",
  keywords: [
    "software engineer",
    "portfolio",
    "React",
    "TypeScript",
    "full-stack developer",
    "AWS",
    "Next.js",
  ],
  authors: [{ name: "Ayham Huq" }],
  openGraph: {
    title: "Ayham Huq — Software Engineer",
    description:
      "Software engineer with experience at CapTech, Publicis Sapient, and Sallie Mae. Building full-stack apps and cloud infrastructure.",
    siteName: "Ayham Huq",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
