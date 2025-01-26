import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import Education from './components/Education';
import Skills from './components/Skills'; // Import Skills component
import Certifications from './components/Certifications'; // Import Certifications component
import Achievements from './components/Achievements'; // Import Achievements component

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills /> {/* Add Skills section here */}
      <Service />
      <Projects />
      <Certifications /> {/* Add Certifications section here */}
      <Achievements /> {/* Add Achievements section here */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
