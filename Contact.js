import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "mallikarjunbendawade9972@gmail.com";

  const getIndianTime = () => {
    const now = new Date();
    const istTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    return istTime.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    });
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/mallikarjun-bendawade",
      url: "https://www.linkedin.com/in/mallikarjun-bendawade-a37050225/",
      icon: "in",
    },
    {
      label: "GitHub",
      value: "github.com/Mallikarjun85-bot",
      url: "https://github.com/Mallikarjun85-bot",
      icon: "gh",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.section
      className="section contact"
      id="contact"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="contact-wrapper" variants={containerVariants}>
        {/* Left Side */}
        <motion.div className="contact-left" variants={itemVariants}>
          <h2>Ready to start something <span className="highlight">big?</span></h2>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-label">LOCATION</span>
              <span className="detail-value">Bengaluru, India</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">LOCAL TIME</span>
              <span className="detail-value">{getIndianTime()} GMT+5:30</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">STATUS</span>
              <span className="detail-value available">● Available for projects</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div className="contact-right" variants={containerVariants}>
          {/* Email Section */}
          <motion.div className="email-section" variants={itemVariants}>
            <span className="section-label">EMAIL ADDRESS</span>
            <div className="email-box">
              <span>{email}</span>
              <motion.button
                className="copy-btn"
                onClick={handleCopy}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Copy email"
              >
                {copied ? "✓" : "📋"}
              </motion.button>
            </div>
          </motion.div>

          {/* Digital Presence */}
          <motion.div className="digital-presence" variants={itemVariants}>
            <span className="section-label">DIGITAL PRESENCE</span>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-item"
                  whileHover={{ x: 8, boxShadow: "0 12px 48px rgba(56, 189, 248, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <div className="social-info">
                    <span className="social-label">{link.label}</span>
                    <span className="social-value">{link.value}</span>
                  </div>
                  <motion.span 
                    className="arrow"
                    animate={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
