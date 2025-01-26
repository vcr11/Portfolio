import AmazonImage from '../assets/Amazon.png';  // Import the Amazon image
import NagarroImage from '../assets/nagarro.png'; // Import the Nagarro image
import RqbImage from '../assets/rqb.png';         // Import the RQB Technologies image

const experience = [
  {
    company: "Amazon",
    image: AmazonImage,
    position: "Software Development Engineer Intern",
    duration: "Summer 2025",
    location: "Miami, FL",
    details: [
      "Excited to join Amazon as an SDE Intern for Summer 2025 and contribute to impactful projects while expanding my technical skills."
    ],
  },
  {
    company: "Nagarro",
    image: NagarroImage,
    position: "Software Engineer",
    duration: "Aug 2022 – Oct 2023",
    location: "Telangana, India",
    details: [
      "Redesigned and optimized responsive web pages using ReactJS, leading to a 15% increase in user engagement and a 20% reduction in page load times.",
      "Introduced a Real-Time Telematics Monitoring feature, integrating telemetry devices on railcars to collect and display real-time data, improving operational efficiency by 25% and user satisfaction by 20%.",
      "Utilized RESTful APIs with Node.js and Express.js to enable seamless communication between telemetry devices and the backend, reducing latency and improving operational efficiency.",
      "Leveraged AWS and MySQL for cloud-based data storage and processing, reducing database query times and optimizing system performance.",
      "Collaborated with cross-functional teams using agile methodologies and resolved 30+ bugs, improving site stability and reducing user-reported issues by 25%.",
    ],
  },
  {
    company: "RQB Technologies",
    image: RqbImage,
    position: "Software Engineer Intern",
    duration: "Jan 2022 – Aug 2022",
    location: "Remote",
    details: [
      "Developed a responsive web application for API testing using React, enhancing testing efficiency and reducing manual intervention by 20%.",
      "Designed and implemented 3 APIs, enhancing key functionalities such as IP verification, token generation, and database interactions, leading to a 20% improvement in response times.",
      "Built a Python-based backend to handle authentication processes, using network-based SIM identification, reducing manual intervention and increasing system security.",
      "Created network-based authentication through SIM-based IP address mapping, strengthening security and improving login success rates by 30%.",
      "Integrated MongoDB to log critical API responses and authentication attempts, enhancing audit capabilities and reducing troubleshooting time.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="experience">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex space-x-6"
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {exp.company}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-semibold">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration} - {exp.location}</p>
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
