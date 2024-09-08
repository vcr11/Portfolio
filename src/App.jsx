import { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Service />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
