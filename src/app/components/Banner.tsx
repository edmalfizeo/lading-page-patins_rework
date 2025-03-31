import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full overflow-hidden bg-snitap-gradient py-4">
      <div className="whitespace-nowrap animate-marquee flex gap-8">
        {Array.from({ length: 40 }).map((_, i) => (
          <Image
            key={i}
            src="/assets/banner.svg"
            alt={`Logo ${i + 1}`}
            width={500}
            height={40}
            className="inline-block"
          />
        ))}
      </div>
    </section>
  );
}
