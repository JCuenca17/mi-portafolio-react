import '../styles/Skills.css';

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaPython,
  FaJava,
  FaGitAlt,
} from 'react-icons/fa';
import { SiDjango, SiMysql, SiUnity } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';
import '../styles/Skills.css';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 />, level: 'Avanzado' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 'Avanzado' },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 'Intermedio' },
  { name: 'React', icon: <FaReact />, level: 'Intermedio' },
  { name: 'Bootstrap', icon: <FaBootstrap />, level: 'Intermedio' },
  { name: 'Django', icon: <SiDjango />, level: 'Intermedio' },
  { name: 'Python', icon: <FaPython />, level: 'Intermedio' },
  { name: 'Java', icon: <FaJava />, level: 'Intermedio' },
  { name: 'SQL', icon: <SiMysql />, level: 'Intermedio' },
  { name: 'C#', icon: <DiVisualstudio />, level: 'Básico' },
  { name: 'Git', icon: <FaGitAlt />, level: 'Intermedio' },
  { name: 'Unity', icon: <SiUnity />, level: 'Básico' },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Habilidades Técnicas</h2>
        <div className="skills__grid">
          {skillsData.map((skill, index) => (
            <div className="skill__item" key={index}>
              <span className="skill__icon">{skill.icon}</span>
              <span className="skill__name">{skill.name}</span>
              <span className="skill__level">{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
