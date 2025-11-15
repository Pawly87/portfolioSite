import React from 'react';

const AboutPage = () => {
  const skills = {
    Frontend: ['React', 'JavaScript/TypeScript', 'HTML/CSS', 'Tailwind CSS'],
    AI: ['Machine Learning', 'Natural Language Processing', 'AI Integration'],
    AWS: ['Cloud Architecture', 'Lambda', 'API Gateway', 'DynamoDB'],
    'Learning Tech': ['E-learning Platforms', 'Interactive Content', 'LMS Integration'],
  };

  const SkillIcon = ({ type }) => {
    const iconClass = "w-6 h-6 text-primary";
    switch (type) {
      case 'Frontend':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case 'AI':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'AWS':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      default:
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
    }
  };

  return (
    <div className="container-section py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-12">
        About Me
      </h1>

      {/* Professional Summary */}
      <div className="bg-background-paper p-6 rounded-lg shadow-aws mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed">
          I’m a Learning Technologist and L&D professional with experience designing, delivering, and optimizing learning solutions for thousands of global leaders. I thrive at the intersection of technology and people, building scalable digital learning platforms, automating workflows, and leveraging AI to improve the learner and administrator experience. I’ve managed complex global programs, migrated LMS content, and modernized legacy systems while ensuring seamless delivery for participants and facilitators across multiple countries. Curious, collaborative, and solutions-focused, I enjoy turning challenges into efficient, user-friendly systems that empower learners and support organizational growth.
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="bg-background-paper p-6 rounded-lg shadow-aws hover:shadow-aws-hover transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <SkillIcon type={category} />
              <h3 className="text-xl font-semibold text-white ml-3">{category}</h3>
            </div>
            <ul className="space-y-3">
              {skillList.map((skill) => (
                <li key={skill} className="flex items-center text-gray-300 hover:text-primary transition-colors duration-200">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;