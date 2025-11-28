import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SFTPProjectImage from '../assets/SFTPProject.png';
import VisitorCounterImage from '../assets/visitor_counter.png';
import visitorCounterApp from '../assets/visitorcounterapp.png';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 2,
      title: 'SFTP File Transfer (Demo)',
      description: 'Sanitized diagram showing serverless file ingestion and secure transfer patterns (CSV offloads).',
      image: SFTPProjectImage,
      technologies: ['AWS S3', 'AWS Lambda', 'Secrets Manager', 'VPC'],
      category: 'AWS',
      githubLink: 'https://github.com/Pawly87/S3_SFTP_Cloudformation',
      liveLink: '/projects/sftp',
    },
    {
      id: 3,
      title: 'AWS Visitor Counter',
      description: 'Serverless visitor counter using API Gateway, Lambda, and DynamoDB. Built with AWS SAM for infrastructure as code.',
      images: [VisitorCounterImage, visitorCounterApp],
      technologies: ['AWS SAM', 'API Gateway', 'Lambda', 'DynamoDB', 'Node.js', 'React'],
      category: 'AWS',
      githubLink: 'https://github.com/Pawly87/AWS_Visitor_Counter',
      liveLink: '/projects/visitor-counter',
    },
    {
      id: 4,
      title: 'This Website',
      description: 'Modern portfolio website built with React and deployed to AWS S3 using GitHub Actions for continuous deployment.',
      image: '/path-to-image',
      technologies: ['React', 'Tailwind CSS', 'AWS S3', 'GitHub Actions', 'CI/CD'],
      category: 'AWS',
      githubLink: 'https://github.com/Pawly87/portfolioSite',
      liveLink: '/projects/this-website',
    }
    // Add more projects here
  ];

  const categories = ['all', 'Frontend', 'AI', 'AWS', 'Learning Tech'];

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  return (
    <div className="container-section py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-12">
        My Projects
      </h1>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              filter === category
                ? 'bg-primary text-white shadow-aws'
                : 'bg-background-paper text-gray-300 hover:bg-primary/10'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-gray-400 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;