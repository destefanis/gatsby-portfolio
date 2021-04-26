import * as React from 'react'
import { motion, AnimatePresence } from "framer-motion"

import { Link } from "gatsby"
import styles from './fullNavigation.module.css'

function FullNavigation(props) {
  function mouseEnter(event) {
    props.onLinkEnter();
  }

  function mouseLeave(event) {
    props.onLinkLeave();
  }

  const duration = 0.25;

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: 0,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: duration,
      },
    },
  }

  const listVariants = {
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.15 }
    },
    exit: {
      transition: { staggerChildren: 0.04, staggerDirection: -1 }
    }
  };

  const item = {
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <AnimatePresence>
      {props.active === true &&
        <motion.nav className={styles.fullNav}
          variants={variants}
          initial="exit"
          animate="visible"
          exit="exit">
          <div className={styles.wrapper}>
            <h5 class={styles.label}>Case Studies</h5>
            <motion.ul variants={listVariants} className={styles.list}>
              <motion.li
                variants={item}
              >
                <Link to="/server-video" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  <span>Server Video</span>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
              >
                <Link to="/discord-onboarding" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  <span>Discord Onboarding</span>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
              >
                <Link to="/design-tooling" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  <span>Design Tooling</span>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
              >
                <Link to="/destiny-medals" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  <span>Destiny Medals</span>
                </Link>
              </motion.li>
              <motion.li
                variants={item}
              >
                <Link to="/steelseries" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                  <span>SteelSeries</span>
                </Link>
              </motion.li>
            </motion.ul>
          </div>
        </motion.nav>
      }
    </AnimatePresence>
  )
}

export default FullNavigation