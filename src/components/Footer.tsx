import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/jiacode',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/jiacode',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/jiacode',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: '📧',
      url: 'mailto:hello@jiacode.dev',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' }
  ];

  const portfolioLinks = [
    { name: 'Portfolio Principal', href: 'https://portfolio.jiacode.dev' },
    { name: 'Portfolio Admin', href: 'https://admin.jiacode.dev' },
    { name: 'Blog', href: 'https://blog.jiacode.dev' },
    { name: 'Recursos', href: 'https://resources.jiacode.dev' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="brand-logo">
                <h2 className="brand-name">
                  <span className="gradient-text">jiacode.dev</span>
                </h2>
                <p className="brand-tagline">
                  Transformando ideas en experiencias digitales excepcionales
                </p>
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--accent-color': social.color } as React.CSSProperties}
                    aria-label={social.name}
                  >
                    <span>{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-links">
              <div className="link-group">
                <h4>Navegación</h4>
                <ul>
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Mis Proyectos</h4>
                <ul>
                  {portfolioLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="link-group">
                <h4>Servicios</h4>
                <ul>
                  <li><a href="#services">Desarrollo Web</a></li>
                  <li><a href="#services">Apps Móviles</a></li>
                  <li><a href="#services">Soluciones Cloud</a></li>
                  <li><a href="#services">Consultoría</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-newsletter">
            <div className="newsletter-content">
              <h3>¿Quieres estar al día?</h3>
              <p>Suscríbete para recibir las últimas noticias sobre tecnología y mis proyectos</p>
            </div>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="newsletter-input"
              />
              <button className="newsletter-btn">
                Suscribirse
              </button>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-info">
              <p>&copy; {currentYear} jiacode.dev. Todos los derechos reservados.</p>
              <div className="footer-meta">
                <span>Hecho con ❤️ y mucho ☕</span>
                <span>•</span>
                <span>Desarrollado con React & TypeScript</span>
              </div>
            </div>
            
            <button 
              className="scroll-to-top"
              onClick={scrollToTop}
              aria-label="Volver arriba"
            >
              <span>⬆️</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="footer-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
