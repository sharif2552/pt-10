import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyUSDSection from "./components/MyUSDSection";
import SocialProofSection from "./components/SocialProofSection";
import PartnersSection from "./components/PartnersSection";
import RoadmapSection from "./components/RoadmapSection";
import TeamSection from "./components/TeamSection";
import SocialLinksSection from "./components/SocialLinksSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // On initial load, check local storage for dark mode preference
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false");

    // Toggle dark mode class on documentElement
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <MyUSDSection />
      <SocialProofSection />
      <PartnersSection />
      <RoadmapSection />
      <TeamSection />
      <SocialLinksSection />
      <ScrollToTopButton />
    </div>
  );
};

export default IndexPage;
