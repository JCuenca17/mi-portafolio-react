import '../styles/Projects.css';

/* import portafolioImg from '../assets/projects/portafolio.png';
import agroImg from '../assets/projects/agro.png';
import pedidosImg from '../assets/projects/pedidos.png'; */

const projects = [
    {
        title: "Portafolio Web",
        description:
            "Diseño minimalista hecho con React, Vite y CSS puro. Incluye validaciones, secciones animadas y responsive.",
        tech: ["React", "Vite", "CSS"],
        link: "https://github.com/JCuenca17/mi-portafolio-react",
        image: portafolioImg
    },
    {
        title: "Sistema de Recomendaciones Agrícolas",
        description:
            "Aplicación para gestionar visitas técnicas y observaciones por cultivo. Hecho en Django con PostgreSQL.",
        tech: ["Django", "PostgreSQL"],
        link: "https://github.com/JCuenca17/agro-recomendaciones",
        image: agroImg
    },
    {
        title: "Control de Pedidos Secuenciales",
        description:
            "Simulación multihilo en Java donde los pedidos pasan por Picking, Embalaje y Envío en orden controlado.",
        tech: ["Java", "Threads"],
        link: "https://github.com/JCuenca17/control-pedidos-java",
        image: pedidosImg
    }
];

export default function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h2 className="projects__title">Proyectos</h2>
                <p className="projects__subtitle">
                    Algunos trabajos que he desarrollado como práctica o parte de formaciones.
                </p>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <div className="project__card" key={index}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project__image"
                            />
                            <h3 className="project__title">{project.title}</h3>
                            <p className="project__description">{project.description}</p>
                            <ul className="project__tech">
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                            <div className="project__links">
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    Repositorio
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noreferrer">
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}