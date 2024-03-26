import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>AWU FOUNDATION</motion.h2>
          <motion.h1 variants={textVariants}>
            ALWAYS WITH US <span style={{ color: "#fcca46" }}>FOUNDATION</span>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            {/* YouTube Videos */}
            <div className="youtube-video">
              <iframe
                width="100%" // Adjust the width as needed
                height="150" // Adjust the height as needed
                src="https://youtu.be/UNdScP7mIfE"
                title="YouTube video player 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="youtube-video">
              <iframe
                width="100%" // Adjust the width as needed
                height="150" // Adjust the height as needed
                src="https://youtu.be/UNdScP7mIfE"
                title="YouTube video player 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        AWU FOUNDATION
      </motion.div>
      <div className="imageContainer">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
