import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ value, delay = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  // Parse the value to extract the numeric part
  const parseValue = (val) => {
    if (val.includes("K")) {
      return parseInt(val) * 1000;
    }
    return parseInt(val);
  };

  const targetValue = parseValue(value);

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Start animation when in view
  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;
    const timer = setTimeout(() => {
      let current = 0;
      const increment = targetValue / 50;
      const countInterval = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          if (isMounted) setDisplayValue(targetValue);
          clearInterval(countInterval);
        } else {
          if (isMounted) setDisplayValue(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(countInterval);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isInView, targetValue, delay]);

  return <span ref={ref}>{displayValue}+</span>;
};

const Stats = () => {
  const stats = [
    { label: "AI Features Built", value: "7+" },
    { label: "Enterprise Solutions", value: "4+" },
    { label: "Users Scaled To", value: "2K+" },
    { label: "Tech Stack", value: "15+" },
  ];

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
    hover: {
      y: -8,
      scale: 1.05,
      boxShadow: "0 20px 60px rgba(56, 189, 248, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="stats-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {stats.map((stat, index) => (
        <motion.div 
          key={index} 
          className="stat-item" 
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div 
            className="stat-value"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatedCounter value={stat.value} delay={0.5 + index * 0.1} />
          </motion.div>
          <motion.div 
            className="stat-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {stat.label}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stats;
