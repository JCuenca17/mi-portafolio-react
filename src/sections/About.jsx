import profileImg from '../assets/profile.png';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__image-wrapper">
          <img className="about__img" src={profileImg} alt="Imagen de Perfil" />
        </div>

        <div className="about__content">
          <h2 className="about__title">Sobre Mí</h2>
          <p className="about__paragraph">
            Soy estudiante de Ingeniería de Sistemas en la Universidad Nacional de San Agustín de Arequipa (UNSA) con formación como desarrollador Front-End en el programa Oracle Next Education (ONE).
          </p>
          <p className="about__paragraph">
            He trabajado en prototipado web y mobile, he utilizado tecnologías como React, Django, Bootstrap y bases de datos MySQL y PostgreSQL. Además, tengo experiencia aplicando metodologías ágiles y desarrollando aplicaciones web con HTML, CSS, JavaScript y CRUD asíncronos.
          </p>
          <p className="about__paragraph">
            Me apasiona aprender nuevas tecnologías, colaborar en equipo y contribuir con soluciones. Busco oportunidades para hacer prácticas en desarrollo web, seguir creciendo profesionalmente y aportar en proyectos reales.
          </p>

        </div>
      </div>
    </section>
  );
}
