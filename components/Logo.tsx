import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Novex Pest Control home">
      <span className="logo-mark">
        <ShieldCheck size={30} strokeWidth={2.4} />
      </span>
      <span className="logo-text">
        Novex
        <span>Pest Control</span>
      </span>
    </Link>
  );
}
