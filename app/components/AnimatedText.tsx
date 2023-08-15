"use client";

import { motion } from "framer-motion";


const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transitiion: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
}

const singleWord = {
    initial:{
        opacity:0,
        y:50,
    },
    animate:{
        opcaity:1,
        y:0,
        transition:{
            duration: 1
        }
    }
}

const AnimatedText = ({ text="Turning Vision Into Reality With Code And Design", className = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center ">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="intial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => 
          <motion.span key={word + "-" + index} className="inline-block" variants={singleWord}>
            {word}&nbsp;
          </motion.span> 
        )
        }
      </motion.h1>
    </div>
  );
};

export default AnimatedText;