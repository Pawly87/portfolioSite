import React from 'react';
import { motion } from 'framer-motion';
import { consoleLoading } from '../utils/animations';

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <motion.div
        variants={consoleLoading}
        initial="initial"
        animate="animate"
        className="h-0.5 bg-gradient-to-r from-primary to-secondary"
      />
    </div>
  );
};

export default PageLoader;