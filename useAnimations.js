import { useRef, useEffect, useState } from "react";
import { useMotionValue, useTransform } from "framer-motion";

// Hook for scroll reveal animations
export const useScrollReveal = () => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        margin: "-100px",
      }
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

  return { ref, isInView };
};

// Hook for parallax effect
export const useParallax = (offset = 50) => {
  const ref = useRef(null);
  const y = useMotionValue(0);
  const ySmooth = useTransform(y, (value) => value * offset);

  useEffect(() => {
    let frameId;
    const handleScroll = () => {
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const scrollProgress =
          (windowHeight - elementTop) / (windowHeight + ref.current.offsetHeight);
        y.set(scrollProgress);
      }
      frameId = requestAnimationFrame(handleScroll);
    };

    frameId = requestAnimationFrame(handleScroll);

    return () => cancelAnimationFrame(frameId);
  }, [y]);

  return { ref, ySmooth };
};

// Hook for scroll progress
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
};

// Hook for mouse position
export const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return position;
};
