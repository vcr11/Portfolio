import TypingEffect from 'react-typing-effect';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  return (
    <div className='text-center py-16 bg-white dark:bg-black text-black dark:text-white'>
      <div className='flex flex-col items-center'>
        <img 
          src={HeroImage} 
          alt="Chandra Shekar Reddy Vangala" 
          className='w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105' 
        />
        <h1 className='text-4xl font-bold mt-6 mb-4'>
          <TypingEffect
            text={['Hi there!', `I'm Chandra Shekar`]}
            speed={50}
            eraseDelay={2000}
            typingDelay={500}
            cursorRenderer={cursor => <span className="text-black dark:text-white">{cursor}</span>}
          />
        </h1>
        <p className='text-lg text-gray-600 dark:text-gray-300'>
          <span className='font-semibold text-gray-800 dark:text-gray-200'>
            Seeking Software Development Internship or Co-op Opportunities for Spring 2025 and Summer 2025
          </span>
        </p>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
          {/* Add any additional introductory text here if needed */}
        </p>
      </div>
    </div>
  );
};

export default Hero;
