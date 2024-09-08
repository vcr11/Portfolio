import  { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import PropTypes from 'prop-types';  // Import PropTypes

const Navbar = ({ setDarkMode }) => {
  const [darkMode, setLocalDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setLocalDarkMode(newDarkMode);
    setDarkMode(newDarkMode); // Pass darkMode to parent or other components
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setLocalDarkMode(isDark);
      setDarkMode(isDark); // Initialize darkMode in parent
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [setDarkMode]);

  return (
    <nav className={`px-4 sm:px-6 md:px-8 lg:px-12 py-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-2xl font-bold mb-4 md:mb-0 hidden md:block'>
          Chandra Shekar
        </div>
        <div className='flex flex-col md:flex-row items-center md:space-x-6'>
          <a href="#home" className='py-2 px-4 hover:text-gray-400'>Home</a>
          <a href="#about" className='py-2 px-4 hover:text-gray-400'>About Me</a>
          <a href="#education" className='py-2 px-4 hover:text-gray-400'>Education</a>
          <a href="#skills" className='py-2 px-4 hover:text-gray-400'>Skills</a>
          <a href="#service" className='py-2 px-4 hover:text-gray-400'>Experience</a>
          <a href="#projects" className='py-2 px-4 hover:text-gray-400'>Projects</a>
          <a href="#certifications" className='py-2 px-4 hover:text-gray-400'>Certifications</a>
          <a href="#achievements" className='py-2 px-4 hover:text-gray-400'>Achievements</a>
          <a href="#contact" className='py-2 px-4 hover:text-gray-400'>Contact</a>
        </div>
        <div className='flex items-center mt-4 md:mt-0'>
          <button
            onClick={toggleDarkMode}
            className='text-xl focus:outline-none'
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  setDarkMode: PropTypes.func.isRequired,  // Validate setDarkMode as a function prop
};

export default Navbar;
