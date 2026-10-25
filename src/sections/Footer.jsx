import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__wordmark">Feastora</span>
          <p className="footer__tagline">
            Event management for corporate and social occasions.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <a href="#services" className="footer__link">Services</a>
          <a href="#approach" className="footer__link">Approach</a>
          <a href="#faq" className="footer__link">FAQ</a>
          <a href="#contact" className="footer__link">Contact</a>
        </nav>

        <div className="footer__contact">
          <span className="footer__contact-label">Contact</span>
          <p className="footer__contact-placeholder">
            Email and phone details to be added once confirmed.
          </p>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Feastora. Wordmark shown is a
          temporary placeholder.
        </p>
      </div>
    </footer>
  );
}

export default Footer;