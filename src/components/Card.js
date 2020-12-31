import React, { useRef, useState, useEffect } from "react";
import { Link } from "gatsby"
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from '@popmotion/popcorn';
import styles from './card.module.css'

// Animation built from https://codesandbox.io/s/spring-field-kvpnv?file=/src/Card.js

function Card(props) {
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);
  const [visibleState, setVisibleState] = useState("initial");
  let width = 888;
  let height = 962;

  // Middle point in 2d space
  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  // How much should we rotate?
  const tx = 0.003;

  // Get rotateY
  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  // Get rotateX
  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 200,
    damping: 25
  };

  // Get our spring values
  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  function onMouseOver(e) {
    if (tapped) return;
    const rect = e.target.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
    props.onProjectEnter();
  }

  function hoverEnd() {
    setHover(false);
    props.onProjectLeave();
  }

  useEffect(() => {
    // If not hovering, reset to the centerpoint.
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
      <div className={`${styles.cardPerspectiveWrapper}`}>
        <motion.div 
          className={`${styles.contentWrapper}`}
          style={{
            scale: 1,
            rotateX: springX,
            rotateY: springY
          }}
          onTapCancel={(e) => {
            setTapped(false);
            onMouseOver(e);
          }}
          onTapStart={() => {
            setTapped(true);
          }}
          onTap={(e) => {
            setTapped(false);
          }}
          onHoverStart={hoverStart}
          onHoverEnd={hoverEnd}
          onMouseMove={onMouseOver}
        >
          <div className={`${styles.card} ${styles[props.color]}`}>
            <img src={props.image} alt={props.imageAlt} className={styles.image} />
            <h6 className={styles.title}>{props.title}</h6>
          </div>
        </motion.div>
      </div>
  )
}

export default Card