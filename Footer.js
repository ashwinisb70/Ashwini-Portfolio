import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mallikarjun-bendawade-a37050225/" },
    { name: "GitHub", url: "https://github.com/Mallikarjun85-bot" },
    { name: "Email", url: "mailto:mallikarjunbendawade9972@gmail.com" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <motion.div className="footer-text" variants={itemVariants}>
          <p>Building intelligent AI solutions that scale.</p>
        </motion.div>

        <motion.div 
          className="footer-links"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.08, 
                color: "#0ea5e9",
                textDecoration: "underline",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="footer-bottom"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p variants={itemVariants}>
            &copy; 2026 Mallikarjun Bendawade. All rights reserved.
          </motion.p>
          <motion.a 
            href="#top" 
            className="back-to-top"
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to top ↑
          </motion.a>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
