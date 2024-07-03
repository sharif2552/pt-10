import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import partner1 from "../../Assets/img/partner1.png";
import partner2 from "../../Assets/img/partner2.png";
import partner3 from "../../Assets/img/partner3.png";

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
      className="py-20 bg-white dark:bg-custom-main-dark text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold mb-8">Our Partners</motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
        <motion.img
          src={partner1}
          alt="Partner 1"
          className="w-40 h-40 lg:w-60 lg:h-60 mt-5 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
        <motion.img
          src={partner2}
          alt="Partner 2"
          className="w-40 h-40 lg:w-60 lg:h-60 mt-5 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
        <motion.img
          src={partner3}
          alt="Partner 3"
          className="w-40 h-40 lg:w-60 lg:h-60 mt-5 object-contain"
          variants={itemVariants}
          whileHover="hover"
        />
      </div>
    </motion.section>
  );
};

export default PartnersSection;
