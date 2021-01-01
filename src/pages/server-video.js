import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import WorkGrid from "../components/WorkGrid.js"
import AboutSection from "../components/AboutSection.js"
import Footer from "../components/Footer.js"

import "../components/reset.css"
import "../components/global.css"

const ServerVideo = () => {

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
        <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
        <section className="container">
          <h1 className="h1">Server Video</h1>
          <p className="paragraph">
          Building a way for millions of Discord users to connect over voice, video, and streaming. 
          The team on this project was Christina Zou (PM), Joey Baker (EM), Kyle, Jon, Kyle, and Andy (Engineers) 
          and myself (design).
          </p>
        </section>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
      </div>
    </main>
  )
}

export default ServerVideo
