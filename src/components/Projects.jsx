import netflixImage from "../assets/netflix.png";    // Import Netflix Clone image
import vtrImage from "../assets/vtr.png";            // Import Virtual Try-On Room image
import urlImage from "../assets/url.png";            // Import URL Shortener image
import hmsImage from "../assets/hms.png";            // Import Hotel Management System image
import campImage from "../assets/camp.png";          // Import Camp Booking System image
import todoImage from "../assets/todo.png";          // Import To Do App using Django image
import expenseTrackerImage from "../assets/expense-tracker-app.png";  // Import Expense Tracker image
import weatherAppImage from "../assets/Wheather.png";                 // Import Weather App image

const projects = [
  {
    id: 1,
    name: "Expense Tracker",
    technologies: "React, Node.js, Express.js, MongoDB, Bootstrap, Chart.js",
    image: expenseTrackerImage,
    github: "https://github.com/vcr11/Expense-Tracker",
  },
  {
    id: 2,
    name: "Weather App",
    technologies: "React, Redux, API Integration",
    image: weatherAppImage,
    github: "https://github.com/vcr11/Wheather-APP",
    liveDemo: "https://vcr11.github.io/Wheather-APP/",
  },
  {
    id: 3,
    name: "Netflix Clone",
    technologies: "Python, Django, SQL",
    image: netflixImage,
    github: "https://github.com/vcr11/Netflix_clone",
  },
  {
    id: 4,
    name: "Virtual Try-On Room",
    technologies: "Python, Flask, OpenCV, MySQL",
    image: vtrImage,
    github: "https://github.com/vcr11/VTR",
  },
  {
    id: 5,
    name: "URL Shortener",
    technologies: "Python, Django",
    image: urlImage,
    github: "https://github.com/vcr11/url-shortener",
  },
  {
    id: 6,
    name: "Hotel Management System",
    technologies: "Python",
    image: hmsImage,
    github: "https://github.com/vcr11/HMS",
  },
  {
    id: 7,
    name: "Camp Booking System",
    technologies: "C#, .NET, React",
    image: campImage,
    github: "https://github.com/vcr11/Camp-Booking-System",
  },
  {
    id: 8,
    name: "To Do App using Django",
    technologies: "Python, Django",
    image: todoImage,
    github: "https://github.com/vcr11/To-do-App-using-Django-",
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.technologies}</p>
              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
