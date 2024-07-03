import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Components/Navbar/Navbar";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MyUSDSection from "../../Components/MyUSDSection/MyUSDSection";
import SocialProofSection from "../../Components/SocialProofSection/SocialProofSection";
import PartnersSection from "../../Components/PartnersSection/PartnersSection";
import RoadmapSection from "../../Components/RoadmapSection/RoadmapSection";
import TeamSection from "../../Components/TeamSection/TeamSection";
import SocialLinksSection from "../../Components/SocialLinksSection/SocialLinksSection";
import IntroSection from "../../Components/IntroSection/IntroSection";
import Timeline from "../../Components/Timeline/Timeline";

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="myusd">
        <MyUSDSection />
      </div>
      <div id="social-proof">
        <SocialProofSection />
      </div>
      <div id="intro">
        <IntroSection />
      </div>
      <div id="partners">
        <PartnersSection />
      </div>
      <div id="roadmap">
        <Timeline />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="social-links">
        <SocialLinksSection />
      </div>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-600 text-white dark:bg-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors duration-300 z-50"
      >
        <FontAwesomeIcon icon={faChevronUp} className="text-lg" />
      </button>
    </div>
  );
};

export default IndexPage;
