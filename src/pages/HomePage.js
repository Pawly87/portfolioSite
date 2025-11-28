import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import ProjectCard from '../components/ProjectCard';
import SFTPProjectImage from '../assets/SFTPProject.png';
import VisitorCounterImage from '../assets/visitor_counter.png';
import visitorCounterApp from '../assets/visitorcounterapp.png';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative bg-background-paper pt-20 pb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background to-background-paper -z-10" />
        
        <div className="container-section">
          <motion.div variants={fadeInUp}>
            <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-6">
              Hi, I'm Paul
            </h1>
          </motion.div>
          
          <motion.div variants={fadeInUp}>
            <p className="text-center text-xl text-gray-300 max-w-3xl mx-auto mt-4">
              A Full Stack Developer with 10+ years supporting Learning & Development functions, specializing in Frontend Development, AWS Cloud Architecture, and Learning Technology
            </p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center gap-4">
            <RouterLink 
              to="/projects" 
              className="btn-primary"
            >
              View My Work
            </RouterLink>
            <RouterLink 
              to="/contact" 
              className="btn-outline"
            >
              Contact Me
            </RouterLink>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Overview */}
      <section className="py-16 container-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Frontend', 'AI', 'AWS', 'Learning Tech'].map((skill) => (
            <div
              key={skill}
              className="p-6 text-center border border-gray-700 rounded-lg bg-background-paper hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill}
              </h3>
              <p className="text-gray-300 text-sm">
                {getSkillDescription(skill)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 container-section bg-background-paper">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gradient mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <RouterLink 
            to="/projects" 
            className="btn-primary inline-block"
          >
            View All Projects
          </RouterLink>
        </div>
      </section>
    </div>
  );
};

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
    technologies: ['AWS SAM', 'API Gateway', 'Lambda', 'DynamoDB'],
    category: 'AWS',
    githubLink: 'https://github.com/Pawly87/AWS_Visitor_Counter',
    liveLink: '/projects/visitor-counter',
  },
  {
    id: 4,
    title: 'This Website',
    description: 'Modern portfolio website built with React and deployed to AWS S3 using GitHub Actions for continuous deployment.',
    image: '/path-to-image',
    technologies: ['React', 'Tailwind CSS', 'AWS S3', 'GitHub Actions'],
    category: 'AWS',
    githubLink: 'https://github.com/Pawly87/portfolioSite',
    liveLink: '/projects/this-website',
  },
];

const getSkillDescription = (skill) => {
  const descriptions = {
    Frontend: 'React, Material-UI, Modern JavaScript, Responsive Design',
    AI: 'Machine Learning, Natural Language Processing, AI Integration',
    AWS: 'Cloud Architecture, Serverless, DevOps, Infrastructure as Code',
    'Learning Tech': 'E-learning Platforms, Educational Tools, Interactive Content',
  };
  return descriptions[skill];
};

export default HomePage;