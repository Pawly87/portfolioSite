import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 mt-auto bg-[#232F3E]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white mb-3">
              Contact
            </h2>
            <p className="text-gray-300">
              Email: your.email@example.com
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-semibold text-white mb-3">
              Connect
            </h2>
            <div className="space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold text-white mb-3">
              Get in Touch
            </h2>
            <p className="text-gray-300">
              Let's collaborate on your next project
            </p>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;