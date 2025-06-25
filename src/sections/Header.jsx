import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Hola, soy <span>José Luis</span></h1>
        <p className="header__subtitle">Desarrollador Front-End en formación</p>

        <div className="header__buttons">
          <a
            className="header__cv"
            href="https://drive.google.com/file/d/1WZzcWQzharChc4MeeCKhOt9VMReg0ixI/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Descargar CV
          </a>
        </div>

        <ul className="header__social">
          <li><a href="https://github.com/JCuenca17" target="_blank" rel="noreferrer"><FaGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/jcuenca17/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://www.instagram.com/josecuencag/" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
    </header>
  );
}
