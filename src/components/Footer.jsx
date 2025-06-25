import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__text">
          <h3 className="footer__subtitle">&copy; 2023 Todos los derechos reservados</h3>
          <h3 className="footer__subtitle">Desarrollado por José Cuenca</h3>
          <ul className="footer__network">
            <li className="title__network-item">
              <a href="https://github.com/JCuenca17" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </li>
            <li className="title__network-item">
              <a href="https://www.linkedin.com/in/jcuenca17/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className="title__network-item">
              <a href="https://www.instagram.com/josecuencag/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
