import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { RevealSection } from "@/components/RevealSection";

export function CTA() {
  return (
    <RevealSection className="section-red">
      <div className="container" style={{ textAlign: "center" }}>
        <span className="eyebrow" style={{ color: "#ffd9d4" }}>
          Quick & reliable support
        </span>
        <h2>Need pest control near you?</h2>
        <p style={{ maxWidth: 660, margin: "0 auto 26px" }}>
          Get a fast quote for residential or commercial pest control in South
          West Sydney. Tell us what you are seeing and we will guide the next
          best step.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link className="button secondary" href={site.phoneHref}>
            <Phone size={18} /> Call {site.phone}
          </Link>
          <Link className="button" href="/contact">
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
