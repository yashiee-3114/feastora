import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';
import heroImage from '../assets/images/hero.jpg';
import './Hero.css';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero__text">
        <div className={`hero__eyebrow ${isVisible ? 'hero__eyebrow--visible' : ''}`}>
          Event management — corporate &amp; social
        </div>

        <h1 className={`hero__headline ${isVisible ? 'hero__headline--visible' : ''}`}>
          Thoughtfully planned.
          <br />
          <span className="hero__headline-accent">Memorably executed.</span>
        </h1>

        <p className={`hero__subcopy ${isVisible ? 'hero__subcopy--visible' : ''}`}>
          Feastora designs and manages conferences, launches, weddings, and
          celebrations — handling the details so you can focus on the moment.
        </p>

        <div className={`hero__actions ${isVisible ? 'hero__actions--visible' : ''}`}>
          <Button href="#contact" variant="primary">
            Start planning your event
          </Button>
          <Button href="#services" variant="secondary">
            Explore our services
          </Button>
        </div>
      </div>

      <div className={`hero__image-wrap ${isVisible ? 'hero__image-wrap--visible' : ''}`}>
        <img
          src={heroImage}
          alt="Elegant event setting with gold accents"
          className="hero__image"
        />
        <div className="hero__image-accent" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Hero;