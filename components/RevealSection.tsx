"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useEffect, useRef, useState } from "react";

type RevealSectionProps = PropsWithChildren<{
  className?: string;
}>;

export function RevealSection({ className = "", children }: RevealSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`section reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" } as CSSProperties}
    >
      {children}
    </section>
  );
}
