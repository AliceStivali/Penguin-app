import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";


import "../style/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
       <p>We are <p className='Peng_font_about'>Penguin</p>   
       <a href="https://www.linkedin.com/in/alice-stivali-157917153" target="_blank"><i>Alice</i></a><br/>
       <a href="https://www.linkedin.com/in/francesca-foglietta-97374a221/" target="_blank"><i>Francesca</i></a><br/>
       <a href="https://www.linkedin.com/in/matteoaugelli/" target="_blank"><i>Matteo</i></a><br/>
       <a href="https://www.linkedin.com/in/ivan-puddighinu/" target="_blank"><i>Ivan</i><br/></a>
      
        <img src="" alt="" />
        </p>
        
      <motion.div
        className="speechBubble"
        aria-label="speechBubble"
        role="img"
        animate={{
          scale: [6, 7, 6, 7, 6]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          loop: Infinity,
          repeatDelay: 0
        }}
      >
        <span role="img" aria-label="speechBubble">
   
        </span>
      </motion.div>
      <motion.div
        className="penguin"
        aria-label="penguin"
        role="img"
        animate={{
          scale: [ 20, 30]
        }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 35, rotate: [0, 10, -10, 10, 0], cursor: 'pointer' } }

      >
        <span role="img" aria-label="Penguin">
          <img className='penguin_about' src="./penguinr.png" width="10px" alt="" />
        </span>
      </motion.div>
      
    </div>
   
  );
}

export default AboutUs
