import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Novex Pest Control",
  description:
    "Contact Novex Pest Control for pest control quotes, inspections and bookings across South West Sydney."
};

export default function ContactPage() {
  return (
    <>
      <RevealSection>
        <div className="container grid two-col">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Let's get your property protected"
              text="Tell us what pest issue you are dealing with and where you are located. We will respond with the best next step for your home or business."
            />
            <p>
              <Mail size={16} color="var(--brand)" /> {site.email}
              <br />
              <Phone size={16} color="var(--brand)" /> {site.phone}
              <br />
              Online bookings and call-outs only
            </p>
          </div>
          <ContactForm />
        </div>
      </RevealSection>
    </>
  );
}
