import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Novex Pest Control home">
      <Image
        className="logo-image"
        src="/images/novex-logo.jpeg"
        alt="Novex Pest Control Services"
        width={156}
        height={94}
        priority
      />
    </Link>
  );
}
