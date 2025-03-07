
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaWordpress, FaBootstrap, FaSass, FaSketch } from "react-icons/fa";
import { SiAdobecreativecloud, SiCanva, SiTailwindcss } from "react-icons/si";

import img1 from "../assets/about_me_husband_lindsu.jpg"; // Replace with actual images
import img2 from "../assets/about_me_italy_lindsu.jpg";
import img3 from "../assets/about_me_paris_lindsu.jpg";

export default function About() {
    const images = [img1, img2, img3];
    const [index, setIndex] = useState(0);
  
    // Auto-play slideshow every 4 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Change image every 4 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <motion.section
    id="about"
    className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Column: Title & Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-6xl font-bold uppercase">About Me</h2>
        <p className="mt-4 text-lg">
        My expertise spans JavaScript, React, WordPress, UX/UI design, and animation, 
        blending technical precision with a creative touch. I’ve worked on everything 
        from custom WordPress solutions to interactive educational tools, always striving 
        to create digital experiences that are both functional and visually compelling.
        </p>
        <p className="mt-4 text-lg">
        Beyond development, I have a strong foundation in education and curriculum design, 
        making technology more accessible through engaging, well-structured learning experiences. 
        Whether I’m coding, designing, or teaching, my goal is to build solutions that 
        inspire creativity and innovation.
          </p>
          <div className="list-row">
         <div className="flex items-center gap-2 border-t border-dashed border-t-base-content/5 py-2">
         <span class="badge badge-xs badge-info">Send</span>
         "test"
       
         </div>
         

       </div>


        {/* Icons Row (Programs, Frameworks, Languages) */}
        <motion.div
          className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-6 text-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Programs */}
          <SiAdobecreativecloud />
          <FaSketch />
          <SiCanva />

          {/* Frameworks */}
          <FaBootstrap />
          <FaSass />
          <SiTailwindcss />
          <FaReact />
          <FaWordpress />

          {/* Languages */}
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaPhp />
        </motion.div>
      </motion.div>

       {/* Right Column: Auto-Playing Image Slideshow with Fixed Dimensions */}
       <motion.div
          className="relative w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            key={index}
            src={images[index]}
            alt="About Image"
            className="w-full max-w-md h-[500px] object-contain object-center rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
    </div>
  </motion.section>
);
}