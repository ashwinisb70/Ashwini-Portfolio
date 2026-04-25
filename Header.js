import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header-container">
        <motion.div className="logo">
          <a href="#top">Mallikarjun K Bendawade.</a>
        </motion.div>

        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isOpen ? "open" : ""}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
