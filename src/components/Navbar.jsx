import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className={`px-4 sm:px-6 md:px-8 lg:px-12 py-4 transition-colors duration-300 ease-in-out 
      ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-2xl font-bold mb-4 md:mb-0'>
          Chandra Shekar
        </div>
        
        <div className='flex flex-col md:flex-row items-center md:space-x-6'>
          <a href="#home" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Home</a>
          <a href="#about" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>About Me</a>
          <a href="#education" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Education</a>
          <a href="#skills" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Skills</a>
          <a href="#service" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Experience</a>
          <a href="#projects" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Projects</a>
          <a href="#Certifications" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Certifications</a>
          <a href="#achievements" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Achievements</a>
          <a href="#contact" className='py-2 px-4 hover:text-gray-400 dark:hover:text-gray-300'>Contact</a>
        </div>

        <div className='flex items-center mt-4 md:mt-0'>
          <button
            onClick={toggleDarkMode}
            className='text-xl focus:outline-none transition-transform transform hover:scale-110'
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-gray-200" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
