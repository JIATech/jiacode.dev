import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@jiacode.dev',
      link: 'mailto:hello@jiacode.dev'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/jiacode',
      link: 'https://linkedin.com/in/jiacode'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: '@jiacode',
      link: 'https://github.com/jiacode'
    },
    {
      icon: '🌍',
      title: 'Ubicación',
      value: 'España',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">¡Trabajemos <span className="gradient-text">Juntos</span>!</h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? Me encantaría conocer tu idea y ayudarte a hacerla realidad.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Hablemos de tu proyecto</h3>
              <p>
                Siempre estoy abierto a discutir nuevas oportunidades, proyectos interesantes 
                o simplemente charlar sobre tecnología. No dudes en contactarme.
              </p>
            </div>

            <div className="contact-methods">
              {contactInfo.map((method, index) => (
                <a 
                  key={index} 
                  href={method.link} 
                  className="contact-method"
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="method-icon">
                    <span>{method.icon}</span>
                  </div>
                  <div className="method-info">
                    <div className="method-title">{method.title}</div>
                    <div className="method-value">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Disponible para nuevos proyectos</span>
              </div>
              <p className="response-time">
                📅 Tiempo de respuesta: ~24 horas
              </p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Tipo de Proyecto *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un tipo...</option>
                  <option value="web-development">Desarrollo Web</option>
                  <option value="mobile-app">Aplicación Móvil</option>
                  <option value="cloud-solution">Solución Cloud</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="consultation">Consultoría</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto, objetivos, timeline y cualquier detalle relevante..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''} ${submitted ? 'submitted' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : submitted ? (
                  <>
                    ✅ ¡Mensaje enviado!
                  </>
                ) : (
                  <>
                    🚀 Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="quick-contact">
          <h4>¿Prefieres un contacto más directo?</h4>
          <div className="quick-actions">
            <a href="mailto:hello@jiacode.dev" className="quick-action">
              <span>📧</span>
              Enviar Email
            </a>
            <a href="https://cal.com/jiacode" target="_blank" rel="noopener noreferrer" className="quick-action">
              <span>📅</span>
              Agendar Reunión
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="quick-action">
              <span>💬</span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
