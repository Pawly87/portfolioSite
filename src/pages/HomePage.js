import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

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
              A Full Stack Developer with 10+ years supporting Learning & Development functions, specializing in Frontend Development, AI Solutions,
              AWS Cloud Architecture, and Learning Technology
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
    </div>
  );
};

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