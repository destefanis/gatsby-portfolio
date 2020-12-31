import React, { useRef, useState } from "react";
import { Link } from "gatsby"
import styles from './aboutSection.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import useInView from "react-cool-inview";

function AboutSection() {
  const [visibleState, setVisibleState] = useState("initial");

  // Scroll Reveal
  // https://github.com/wellyshen/react-cool-inview
  const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView({
      threshold: 0.25, // Default is 0
      unobserveOnEnter: true,
      onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
        setVisibleState("visible");
      },
      onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
        setVisibleState("initial");
      }
    }
  );

  const sectionVariants = {
    initial: {
      opacity: 0.25,
      transition: {
        type: "spring",
        duration: 0.6,
        delayChildren: 0.1
      }
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delayChildren: 0.1
      }
    }
  };

  const textVariants = {
    initial: {
      opacity: 0,
      y: 80,
      transition: {
        type: 'spring', delay: 0.2, mass: 1, damping: 10, stiffness: 80,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring', delay: 0.2, mass: 1, damping: 10, stiffness: 80,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      }
    }
  };

  return (
    <motion.div className="grid" ref={ref} variants={sectionVariants} initial="initial" animate={visibleState}>
      <div className={styles.aboutSection}>
        <motion.div className={styles.text} variants={textVariants} initial="initial" animate={visibleState}>
          <h2 className={styles.title}>
            Besides design, I love writing music, programming, games and taking my dog to his favorite parks.
          </h2>
          <Link to="/about">
            <a href="/about" className={styles.link}>
              About Me ->
            </a>
          </Link>
        </motion.div>
        <motion.div className={styles.videos} variants={textVariants} initial="initial" animate={visibleState}>
          <div className={`${styles.videoColumn} ${styles.videoColumnFirst}`}>
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4" className={styles.video} autoPlay muted loop/>
          </div>
          <motion.div className={styles.videoColumn} variants={textVariants} initial="initial" animate={visibleState}>
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/mag-final.mp4" className={styles.video} autoPlay muted loop />
            <video src="https://newportfolio.s3-us-west-2.amazonaws.com/beach.mp4" className={styles.video} autoPlay muted loop />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutSection