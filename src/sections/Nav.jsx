import { useState, useEffect } from 'react';
import Button from '../components/Button.jsx';
import './Nav.css';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Contact', href: '#contact' },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleLinkClick() {
    setIsOpen(false);
  }

  return (
    <header className="nav">
      <div className="nav__container">
        <a href="#top" className="nav__wordmark" aria-label="Feastora — home">
          <svg
            className="nav__wordmark-mark"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M24 6c-1 5-5 7-9 8 4 2 7 5 8 9 1-4 4-7 8-9-4-1-8-3-7-8z"
              fill="currentColor"
            />
            <path
              d="M24 20c-3 6-9 9-16 9 5 3 11 4 16 2 5 2 11 1 16-2-7 0-13-3-16-9z"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
            <circle cx="24" cy="15" r="1.4" fill="currentColor" />
          </svg>
          Feastora
        </a>

        <nav className="nav__links nav__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta nav__cta--desktop">
          <Button href="#contact" variant="primary">
            Start planning
          </Button>
        </div>

        <button
          className="nav__toggle"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`nav__toggle-bar ${isOpen ? 'nav__toggle-bar--open-1' : ''}`} />
          <span className={`nav__toggle-bar ${isOpen ? 'nav__toggle-bar--open-2' : ''}`} />
          <span className={`nav__toggle-bar ${isOpen ? 'nav__toggle-bar--open-3' : ''}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`nav__mobile-menu ${isOpen ? 'nav__mobile-menu--open' : ''}`}
        aria-label="Primary mobile"
        aria-hidden={!isOpen}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav__mobile-link"
            onClick={handleLinkClick}
            tabIndex={isOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
        <Button href="#contact" variant="primary" onClick={handleLinkClick}>
          Start planning
        </Button>
      </nav>
    </header>
  );
}

export default Nav;