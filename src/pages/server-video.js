import * as React from "react"
import { useState } from "react"
import useMouse from "@react-hook/mouse-position"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import Navigation from "../components/Navigation.js"
import Hero from "../components/Hero.js"
import WorkGrid from "../components/WorkGrid.js"
import AboutSection from "../components/AboutSection.js"
import Footer from "../components/Footer.js"


import "../components/reset.css"
import "../components/global.css"

// markup
const ServerVideo = () => {

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

  if (mouse.x !== 0) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== 0) {
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
