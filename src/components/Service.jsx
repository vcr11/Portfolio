import NagarroImage from '../assets/nagarro.png'; // Import the Nagarro image
import RqbImage from '../assets/rqb.png'; // Import the RQB Technologies image

const experience = [
  {
    company: "Nagarro",
    image: NagarroImage,
    position: "Associate Software Engineer",
    duration: "Aug 2022 – Dec 2023",
    location: "Telangana, India",
    details: [
      "Developed and maintained responsive web pages using HTML, CSS, JavaScript, and ReactJS, resulting in a 15% increase in user engagement and 20% faster load times.",
      "Implemented a new Real-Time Telematics Monitoring feature as part of the migration. This feature integrates telemetry devices on railcars to collect and display real-time data on location, speed, and condition, leading to a 25% improvement in operational efficiency and a 20% increase in user satisfaction.",
      "Utilized RESTful APIs to enable seamless communication between telemetry devices and the backend, ensuring efficient, low-latency data transmission.",
      "Collaborated with cross-functional teams, including designers, back-end developers, and stakeholders, to ensure seamless integration and implementation of new features using agile methodologies.",
      "Resolved 30+ bugs in collaboration with the bug-fixing team, improving overall site stability and reducing user-reported issues by 25%.",
    ],
  },
  {
    company: "RQB Technologies",
    image: RqbImage,
    position: "Software Engineer Intern",
    duration: "Jan 2022 – Jul 2022",
    location: "Remote",
    details: [
      "Worked on a data migration project, improving performance and reducing costs.",
      "Created automation scripts in Python, increasing migration accuracy and efficiency by 40%.",
      "Ensured seamless data migration and integrity by connecting to diverse databases and optimizing code conversion with regular expressions, reducing manual intervention by 50%.",
      "Generated data validation reports and executed SQL queries, improving data accuracy and enhancing database operations.",
      "Applied regular expressions to identify and convert patterns in strings, optimizing code conversion automation and reducing manual intervention by 50%.",
    ],
  },
];

const Service = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-16 h-16 object-cover rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500 mb-2 flex items-center space-x-4">
                  <span>{exp.company}</span>
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-1">{exp.position}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.duration} - {exp.location}</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
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

export default Service;
