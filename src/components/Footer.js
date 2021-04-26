import * as React from 'react'
import { Link } from "gatsby"
import styles from './footer.module.css'
import { motion } from 'framer-motion'

function Footer(props) {
  function mouseEnter(event) {
    props.onFooterEnter();
  }

  function mouseLeave(event) {
    props.onFooterLeave();
  }

  function linkEnter(event) {
    props.onLinkEnter();
  }

  function linkLeave(event) {
    props.onLinkLeave();
  }
  return (
    <div id="contact" className="grid grid--full contact">
      <div className={styles.footer}>
        <div className={styles.card} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <h2 className={styles.title}>
            Question about my work?
            {/* <img src="/message-circle.svg" alt="Message Icon" className={styles.icon} /> */}
          </h2>
          <h2 className={`${styles.title} ${styles.contact} `}>
            <a href="mailto:someone@yoursite.com">Let's chat.</a>
            {/* <img src="/message-circle.svg" alt="Message Icon" className={styles.icon} /> */}
          </h2>
        </div>
        <nav className={styles.footerLinks}>
          <div className={styles.openSource}>
            View this portfolio on <a href="https://www.figma.com/@daniel">Figma</a> or <a href="https://github.com/destefanis/gatsby-portfolio">Github</a>.
          </div>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/daniel__designs" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://github.com/destefanis" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Github
            </a>
            <a href="https://www.linkedin.com/in/danielrd/" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              LinkedIn
            </a>
            <a href="https://dribbble.com/danielrd/shots" target="_blank" onMouseEnter={linkEnter} onMouseLeave={linkLeave} className={styles.socialLink}>
              Dribbble
            </a>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Footer