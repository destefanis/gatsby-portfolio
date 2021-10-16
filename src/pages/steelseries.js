import * as React from "react"
import { useState, useRef } from "react"
import { motion, useViewportScroll } from "framer-motion"
import { Link } from "gatsby"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Card from "../components/Card.js"
import Footer from "../components/Footer.js"

import clockIcon from '../images/clock.svg'
import calendarIcon from '../images/calendar.svg'

import "../components/global.css"
import "../components/project.css"


const Steelseries = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef()
  const { scrollYProgress } = useViewportScroll();

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

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 100,
      transition: {
        type: "spring",
        delay: 0.35,
        duration: 0.8,
        damping: 10,
        stiffness: 80,
        bounce: 0.2,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.35,
        duration: 0.8,
        damping: 10,
        stiffness: 80,
        bounce: 0.2,
      }
    }
  };

  return (
    <main>
      <div>
        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <motion.div className="project-hero-wrapper" ref={ref}>
          <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
          <div className="project-hero project-hero--bottom">
            <ClientOnly>
              <motion.figure
                className="project-hero-image align-image-bottom"
                initial="initial"
                animate="visible"
                variants={imageVariants}
              >
                <motion.img
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/Work+Card/0-steelseries-hero.png"
                  alt="Mockup of a redesigned version of the SteelSeries engine software" />
              </motion.figure>
            </ClientOnly>
          </div>
          <div className="project-hero-background yellow"></div>
        </motion.div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">
              Steelseries
            </h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
              Redesigning the software that powers gamings most popular peripherals.
              </p>
            </div>
            <ClientOnly>
              <div className="detail first-detail">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', delay: 0.4, damping: 15 }}
                  className="icon-wrapper">
                  <img src={clockIcon} alt="Clock Icon" className="details-icon" />
                </motion.div>
                <motion.h3
                  className="details-label"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', delay: 0.65, damping: 15 }}>
                  2 Months
                    </motion.h3>
              </div>
              <div className="detail second-detail">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, y: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', delay: 0.8, damping: 15 }}
                  className="icon-wrapper">
                  <img src={calendarIcon} alt="Calendar Icon" className="details-icon" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', delay: 1, damping: 15 }}
                  className="details-label">Didn't Ship
                    </motion.h3>
              </div>
            </ClientOnly>
          </div>
        </div>

        <div className="grid">
          <section className="project-main">
            <figure className="project-image project-image--full">
              <img alt="Steelseries Engine Mockup of a store page" 
                src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/1-steelseries.png" 
              />
            </figure>
            <div className="body">
              <h3 className="h3 project-about">
                In 2017, I spent a month on a design vision for the future of SteelSeries software. The goal was to present a unified vision of software, ecommerce, and gaming news while also addressing common user problems.
              </h3>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Steelseries engine mockup of a gear page" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/2-steelseries.png" 
              />
            </figure>

            <div className="body">
              <h2 className="h2">Rethinking the “Gear” page</h2>
              <p className="paragraph">
                The most common reason to use the SteelSeries Engine software was to update your hardware configurations. 
                Want to customize your RBG colors or mouse settings? That’s what the software was there to help with.
              </p>
              <p className="paragraph">
                The existing version of this screen made it difficult to know what was connected and what wasn’t. 
              </p>
              <p className="paragraph">
                The redesigned page separates the devices that are connected and reuses the marketing image for easier 
                identification when accessing the software in the middle of a game.
              </p>
            </div>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                <img alt="Steelseries Engine Before Image" 
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/3-steelseries.png" 
                />
                </figure>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/4-steelseries.png"
                    alt="Updated mock of Steelseries Engine gear page"
                  />
                </figure>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">Configuring a device</h2>
              <p className="paragraph">
                Devices have a range of options to configure. Button configurations, settings, illumination, macro’s and more.
              </p>
              <p className="paragraph">
                The existing verison of this screen presented all of these at once and made the UI overwhelming. The information 
                was also made harder to understand with abbreviations like B1 and a “Top/Left/Right” view which didn’t change the UI in any meaningful way.
              </p>
              <p className="paragraph">
                The redesigned page separates these settings into categories, streamlines some of the more obtuse UI, 
                and was designed to be reusable across other types of devices to provide consistency between editing a headset or a mouse.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Mockup of Steelseries engine software, gear configuration page" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/5-steelseries.png" 
              />
            </figure>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                <img alt="SteelSeries Engine software screenshot of a mouse configuration" 
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/6-steelseries.png" 
                />
                </figure>
                <figcaption>Original</figcaption>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/7-steelseries.png"
                    alt="Updated mock of Steelseries Engine gear page"
                  />
                </figure>
                <figcaption>Alternative navigation concept</figcaption>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">Bringing platforms together</h2>
              <p className="paragraph">
              The last major goal of this redesign vision excercise was to integrate the SteelSeries e-commerce site into their software.
              </p>
              <p className="paragraph">
                This meant creating new surfaces for the shop and for the SteelSeries blog. It also meant updating the 
                navigation to account for more places within the product.
              </p>
              <p className="paragraph">
                The goal was to make an flywheel of users who purchase hardware > download software > promote new hardware > repeat.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Mockup of Steelseries engine software, news page with articles and blog posts" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/server-video-final/steelseries/8-steelseries.png" 
              />
            </figure>

            <div className="body">
              <h2 className="h2">Launch</h2>
              <p className="paragraph">
                As I mentioned earlier, this project was ultimately a vision excercise as the team didn’t end up having the engineering resources to pursue it.
              </p>
              <p className="paragraph">
                If we did have resources, my next steps would have been to establish a design system, finish designing some missing states, and start 
                validating design changes with user testing or experimentation.
              </p>
              <p className="paragraph">
                If you’d like to read a different project that did ship, check out my case studies below.
              </p>
            </div>

          </section>
        </div>


        <motion.section className="container next-project">
          <div className="grid">
            <h2 className="h2 grid-title">Next Project</h2>
          </div>
          <div className="grid work-grid">
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/discord-onboarding-image.png"
              imageAlt="Image of Destiny Medals Project"
              link="destiny-medals"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card
              image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
              imageAlt="UI of Design Tooling Plugins in Figma"
              link="design-tooling"
              color="green"
              title="Design Tooling"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>

        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
      </div>
    </main>
  )
}

export default Steelseries
