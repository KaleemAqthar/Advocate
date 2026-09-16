import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">

        {/* LOGO */}
        <NavLink to="/" className="logo" onClick={closeMenu}>

          <div className="logo-symbol">
            <span>⚖</span>
          </div>

          <div className="logo-text">
            <div className="logo-name">
              LEXORA
            </div>

            <span className="logo-tagline">
              ADVOCATES & LEGAL CONSULTANTS
            </span>
          </div>

        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <nav className="nav-links">

          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/services">
            Services
          </NavLink>

          <NavLink to="/case-results">
            Case Results
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>

        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/case-results" onClick={closeMenu}>
          Case Results
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

      </nav>

      {/* OVERLAY */}
      <div
        className={`mobile-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

    </header>
  );
}

export default Navbar;