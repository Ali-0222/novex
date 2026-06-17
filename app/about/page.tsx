import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";

export const metadata: Metadata = {
  title: "About Novex Pest Control",
  description:
    "Learn about Novex Pest Control, a Blacktown and North West Sydney pest control company focused on safe treatments, honest service and long-term pest prevention."
};

export default function AboutPage() {
  return (
    <>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            eyebrow="About Novex"
            title="Protecting homes, businesses and peace of mind"
            text="Novex Pest Control delivers practical, reliable pest management for local families and businesses."
          />
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container grid two-col">
          <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
            <Image
              src="/images/about.jpg"
              alt="Novex Pest Control team planning a customer service visit"
              fill
              sizes="(max-width: 920px) 100vw, 48vw"
              quality={72}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <span className="eyebrow">Managing director message</span>
            <h2>We built Novex around careful service, clean communication and real results.</h2>
            <p>
              Our mission is simple: inspect properly, treat responsibly and
              help customers understand how to keep their property protected.
              Every job is handled with respect for your home, your time and
              your safety.
            </p>
            <Link className="button" href="/contact">
              Book Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container">
          <SectionHeader
            center
            light
            title="Mission and vision statement"
            text="We aim to become a trusted pest control partner for Blacktown and North West Sydney by combining high-quality treatments with practical prevention advice."
          />
          <div className="grid three-col">
            {[
              ["Our commitment", "Safe pest control that protects people, pets, property and the environment."],
              ["Our approach", "Targeted inspections and tailored treatment plans for every property."],
              ["Our expertise", "Local pest knowledge, proven methods and careful follow-up advice."]
            ].map(([title, text]) => (
              <div className="card feature-panel" key={title} style={{ background: "transparent", borderColor: "rgba(255,255,255,.35)" }}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container grid two-col">
          <div className="stat-circle">
            <span>
              <strong>5,000+</strong>
              satisfied customers
            </span>
          </div>
          <div>
            <h2>Top-tier solutions for long-lasting protection.</h2>
            <p>
              From urgent infestations to routine prevention, our team helps
              customers feel confident that their property is being looked after
              properly.
            </p>
          </div>
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container">
          <SectionHeader center light title="Our core values" />
          <div className="grid three-col">
            {["Safety first", "Reliability & consistency", "Integrity in every job"].map((item) => (
              <div className="card feature-panel" key={item} style={{ background: "transparent", borderColor: "rgba(255,255,255,.35)" }}>
                <h3>{item}</h3>
                <p>Professional pest control delivered with care, honesty and attention to detail.</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <CTA />
    </>
  );
}
