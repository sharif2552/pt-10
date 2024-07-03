import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import partner1 from "../../Assets/img/partner1.png";
import partner2 from "../../Assets/img/partner2.png";
import partner3 from "../../Assets/img/partner3.png";
import partner4 from "../../Assets/img/partner4.png";

const PartnersSection = () => {
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
    hover: { scale: 1.1 },
  };

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white dark:bg-custom-secondary-dark text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold mb-8">Our Partners</motion.h2>
      <div className="flex flex-wrap justify-center items-center space-x-8">
        <motion.img
          src={partner1}
          alt="Partner 1"
          className="w-32 h-32 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
        <motion.img
          src={partner2}
          alt="Partner 2"
          className="w-32 h-32 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
        <motion.img
          src={partner3}
          alt="Partner 3"
          className="w-32 h-32 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
        <motion.img
          src={partner4}
          alt="Partner 4"
          className="w-32 h-32 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
      </div>
    </motion.section>
  );
};

export default PartnersSection;
