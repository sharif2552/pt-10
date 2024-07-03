import React from "react";
import { motion } from "framer-motion";
import "../HeroSection/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center dark:from-black dark:to-slate-700 relative overflow-hidden">
      <div className="glow-container">
        <div className="ball"></div>
        <div
          className="ball"
          style={{ "--delay": "-12s", "--size": "0.35", "--speed": "25s" }}
        ></div>
        <div
          className="ball"
          style={{ "--delay": "-10s", "--size": "0.3", "--speed": "15s" }}
        ></div>
      </div>
      <div className="mx-5 z-40">
        <motion.h1
          className="text-6xl font-bold mb-4 z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connecting Cardano
        </motion.h1>
        <motion.p
          className="text-2xl mb-8 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Building highways to other networks
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="https://gitbook.com"
            className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
          >
            Documentation
          </a>
          <a
            href="https://apidocs.com"
            className="bg-white text-blue-600 px-6 py-2 rounded shadow hover:bg-gray-100"
          >
            Build On Mynth
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
