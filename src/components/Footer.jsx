import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}

          <div>

            <div className="logo">

              <div className="logo-symbol">
                <span>⚖</span>
              </div>

              <div>

                <div className="logo-name">
                  LEXORA
                </div>

                <span className="logo-tagline">
                  ADVOCATES & LEGAL CONSULTANTS
                </span>

              </div>

            </div>


            <p className="footer-description">
              A professional legal practice providing
              considered advice, representation and
              client-focused legal solutions.
            </p>

          </div>


          {/* NAVIGATION */}

          <div>

            <h3>Navigation</h3>

            <div className="footer-links">

              <Link to="/">
                Home
              </Link>

              <Link to="/about">
                About
              </Link>

              <Link to="/services">
                Services
              </Link>

              <Link to="/case-results">
                Case Results
              </Link>

              <Link to="/contact">
                Contact
              </Link>

            </div>

          </div>


          {/* SERVICES */}

          <div>

            <h3>Practice Areas</h3>

            <div className="footer-links">

              <Link to="/services">
                Civil Litigation
              </Link>

              <Link to="/services">
                Criminal Law
              </Link>

              <Link to="/services">
                Family Law
              </Link>

              <Link to="/services">
                Property Law
              </Link>

              <Link to="/services">
                Corporate Law
              </Link>

            </div>

          </div>


          {/* CONTACT */}

          <div>

            <h3>Contact</h3>

            <div className="footer-links">

              <span>
                +91 90000 00000
              </span>

              <span>
                office@lexora.in
              </span>

              <span>
                Hyderabad, Telangana
              </span>

              <span>
                Mon – Sat · 10 AM – 6 PM
              </span>

            </div>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Lexora Advocates. All Rights Reserved.
          </span>

          <span>
            Privacy Policy · Disclaimer
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;