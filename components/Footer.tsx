import {
  Facebook,
  Instagram,
  Music2,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p style={{ maxWidth: 390, marginTop: 18 }}>
            Local pest control in South West Sydney for homes, businesses,
            rentals and strata properties that need fast, careful protection.
          </p>
          <p>
            <Phone size={16} /> {site.phone}
            <br />
            <Mail size={16} /> {site.email}
          </p>
        </div>
        <div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div style={{ display: "flex", gap: 16, marginTop: 34, color: "var(--brand)" }}>
            <Link href={site.facebook} aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link href={site.instagram} aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link href={site.tiktok} aria-label="TikTok">
              <Music2 size={18} />
            </Link>
          </div>
          <small>All Rights Reserved © {new Date().getFullYear()} Novex Pest Control</small>
        </div>
      </div>
      <Link className="whatsapp" href={site.whatsapp} aria-label="Message Novex Pest Control on WhatsApp">
        <MessageCircle size={28} />
      </Link>
    </footer>
  );
}
