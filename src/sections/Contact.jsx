import { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Mensaje enviado correctamente');
      // Aquí puedes integrar EmailJS o similar
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Contáctame</h2>
        <p className="contact__subtitle">¿Tienes un proyecto en mente o deseas colaborar? Estoy disponible para trabajar.</p>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form__group">
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="form__error">{errors.name}</span>}
          </div>

          <div className="form__group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="form__error">{errors.email}</span>}
          </div>

          <div className="form__group">
            <label htmlFor="subject">Asunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'input-error' : ''}
            />
            {errors.subject && <span className="form__error">{errors.subject}</span>}
          </div>

          <div className="form__group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'input-error' : ''}
            ></textarea>
            {errors.message && <span className="form__error">{errors.message}</span>}
          </div>

          <button type="submit" className="contact__submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
