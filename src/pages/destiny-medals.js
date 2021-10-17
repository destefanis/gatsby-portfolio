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


const DestinyMedals = () => {
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
          <div className="project-hero">
            <ClientOnly>
              <motion.figure
                className="project-hero-image"
                initial="initial"
                animate="visible"
                variants={imageVariants}
              >
                <motion.img
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/Work+Card/0-destiny-hero.png"
                  alt="Mockup of the web app Destiny Medals on a phone" />
              </motion.figure>
            </ClientOnly>
          </div>
          <div className="project-hero-background purple"></div>
        </motion.div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">
              Destiny Medals
            </h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
                A react web app for reliving sweet multiplayer carnage in Destiny 2.
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
                  3 Months
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
                  className="details-label">Shipped January 2018
                    </motion.h3>
              </div>
            </ClientOnly>
          </div>
        </div>

        <div className="grid">
          <section className="project-main">
            <figure className="project-image project-image--full">
              <img alt="Destiny Medals showing match history on a macbook" 
                src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/1-destiny.png"
              />
            </figure>
            <div className="body">
              <h3 className="h3 project-about">
                Destiny Medals was built to be a lightweight way to view your multiplayer match history, 
                stats, and a frictionless way to share games with your friends.
              </h3>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Login screen for Destiny Medals" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/2-destiny.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Discovery and definition</h2>
              <p className="paragraph">
                Destiny 2 was massively popular in 2017 when it released. It had a huge community, 
                one of the largest subreddits, and its where I could find my friends on any given night.
              </p>
              <p className="paragraph">
                During our late nights together I encountered a few issues:
              </p>
              <p className="paragraph">
                I’ve written articles on this topic, released open source files on how to build your own tools, 
                and did a live stream talk with some of the folks over at Figma in early 2021. In August of 2021, I was Figma's
                "Featured Creator" in the community newsletter.
              </p>
              <ul className="case-list">
                <li>
                  The multiplayer match history only went back one match, so if you wanted to review how you did, you had to login bungie.net on a computer.
                </li>
                <li>
                  Being able to share a match witha a friend was hard. Most other services mixed in tons of stats or required an account.
                </li>
                <li>
                  “Medals” were unique accolades based on performance, we’re oddly missing from the game’s UI and weren’t reviewable anywhere, even in the API.
                </li>
              </ul>
              <p className="paragraph">
                Once I realized the game had a public API, I realized I could address these issues myself.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Character select screen for Destiny Medals" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/3-destiny.png"
              />
            </figure>


            <div className="body">
              <h2 className="h2">Frictionless match history on mobile</h2>
              <p className="paragraph">
                By just using your gamertag or username, I could fetch a players match history going back 25+ matches vs the game only allowing 
                you to look at one. There was no login, no remembering passwords.
              </p>
              <p className="paragraph">
                The match history took the form of a stack of cards, which showed the level 
                you played on, whether you won or lost, along with some other valuable meta data. 
                By storing this public data in the URL, sharing matches was easy as copy and pasting.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Character select screen for Destiny Medals" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/4-destiny.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Filling in the missing data</h2>
              <p className="paragraph">
                As I was building Destiny Medals I came to realize that the API didn’t have a 
                full list of medals (the accolades earned during multiplayer matches). Pieces of 
                this information were there, but the full list was incomplete.
              </p>
              <p className="paragraph">
                I joined a Discord community for the Destiny 2 API and together we put together 
                a complete list and made it open source on Github.
              </p>
              <p className="paragraph">
                This meant Destiny Medals, and other stat apps, now had a more feature 
                complete way of viewing your performance than the actual game did!
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Match results screen for Destiny Medals showing stats, medals, and match score" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/5-destiny.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <img alt="Two mobile phones showing the match results screenshots of Destiny Medals" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/destiny/6-destiny.png"
              />
            </figure>

            <div className="body">
              <h2 className="h2">Launch</h2>
              <p className="paragraph">
                In January of 2018 I launched Destiny Medals as an open source site to the community. 
                It ran for over a year and had a few hundred monthly users. Destiny 2 has been releasing updates 
                for several years now so eventually my webapp was redudant. 
              </p>
              <p className="paragraph">
                This project taught me a considerable amount about React, creating frictionless user experiences, 
                and designing an interface around an API.
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
              image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
              imageAlt="UI of Design Tooling Plugins in Figma"
              link="/destiny-tooling"
              color="green"
              title="Design Tooling"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card 
              image="https://newportfolio.s3-us-west-2.amazonaws.com/steelseries-image.png"
              link="/steelseries"
              imageAlt="SteelSeries Engine UI"
              title="SteelSeries"
              color="yellow"
              size="normal"
              alignment="bottom"
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

export default DestinyMedals
