import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 w-full mt-10 md:mt-24 px-6 py-12">
      <div className="max-w-[80rem] mx-auto flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
        {/* Logo + Nome */}
        <div className="flex items-center gap-2 text-base font-bold">
          <Image src="/assets/logo.svg" alt="Logo" width={22} height={22} />
          Snitap
        </div>

        {/* Links */}
        <nav className="flex flex-col items-center gap-2 text-sm text-zinc-600 lg:flex-row lg:gap-6">
          <a href="#" className="hover:text-black transition">
            Sobre
          </a>
          <a href="#" className="hover:text-black transition">
            Nossas lojas
          </a>
          <a href="#" className="hover:text-black transition">
            Política de privacidade
          </a>
        </nav>

        {/* Redes sociais */}
        <div className="flex items-center gap-4">
          {["instagram", "facebook", "youtube", "tiktok"].map((icon) => (
            <a key={icon} href="#" title={icon}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover-snitap-bg">
                <Image
                  src={`/assets/icons/${icon}.svg`}
                  alt={icon}
                  width={24}
                  height={24}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
