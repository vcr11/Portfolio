import { useRef, useState, useEffect } from 'react'; // Import hooks
import { FaTrophy, FaStar, FaMedal } from 'react-icons/fa'; // Example icons

const achievements = [
  {
    title: 'Tech Fest Coding Competition',
    description: 'Achieved the first prize among 500 participants.',
    icon: <FaTrophy className="text-yellow-500 text-4xl" />, // Example icon
  },
  {
    title: 'LeetCode, GFG, Hacker Rank',
    description: 'Masterfully solved 800+ problems, showcasing adept problem-solving skills.',
    url: 'https://leetcode.com/u/vcr11/', // LeetCode profile URL
    additionalLinks: [
      { name: 'LeetCode', url: 'https://leetcode.com/u/vcr11/' },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/vcr11/' },
    ],
    icon: <FaStar className="text-blue-500 text-4xl" />, // Example icon
  },
  {
    title: 'Hacker Rank',
    description: 'Earned the Python Gold Level Badge.',
    url: 'https://www.hackerrank.com/certificates/123456', // Replace with actual URL
    icon: <FaMedal className="text-green-500 text-4xl" />, // Example icon
  },
  // Add more achievements as needed
];

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleScroll = () => {
    const rect = sectionRef.current.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className={`bg-white dark:bg-black text-black dark:text-white py-20 ${
        isVisible ? 'animate-zoomIn' : ''
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105 flex items-start space-x-6"
            >
              <div className="flex-shrink-0">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  <a
                    href={achievement.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {achievement.title}
                  </a>
                </h3>
                <p className="text-lg mb-2">{achievement.description}</p>
                {achievement.additionalLinks && (
                  <div className="flex flex-wrap mt-2 space-x-4">
                    {achievement.additionalLinks.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
