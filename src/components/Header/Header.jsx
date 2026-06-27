import "./Header.css";

function Header() {
  return (
    <header className="header__container container">
      <h1 className="header__logo">Mov Saúde</h1>
      <nav className="header__nav">
        <ul className="header__menu">
          <li>
            <a href="#" className="header__link">
              Início
            </a>
          </li>
          <li>
            <a href="services" className="header__link">
              Serviços
            </a>
          </li>
          <li>
            <a href="about" className="header__link">
              Sobre
            </a>
          </li>
          <li>
            <a href="contact" className="header__link">
              Contato
            </a>
          </li>
        </ul>
      </nav>
      <a
        href="https://wa.me/5511910000570"
        className="btn btn--primary"
        target="_blank"
      >
        Agendar
      </a>
    </header>
  );
}

export default Header;
