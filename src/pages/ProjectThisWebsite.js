import React from 'react';
import { Link } from 'react-router-dom';

const ProjectThisWebsite = () => {
  return (
    <div className="container-section py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-background-paper rounded-lg p-8">
        <h1 className="text-3xl font-bold text-primary mb-2">This Website</h1>
        <p className="text-gray-300 mb-6">A modern portfolio website built with React and deployed to AWS S3 using GitHub Actions for continuous deployment. This project showcases cloud-native development practices and automated CI/CD pipelines.</p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-2">Quick summary</h2>
          <p className="text-gray-300">This portfolio website demonstrates modern web development and DevOps practices. Built with React and styled with Tailwind CSS, it features a responsive design, smooth animations, and showcases various projects. The deployment pipeline uses GitHub Actions to automatically build and deploy to AWS S3 whenever changes are pushed to the main branch, providing a seamless CI/CD workflow.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Tech stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React 19', 'Tailwind CSS', 'React Router', 'Framer Motion', 'AWS S3', 'GitHub Actions', 'CI/CD'].map((t) => (
              <span key={t} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-dark text-white">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Architecture & Deployment</h3>
          <div className="bg-background-default rounded-md p-6">
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">→</div>
                <div>
                  <strong className="text-white">GitHub Repository:</strong> Source code version controlled with Git, hosted on GitHub
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">→</div>
                <div>
                  <strong className="text-white">GitHub Actions:</strong> Automated CI/CD pipeline triggered on push to main branch
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">→</div>
                <div>
                  <strong className="text-white">Build Process:</strong> React app built using npm, optimized production bundle created
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">→</div>
                <div>
                  <strong className="text-white">AWS S3:</strong> Static hosting with public access, deployed automatically via AWS CLI
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-primary text-xl">→</div>
                <div>
                  <strong className="text-white">Future Enhancement:</strong> CloudFront CDN for global distribution and HTTPS
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Key features</h3>
          <ul className="list-disc ml-5 text-gray-300">
            <li>Fully responsive design with mobile-first approach</li>
            <li>Automated CI/CD pipeline with GitHub Actions</li>
            <li>Static hosting on AWS S3 for cost-effective, scalable delivery</li>
            <li>React Router for seamless client-side navigation</li>
            <li>Tailwind CSS for modern, utility-first styling</li>
            <li>Framer Motion for smooth animations and transitions</li>
            <li>Project showcase with detailed case studies</li>
            <li>Interactive CV page with downloadable content</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">CI/CD Pipeline</h3>
          <p className="text-gray-300 mb-3">The GitHub Actions workflow automates the entire deployment process:</p>
          <div className="bg-[#1a1a1a] rounded-md p-4 mb-3">
            <code className="text-green-400 text-sm">
              1. Trigger on push to main branch<br/>
              2. Checkout code from repository<br/>
              3. Set up Node.js environment<br/>
              4. Install dependencies (npm install)<br/>
              5. Build production bundle (npm run build)<br/>
              6. Configure AWS credentials<br/>
              7. Sync build folder to S3 bucket<br/>
              8. Deployment complete
            </code>
          </div>
          <p className="text-gray-300">This automated workflow ensures that every commit to the main branch is automatically tested, built, and deployed within minutes, enabling rapid iteration and continuous delivery.</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Development Highlights</h3>
          <ul className="list-disc ml-5 text-gray-300">
            <li><strong>Component Architecture:</strong> Modular React components for maintainability and reusability</li>
            <li><strong>Routing:</strong> React Router v7 for client-side navigation without page reloads</li>
            <li><strong>Styling:</strong> Tailwind CSS with custom theme configuration for consistent branding</li>
            <li><strong>Animations:</strong> Framer Motion for engaging user interactions</li>
            <li><strong>Version Control:</strong> Git with meaningful commit messages and branch strategy</li>
            <li><strong>AWS Integration:</strong> S3 bucket configured for static website hosting</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Demo & code</h3>
          <p className="text-gray-300 mb-3">The complete source code and CI/CD configuration are available on GitHub:</p>
          <a 
            href="https://github.com/Pawly87/portfolioSite" 
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

export default ProjectThisWebsite;
