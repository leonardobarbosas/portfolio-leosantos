export default function Menu() {
  return (
    <nav className="w-11/12 flex h-14 bg-[#1B1B1B] rounded-4xl border-2 border-[#262626]">
      <ul className="flex w-full justify-around items-center">
        <li>
          <a href="#about">SOBRE</a>
        </li>
        <li>
          <a href="#projects" className="font-bold text-[#E63E21]">
            LEONARDO SANTOS
          </a>
        </li>
        <li>
          <a href="#contact">CONTATO</a>
        </li>
      </ul>
    </nav>
  );
}
