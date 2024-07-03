import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord"; // Import Discord icon from FontAwesome
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
            href="https://twitter.com/_mynth_"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-4xl" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/mynth-cardano/"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
          </motion.a>

          <motion.a
            href="https://discord.com/invite/xWTkKY4nYv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300"
            variants={iconVariants}
            whileHover="hover"
          >
            <FontAwesomeIcon icon={faDiscord} className="text-4xl" />{" "}
            {/* Discord icon */}
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default SocialLinksSection;
