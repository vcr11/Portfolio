
import UcfImage from '../assets/Ucf.png'; // Import the UCF image
import JntuImage from '../assets/jntu.png'; // Import the JNTU image

const education = [
  {
    institution: "University of Central Florida",
    degree: "Master of Science in Computer Science",
    duration: "Expected Graduation: December 2025",
    gpa: "GPA: 3.92/4.0",
    image: UcfImage,
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Electronics and Communication",
    duration: "Graduated: June 2022",
    gpa: "GPA: 3.64/4.0",
    image: JntuImage,
  },
];

const Education = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="education">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105 flex flex-col sm:flex-row items-center sm:space-x-6"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-24 h-24 sm:w-16 sm:h-16 object-cover rounded-full mb-4 sm:mb-0"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-lg sm:text-xl">{edu.degree}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.gpa}</p> {/* GPA added here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
