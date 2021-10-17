import * as React from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "./useMousePosition";
import MediaQuery from 'react-responsive'

function Cursor(props) {
  const position = useMousePosition();

  // Gatsby builds the site on the server before rendering the DOM
  // In order to pass builds we need to render this cursor component
  // conditionally. If the browser exists, then render this, otherwise set it to null.
  if (typeof window === "undefined") return null;

  let mouseXPosition = position.x;
  let mouseYPosition = position.y;

  const variants = {
    default: {
      opacity: 0,
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
      zIndex: 10,
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
      backgroundColor: "rgba(30, 145, 214, 0)",
      x: "50%",
      y: "50%",
      transition: {
        type: "spring",
        mass: 0,
        stiffness: 0,
        duration: 2,
      }
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  };

  return (
    <MediaQuery minWidth={1024}>
      <motion.div
        variants={variants}
        className="circle"
        animate={props.cursorVariant}
        transition={spring}
        initial="initial"
      >
        <span className="cursor-text">{props.cursorText}</span>
      </motion.div>
    </MediaQuery>
  )
}

export default Cursor