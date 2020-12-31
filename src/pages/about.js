import * as React from "react"
import { useState } from "react"
import useMouse from "@react-hook/mouse-position"
import { motion } from "framer-motion"

import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import Footer from "../components/Footer.js"
import Card from "../components/Card.js"
import styles from '../components/AboutGrid.module.css'

import "../components/reset.css"
import "../components/global.css"

// markup
const AboutPage = () => {

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
    fps: 60,
  });

  let mouseXPosition = null;
  let mouseYPosition = null;

  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "rgba(30, 145, 214, 1)",
      x: mouseXPosition - 6,
      y: mouseYPosition - 6,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 130,
      }
    },
    project: {
      opacity: 1,
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 60,
      y: mouseYPosition - 60,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 130,
        duration: 0.3,
      }
    },
    contact: {
      opacity: 1,
      backgroundColor: "rgba(255, 189, 189, 0.85)",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 130,
      }
    },
    link: {
      opacity: 1,
      backgroundColor: "rgba(30, 145, 214, 0.1)",
      color: "#000",
      height: 80,
      width: 80,
      zIndex: 1,
      fontSize: "32px",
      x: mouseXPosition - 40,
      y: mouseYPosition - 40,
      transition: {
        type: "spring",
        mass: 0.4,
        stiffness: 130,
      }
    },
    initial: {
      opacity: 0,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: "50%",
      y: "50%",
      transition: {
        type: "spring",
        mass: 0,
        stiffness: 0,
        duration: 0.1,
      }
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  };

  function projectEnter(event) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function cursorLeave(event) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function linkEnter(event) {
    setCursorText("");
    setCursorVariant("link");
  }

  return (
    <main>
      <div ref={ref}>
        <motion.div
          variants={variants}
          className="circle"
          animate={cursorVariant}
          transition={spring}
        >
          <span className="cursor-text">{cursorText}</span>
        </motion.div>

        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
        <Hero text="I’m a husband, dad to three pets, and a designer who’s trying not to take himself too seriously." details={false} />

        <motion.section className="grid">
          <div className={styles.aboutGrid}>
            <motion.div className={`${styles.video} ${styles.first}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/daniel.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
            <motion.div className={styles.wrapper}>
              <div className={styles.smallVideo}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/wave.mp4" className={styles.video} autoPlay muted loop />
              </div>
              <div className={styles.smallVideo}>
                <video src="https://newportfolio.s3-us-west-2.amazonaws.com/franklin.mp4" className={styles.video} autoPlay muted loop />
              </div>
            </motion.div>
            <motion.div className={`${styles.video} ${styles.third}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/mondo.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
            <motion.div className={`${styles.video} ${styles.fourth}`}>
              <video src="https://newportfolio.s3-us-west-2.amazonaws.com/irma.mp4" className={styles.video} autoPlay muted loop />
            </motion.div>
          </div>
        </motion.section>
        <motion.section className="grid about">
          <div className="bio">
            <h2 className="h2">I’m currently helping to lead, mentor, and grow the team at Discord as a design manager.</h2>
          </div>
          <div className="bio-body">
            <p className="paragraph paragraph--large">
              My love for design started when I was a teenager designing merch and cd covers for local bands.
              I pursued my passion for design by studying
              Interactive Art and Media at Columbia College of Chicago.
            </p>
            <p className="paragraph paragraph--large">
              Everyday I’m motivated by the opportunity to solve real problems for people.
              I’m always trying to improve my craft, continue learning, and help others grow as designers.
            </p>
            <p className="paragraph paragraph--large">
              When I'm not designing you'll find me writing music, playing games, or at my local coffee shop.
            </p>
          </div>
        </motion.section>

        <motion.section className="grid about">
          <div className="experience">
            <h2 className="h2">Experience</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2020 - Current
                </h6>
                <h4 className="h4">
                  Product Design Manager at Discord
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2018 - 2020
                </h6>
                <h4 className="h4">
                  Product Design at Discord
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - 2018
                </h6>
                <h4 className="h4">
                  Design and Engineering at SteelSeries
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2014 - 2015
                </h6>
                <h4 className="h4">
                  Front End and UX at Palantir.net
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2010 - 2014
                </h6>
                <h4 className="h4">
                  Freelance and Internships
                </h4>
              </li>
            </ul>
          </div>
          <div className="previous-work">
            <h2 className="h2">Previous Work</h2>
            <ul className="list">
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  SteelSeries.com and Engine Software
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2017 - Design and Engineering
                </h6>
                <h4 className="h4">
                  P.W. LaRue Co. Webshop
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - Engineering and Design
                </h6>
                <h4 className="h4">
                  Foreign Affairs News
                </h4>
              </li>
              <li className="list-item">
                <h6 className="h6 timeline">
                  2015 - UX
                </h6>
                <h4 className="h4">
                  Yale Art Gallery
                </h4>
              </li>
              <li className="list-item">
                <h4 className="h4">
                  View LinkedIn ->
                </h4>
              </li>
            </ul>
          </div>
        </motion.section>

        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Destiny Medals Project"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
              imageAlt="UI of Design Tooling Plugins in Figma"
              color="green"
              title="Design Tooling"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>

      </div>
    </main>
  )
}

export default AboutPage
