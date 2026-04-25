import React from "react";
import { motion } from "framer-motion";
import { useParallax } from "../hooks/useAnimations";

const Hero = () => {
  const { ref: parallaxRef, ySmooth } = useParallax(0.5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.section
      className="hero"
      id="top"
      ref={parallaxRef}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-wrapper">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>
            Mallikarjun K <br /> Bendawade.
          </motion.h1>

          <motion.h2 variants={itemVariants} className="hero-tagline">
            AI-Driven Backend Engineer & Product Developer
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Results-driven Software Developer specializing in AI product development. I build intelligent systems from scratch, translating product requirements into scalable backend architectures and AI-powered features. Currently scaling ChikitAI to 2,000+ users and delivering enterprise AI solutions.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image" 
          variants={profileVariants}
          style={{ y: ySmooth }}
        >
          <motion.img
            src="/images/profile.jpg"
            alt="Mallikarjun Bendawade"
            whileHover={{ scale: 1.08, rotateY: 10 }}
            transition={{ duration: 0.5 }}
            className="float"
          />
        </motion.div>
      </motion.div>

      <motion.div className="hero-scroll" variants={itemVariants}>
        {/* <span>Scroll to explore</span> */}
        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* ↓ */}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
