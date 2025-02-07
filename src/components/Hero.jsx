import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.png";
import {FaArrowDown} from "react-icons/fa";

// Words to cycle through
const words = ["a Designer", "a Developer", "an Artist", "an Educator"];
const finalMessage = "I am LiLU.";

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  
    useEffect(() => {
      // Start typewriter effect only after initial fade-in
      const fadeTimeout = setTimeout(() => {
        setIsTextVisible(true);
      }, 500); // 0.5s delay for fade-in effect
  
      return () => clearTimeout(fadeTimeout);
    }, []);
  
    useEffect(() => {
      if (!isTextVisible) return;
  
      let typingSpeed = isDeleting ? 50 : 100;
      let timeout;
  
      if (!showFinalText) {
        const currentWord = words[currentWordIndex];
  
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            timeout = setTimeout(() => {
              setDisplayText(currentWord.slice(0, displayText.length + 1));
            }, typingSpeed);
          } else {
            timeout = setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          if (displayText.length > 0) {
            timeout = setTimeout(() => {
              setDisplayText(currentWord.slice(0, displayText.length - 1));
            }, typingSpeed);
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) =>
              prevIndex === words.length - 1 ? -1 : prevIndex + 1
            );
  
            if (currentWordIndex === words.length - 1) {
              setShowFinalText(true);
            }
          }
        }
      } else {
        timeout = setTimeout(() => {
          setDisplayText(finalMessage);
          setShowParagraph(true);
        }, 500);
      }
  
      return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentWordIndex, showFinalText, isTextVisible]);
  
    return (
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 md:px-20"
        initial={{ opacity: 0, scale: .8}}
        animate={{ opacity: 1, scale: 1}}
        transition={{ type: "spring", duration: 0.5, ease: "easeIn" }}
        style={{ transformOrigin: "top left" }}
      >
        {/* Centered Grid Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
          {/* Left Side: Text Content */}
          <motion.div
            className="w-full md:w-1/2 text-left flex flex-col justify-center"
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{ duration: .8, delay: 0.6, ease: "easeIn" }}
            
          >
            <h1 className="text-6xl font-bold md:text-1xl text-center md:text-left">
              LINDSEY USSERY
            </h1>
  
            {/* Typewriter Effect Starts After Fade-in */}
            {isTextVisible && !showFinalText ? (
              <motion.h3
                className="text-6xl md:text-4xl mt-4 font-semibold text-center md:text-left"
                initial={{ opacity: 0, transform: 0 }}
                animate={{ opacity: 1, transform: 1 }}
                transition={{ type:"spring", duration: 0.5, ease:"easeIn" }}
              >
                &gt; I am <span className="text-primary font-mono">{displayText}</span>
              </motion.h3>
            ) : isTextVisible ? (
              <motion.h3
                key="final-text"
                className="text-3xl md:text-4xl font-bold text-primary mt-4 text-center md:text-left font-mono"
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                transition={{ type: "spring", duration: .8, delay: 0.6, ease: "easeIn" }}
              >
                {displayText}
              </motion.h3>
            ) : null}
  
            {/* Fade-in paragraph */}
            {showParagraph && (
              <motion.p
                className="text-lg md:text-xl mt-6 max-w-xl text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Hello! I am a jack-of-all-trades and love to thrive in spaces that advance my knowledge and skills.
              </motion.p>
            )}
          </motion.div>
  
          {/* Right Side: Centered Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
            initial={{ opacity: 0,  x: 1000, scale: .5}}
            animate={{ opacity: 1,  x:0, scale: 1}}
            transition={{ type:"spring", duration: 1.2, delay: 0.5, ease: "easeInOut"}}
          >
        <img
          src={HeroImage}
          alt="Hero"
          className="w-64 md:w-80 lg:w-96 rounded-lg shadow-lg border-4 mask mask-hexagon object-contain"
        />
      </motion.div>
      </div>

         {/* Scroll Down Arrow */}
         <motion.div
        className="absolute bottom-10 flex justify-center items-center cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      >
        <FaArrowDown className="text-3xl text-primary hover:scale-110 transition" />
      </motion.div>
    </motion.section>
  );
}