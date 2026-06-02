import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://acholiwomeninhealth.org'),
  title: "AWIHF | Acholi Women in Health Foundation",
  description: "Improving healthcare outcomes for women and girls in Northern Uganda.",
  icons: {
    icon: "/images/AWIHF logo.svg",
    shortcut: "/images/AWIHF logo.svg",
    apple: "/images/AWIHF logo.svg",
  },
  openGraph: {
    title: "AWIHF | Acholi Women in Health Foundation",
    description: "Improving healthcare outcomes for women and girls in Northern Uganda.",
    images: [
      {
        url: "/images/AWIHF logo.svg",
        width: 800,
        height: 800,
        alt: "Acholi Women in Health Foundation Logo",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white flex flex-col min-h-screen`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-brand-brown">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}