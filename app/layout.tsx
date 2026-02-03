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
  metadataBase: new URL('https://dhirenkirpalani.com'),
  title: {
    default: "Dhiren Kirpalani | Product Manager - Fintech & Payments",
    template: "%s | Dhiren Kirpalani"
  },
  description: "Product Manager specializing in fintech and payment systems. Building scalable products with cross-functional teams. Expert in product strategy, user experience, and technical implementation.",
  keywords: [
    "Product Manager",
    "Fintech",
    "Payments",
    "Product Management",
    "Tech",
    "Payment Systems",
    "Product Strategy",
    "UX Design",
    "Dhiren Kirpalani",
    "Portfolio",
    "TikTok Creator",
    "Product Education"
  ],
  authors: [{ name: "Dhiren Kirpalani", url: "https://dhirenkirpalani.com" }],
  creator: "Dhiren Kirpalani",
  publisher: "Dhiren Kirpalani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhirenkirpalani.com",
    siteName: "Dhiren Kirpalani Portfolio",
    title: "Dhiren Kirpalani | Product Manager - Fintech & Payments",
    description: "Product Manager specializing in fintech and payment systems. Building scalable products with cross-functional teams.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dhiren Kirpalani - Product Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhiren Kirpalani | Product Manager - Fintech & Payments",
    description: "Product Manager specializing in fintech and payment systems. Building scalable products with cross-functional teams.",
    creator: "@dhirenkirpalani",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
