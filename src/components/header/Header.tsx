import Menu from "../menu/Menu";
import Image from "next/image";
import logo from "@/public/img/logo.png";

export default function Header() {
  return (
    <header className="w-full flex h-20 justify-between px-10">
      <div className="flex items-center">
        <Image src={logo} alt="teste" height={40} />
        <p className="font-bold pl-2 text-2xl text-center">Leo</p>
        <p className="text-2xl">Santos</p>
      </div>
      <Menu />
    </header>
  );
}
