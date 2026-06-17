import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Process } from "@/components/Process";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { additionalSuburbs, prioritySuburbs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Locations Blacktown & North West Sydney",
  description:
    "Novex Pest Control services Blacktown, Seven Hills, Quakers Hill, Stanhope Gardens, The Ponds, Schofields, Riverstone, Glenwood, Kings Langley, Kings Park and nearby suburbs.",
  keywords: [
    "Pest Control Blacktown",
    "Best Pest Control in Blacktown",
    "Pest Control Seven Hills",
    "Pest Control Quakers Hill",
    "Pest Control The Ponds",
    "Pest Control Schofields",
    "Novex Pest Control locations"
  ]
};

export default function LocationsPage() {
  return (
    <>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Locations"
            title="Pest control in Blacktown and North West Sydney"
            text="Novex Pest Control currently works in the listed suburbs only, with fast support for homes and businesses in these local areas."
          />
        </div>
      </RevealSection>
      <Process />
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            title="High-priority pest control areas"
            text="Our main service locations are Blacktown, Seven Hills, Quakers Hill, Stanhope Gardens, The Ponds, Schofields, Riverstone, Glenwood, Kings Langley and Kings Park."
          />
          <div className="grid locations-grid">
            {prioritySuburbs.map((suburb) => (
              <div className="card location-card" key={suburb}>
                <MapPin color="var(--brand)" size={22} /> {suburb}
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            title="Additional good areas"
            text="We also provide pest control in these nearby suburbs when scheduling is available."
          />
          <div className="grid locations-grid">
            {additionalSuburbs.map((suburb) => (
              <div className="card location-card" key={suburb}>
                <MapPin color="var(--brand)" size={22} /> {suburb}
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 34 }}>
            We focus on these listed locations only. If your suburb is close to
            one of these areas,{" "}
            <Link className="link-red" href="/contact">
              talk to an expert
            </Link>
            .
          </p>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container">
          <SectionHeader center title="Reliable pest control, guaranteed results" />
          <div className="grid three-col">
            {[
              ["Safe & Eco-Friendly", "/images/home.jpg"],
              ["Quick & Effective", "/images/hero.jpg"],
              ["Available Near You", "/images/locations.jpg"]
            ].map(([title, image]) => (
              <div className="image-card" key={title}>
                <Image src={image} alt={`${title} pest control service`} fill sizes="(max-width: 920px) 100vw, 33vw" quality={70} style={{ objectFit: "cover" }} />
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
