import * as React from 'react'
import { motion } from 'framer-motion'

import { Link } from "gatsby"
import styles from './navigation.module.css'

function Navigation(props) {
  function mouseEnter(event) {
    props.onLinkEnter();
  }

  function mouseLeave(event) {
    props.onLinkLeave();
  }
  return (
    <div className="grid grid--full">
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
          {/* <Link to="/" className={styles.navLink} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>About</span></Link>
          <Link to="/" className={styles.navLink} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}><span>Work</span></Link> */}
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navigation