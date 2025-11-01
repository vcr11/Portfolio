import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import {
  SiDjango,
  SiFlask,
  SiOpencv,
  SiMysql,
  SiAmazon,
  SiAmazondynamodb,
  SiAmazons3,
  SiAmazonapigateway,
  SiAwsamplify,
  SiAwslambda,
  SiAmazonwebservices,
  SiMongodb,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
} from "react-icons/si";

import dsImage from "../assets/ds.png";
import algorithmsImage from "../assets/Algorithms.png";
import nodeImage from "../assets/node.png";
import exImage from "../assets/ex.png";
import vsCodeImage from "../assets/vs.png";
import pycharmImage from "../assets/pc.png";
import oopImage from "../assets/oop.png";
import systemDesignImage from "../assets/system.png";

const skills = [
  // 🧠 Core Programming
  { id: 1, name: "Python", icon: <FaPython size={40} className="text-yellow-400" /> },
  { id: 2, name: "Java", icon: <FaJava size={40} className="text-red-500" /> },
  { id: 3, name: "Data Structures", icon: <img src={dsImage} alt="Data Structures" className="w-10 h-10" /> },
  { id: 4, name: "Algorithms", icon: <img src={algorithmsImage} alt="Algorithms" className="w-10 h-10" /> },
  { id: 5, name: "OOP", icon: <img src={oopImage} alt="OOP" className="w-10 h-10" /> },
  { id: 6, name: "System Design", icon: <img src={systemDesignImage} alt="System Design" className="w-10 h-10" /> },

  // 🌐 Web Development
  {
    id: 6,
    name: "HTML / CSS",
    icon: [
      <FaHtml5 key="html" size={40} className="text-orange-500" />,
      <FaCss3 key="css" size={40} className="text-blue-500" />,
    ],
  },
  { id: 7, name: "JavaScript", icon: <FaJsSquare size={40} className="text-yellow-400" /> },
  { id: 8, name: "React", icon: <DiReact size={40} className="text-cyan-400" /> },
  { id: 9, name: "Flask", icon: <SiFlask size={40} className="text-gray-300" /> },
  { id: 10, name: "Django", icon: <SiDjango size={40} className="text-green-600" /> },
  { id: 11, name: "Node.js", icon: <img src={nodeImage} alt="Node.js" className="w-10 h-10" /> },
  { id: 12, name: "Express.js", icon: <img src={exImage} alt="Express.js" className="w-10 h-10" /> },

  // 🗄️ Databases
  { id: 13, name: "MySQL", icon: <SiMysql size={40} className="text-indigo-500" /> },
  { id: 14, name: "SQL", icon: <FaDatabase size={40} className="text-gray-500" /> },
  { id: 15, name: "NoSQL (MongoDB)", icon: <SiMongodb size={40} className="text-green-500" /> },
  { id: 15, name: "OpenCV", icon: <SiOpencv size={40} className="text-blue-400" /> },

  // ☁️ AWS / Cloud
  { id: 16, name: "AWS", icon: <SiAmazon size={40} className="text-orange-400" /> },
  { id: 17, name: "AWS Lambda", icon: <SiAwslambda size={40} className="text-yellow-400" /> },
  { id: 18, name: "DynamoDB", icon: <SiAmazondynamodb size={40} className="text-green-500" /> },
  { id: 19, name: "S3", icon: <SiAmazons3 size={40} className="text-yellow-500" /> },
  { id: 20, name: "API Gateway", icon: <SiAmazonapigateway size={40} className="text-orange-500" /> },
  { id: 21, name: "AWS Amplify", icon: <SiAwsamplify size={40} className="text-yellow-400" /> },
  { id: 22, name: "Step Functions", icon: <SiAmazonwebservices size={40} className="text-orange-400" /> },

  // 🤖 AI / ML / GenAI
  { id: 23, name: "Machine Learning", icon: <SiTensorflow size={40} className="text-orange-500" /> },
  { id: 24, name: "Deep Learning", icon: <SiPytorch size={40} className="text-red-500" /> },
  { id: 25, name: "LLMs & GenAI", icon: <SiOpenai size={40} className="text-green-400" /> },
  { id: 26, name: "RAG Architecture", icon: <FaRobot size={40} className="text-blue-400" /> },

  // 🧰 Tools & IDEs
  { id: 28, name: "VS Code", icon: <img src={vsCodeImage} alt="VS Code" className="w-10 h-10" /> },
  { id: 29, name: "PyCharm", icon: <img src={pycharmImage} alt="PyCharm" className="w-10 h-10" /> },
];

const Skills = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex space-x-2 justify-center">
                {Array.isArray(skill.icon)
                  ? skill.icon.map((icon, idx) => <div key={idx}>{icon}</div>)
                  : <div>{skill.icon}</div>}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
