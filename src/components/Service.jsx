import AmazonImage from "../assets/Amazon.png";  // Amazon logo
import NagarroImage from "../assets/nagarro.png"; // Nagarro logo
import RqbImage from "../assets/rqb.png";         // RQB Technologies logo

const experience = [
  {
    company: "Amazon",
    image: AmazonImage,
    position: "Software Development Engineer Intern",
    duration: "May 2025 – Aug 2025",
    location: "Miami, FL, USA",
    details: [
      "Built a centralized debugging tool to trace string hierarchy and fallback logic across customer-facing surfaces, improving visibility and reducing root-cause analysis time by 90%.",
      "Delivered a multilingual content update capability using React and Spring Boot, reducing localization release cycles by 97% and enabling real-time updates across 7+ languages.",
      "Engineered fault-tolerant serverless APIs using AWS Lambda with DLQ retry logic, DynamoDB audit logging, and automated ticket escalation, achieving 95% reliability and minimizing operational overhead.",
      "Scaled adoption across 30+ acquisition surfaces, eliminating developer dependency and enabling PMs to self-manage and optimize customer-facing content.",
      "Integrated a Chrome DevTools Protocol-based mock header injection system, eliminating external service dependency in integration tests, ensuring 100% stability.",
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
      "Designed and implemented 3 APIs for IP verification, token generation, and database interactions, leading to a 20% improvement in response times.",
      "Built a Python-based backend to handle authentication processes using network-based SIM identification, reducing manual intervention and increasing system security.",
      "Created SIM-based IP address mapping for secure authentication, strengthening protection and improving login success rates by 30%.",
      "Integrated MongoDB to log API responses and authentication attempts, enhancing auditability and reducing troubleshooting time.",
    ],
  },
];

const Experience = () => {
  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white py-20"
      id="experience"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Professional Experience
        </h2>

        <div className="space-y-10">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl 
              transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Header with Logo + Company Name */}
              <div className="flex items-center mb-6 space-x-6">
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="object-contain w-12 h-12"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {exp.company}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold">
                    {exp.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {exp.duration} • {exp.location}
                  </p>
                </div>
              </div>

              {/* Details */}
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
