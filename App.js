import React from "react";
import { Analytics } from "@vercel/analytics/react";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Analytics />
      <CustomCursor />
      <Header />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
