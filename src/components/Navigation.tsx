import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand" onClick={scrollToTop}>
            <span className="brand-text gradient-text">jiacode.dev</span>
          </div>

          <div className="nav-links desktop-only">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="nav-link">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contacto
            </button>
          </div>

          <div className="nav-actions desktop-only">
            <a 
              href="https://portfolio.jiacode.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary nav-cta"
            >
              Ver Portfolio
            </a>
          </div>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('services')} className="mobile-nav-link">
              Servicios
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="mobile-nav-link">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
              Contacto
            </button>
            <div className="mobile-menu-actions">
              <a 
                href="https://portfolio.jiacode.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Ver Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
