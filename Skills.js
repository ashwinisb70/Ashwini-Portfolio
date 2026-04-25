import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Python", "C Programming"],
    },
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Flask", "REST APIs", "System Design"],
    },
    {
      category: "AI & Machine Learning",
      skills: ["OpenAI APIs", "LangChain", "RAG", "NLP"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "HTML", "CSS"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Cloud",
      skills: ["Google Cloud Platform (GCP)"],
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Postman", "VS Code"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.08,
      backgroundColor: "#38bdf8",
      color: "#0f172a",
      boxShadow: "0 8px 24px rgba(56, 189, 248, 0.4)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      className="section skills"
      id="skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2>Skills & Technologies</motion.h2>

      <motion.div className="skills-grid">
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            className="skills-category"
            variants={categoryVariants}
            whileHover={{ 
              y: -8,
              boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)",
            }}
          >
            <h3>{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tag"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  variants={skillVariants}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
