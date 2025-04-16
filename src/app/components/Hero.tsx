import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-[80rem] w-full px-8 py-10 mx-auto flex flex-col lg:flex-row items-center justify-between overflow-hidden ">
      {/* Texto principal */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold max-w-xl leading-tight">
          Snitap, sua vida mais{" "}
          <span className="inline-block align-middle h-[4.6875rem] overflow-hidden translate-y-[0.7rem] md:-translate-y-[0.2rem]">
            <span className="block animate-slideUpFull">
              <span className="block h-[4.6875rem] text-snitap-sky-mid">
                radical
              </span>
              <span className="block h-[4.6875rem] text-snitap-joy-mid">
                divertida
              </span>
              <span className="block h-[4.6875rem] text-snitap-leaf-mid">
                saudável
              </span>
              <span className="block h-[4.6875rem] text-snitap-sky-mid">
                radical
              </span>
            </span>
          </span>
        </h1>

        {/* Botões */}
        <div className="flex flex-wrap gap-8 md:mt-12">
          <a
            href="#"
            className="flex items-center gap-3 px-12 py-6 bg-snitap-sun rounded-full shadow transition-transform hover:scale-110"
          >
            <Image
              src="/assets/icons/shopping-bag.svg"
              alt="Comprar"
              width={24}
              height={24}
            />
            <span className="font-medium">COMPRAR AGORA</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 transition-transform hover:scale-110"
          >
            <span className="p-6 rounded-full bg-white shadow flex">
              <Image
                src="/assets/icons/play.svg"
                alt="Play"
                width={16}
                height={16}
              />
            </span>
            <span className="font-medium">VEJA EM AÇÃO</span>
          </a>
        </div>
      </div>

      {/* Imagens lado direito */}
      <div className="w-full max-w-md h-[20rem] lg:flex-1 lg:h-[30.5rem] relative mt-10 lg:mt-0 mx-auto lg:mx-0">
        <div className="w-full h-full relative">
          <Image
            src="/assets/hero/Ellipse.svg"
            alt="Fundo"
            width={400}
            height={400}
            className="absolute top-[3%] w-[90%] left-[5%] lg:w-[94%] lg:left-auto animate-slideInDelay"
          />
          <Image
            src="/assets/hero/patins-image.png"
            alt="Patins"
            width={500}
            height={500}
            className="absolute z-10 right-[1rem] md:right-[2%] md:w-[85%] max-w-[300px] sm:max-w-[400px]
 lg:w-full lg:max-w-none animate-slideIn"
          />
          <Image
            src="/assets/hero/Stars 1.svg"
            alt="Estrela 1"
            width={88}
            height={88}
            className="absolute top-[30%] left-[5%] max-w-[4rem] lg:left-0 lg:max-w-[5.5rem] opacity-0 animate-slideIn animate-appear"
          />
          <Image
            src="/assets/hero/Stars 2.svg"
            alt="Estrela 2"
            width={40}
            height={40}
            className="absolute bottom-[35%] right-[5%] max-w-[2rem] lg:right-0 lg:max-w-[2.5rem] animate-slideIn"
          />
        </div>
      </div>
    </section>
  );
}
