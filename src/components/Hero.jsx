import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from "react-icons/fa";
import HeroImage from '../assets/hero-image.png';

export default function Hero() {

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between px-10 md:px-24 py-24 bg-white dark:bg-black transition-colors duration-300 min-h-screen">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 max-w-xl text-center md:text-left"
      >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 font-['Inter'] whitespace-nowrap leading-tight">
  Chandra Shekar Reddy Vangala
</h1>



        <p className="text-lg text-gray-700 dark:text-gray-300">
          Software Engineer (SDE) | Ex-Amazon | MS CS @ UCF | Azure Dev Associate
        </p>

        <p className="text-green-500 font-semibold">
          🚀 Actively Seeking Full-Time Software Engineer Roles
        </p>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Building scalable cloud applications with Java, Python, React, and AWS —
          passionate about designing efficient systems and solving challenging problems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="/src/assets/Resume_Chandra_Shekar_Reddy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-lg font-semibold shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            📄 View Resume
          </a>
          <a
            href="mailto:chandrashekarreddyv2001@gmail.com"
            className="flex items-center gap-2 border border-gray-400 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            ✉️ Contact Me
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vcr11/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full shadow-sm hover:shadow-md"
          >
            <FaLinkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vcr11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#181717] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full shadow-sm hover:shadow-md"
          >
            <FaGithub size={20} />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/vcr11/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#FFA116] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full shadow-sm hover:shadow-md"
          >
            <FaCode size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:chandrashekarreddyv2001@gmail.com"
            aria-label="Email Contact"
            className="w-10 h-10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-[#4ADE80] hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-full shadow-sm hover:shadow-md"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE PHOTO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative mt-12 md:mt-0"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[#4ADE80] opacity-15 blur-3xl rounded-full"></div>

        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-[#4ADE80] shadow-[0_0_50px_rgba(74,222,128,0.35)] overflow-hidden">
          <img
            src={HeroImage}
            alt="Chandra Shekar Reddy Vangala"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <span className="bg-[#4ADE80] text-white text-sm px-4 py-1 rounded-full shadow-md font-medium">
            Open to Work
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
