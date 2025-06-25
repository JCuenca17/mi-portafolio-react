import Nav from './components/Nav';
import Header from './sections/Header';
import About from './sections/About';
import Skills from './sections/Skills';
import Academic from './sections/Academic';
import Contact from './sections/Contact';
import Footer from './components/Footer';
// import Projects from './sections/Projects';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main className="all">
        <About />
        <Skills />
        <Academic />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
