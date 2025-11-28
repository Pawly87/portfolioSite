import React, { useState, useEffect } from 'react';
import VisitorCounterImage from '../assets/visitor_counter.png';
import visitorCounterApp from '../assets/visitorcounterapp.png';


const ProjectVisitorCounter = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [VisitorCounterImage, visitorCounterApp];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="container-section py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-background-paper rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">AWS Visitor Counter</h1>
        <p className="text-gray-300 mb-6">A serverless website visitor counter built with AWS SAM (Serverless Application Model) using API Gateway, Lambda, and DynamoDB. This project demonstrates cloud-native development and infrastructure as code.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Quick summary</h2>
          <p className="text-gray-300">This project implements a simple yet scalable visitor counter that can be integrated into any website. It uses AWS serverless services to track page visits without managing servers, providing automatic scaling and pay-per-use pricing. The entire infrastructure is defined as code using AWS SAM, making it easy to deploy and replicate.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Tech stack</h3>
          <div className="flex flex-wrap gap-2">
            {['AWS SAM', 'API Gateway', 'AWS Lambda', 'DynamoDB', 'Node.js 18.x', 'React', 'CloudFormation'].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-dark text-white">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Architecture & Demo</h3>
          <div className="bg-white rounded-md p-4 relative">
            <div className="relative overflow-hidden min-h-[400px] flex items-center justify-center">
              <img 
                src={images[currentImageIndex]} 
                alt={currentImageIndex === 0 ? "Visitor counter architecture diagram" : "Visitor counter application"} 
                className="w-full h-auto transition-opacity duration-500" 
              />
              <div className="absolute bottom-2 right-2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Key features</h3>
          <ul className="list-disc ml-5 text-gray-300">
            <li>Fully serverless architecture - no servers to manage</li>
            <li>Automatic scaling based on traffic</li>
            <li>Pay-per-use pricing model (extremely cost-effective)</li>
            <li>CORS enabled for cross-origin requests</li>
            <li>Infrastructure as Code using AWS SAM</li>
            <li>Simple React component for frontend integration</li>
            <li>DynamoDB with on-demand billing mode</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Demo & code</h3>
          <p className="text-gray-300 mb-3">The complete source code, SAM template, and deployment instructions are available on GitHub:</p>
          <a 
            href="https://github.com/Pawly87/AWS_Visitor_Counter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary text-black px-4 py-2 rounded-md font-medium hover:bg-primary-light transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default ProjectVisitorCounter;
