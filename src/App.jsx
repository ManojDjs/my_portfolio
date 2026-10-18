import Hero from './components/Hero';
import MouseSpotlight from './components/MouseSpotlight';
import SiteHeader from './components/SiteHeader';
import About from './components/About';
import ProfessionalBackground from './components/ProfessionalBackground';
import CurrentWork from './components/CurrentWork';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <SiteHeader />
    <MouseSpotlight />
    <main id="main-content" tabIndex={-1} className="bg-[#050505] min-h-screen text-white relative selection:bg-red-600 selection:text-white">
      {/* Portfolio Sections */}
      <Hero />
      <About />
      <ProfessionalBackground sections={['experience']} />
      <CurrentWork />
      <Expertise />
      <Skills />
      <Projects />
      <ProfessionalBackground sections={['recommendations']} />
      <ProfessionalBackground sections={['education']} />
      <ProfessionalBackground sections={['certifications']} />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;