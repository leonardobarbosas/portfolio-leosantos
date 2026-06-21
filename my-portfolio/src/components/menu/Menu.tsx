export default function Menu() {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-30">
        <li>
          <a href="/" className="menu-font">
            Home
          </a>
        </li>
        <li>
          <a href="/projetos" className="menu-font">
            Projetos
          </a>
        </li>
        <li>
          <a href="/about" className="menu-font">
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="/contact" className="menu-font">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}
