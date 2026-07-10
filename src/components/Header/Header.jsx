import "./Header.css";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__container container">
        <h1 className="header__logo">Mov Saúde</h1>
        <nav className="header__nav">
          <ul className={`header__menu ${open ? "header__menu--open" : ""}`}>
            <li>
              <a href="#" className="header__link">
                Início
              </a>
            </li>
            <li>
              <a href="#services" className="header__link">
                Serviços
              </a>
            </li>
            <li>
              <a href="#about" className="header__link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="header__link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__hamburger" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <a
          href="https://wa.me/5511910000570"
          className="btn btn--primary header__cta"
          target="_blank"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

export default Header;
