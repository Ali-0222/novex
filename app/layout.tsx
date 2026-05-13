import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://novexpestcontrol.com.au"),
  title: {
    default: "Novex Pest Control | Pest Control South West Sydney",
    template: "%s | Novex Pest Control"
  },
  description:
    "Novex Pest Control provides safe, effective pest control across South West Sydney, including termites, cockroaches, ants, spiders, rodents, bed bugs and more.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Novex Pest Control South West Sydney",
    description:
      "Book reliable residential and commercial pest control services across South West Sydney.",
    url: "https://novexpestcontrol.com.au",
    siteName: "Novex Pest Control",
    locale: "en_AU",
    type: "website"
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg"
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
