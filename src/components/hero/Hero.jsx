import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    y:-500,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y:0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
    scrollButton:{
      opacity:0,
      y:25,
      transition:{
        duration:2.5,
        repeat:Infinity,
      },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
    transition: {
      yoyo: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="particleBackground"></div>
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 variants={textVariants}>KARTHIK J</motion.h2>
          <motion.h1 variants={textVariants}>
            Front-end Developer, UI Designer, and Cybersecurity Enthusiast
          </motion.h1>
          <motion.div className="buttons">
            <motion.button variants={buttonVariants} whileHover="hover">
              <motion.a href="https://drive.google.com/drive/folders/1JHC8TS2XQ4LG1AqubbVHlemj52_iBN4I?usp=sharing">Check my resume</motion.a>
            </motion.button>
            <motion.button variants={buttonVariants} whileHover="hover">
              <motion.a href="#Contact">Contact me</motion.a>
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer">
        Patience and Progress
      </motion.div>
    </div>
  );
};

export default Hero;
