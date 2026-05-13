type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
};

export function SectionHeader({ eyebrow, title, text, center, light }: SectionHeaderProps) {
  return (
    <div style={{ maxWidth: 760, margin: center ? "0 auto 42px" : "0 0 42px", textAlign: center ? "center" : "left" }}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {text ? <p className={light ? "muted" : ""}>{text}</p> : null}
    </div>
  );
}
