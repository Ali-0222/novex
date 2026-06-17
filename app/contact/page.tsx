import type { Metadata } from "next";
import { Clock3, Mail, MapPinned, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Novex Pest Control",
  description:
    "Contact Novex Pest Control for pest control quotes, inspections and bookings across Blacktown, Seven Hills, Quakers Hill and North West Sydney."
};

export default function ContactPage() {
  return (
    <>
      <RevealSection>
        <div className="container">
          <SectionHeader
            center
            eyebrow="Contact"
            title="Let’s get your property protected"
            text="Tell us what pest issue you are dealing with and where you are located. We will respond with the best next step for your home or business."
          />
          <div className="contact-layout">
            <aside className="card contact-card">
              <span className="eyebrow">Quick contact</span>
              <h2>Fast quotes, clear next steps, no fluff.</h2>
              <p>
                We support homes, rentals and business properties across Blacktown and North West Sydney with practical pest control advice and prompt follow-up.
              </p>
              <div className="contact-stack">
                <div>
                  <Mail size={16} color="var(--brand)" />
                  <span>{site.email}</span>
                </div>
                <div>
                  <Phone size={16} color="var(--brand)" />
                  <span>{site.phone}</span>
                </div>
                <div>
                  <MapPinned size={16} color="var(--brand)" />
                  <span>Online bookings only</span>
                </div>
                <div>
                  <Clock3 size={16} color="var(--brand)" />
                  <span>Response during business hours</span>
                </div>
              </div>
              <div className="contact-note">
                <ShieldCheck size={18} />
                <span>Safe, targeted pest control for the property you need protected.</span>
              </div>
            </aside>
            <div className="card contact-form-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
