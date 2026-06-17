import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { seoKeywords } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novexpestcontrol.com.au"),
  title: {
    default: "Novex Pest Control | Pest Control Blacktown & North West Sydney",
    template: "%s | Novex Pest Control"
  },
  description:
    "Novex Pest Control provides fast, safe and effective pest control across Blacktown, Seven Hills, Quakers Hill, The Ponds, Schofields and nearby North West Sydney suburbs.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Novex Pest Control Blacktown & North West Sydney",
    description:
      "Book fast residential and commercial pest control services across Blacktown, Seven Hills, Quakers Hill, The Ponds, Schofields and nearby suburbs.",
    url: "https://novexpestcontrol.com.au",
    siteName: "Novex Pest Control",
    locale: "en_AU",
    type: "website"
  },
  icons: {
    icon: "/images/novex-logo.jpeg",
    shortcut: "/images/novex-logo.jpeg",
    apple: "/images/novex-logo.jpeg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
