import "./Header.css";
import { useState } from "react";
import AppointmentButton from "../AppointmentButton/AppointmentButton";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="header__container container">
        <h1 className="header__logo">
          Mov Saúde <span>Fisioterapia e Pilates</span>
        </h1>
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
              <a href="#journey" className="header__link">
                Sua Jornada
              </a>
            </li>
            <li>
              <a href="#gallery" className="header__link" onClick={() => setOpen(false)}>
                Galeria
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
        <AppointmentButton className="header__cta" />
      </div>
    </header>
  );
}

export default Header;
