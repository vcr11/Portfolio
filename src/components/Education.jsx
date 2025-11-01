import UcfImage from "../assets/Ucf.png"; // Import the UCF image
import JntuImage from "../assets/jntu.png"; // Import the JNTU image

const education = [
  {
    institution: "University of Central Florida",
    degree: "Master of Science in Computer Science",
    duration: "Expected Graduation: December 2025",
    gpa: "GPA: 3.97/4.0",
    coursework:
      "Data Structures & Algorithms, Advanced Computer Architecture, Operating Systems, Distributed Systems, Computer Networks, Machine Learning, Current Topics in Machine Learning(LLM and GenAI), Advanced AI, Software System Security",
    image: UcfImage,
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology in Electronics and Communication",
    duration: "Graduated: June 2022",
    gpa: "GPA: 3.6/4.0",
    coursework:
      "Python, Java, Operating Systems, Database Management Systems, Computer Networks",
    image: JntuImage,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="bg-white dark:bg-black text-black dark:text-white py-20"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        <div className="grid gap-10">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative group bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-[1px]"
            >
              <div className="bg-white dark:bg-black rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-20 h-20 rounded-full shadow-md border border-gray-300 dark:border-gray-700 object-contain transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-r from-green-400 to-blue-500"
                  >
                    {edu.institution}
                  </h3>

                  <p className="mt-2 text-lg font-medium">{edu.degree}</p>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {edu.duration}
                  </p>
                  <p className="mt-1 text-gray-700 dark:text-gray-200 font-semibold">
                    {edu.gpa}
                  </p>

                  {/* Coursework Pills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.coursework.split(",").map((course, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded-full font-medium hover:bg-green-400 hover:text-black transition-all duration-200"
                      >
                        {course.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
