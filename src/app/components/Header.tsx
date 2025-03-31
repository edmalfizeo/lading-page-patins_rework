import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-[80rem] w-full px-8 py-5 mx-auto flex items-center justify-between">
      <a href="#">
        <Image
          src="/assets/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="transition-transform duration-500 hover:rotate-90"
        />
      </a>

      <a href="#" className="relative">
        <Image
          src="/assets/icons/shopping-bag.svg"
          alt="Sacola de compras"
          width={32}
          height={32}
          className="transition-transform duration-500 hover:-rotate-[30deg]"
        />
        <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-yellow-400 text-xs font-medium font-inter leading-[1.3]">
          1
        </span>
      </a>
    </header>
  );
}
