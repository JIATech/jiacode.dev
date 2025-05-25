import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'React & Next.js', level: 95, color: '#61dafb' },
    { name: 'Node.js & Express', level: 90, color: '#68a063' },
    { name: 'Python & Django', level: 85, color: '#3776ab' },
    { name: 'TypeScript', level: 88, color: '#3178c6' },
    { name: 'PostgreSQL & MongoDB', level: 82, color: '#336791' },
    { name: 'AWS & Docker', level: 78, color: '#ff9900' },
  ];

  const stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '20+', label: 'Clientes Satisfechos' },
    { number: '100%', label: 'Dedicación' },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Sobre <span className="gradient-text">J.I.A.</span></h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Desarrollador Full Stack apasionado por la innovación</h3>
              <p>
                Soy J.I.A., un desarrollador con más de 5 años de experiencia creando 
                soluciones digitales que marcan la diferencia. Mi pasión por la tecnología 
                me ha llevado a especializarme en el desarrollo web moderno, siempre 
                buscando las mejores prácticas y las tecnologías más actuales.
              </p>
              <p>
                Creo firmemente que el código debe ser elegante, eficiente y escalable. 
                Cada proyecto es una oportunidad para aprender algo nuevo y crear 
                experiencias digitales que realmente importen.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h4>Tecnologías & Herramientas</h4>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="journey-section">
          <h4>Mi Jornada</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h5>2019 - Primeros Pasos</h5>
                <p>Comenzé mi jornada en el desarrollo web con HTML, CSS y JavaScript.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h5>2020 - React & Backend</h5>
                <p>Me especialicé en React y comencé a explorar el desarrollo backend con Node.js.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h5>2022 - Full Stack</h5>
                <p>Dominio completo del stack MERN/PERN y primeros proyectos freelance.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h5>2024 - jiacode.dev</h5>
                <p>Lanzamiento de mi marca personal y enfoque en soluciones empresariales.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
