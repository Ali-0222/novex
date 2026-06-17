import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, ShieldCheck, Sparkles } from "lucide-react";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealSection } from "@/components/RevealSection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pest Control Services Blacktown & North West Sydney",
  description:
    "Explore fast Novex Pest Control services across Blacktown and North West Sydney, including cockroach control, spider treatment, rodent control, bed bug treatment, ant control and more.",
  keywords: [
    "Pest Control",
    "Pest Control in Australia",
    "fast pest control",
    "Novex Pest Control services",
    "Blacktown pest control services"
  ]
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
            text="Keep your property pest-free with targeted treatments, honest advice and prevention plans across Blacktown and North West Sydney."
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
      <RevealSection className="approach-band">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-copy">
              <span className="eyebrow">Our approach</span>
              <h2>Simple steps. Cleaner results. Better long-term protection.</h2>
              <p>
                We inspect the source, choose the right treatment and explain what
                to do next so your pest control visit feels clear and well managed.
              </p>
              <div className="approach-note">
                <strong>Every visit includes</strong>
                <span>inspection, targeted treatment, practical prevention advice</span>
              </div>
            </div>
            <div className="approach-cards">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Clear communication",
                  text: "Straight answers, useful next steps and a service plan that makes sense."
                },
                {
                  icon: ShieldCheck,
                  title: "Safety-first treatments",
                  text: "Targeted products and careful application for homes, pets and surfaces."
                },
                {
                  icon: Sparkles,
                  title: "Guaranteed care",
                  text: "A tidy, professional finish with follow-up advice that helps pests stay away."
                }
              ].map((item) => (
                <article className="card approach-card" key={item.title}>
                  <span className="icon-pill">
                    <item.icon size={18} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
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
              Whether you are dealing with rodents, spiders, cockroaches, ants
              or another pest, Novex can inspect, treat and guide the next step
              with care.
            </p>
          </div>
          <div style={{ position: "relative", minHeight: 330, borderRadius: 8, overflow: "hidden" }}>
            <Image
              src="/images/cta.jpg"
              alt="Pest control technician preparing professional treatment equipment"
              fill
              sizes="(max-width: 920px) 100vw, 48vw"
              quality={72}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </RevealSection>
      <CTA />
    </>
  );
}
