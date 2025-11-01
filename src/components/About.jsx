import { useRef, useState, useEffect } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      id="about"
      className={`bg-white dark:bg-black text-black dark:text-white py-20 transform transition-transform duration-1000 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8 text-justify">
            I’m a <strong>Software Engineer (SDE)</strong> who transforms complex backend systems into fast, scalable, and reliable services.
            I blend deep problem-solving with impact, ownership, and developer productivity.
          </p>

          <div className="text-lg mb-8 text-justify">
            <p className="mb-4">
              At <strong>Amazon FUSE</strong>, I delivered impactful solutions that transformed platform reliability and developer productivity:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Built a centralized debugging tool in Java and React that reduced root-cause analysis time by <strong>90%</strong> by visualizing string hierarchy and fallback logic across customer-facing surfaces.</li>
              <li>Delivered a multilingual content update platform using Spring Boot and React that reduced localization release cycles by <strong>97%</strong> and enabled PMs to push updates in 7+ languages without developer involvement.</li>
              <li>Engineered fault-tolerant, serverless APIs using AWS Lambda, DynamoDB, and DLQ retry logic, achieving <strong>95% reliability</strong> and reducing operational overhead through automated escalation and audit logging.</li>
              <li>Enhanced integration test reliability by implementing a mock-service framework that eliminated external dependencies, achieving <strong>100% test pass rate</strong> and improving CI/CD stability.</li>
            </ul>
          </div>

          <p className="text-lg mb-8 text-justify">
            At <strong>Nagarro</strong>, I led feature migrations and launched a <strong>Real-Time Telematics Monitoring system</strong>,
            improving operational efficiency by <strong>25%</strong> and user satisfaction by <strong>30%</strong>, 
            while reducing page load time by <strong>20%</strong>.
          </p>

          <p className="text-lg mb-8 text-justify">
            I care deeply about clean REST APIs, observability, and pragmatic microservices. 
            Whether building serverless backends, automating CI/CD pipelines, or scaling data workflows — 
            I focus on performance, clarity, and reliability.
          </p>

          <p className="text-lg mb-8 text-justify">
            <strong>Actively seeking</strong> full-time <strong>Software Engineer, Backend, or Cloud</strong> roles. 
            Currently pursuing my <strong>MS in Computer Science at the University of Central Florida (GPA 3.97)</strong>.
          </p>

          <p className="text-lg text-justify">
            <strong>Core Stack:</strong> Java · Spring Boot · Python · AWS (Lambda, DynamoDB, S3) · REST APIs · SQL/NoSQL · 
            System Design (LLD/HLD) · CI/CD · Microservices · React
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
