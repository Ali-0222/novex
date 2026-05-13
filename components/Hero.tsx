import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow" style={{ color: "#ffd9d4" }}>
            Pest control South West Sydney
          </span>
          <h1>Say goodbye to pests, hello to comfort.</h1>
          <p>
            Novex Pest Control helps protect homes and businesses with precise
            inspections, targeted treatments and practical prevention advice for
            termites, cockroaches, spiders, ants, rodents, bed bugs and more.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="button secondary" href="/contact">
              <CalendarCheck size={18} />
              Book an Inspection
            </Link>
            <Link className="button" href="/services">
              View Services <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-badges">
            <div>
              Same-day help
              <span>Fast response where available</span>
            </div>
            <div>
              Family-minded
              <span>Safer treatment planning</span>
            </div>
            <div>
              Local coverage
              <span>South West Sydney suburbs</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/images/hero.jpg"
            alt="Professional pest control technician treating a residential property"
            fill
            priority
            sizes="(max-width: 920px) 100vw, 48vw"
            quality={82}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
