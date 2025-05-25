import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración, pasarela de pagos y gestión de inventario.',
      image: '/project-placeholder.svg',
      category: 'web',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.',
      image: '/project-placeholder.svg',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Dashboard interactivo para visualización de datos con gráficos en tiempo real y reportes personalizados.',
      image: '/project-placeholder.svg',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud Architecture',
      description: 'Arquitectura de microservicios escalable implementada en AWS con Docker y Kubernetes.',
      image: '/project-placeholder.svg',
      category: 'cloud',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Design System',
      description: 'Sistema de diseño completo con componentes reutilizables y documentación interactiva.',
      image: '/project-placeholder.svg',
      category: 'design',
      technologies: ['Figma', 'Storybook', 'React', 'Styled Components'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'IoT Dashboard',
      description: 'Panel de control para dispositivos IoT con monitoreo en tiempo real y alertas automáticas.',
      image: '/project-placeholder.svg',
      category: 'web',
      technologies: ['Next.js', 'WebSocket', 'InfluxDB', 'Grafana'],
      liveUrl: 'https://portfolio.jiacode.dev',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'cloud', name: 'Cloud', count: projects.filter(p => p.category === 'cloud').length },
    { id: 'design', name: 'Design', count: projects.filter(p => p.category === 'design').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Mi <span className="gradient-text">Portfolio</span></h2>
        <p className="portfolio-subtitle">
          Una selección de proyectos que demuestran mi experiencia y pasión por crear soluciones innovadoras
        </p>

        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
              <span className="count">({category.count})</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>👁️</span> Ver Proyecto
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>📁</span> Código
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && <span className="featured-badge">Destacado</span>}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <h3>¿Quieres ver más proyectos?</h3>
          <p>Visita mis portfolios completos para explorar todos mis trabajos y casos de estudio detallados.</p>
          <div className="cta-buttons">
            <a href="https://portfolio.jiacode.dev" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Portfolio Principal
            </a>
            <a href="https://admin.jiacode.dev" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Portfolio Admin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
