import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const SocialLinksSection = () => {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.2 },
  };

  return (
    <div className=" border-gray-300 dark:border-gray-600 py-6">
      <motion.section
        className="py-20 bg-gray-100 dark:bg-custom-main-dark text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className="text-4xl font-bold mb-8" variants={iconVariants}>
          Connect With Us
        </motion.h2>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://twitter.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://github.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default SocialLinksSection;
