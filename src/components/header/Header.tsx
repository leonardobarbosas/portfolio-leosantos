import Menu from "../menu/Menu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex h-20 justify-between px-10">
      <div className="flex items-center">
        <Image src="/img/logo.png" alt="teste" height={40} width={50} />
        <p className="font-bold pl-2 text-2xl text-center">Leo</p>
        <p className="text-2xl">Santos</p>
      </div>
      <Menu />
    </header>
  );
}
