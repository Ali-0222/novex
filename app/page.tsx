import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Process } from "@/components/Process";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealSection } from "@/components/RevealSection";
import { services, suburbs } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <RevealSection>
        <div className="container grid two-col">
          <div style={{ position: "relative", minHeight: 420, borderRadius: 8, overflow: "hidden" }}>
            <Image
              src="/images/home.jpg"
              alt="Clean family home protected with pest control"
              fill
              sizes="(max-width: 920px) 100vw, 48vw"
              quality={72}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="card feature-panel">
            <span className="eyebrow">Protect your family</span>
            <h2>Safe, smart pest control built around your property.</h2>
            <p>
              Every home is different. Novex checks the source of the problem,
              chooses the right treatment method and explains practical steps to
              help stop pests coming back.
            </p>
            <div className="grid" style={{ gap: 14 }}>
              {["Detailed inspection before treatment", "Options for homes, rentals and businesses", "Clear advice after every visit"].map((item) => (
                <strong key={item}>
                  <CheckCircle2 size={18} color="var(--brand)" /> {item}
                </strong>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container grid two-col">
          <div className="stat-circle">
            <span>
              <strong>5,000+</strong>
              satisfied customers
            </span>
          </div>
          <div>
            <span className="eyebrow" style={{ color: "#ffd9d4" }}>
              Trusted local pest control
            </span>
            <h2>With years of experience, our team delivers reliable protection.</h2>
            <p>
              We help remove unwanted pests and improve long-term prevention for
              homes and workplaces across South West Sydney.
            </p>
          </div>
        </div>
      </RevealSection>
      <RevealSection>
        <div className="container">
          <SectionHeader
            title="Comprehensive pest control solutions"
            text="Book targeted pest control services for the most common residential and commercial pest problems in NSW."
          />
          <div className="grid three-col">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link className="link-red" href="/services">
              View all pest control services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </RevealSection>
      <RevealSection className="section-red">
        <div className="container">
          <SectionHeader
            center
            light
            title="No more unwanted pests"
            text="We handle common pests across South West Sydney with precise treatments and practical prevention support."
          />
          <div className="grid three-col">
            {["Ants", "Mosquitoes", "Spiders", "Rodents", "Cockroaches", "Bed Bugs", "Fleas & Ticks"].map((pest) => (
              <div className="card feature-panel" key={pest} style={{ background: "transparent", borderColor: "rgba(255,255,255,.35)" }}>
                <strong>{pest}</strong>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 28 }}>
            Need help in {suburbs.slice(0, 5).join(", ")} or nearby?{" "}
            <Link className="link-red" style={{ color: "#fff" }} href="/locations">
              Check our service areas
            </Link>
          </p>
        </div>
      </RevealSection>
      <Process />
      <RevealSection>
        <div className="container grid two-col">
          <div>
            <span className="eyebrow">Why choose us</span>
            <h2>Tailored solutions for every property.</h2>
            <p>
              We combine local pest knowledge with careful product selection,
              clear communication and prevention-focused recommendations.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            {["Fast response", "Local knowledge", "Transparent advice", "Long-term prevention"].map((item) => (
              <div className="card feature-panel" key={item}>
                <h3>{item}</h3>
                <p>Practical service designed for real homes, busy families and commercial sites.</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
      <CTA />
    </>
  );
}
