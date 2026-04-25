import React from "react";
import { motion } from "framer-motion";
import "./AnimatedBackground.css";

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <motion.div
        className="gradient-blob blob-1"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="gradient-blob blob-2"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          scale: [1.2, 0.9, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="gradient-blob blob-3"
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 50, -100, 0],
          scale: [0.9, 1, 1.2, 0.9],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
      <div className="gradient-overlay" />
    </div>
  );
};

export default AnimatedBackground;
