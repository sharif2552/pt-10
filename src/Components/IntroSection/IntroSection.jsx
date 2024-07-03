import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import technologyLight from "../../Assets/img/technology_light.png";
import technologyDark from "../../Assets/img/technology_dark.png";

const IntroSection = ({ darkMode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // When 50% of the component is in view
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      className={`py-20 ${
        darkMode
          ? "bg-gray-900 text-gray-50"
          : "bg-white dark:bg-custom-secondary-dark text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto text-left" ref={ref}>
        {inView && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-black dark:text-white font-bold mb-8 text-center">
              A Quick Intro
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 p-4">
                <motion.img
                  src={darkMode ? technologyDark : technologyLight}
                  alt="Infographic"
                  className="w-full rounded"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              <div className="md:w-1/2 p-4">
                <motion.p className="text-lg text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                  Mynth creates highways to interconnect networks, allowing
                  users to seamlessly transfer native assets without barriers.
                  Mynth offers a suite of tools to help you navigate the complex
                  world of blockchains with ease, including:
                </motion.p>
                <motion.ul className="text-lg text-gray-800 dark:text-gray-300 mb-6 list-disc pl-6">
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    MyUSD, a reliable and scalable stablecoin
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    Stable Swaps, allowing for full interoperability between
                    stable assets
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Cross-Chain Swaps, enabling assets to be used
                    interchangeably
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Mynth Lizard, a layer 2 network offering zero-knowledge
                    proofs
                  </motion.li>
                </motion.ul>
                <motion.p className="text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
                  Dissatisfied with the existing options for blockchain
                  interoperability and scalability, the Mynth team bonded
                  together to build on top of the most secure and decentralized
                  network. We are determined to further enhance blockchain
                  usability and fulfill the mission to equalize the playing
                  field without discrimination, bringing new financial
                  opportunities to everyone.
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

    </motion.section>
  );
};

export default IntroSection;
