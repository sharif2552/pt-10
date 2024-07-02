import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 shadow fixed top-0 left-0 right-0 z-50">
        <div className="text-2xl font-bold">Logo</div>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-blue-600 text-white dark:bg-gray-600"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </nav>

      {/* Spacer to prevent content from being hidden behind the navbar */}
      <div className="h-16"></div>

      {/* Headline Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center dark:from-black dark:to-slate-700">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connecting Cardano
        </motion.h1>
        <motion.p
          className="text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Building highways to other networks
        </motion.p>
        <motion.div
          className="flex space-x-4"
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
      </section>

      {/* MyUSD Introduction Section */}
      <div className="flex w-100vw flex-row justify-center">
        <section className="flex flex-col lg:flex-row items-center lg:items-start py-20 lg:px-5 bg-white dark:bg-gray-800 text-center lg:text-left lg:space-x-10 space-y-10 lg:space-y-0 px-4 lg:flex">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-4">Introducing MyUSD</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Brief introduction about MyUSD goes here. Explain what it is and
              its benefits.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-4xl">
              <div className="aspect-w-16 aspect-h-9 flex justify-center">
                <iframe
                  className="rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/Pe0ObwhTWhs"
                  title="What is MyUSD? How is it so stable? Mynth Stablecoin, MyUSD explained"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-700 text-center">
        <h2 className="text-4xl font-bold mb-8">In the Spotlight</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Add your social proof elements here */}
          <div className="w-full md:w-1/3 p-4 transition-transform transform hover:scale-105">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wvUukA48do8"
                  title="MyUSD Explained: Dapp Central &amp; Mynth"
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
          </div>
          <div className="w-full md:w-1/3 p-4 transition-transform transform hover:scale-105">
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
          </div>
          <div className="w-full md:w-1/3 p-4 transition-transform transform hover:scale-105">
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
          </div>
        </div>
      </section>
      {/* Social Proof Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-700 text-center">
        <h2 className="text-4xl font-bold mb-8">In the Spotlight</h2>
        <div className="flex flex-wrap justify-center">
          {/* Add your social proof elements here */}
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition-transform transform hover:scale-105">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wvUukA48do8"
                  title="MyUSD Explained: Dapp Central &amp; Mynth"
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
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition-transform transform hover:scale-105">
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
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-4 transition-transform transform hover:scale-105">
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
          </div>
        </div>
      </section>

      {/* Intro Infographic Section */}
      <section className="py-20 bg-white dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
        <div className="w-full max-w-4xl mx-auto">
          <img
            src="path/to/your/infographic.png"
            alt="Infographic"
            className="w-full rounded shadow-lg"
          />
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-700 text-center">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">About Our Services</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Here you can write a more detailed introduction to your company and
            products.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Partners</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Add your partners' logos and descriptions here */}
          <div className="w-1/4 p-4">
            <img
              src="path/to/partner-logo1.png"
              alt="Partner 1"
              className="mx-auto mb-4"
            />
          </div>
          <div className="w-1/4 p-4">
            <img
              src="path/to/partner-logo2.png"
              alt="Partner 2"
              className="mx-auto mb-4"
            />
          </div>
          <div className="w-1/4 p-4">
            <img
              src="path/to/partner-logo3.png"
              alt="Partner 3"
              className="mx-auto mb-4"
            />
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-700 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Roadmap</h2>
        <div className="w-full max-w-4xl mx-auto">
          {/* Add your roadmap content here */}
          <img
            src="path/to/roadmap-image.png"
            alt="Roadmap"
            className="w-full rounded shadow-lg"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* Add your team members' photos and bios here */}
          <div className="w-1/4 p-4">
            <img
              src="path/to/team-member1.jpg"
              alt="Team Member 1"
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-xl font-bold">Name</p>
            <p className="text-gray-700 dark:text-gray-300">Role</p>
          </div>
          <div className="w-1/4 p-4">
            <img
              src="path/to/team-member2.jpg"
              alt="Team Member 2"
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-xl font-bold">Name</p>
            <p className="text-gray-700 dark:text-gray-300">Role</p>
          </div>
          <div className="w-1/4 p-4">
            <img
              src="path/to/team-member3.jpg"
              alt="Team Member 3"
              className="mx-auto mb-4 rounded-full"
            />
            <p className="text-xl font-bold">Name</p>
            <p className="text-gray-700 dark:text-gray-300">Role</p>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <footer className="py-10 bg-blue-600 dark:bg-gray-800 text-white text-center">
        <div className="flex justify-center space-x-4">
          {/* Add your social media links here */}
          <a href="https://twitter.com" className="hover:underline">
            Twitter
          </a>
          <a href="https://linkedin.com" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com" className="hover:underline">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default IndexPage;
