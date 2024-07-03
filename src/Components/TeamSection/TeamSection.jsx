import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  
} from "react-icons/fi"; // Import icons from react-icons library
import { FaDiscord } from "react-icons/fa";

// Import team member images (replace these with actual image paths)
import robertImage from "../../Assets/img/robert.jpg";
import alexImage from "../../Assets/img/alex.jpg";
import kunjanImage from "../../Assets/img/kunjan.jpg";
import graceImage from "../../Assets/img/grace.jpg";
import yogeshImage from "../../Assets/img/yogesh.jpg";
import erryImage from "../../Assets/img/erry.jpg";
import telmaImage from "../../Assets/img/telma.jpg";
import faizanImage from "../../Assets/img/faizan.jpg";
import aixaImage from "../../Assets/img/aixa.jpg";
import angelImage from "../../Assets/img/angel.jpg";
import rogerImage from "../../Assets/img/roger.jpg";

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

  // Team members data
  const teamMembers = [
    {
      name: "Robert Tomson",
      role: "Lead Developer",
      image: robertImage,
      email: "rober@example.com",
      github: "https://github.com/SynthLuvr",
      linkedin: "https://www.linkedin.com/in/summatix/",
      twitter: "https://twitter.com/SynthLuvr",
      discord: "https://discordapp.com/users/1098559108212326500",
    },
    {
      name: "Alex Johnson",
      role: "Designer",
      image: alexImage,
      email: "alex@example.com",
      linkedin: "https://www.linkedin.com/in/alexroose/",
      twitter: "https://twitter.com/Alexroose99",
      discord: "https://discordapp.com/users/269689437363896320",
    },
    {
      name: "Kunjan Patel",
      role: "Marketing Specialist",
      image: kunjanImage,
      email: "kunjan@example.com",
      github: "https://github.com/kunj77",
      linkedin: "https://www.linkedin.com/in/kunjan-thakkar-4199b129/",
      discord: "https://discord.com/users/1116099337789919376",
    },
    {
      name: "Grace Lee",
      role: "Product Manager",
      image: graceImage,
      email: "grace@example.com",
      github: "https://github.com/graxiemoxie",
      linkedin: "http://linkedin.com/in/grace-ogunyemi-79a79a1b3",
      twitter: "https://twitter.com/graxie_moxie",
    },
    {
      name: "Yogesh Rautela",
      role: "QA Engineer",
      image: yogeshImage,
      email: "yogesh@example.com",
      twitter: "https://twitter.com/RautelaYog14291",
      discord: "https://discordapp.com/users/1153187011574906941",
    },
    {
      name: "Erry Novriansyah",
      role: "Backend Developer",
      image: erryImage,
      email: "erry@example.com",
      linkedin: "https://www.linkedin.com/in/erry-novriansyah-36489044",
      twitter: "https://twitter.com/errynovriansyah",
      discord: "https://discord.com/users/1157315728282755184",
    },
    {
      name: "Telma Lakmali",
      role: "Frontend Developer",
      image: telmaImage,
      email: "telma@example.com",
      github: "https://github.com/telmalakmali",
      linkedin: "https://www.linkedin.com/in/telma-lakmali-qalife999",
      twitter: "https://twitter.com/Telma999",
      discord: "https://discord.com/users/903841974820405268",
    },
    {
      name: "Faizan Shaikh",
      role: "DevOps Engineer",
      image: faizanImage,
      email: "faizan@example.com",
      github: "https://github.com/FaizanShaikh-3033",
      linkedin: "https://www.linkedin.com/in/faizanshaikh-here/",
      discord: "https://discord.com/users/472060897435844628",
    },
    {
      name: "Aixa Marini",
      role: "UX Designer",
      image: aixaImage,
      email: "aixa@example.com",
      linkedin: "https://www.linkedin.com/in/aixamarini/",
      twitter: "https://twitter.com/someonneyouknow",
      discord: "https://discord.com/users/1098154172920103003",
    },
    {
      name: "Angel Luciano",
      role: "Project Manager",
      image: angelImage,
      email: "angel@example.com",
      github: "https://github.com/LucianoAngel",
      linkedin: "https://www.linkedin.com/in/angellucianot",
      discord: "https://discord.com/users/1104575212994969701",
    },
    {
      name: "Roger Sader",
      role: "Business Analyst",
      image: rogerImage,
      email: "roger@example.com",
      linkedin: "https://www.linkedin.com/in/rogersader/",
    },
  ];

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white dark:bg-custom-main-dark text-center"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>
        Our Team
      </motion.h2>
      <div className="flex  flex-wrap  justify-center items-center ">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="max-w-xs w-64 mx-6 bg-white ml-0 mb-5 dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center"
            variants={itemVariants}
            whileHover="hover"
          >
            <img
              src={member.image}
              alt={`Team Member ${index + 1}`}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{member.role}</p>
            <div className="flex mt-4 space-x-4">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="Email"
                >
                  <FiMail size={24} />
                </a>
              )}
              {member.github && (
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="GitHub"
                >
                  <FiGithub size={24} />
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="LinkedIn"
                >
                  <FiLinkedin size={24} />
                </a>
              )}
              {member.twitter && (
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="Twitter"
                >
                  <FiTwitter size={24} />
                </a>
              )}
              {member.discord && (
                <a
                  href={member.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title="Discord"
                >
                  <FaDiscord size={24} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TeamSection;
