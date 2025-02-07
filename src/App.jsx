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

  return (
    <div className="w-full bg-fixed bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${backgroundImg})` }}>
      {/* Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <nav className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold tracking-widest">LiLU</h1>
        <ul className="flex gap-8 text-lg">
          <li><a href="#home" className="uppercase transition">Home</a></li>
          <li><a href="#about" className="uppercase transition">About</a></li>
          <li><a href="#projects" className="uppercase transition">Projects</a></li>
          <li><a href="#contact" className="uppercase transition">Contact</a></li>
        </ul>
      </nav>

      {/* Sections with Smooth Scroll Animation */}
      <Hero />
      <About />
      <Projects />
      <Contact />
     
    </div>
  );
}
