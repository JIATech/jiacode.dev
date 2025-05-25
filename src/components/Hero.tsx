import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [secondsInTech, setSecondsInTech] = useState(0);
  const [microseconds, setMicroseconds] = useState(0);

  // Fecha de inicio en tecnología (15 de noviembre de 2021, 9:00 AM UTC-3)
  const START_DATE = '2021-11-15T09:00:00-03:00';

  useEffect(() => {
    setIsLoaded(true);

    // Función para calcular segundos exactos desde START_DATE
    const updateCounter = () => {
      const now = new Date();
      const startDate = new Date(START_DATE);
      const diffMs = now.getTime() - startDate.getTime();
      const diffSec = Math.floor(diffMs / 1000);
      setSecondsInTech(diffSec);
      
      // Microsegundos basados en los milisegundos reales para mayor realismo
      const realMicroseconds = (diffMs % 1000) * 1000;
      setMicroseconds(Math.floor(realMicroseconds));
    };

    // Actualizar contador más frecuentemente para efecto fluido
    updateCounter(); // Inicialización inmediata
    const interval = setInterval(updateCounter, 16); // ~60fps para fluidez

    return () => {
      clearInterval(interval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, soy <span className="gradient-text" data-text="J.I.A.">J.I.A.</span>
            </h1>
            <h2 className="hero-subtitle">
              Desarrollador Full Stack & Creador Digital
            </h2>
            <p className="hero-description">
              Transformo ideas en experiencias digitales excepcionales. 
              Especializado en desarrollo web moderno, aplicaciones móviles y soluciones tecnológicas innovadoras.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('portfolio')}
              >
                Ver mi trabajo
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Trabajemos juntos
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <div className="card-header">
                <div className="card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="card-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>{' '}
                  <span className="code-variable">jiacode</span>{' '}
                  <span className="code-operator">=</span>{' '}
                  <span className="code-string">{'{'}</span>
                </div>
                <div className="code-line indent">
                  <span className="code-property">passion</span>
                  <span className="code-operator">:</span>{' '}
                  <span className="code-string">'coding'</span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">experience</span>
                  <span className="code-operator">:</span>{' '}
                  <span className="code-number">
                    {secondsInTech.toLocaleString()}s
                  </span>
                  <span className="code-microseconds">
                    .{microseconds.toString().padStart(6, '0')}
                  </span>,
                </div>
                <div className="code-line indent">
                  <span className="code-property">skills</span>
                  <span className="code-operator">:</span>{' '}
                  <span className="code-array">['React', 'Node.js', 'Python']</span>
                </div>
                <div className="code-line">
                  <span className="code-string">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
