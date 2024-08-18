import { useRef, useState, useEffect } from 'react';
import LinkedInImage from '../assets/linkedin.png';
import GitHubImage from '../assets/github.png';
import MailImage from '../assets/mail.png';
import ResumePDF from '../assets/Resume_Chandra Shekar Reddy.pdf';
import LeetCodeImage from '../assets/LeetCode.png';
import GeeksforGeeksImage from '../assets/gfg.png';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          About Me
        </h2>
        <div className="flex flex-col items-center md:space-x-12">
          <div className="flex-1 w-full max-w-full mx-auto"> {/* Extend to maximum width */}
            <p className="text-justify text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
              I am currently pursuing a Master’s in Computer Science, with over a year of full-time experience and six months of internship experience in software development. My background includes hands-on work with technologies like Python, JavaScript, React.js, and Node.js. I have developed and maintained web applications, contributed to data migration projects, and implemented real-time monitoring systems. I am seeking a summer 2025 internship or co-op opportunity where I can apply my skills in a challenging environment, collaborate with experienced professionals, and continue growing as a software developer.
            </p>
            <div className="flex justify-center items-center flex-wrap space-x-4 sm:space-x-6 my-6 sm:my-8">
              <a 
                href="https://www.linkedin.com/in/vcr11/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={LinkedInImage} 
                  alt="LinkedIn" 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a 
                href="https://github.com/vcr11" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={GitHubImage} 
                  alt="GitHub" 
                  className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-100 dark:brightness-100"
                />
              </a>
              <a 
                href="mailto:chandrashekarreddyv2001@gmail.com"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={MailImage} 
                  alt="Email" 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/vcr11/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={GeeksforGeeksImage} 
                  alt="GeeksforGeeks" 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a 
                href="https://leetcode.com/vcr11/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={LeetCodeImage} 
                  alt="LeetCode" 
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </a>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-sm sm:text-base px-3 sm:px-4 py-1 sm:py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
