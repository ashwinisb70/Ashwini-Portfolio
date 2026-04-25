import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const highlightVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.section
      className="section about"
      id="about"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 variants={itemVariants}>About Me</motion.h2>

      <div className="about-content">
        <motion.div className="about-text" variants={itemVariants}>
          <p>
            I'm a results-driven Software Developer and AI&ML Engineer specializing in AI product development with hands-on experience building and launching intelligent systems from scratch. Currently at Nyukt AI, I translate product requirements into scalable backend architectures and develop AI-powered features that matter.
          </p>

          <p>
            My expertise spans translating PRDs into production-ready systems, designing scalable APIs, engineering data handling workflows for healthcare insights, and building agentic AI platforms. I combine deep technical knowledge with a product-oriented mindset, proven by scaling ChikitAI Patient Module to 2,000+ users and delivering custom enterprise solutions.
          </p>

          <p>
            Strong foundation in backend development, system design, and data handling - complemented by hands-on experience with modern AI/ML tooling (LangChain, OpenAI APIs, RAG systems) and proven ability to collaborate cross-functionally to deliver impactful solutions.
          </p>
        </motion.div>

        <motion.div className="about-highlights">
          <motion.div 
            className="highlight-item"
            variants={highlightVariants}
            whileHover={{ x: 8, boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)" }}
          >
            <h3>Specialization</h3>
            <p>Backend Architecture, AI/ML, Healthcare Tech</p>
          </motion.div>
          <motion.div 
            className="highlight-item"
            variants={highlightVariants}
            whileHover={{ x: 8, boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)" }}
          >
            <h3>Based In</h3>
            <p>Bangalore, India</p>
          </motion.div>
          <motion.div 
            className="highlight-item"
            variants={highlightVariants}
            whileHover={{ x: 8, boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)" }}
          >
            <h3>Currently At</h3>
            <p>Nyukt AI (July 2025 - Present)</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
