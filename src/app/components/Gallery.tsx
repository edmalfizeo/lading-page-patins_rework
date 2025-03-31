import Image from "next/image";

const galleryImages = [
  "/assets/images/01.png",
  "/assets/images/02.png",
  "/assets/images/03.png",
  "/assets/images/04.png",
];

export default function Gallery() {
  return (
    <section className="max-w-[80rem] w-full px-8 py-20 mx-auto">
      {/* Título */}
      <header className="mb-12 text-center">
        <span className="block text-sm font-semibold tracking-wide text-snitap-sun mb-2">
          GALERIA DE FOTOS
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">#usesnitap por aí</h2>
      </header>

      {/* Galeria */}
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {galleryImages.map((src, i) => (
          <figure
            key={i}
            className={`flex flex-col overflow-hidden rounded-xl shadow-md transition duration-500 transform hover:scale-105 bg-white ${
              i % 2 === 1 ? "delay-200" : ""
            }`}
          >
            <Image
              src={src}
              alt={`Galeria ${i + 1}`}
              width={300}
              height={300}
              className=" w-full md:h-90 h-64 "
            />
            <figcaption className="flex items-center gap-2 px-4 py-3">
              <Image
                src="/assets/images/person.png"
                alt="Pessoa"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm font-medium">@laviniapereira</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
