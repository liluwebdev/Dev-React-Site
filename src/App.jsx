import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import "./App.css";
import backgroundImg from "./assets/city-bk.svg"; 

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-full bg-fixed bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* 🔹 Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 origin-left bg-primary w-full"
        style={{ scaleX }}
      />

      {/* Navbar */}
<nav className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50">
  <h1 className="text-xl font-bold tracking-widest">LiLU</h1>

  {/* Desktop Menu */}
  <ul className="hidden lg:flex gap-8 text-lg">
    <li><a href="#home" className="uppercase transition">Home</a></li>
    <li><a href="#about" className="uppercase transition">About</a></li>
    <li><a href="#projects" className="uppercase transition">Projects</a></li>
    <li><a href="#contact" className="uppercase transition">Contact</a></li>
  </ul>

  {/* Hamburger Menu (Mobile) */}
  <button
    className="lg:hidden btn btn-square btn-ghost z-[60]"
    onClick={() => setIsOpen(!isOpen)}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-6 h-6"
    >
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      )}
    </svg>
  </button>
</nav>

{/* Mobile Dropdown */}
<div className={`lg:hidden fixed top-16 left-0 w-full bg-base-200 shadow-lg transition-all z-[50] ${isOpen ? "block" : "hidden"}`}>
  <ul className="menu p-4 pt-5">
    <li><a href="#home" className="uppercase" onClick={() => setIsOpen(false)}>Home</a></li>
    <li><a href="#about" className="uppercase" onClick={() => setIsOpen(false)}>About</a></li>
    <li><a href="#projects" className="uppercase" onClick={() => setIsOpen(false)}>Projects</a></li>
    <li><a href="#contact" className="uppercase" onClick={() => setIsOpen(false)}>Contact</a></li>
  </ul>
</div>

      {/* 🔹 Sections with Smooth Scroll Animation */}
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}