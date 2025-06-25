import unsa from '../assets/unsa.jpg';
import alura from '../assets/alura.png';
import one from '../assets/one.png';
import hkust from '../assets/hkust.png';
import '../styles/Academic.css';

const studies = [
  {
    logo: unsa,
    title: 'Ingeniería de Sistemas',
    institution: 'Universidad Nacional de San Agustín de Arequipa (UNSA)',
    date: '2018 - En curso',
    //link: 'https://www.unsa.edu.pe/',
  },
  {
    logo: one,
    title: 'Formación React',
    institution: 'Oracle + Alura Latam · 68 hrs',
    date: 'Junio 2023',
    link: 'https://app.aluracursos.com/degree/certificate/49a514de-10ec-4e66-af1f-9eedefb05293',
  },
  {
    logo: one,
    title: 'Formación Front-End',
    institution: 'Oracle + Alura Latam · 93 hrs',
    date: 'Marzo 2023',
    link: 'https://app.aluracursos.com/degree/certificate/c618d520-2b28-4ed2-944e-40aafde21c06',
  },
  {
    logo: alura,
    title: 'Formación HTML & CSS',
    institution: 'Alura Latam · 65 hrs',
    date: 'Marzo 2023',
    link: 'https://app.aluracursos.com/user/jcuenca/degree-html-css-15485/certificate',
  },
  {
    logo: one,
    title: 'Formación Principiante en Programación',
    institution: 'Oracle + Alura Latam · 77 hrs',
    date: 'Enero 2023',
    link: 'https://app.aluracursos.com/degree/certificate/e52ea170-aa87-4628-80b5-2bbf5e72aa68',
  },
  {
    logo: hkust,
    title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
    institution: 'HKUST + Coursera',
    date: 'Junio 2021',
    link: 'https://coursera.org/share/515aa9bda7af411b33ff079e10874e13',
  },
];

export default function Academic() {
  return (
    <section className="academic" id="academic">
      <div className="academic__container">
        <h2 className="academic__title">Formación Académica</h2>
        <ul className="academic__timeline">
          {studies.map((study, index) => (
            <li key={index} className="academic__item">
              <div className="academic__content">
                <img src={study.logo} alt={study.institution} className="academic__logo" />
                <div>
                  <h3 className="academic__program">{study.title}</h3>
                  <p className="academic__institution">{study.institution}</p>
                  <p className="academic__date">{study.date}</p>
                  {study.link && (
                    <a className="academic__link" href={study.link} target="_blank" rel="noreferrer">
                      Ver Certificado
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
