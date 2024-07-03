import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import teamMember1 from "../../Assets/img/team-member1.jpg";
import teamMember2 from "../../Assets/img/team-member2.jpg";
import teamMember3 from "../../Assets/img/team-member3.jpg";

const TeamSection = () => {
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
      className="py-20 bg-white dark:bg-custom-secondary-dark text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
        Our Team
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center space-x-8">
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <img
            src={teamMember1}
            alt="Team Member 1"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">John Doe</h3>
          <p className="text-gray-700 dark:text-gray-300">CEO</p>
        </motion.div>
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <img
            src={teamMember2}
            alt="Team Member 2"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
          <p className="text-gray-700 dark:text-gray-300">CTO</p>
        </motion.div>
        <motion.div
          className="max-w-xs bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
          variants={itemVariants}
          whileHover="hover"
        >
          <img
            src={teamMember3}
            alt="Team Member 3"
            className="w-32 h-32 object-cover rounded-full mb-4"
          />
          <h3 className="text-xl font-bold mb-2">Michael Brown</h3>
          <p className="text-gray-700 dark:text-gray-300">COO</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
