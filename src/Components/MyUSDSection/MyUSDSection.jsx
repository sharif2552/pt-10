import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyUSDSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      document.getElementById("myUSDSection").classList.add("animate");
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="flex w-full flex-row justify-center">
      <motion.section
        ref={ref}
        id="myUSDSection"
        className="flex flex-col w-full lg:flex-row lg:justify-center items-center lg:items-start py-20 lg:px-32 bg-white dark:bg-custom-secondary-dark text-center lg:text-left lg:space-x-10 space-y-10 lg:space-y-0 px-4 lg:flex"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="lg:w-1/2 flex flex-col justify-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            variants={childVariants}
          >
            MyUSD
          </motion.h2>
          <motion.p
            className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
            variants={childVariants}
          >
            MyUSD is a stablecoin designed to provide a stable, scalable, and
            fully redeemable option within the Cardano ecosystem. It is pegged
            to the US dollar, ensuring that its value remains consistent and
            non-volatile. MyUSD serves as a foundational element in Mynth’s
            broader mission to create a seamless and integrated DeFi experience,
            ensuring users can easily transfer, exchange, and manage their
            digital assets across various blockchain platforms.
          </motion.p>
        </div>
        <div className="lg:w-96 lg:h-full flex flex-col justify-center">
          <motion.div
            className="relative w-full h-52 lg:max-w-screen-md"
            variants={childVariants}
          >
            <motion.div
              className="w-full h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center w-full h-full">
                <div className="w-full aspect-w-16 aspect-h-9 rounded-lg shadow-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Pe0ObwhTWhs"
                    title="What is MyUSD? How is it so stable? Mynth Stablecoin, MyUSD explained"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default MyUSDSection;
