import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Cursor from "../components/Cursor.js"
import ClientOnly from "../components/ClientOnly.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import WorkGrid from "../components/WorkGrid.js"
import AboutSection from "../components/AboutSection.js"
import Footer from "../components/Footer.js"

import "../components/reset.css"
import "../components/global.css"

// markup
const IndexPage = () => {

  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

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

  // const pageVariants = {
  //   initial: { opacity: 0, y: 20 },
  //   enter: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -40 }
  // };
  const duration = 0.3

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: duration },
    },
  }

  return (
    <motion.div variants={pageVariants} transition={{ type: "spring", duration: 1, delayChildren: 0.1 }} exit="exit" animate="enter" initial="initial">
      <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
      <Hero text="I’m a designer who’s passionate about solving problems and creating delightful user experiences." details={true}/>
      <ClientOnly>
        <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        <WorkGrid onProjectEnter={projectEnter} onProjectLeave={cursorLeave} />
        <AboutSection />
      </ClientOnly>
      <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
    </motion.div>
  )
}

export default IndexPage
