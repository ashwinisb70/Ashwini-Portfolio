import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ChikitAI - Healthcare Platform",
      description:
        "Developed and deployed backend systems for AI-powered healthcare platform. Built 7+ AI features including health assessment, report analysis, BMI tracking, and medication reminders. Scaled patient module to 2,000+ users by optimizing backend performance and supporting feature reliability.",
      tags: ["Flask", "LangChain", "OpenAI", "Healthcare AI"],
      link: "https://www.healthcare.chikit.ai/",
    },
    {
      title: "Tender Evaluation Agent",
      description:
        "Scoped and delivered custom enterprise AI solution for Government of Odisha. Automated tender document analysis and evaluation using LLMs and RAG systems.",
      tags: ["LangChain", "RAG", "LLMs", "Enterprise AI"],
      link: "#",
    },
    {
      title: "Accounts Payable & Insurance Agents",
      description:
        "Developed intelligent document processing systems. Built data extraction for structured documents and insurance policy extraction & validation pipeline with high accuracy.",
      tags: ["NLP", "Document Processing", "Python", "RAG"],
      link: "#",
    },
    {
      title: "Lip Reading AI (Deep Learning)",
      description:
        "Developed sentence-level lipreading system using LipNet architecture. Implemented preprocessing pipelines and model training for video-to-speech prediction.",
      tags: ["Python", "Deep Learning", "LipNet", "Computer Vision"],
      link: "#",
    },
    {
      title: "VetPharma AI Platform",
      description:
        "An AI-powered platform for veterinary sales, marketing, and livestock health management. Features an AI chatbot offering real-time insights on vaccinations, treatments, and products. Enables field representatives to track visits, locations, and manage doctor data. Built with React and Flask, it streamlines field data collection and delivers actionable analytics for the veterinary pharmaceutical industry.",
      tags: ["React", "Flask", "AI Chatbot", "Healthcare", "Analytics"],
      link: "#",
    },
    {
      title: "Agriculture AI Agent (Agri Assistant)",
      description:
        "An AI-powered tool helping farmers with crop disease detection and agricultural guidance. Users can upload crop images for real-time disease identification using GPT-4o models. Provides personalized fertilizer suggestions and treatment solutions. Includes weather forecasting to support better farming decisions, enabling smarter, data-driven agriculture.",
      tags: ["React", "GPT-4o", "Computer Vision", "AI", "Agriculture"],
      link: "https://crop-detection-one.vercel.app",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.section
      className="section projects"
      id="projects"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2>Featured Projects</motion.h2>

      <motion.div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={projectVariants}
            whileHover="hover"
          >
            <div className="project-header">
              <h3>{project.title}</h3>
              <motion.a
                href={project.link}
                className="project-link"
                whileHover={{ scale: 1.15, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
              >
                →
              </motion.a>
            </div>

            <p className="project-description">{project.description}</p>

            <motion.div className="project-tags">
              {project.tags.map((tag, idx) => (
                <motion.span 
                  key={idx} 
                  className="tag"
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(56, 189, 248, 0.3)",
                  }}
                  variants={tagVariants}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
