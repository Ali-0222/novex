import { ArrowRight, Bug } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  slug: string;
  summary: string;
  image: string;
};

export function ServiceCard({ title, slug, summary, image }: ServiceCardProps) {
  return (
    <article className="card service-card">
      <div className="service-card-body">
        <h3>
          <Bug size={17} color="var(--brand)" /> {title}
        </h3>
        <p>{summary}</p>
        <Link className="link-red" href={`/contact?service=${slug}`}>
          Book Now <ArrowRight size={14} />
        </Link>
      </div>
      <div className="service-card-image">
        <Image
          src={image}
          alt={`${title} service by Novex Pest Control`}
          fill
          sizes="(max-width: 920px) 100vw, 33vw"
          quality={70}
          style={{ objectFit: "cover" }}
        />
      </div>
    </article>
  );
}
