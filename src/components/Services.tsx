import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Desarrollo Web Full Stack',
      description: 'Aplicaciones web completas desde el frontend hasta el backend, con las mejores prácticas y tecnologías modernas.',
      features: ['React/Next.js', 'Node.js/Express', 'Bases de datos', 'APIs RESTful'],
      color: '#4f46e5'
    },
    {
      icon: '📱',
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas y multiplataforma que ofrecen experiencias fluidas y rendimiento óptimo en cualquier dispositivo.',
      features: ['React Native', 'Flutter', 'iOS & Android', 'PWAs'],
      color: '#06b6d4'
    },
    {
      icon: '☁️',
      title: 'Soluciones Cloud',
      description: 'Arquitecturas escalables en la nube con enfoque en seguridad, rendimiento y disponibilidad 24/7.',
      features: ['AWS/Azure', 'Docker', 'CI/CD', 'Microservicios'],
      color: '#10b981'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Diseños intuitivos y atractivos que priorizan la experiencia del usuario y la conversión.',
      features: ['Figma/Adobe XD', 'Prototipado', 'Design Systems', 'Responsive Design'],
      color: '#f59e0b'
    },
    {
      icon: '⚡',
      title: 'Optimización Web',
      description: 'Mejora del rendimiento, SEO y velocidad de carga para maximizar el impacto de tu presencia digital.',
      features: ['Performance', 'SEO técnico', 'Core Web Vitals', 'Analytics'],
      color: '#ef4444'
    },
    {
      icon: '🔧',
      title: 'Consultoría Técnica',
      description: 'Asesoramiento especializado para tomar las mejores decisiones tecnológicas en tu proyecto.',
      features: ['Arquitectura', 'Stack tecnológico', 'Best practices', 'Code review'],
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Mis <span className="gradient-text">Servicios</span></h2>
        <p className="services-subtitle">
          Soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ '--accent-color': service.color } as React.CSSProperties}>
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-overlay"></div>
            </div>
          ))}
        </div>

        <div className="process-section">
          <h3>Mi Proceso de Trabajo</h3>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h4>Análisis</h4>
              <p>Entiendo tus necesidades y objetivos para crear la estrategia perfecta.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h4>Diseño</h4>
              <p>Creo prototipos y wireframes que materializan la visión del proyecto.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h4>Desarrollo</h4>
              <p>Implemento la solución con código limpio y las mejores prácticas.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h4>Testing</h4>
              <p>Pruebas exhaustivas para garantizar calidad y funcionamiento óptimo.</p>
            </div>
            <div className="process-step">
              <div className="step-number">05</div>
              <h4>Deploy</h4>
              <p>Lanzamiento y configuración en producción con monitoreo continuo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
