import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"

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


  return (
    <main>
      <div>
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
        <Hero text="I’m a designer who’s passionate about solving problems and creating delightful user experiences." details={true}/>
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
          <WorkGrid onProjectEnter={projectEnter} onProjectLeave={cursorLeave} />
          <AboutSection />
        </ClientOnly>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
      </div>
    </main>
  )
}

export default IndexPage
