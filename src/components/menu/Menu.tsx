"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", pagina: "Home" },
    { href: "/projetos", pagina: "Projetos" },
    { href: "/about", pagina: "Sobre Mim" },
    { href: "/contact", pagina: "Contato" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center">
      <ul className="hidden md:flex items-center gap-20 w-full">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`menu-font hover:text-white transition-all duration-300 ${
                pathname === item.href ? "text-white" : "text-[#ffffff50]"
              }`}
            >
              {item.pagina}
            </Link>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {isOpen && (
        <div className="absolute top-20 h-11/12 left-0 w-full bg-[#222222] backdrop-blur-sm md:hidden shadow-2xl">
          <ul className="flex flex-col h-full items-center justify-center gap-4 px-10 py-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`menu-font text-2xl hover:text-white transition-all duration-300 block ${
                    pathname === item.href ? "text-white" : "text-[#ffffff50]"
                  }`}
                  onClick={handleNavClick}
                >
                  {item.pagina}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
