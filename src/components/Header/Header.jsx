import "./Header.css";
import { useEffect, useRef, useState } from "react";
import AppointmentButton from "../AppointmentButton/AppointmentButton";

function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia("(min-width: 1025px)");
    const closeOnDesktop = (event) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__container container">
        <h1 className="header__logo">
          Mov Saúde <span>Fisioterapia e Pilates</span>
        </h1>
        <nav className={`header__nav ${open ? "header__nav--open" : ""}`} aria-label="Navegação principal">
          <ul id="header-menu" className={`header__menu ${open ? "header__menu--open" : ""}`} onClick={(event) => {
            if (event.target.closest("a")) setOpen(false);
          }}>
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
              <a href="#contact" className="header__link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button ref={toggleRef} type="button" className="header__hamburger" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="header-menu" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <AppointmentButton className="header__cta" />
      </div>
    </header>
  );
}

export default Header;
