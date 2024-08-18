import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 dark:border-gray-700 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Chandra Shekar. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.linkedin.com/in/vcr11/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/vcr11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:chandrashekarreddyv2001@gmail.com" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
              <AiOutlineMail size={24} />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white dark:hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
