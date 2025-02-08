import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Contact() {
    const [showArrow, setShowArrow] = useState(false);
  
    // Track scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.5) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      };


      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-12 px-6 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        
        {/* Contact Form */}
        <motion.div
          className="w-full grid-cols-6 p-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows="4"
            />
            <button className="btn btn-primary w-full">Send Message</button>
          </form>
        </motion.div>

        {/* Social Media & Resume Button */}
        <motion.div
          className="w-full grid-cols-6 flex flex-col place-content-center space-y-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Social Media Links */}
          <div className="flex space-x-6 text-3xl py-4 place-content-center">
            <a href="https://github.com/liluwebdev" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/lilu-ussery/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-primary">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/liluartstudio/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-primary">
              <FaInstagram />
            </a>
          </div>

          {/* Resume Download Button */}
          <a href="/lilu_dev_resume_2025.pdf" download className="btn btn-outline btn-primary w-full md:w-auto">
            Download Resume
          </a>
        </motion.div>

      </div>
   {/* Up Arrow - Scroll Back to Hero (Only Shows When Scrolled Down) */}
   {showArrow && (
        <motion.div
          className="fixed bottom-8 right-8 bg-primary p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "bounce", duration: 0.3, ease: "easeOut"}}
          onClick={() => {
            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaArrowUp className="text-white text-2xl" />
        </motion.div>
      )}
    </motion.section>
  );
}