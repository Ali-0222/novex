import { ClipboardCheck, Shield, SprayCan } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { RevealSection } from "@/components/RevealSection";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Inspection",
    text: "We inspect activity, entry points and risk areas before recommending the most suitable treatment."
  },
  {
    icon: Shield,
    title: "Prevention",
    text: "We reduce food, shelter and access points so pests are less likely to return after treatment."
  },
  {
    icon: SprayCan,
    title: "Treatment",
    text: "We apply targeted products with care for people, pets, surfaces and the surrounding environment."
  }
];

export function Process() {
  return (
    <RevealSection>
      <div className="container">
        <SectionHeader
          center
          title="How we get rid of pests"
          text="A clear process helps every pest control visit feel simple, safe and properly handled."
        />
        <div className="grid three-col">
          {steps.map((step, index) => (
            <div className="card feature-panel" key={step.title}>
              <span className="icon-pill">
                <step.icon size={20} />
              </span>
              <strong style={{ float: "right" }}>{String(index + 1).padStart(2, "0")}</strong>
              <h3 style={{ marginTop: 22 }}>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
