import React, { useState } from "react";
import "../styles/Nav.css";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="navbar__logo">Mi Portafolio</div>

      <nav className={`navbar__links ${menuOpen ? "open" : ""}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#academic" onClick={() => setMenuOpen(false)}>Formación</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
      </nav>

      <button className="navbar__toggle" onClick={toggleMenu}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </header>
  );
}
