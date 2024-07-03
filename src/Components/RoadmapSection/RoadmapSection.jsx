import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RoadmapSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (inView) {
    controls.start("visible");
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-gray-100 dark:bg-custom-main-dark text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
        Roadmap
      </motion.h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-4">Q3 2024</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Launch of MyUSD integration with major exchanges
          </p>
        </motion.div>
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-4">Q4 2024</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Introduction of MyUSD lending and borrowing options
          </p>
        </motion.div>
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <h3 className="text-xl font-bold mb-4">Q1 2025</h3>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Expansion of MyUSD into additional blockchain ecosystems
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RoadmapSection;
