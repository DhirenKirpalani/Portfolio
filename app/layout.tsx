import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Product Manager | Payments & Fintech",
  description: "Product Manager building scalable fintech systems. Specializing in payments, platform products, and cross-functional collaboration.",
  keywords: ["Product Manager", "Fintech", "Payments", "Product Management", "Tech"],
  authors: [{ name: "Dhiren Kirpalani" }],
  openGraph: {
    title: "Product Manager | Payments & Fintech",
    description: "Product Manager building scalable fintech systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
