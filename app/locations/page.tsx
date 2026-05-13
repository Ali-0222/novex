import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Process } from "@/components/Process";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { suburbs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Locations South West Sydney",
  description:
    "Novex Pest Control services Minto, Leppington, Gregory Hills, Liverpool, Oran Park, Campbelltown, Camden, Austral, Raby and nearby suburbs."
};

export default function LocationsPage() {
  return (
    <>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Locations"
            title="Pest control near you in South West Sydney"
            text="Fast, reliable pest control services for homes and businesses across local suburbs."
          />
        </div>
      </RevealSection>
      <Process />
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            title="No more unwanted pests"
            text="We provide professional pest control services across the following suburbs and nearby areas."
          />
          <div className="grid locations-grid">
            {suburbs.map((suburb) => (
              <div className="card location-card" key={suburb}>
                <MapPin color="var(--brand)" size={22} /> {suburb}
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 34 }}>
            If your suburb is not listed, we may still service your area.{" "}
            <Link className="link-red" href="/contact">
              Talk to an expert
            </Link>
          </p>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container">
          <SectionHeader center title="Reliable pest control, guaranteed results" />
          <div className="grid three-col">
            {[
              ["Safe & Eco-Friendly", "/images/home-safe.svg"],
              ["Quick & Effective", "/images/hero-pest.svg"],
              ["Available Near You", "/images/locations.svg"]
            ].map(([title, image]) => (
              <div className="image-card" key={title}>
                <Image src={image} alt={`${title} pest control service`} fill sizes="(max-width: 920px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <h3>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <CTA />
    </>
  );
}
