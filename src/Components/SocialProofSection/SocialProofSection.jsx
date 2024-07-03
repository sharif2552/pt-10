import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SocialProofSection = () => {
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

  const cardVariants = {
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
      <motion.h2 className="text-4xl font-bold mb-8" variants={cardVariants}>
        In the Spotlight
      </motion.h2>
      <div className="flex flex-wrap justify-center md:space-x-4">
        {/* Video 1: MyUSD Explained */}
        <motion.div
          className="w-80 md:w-1/4 p-4 transition-transform transform"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className=" aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wvUukA48do8"
                title="MyUSD Explained: Dapp Central & Mynth"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="p-4 text-gray-700 dark:text-gray-300">
              MyUSD Explained
            </p>
          </div>
        </motion.div>

        {/* Video 2: How to Attract Investors? */}
        <motion.div
          className="w-80 md:w-1/4 p-4 transition-transform transform"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DhP0ZLOO6no"
                title="How to Attract Investors to Stable Coins in Cardano? Alex Roose @ Mynth"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="p-4 text-gray-700 dark:text-gray-300">
              How to Attract Investors?
            </p>
          </div>
        </motion.div>

        {/* Video 3: What Is Mynth? */}
        <motion.div
          className="w-80 md:w-1/4 p-4 transition-transform transform"
          variants={cardVariants}
          whileHover="hover"
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/O0ELHI4VE-w"
                title="Fireside Chat with Robert Roose"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="p-4 text-gray-700 dark:text-gray-300">
              What Is Mynth?
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialProofSection;
