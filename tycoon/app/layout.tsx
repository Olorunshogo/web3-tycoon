import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tycoon | Join the Future of Web3 Wealth",
  description:
    "Join the Tycoon waitlist to access next-generation Web3 tools for ownership, earnings, and decentralized growth.",
  keywords: [
    "Tycoon",
    "web3",
    "web3 waitlist",
    "crypto platform",
    "blockchain app",
    "decentralized finance",
    "DeFi",
    "web3 onboarding",
    "crypto wealth",
    "digital ownership",
    "early access web3",
  ],
  openGraph: {
    url: "/",
    title: "Tycoon | Web3 Starts Here",
    description: "Be early. Build wealth. Own your future. Join the Tycoon Web3 waitlist.",
  },
  twitter: {
    title: "Tycoon | Web3 Starts Here",
    description: "Early access to powerful Web3 tools for builders, investors, and creators.",
  },
  alternates: {
    canonical: "/",
  },
};

import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,  
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} w-full bg-linear-to-br from-gray-900 via-blue-950 to-cyan-900 antialiased`}
      >
        <Header />
        <ScrollProgress />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
