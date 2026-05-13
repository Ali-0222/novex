"use client";

import { Facebook, Instagram, Menu, Phone, Music2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Locations", "/locations"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-row">
        <Logo />
        <nav className="nav" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              className={pathname === href ? "active" : ""}
              href={href}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <div className="socials" aria-label="Social links">
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
          <Link className="button phone-cta" href={site.phoneHref}>
            <Phone size={18} />
            <span>{site.phone}</span>
          </Link>
          <button className="button secondary mobile-menu" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
