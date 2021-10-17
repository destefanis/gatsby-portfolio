import * as React from 'react'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { Link } from "gatsby"
import styles from './navigation.module.css'

import menuIcon from '../images/menu.svg'
import closeIcon from '../images/close.svg'
import twitterIcon from '../images/twitter.svg'
import linkedinIcon from '../images/linkedin.svg'

function Navigation(props) {
  const [navOpen, setNavOpen] = useState(false);

  function updateNav(event) {
    if (navOpen === true) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  }

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
      x: 0,
      transition: {
        duration: duration,
        delay: 0,
      },
    },
    exit: {
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
      },
    },
  }

  const halfVariants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scaleX: 1,
      transition: {
        duration: duration,
        delay: 0,
      },
    },
    exit: {
      opacity: 1,
      y: 0,
      x: 0,
      scaleX: 0.8,
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
    visible: { 
      opacity: 1, 
      x: 0 
    },
    exit: { 
      opacity: 0, 
      x: 20 
    },
  }

  const iconVariants = {
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
    },
    exit: { 
      opacity: 0, 
      x: 0,
      scale: 0.4,
    },
  }

  const menuVariants = {
    closed: {
      backgroundColor: "rgba(255, 255, 255, 0)",
    },
    active: {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  }

  return (
    <div>
      <div className="grid grid--full">
        <div className={styles.placeholder}>
        </div>
        <div className={styles.fixedNav}>
          <motion.nav
            className={styles.nav}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 0 }}
          >
            <div className={styles.logo}>
              <Link to="/" className={styles.logo} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Daniel Destefanis</span></Link>
            </div>
            <div className={styles.navList}>
              {/* <Link to="/about" className={styles.navLink} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>About</span></Link>
              <div to="/" className={styles.navLink} onClick={updateNav} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Work</span></div> */}
              <motion.div 
                initial="exit"
                animate={navOpen ? "closed" : "open"}
                variants={menuVariants}
                className={styles.menu} 
                onClick={updateNav} 
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}>
                <figure className={styles.figure}>
                  <motion.img 
                    src={menuIcon} 
                    alt="Menu Icon" 
                    className={styles.icon} 
                    initial="visible"
                    animate={navOpen ? "exit" : "visible"}
                    variants={iconVariants}
                  />
                  <motion.img 
                    src={closeIcon} 
                    alt="Close Icon" 
                    className={styles.icon}
                    initial="exit"
                    animate={navOpen ? "visible" : "exit"}
                    variants={iconVariants}
                  />
                </figure>
                  <span className={styles.menuLabel}>Menu</span>
              </motion.div>
            </div>
          </motion.nav>
        </div>
      </div>

      <AnimatePresence>
        {navOpen === true &&
          <motion.nav className={styles.fullNav}
            variants={variants}
            initial="exit"
            animate="visible"
            exit="exit">
            <div className={styles.backdrop} onClick={updateNav}>
            </div>
            <motion.div className={styles.half} variants={halfVariants}
              initial="exit"
              animate="visible"
              exit="exit">
              <div className={styles.wrapper}>
                <h5 class={styles.label}>Not Case Studies</h5>
                <motion.ul variants={listVariants} className={styles.list}>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/about" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={updateNav}>
                      <span>About Me</span>
                    </Link>
                  </motion.li>
                </motion.ul>
                <h5 class={styles.label}>Case Studies</h5>
                <motion.ul variants={listVariants} className={styles.list}>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/server-video" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={updateNav}>
                      <span>Server Video</span>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/discord-growth" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={updateNav}>
                      <span>Discord Growth</span>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/design-tooling" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={updateNav}>
                      <span>Design Tooling</span>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/destiny-medals" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}  onClick={updateNav}>
                      <span>Destiny Medals</span>
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={item}
                  >
                    <Link to="/steelseries" className={styles.link} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={updateNav}>
                      <span>SteelSeries</span>
                    </Link>
                  </motion.li>
                </motion.ul>
                <h5 class={styles.label}>Follow</h5>
                <motion.div className={styles.socialIcons}>
                  <Link to="https://twitter.com/daniel__designs">
                    <img
                      src={twitterIcon} 
                      alt="Twitter Icon" 
                      className={styles.social} 
                    />
                  </Link>
                  <Link to="https://www.linkedin.com/in/danielrd/">
                    <img
                      src={linkedinIcon} 
                      alt="LinkedIn Icon" 
                      className={styles.social} 
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.nav>
        }
      </AnimatePresence>

    </div>
  )
}

export default Navigation