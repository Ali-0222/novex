import type { Metadata } from "next";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealSection } from "@/components/RevealSection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Services South West Sydney",
  description:
    "Explore Novex Pest Control services including termite control, cockroach control, spider treatment, rodent control, bed bug treatment, ant control and more."
};

export default function ServicesPage() {
  return (
    <>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Pest control services"
            title="Professional pest control for homes and businesses"
            text="Keep your property pest-free with targeted treatments, honest advice and prevention plans across South West Sydney."
          />
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container grid three-col">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container grid two-col">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>Clear treatments, careful inspections and better long-term results.</h2>
            <p>
              We identify pest pressure, nesting sites and entry points before
              applying treatment. That means your service is not just about what
              is visible today, but about reducing the conditions pests rely on.
            </p>
          </div>
          <div className="grid three-col">
            {["Clear communication", "Safety-first treatments", "Guaranteed care"].map((item) => (
              <div className="card feature-panel" key={item}>
                <h3>{item}</h3>
                <p>Reliable pest control guidance from booking through follow-up.</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container">
          <SectionHeader center light title="Long-term commitment to quality" />
          <div className="grid three-col">
            {["Trusted treatments", "Comprehensive inspections", "Proactive prevention"].map((item) => (
              <div className="card feature-panel" key={item} style={{ background: "transparent", borderColor: "rgba(255,255,255,.35)" }}>
                <h3>{item}</h3>
                <p>Professional pest control designed to protect your property beyond a single visit.</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container grid two-col">
          <div className="card feature-panel">
            <h2>Ready to protect what matters most?</h2>
            <p>
              Whether you are dealing with termites, rodents, spiders,
              cockroaches, ants or another pest, Novex can inspect, treat and
              guide the next step with care.
            </p>
          </div>
          <div style={{ position: "relative", minHeight: 330, borderRadius: 8, overflow: "hidden" }}>
            <Image
              src="/images/service-detail.svg"
              alt="Pest control technician preparing professional treatment equipment"
              fill
              sizes="(max-width: 920px) 100vw, 48vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </RevealSection>
      <CTA />
    </>
  );
}
