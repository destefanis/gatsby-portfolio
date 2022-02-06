import * as React from "react"
import { useState, useRef } from "react"
import { motion, useViewportScroll } from "framer-motion"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Card from "../components/Card.js"
import Footer from "../components/Footer.js"

import clockIcon from '../images/clock.svg'
import calendarIcon from '../images/calendar.svg'

import "../components/global.css"
import "../components/project.css"


const DesignTooling = () => {
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
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Daniel Destefanis Product Designer - Design Tooling Case Study</title>
        <meta name="description" content="Case study for design tools I've made in Figma for Discord and the design community." />
        <link rel="canonical" href="https://danield.design/design-tooling/" />
      </Helmet>
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
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/0-tooling-hero.png"
                  alt="Mockup of a figma plugin Design lint running on a design of an ecommerce site" />
              </motion.figure>
            </ClientOnly>
          </div>
          <div className="project-hero-background green"></div>
        </motion.div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">
              Design Tooling
            </h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
                Building open source Figma plugins to improve my teams workflow and automate the busy work.
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
                  6 Months
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
                  className="details-label">Multiple Ship Dates
                    </motion.h3>
              </div>
            </ClientOnly>
          </div>
        </div>

        <div className="grid">
          <section className="project-main">
            <figure className="project-image project-image--full">
              <img alt="Design Lint mockup images of different states" 
                src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/1-tooling.png" 
              />
            </figure>
            <div className="body">
              <h3 className="h3 project-about">
                As the creator of several Figma plugins, I believe tools can enable us to spend less time doing repetitive tasks and more time focusing on our craft.
              </h3>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Title art for the Figma plugin named Inspector" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/2-tooling.png" 
              />
            </figure>

            <div className="body">
              <h2 className="h2">About</h2>
              <p className="paragraph">
                The design tool Figma, released a plugin API back in 2019. Since then, I’ve built a 
                handful of tools to help improve our design workflow at Discord and made these plugins 
                open source to the larger community.
              </p>
              <p className="paragraph">
                I built a tool for us to automatically theme designs called Auto Theme, a design linter 
                called Design Lint, and a tool to automatically generate a title page called Table of Contents.
              </p>
              <p className="paragraph">
                I’ve written articles on this topic, released open source files on how to build your own tools, 
                and did a live stream talk with some of the folks over at Figma in early 2021. In August of 2021, I was Figma's
                "Featured Creator" in the community newsletter.
              </p>
              <ul className="case-list">
                <li>
                  <a href="https://blog.discord.com/building-open-source-design-tools-to-improve-discords-design-workflow-9a25c29f9143">
                    “Building Open Source Design Tooling at Discord”
                  </a>
                </li>
                <li>
                  <a href="https://lintyour.design">Design Lint landing page</a>
                </li>
                <li>View all our open source rescouces at <a href="https://figma.com/@discord">figma.com/@discord</a>
                </li>
              </ul>
            </div>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                <img alt="Art for my Medium Article Building Open Source Design Tooling at Discord" 
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/3-tooling.png" 
                />
                </figure>
                  <figcaption>
                    <a href="https://blog.discord.com/building-open-source-design-tools-to-improve-discords-design-workflow-9a25c29f9143">
                      “Building Open Source Design Tooling at Discord”
                    </a>
                  </figcaption>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/4-tooling.png"
                    alt="Title slide for the talk In The File - Building Tools for your ideal workflow"
                  />
                </figure>
                <figcaption>
                    <a href="https://www.youtube.com/watch?v=mFaMpi7Pumg">
                      In The File Livestream
                    </a>
                  </figcaption>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">Design Lint</h2>
              <p className="paragraph">
                One of my most popular plugins, Design Lint has been downloaded 30,000+ times and has been used as a 
                foundation for custom design linters at some of the world’s largest tech companies like Twitter and Lyft.
              </p>
              <p className="paragraph">
                Common issues with developer handoff are missing design tokens, using the wrong colors for specific layers, 
                and introducing styles that aren’t part of a design system. Design Lint flags these errors in order 
                to make the handoff process less prone to issues. 
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Design Lint landing page" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/5-tooling.png"
              />
            </figure>
            <figure className="project-image project-image--full">
              <video src="https://designlint.s3-us-west-2.amazonaws.com/design-lint-website-vid+(1).mp4" autoPlay muted loop />
            </figure>
            <figure className="project-image project-image--full">
              <video src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/design-lint-update.mp4" autoPlay muted loop />
            </figure>

            <div className="body">
              <h2 className="h2">Auto Theme</h2>
              <p className="paragraph">
                Another plugin I built for our team automatically changes a designs themes from light to dark, or vice versa, using our design system colors.
              </p>
              <p className="paragraph">
                This let’s us create designs in either theme in seconds. Since it’s such a common use case for designers, I open sourced the plugin for other teams to build off of.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Mockup of Steelseries engine software, news page with articles and blog posts" 
              src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/8-tooling.png"
              />
            </figure>

            <figure className="project-image project-image--full">
              <video src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/auto-theme-example.mp4" autoPlay muted loop />
            </figure>

            <div className="body">
              <h2 className="h2">Create Sticky Note</h2>
              <p className="paragraph">
                While managing design on the Discord growth team, I've found myself conducting a lot more brainstorms. As a team that uses Figjam often,
                I created a utility to convert notes written before meetings and text layers into sticky notes automatically.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <video src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/create-sticky-example-smaller.mp4" autoPlay muted loop />
            </figure>

            <div className="body">
              <h2 className="h2">Open Source</h2>
              <p className="paragraph">
                I’m a huge believer in the open source community. I’ve utilized countless open source libraries 
                in the past when building software and projects of my own. As one way to contribute 
                back to the community, all the tools I’ve built are open source and documented on <a href="https://github.com/destefanis">Github</a>.
              </p>
              <p className="paragraph">
                I'll continue making open source tools as soon as I come across a new problem worth solving.
                <a href="https://twitter.com/daniel__designs">Follow me on Twitter</a> for my latest work.
              </p>
            </div>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                <img alt="Title slide for the talk In The File - Building Tools for your ideal workflow" 
                  src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/6-tooling.png" 
                />
                </figure>
                  <figcaption>
                    <a href="https://www.figma.com/community/file/943929739849217782">
                      “Building Open Source Design Tooling at Discord Slides”
                    </a>
                  </figcaption>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3.us-west-2.amazonaws.com/design-tooling/7-tooling.png"
                    alt="Cover art for a slide deck for how to get starting making figma plugins"
                  />
                </figure>
                <figcaption>
                    <a href="https://www.figma.com/community/file/942856928187155104">
                      Intro building Figma plugins
                    </a>
                  </figcaption>
              </div>
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
              imageAlt="Image of Discord's Onboarding Screen"
              link="/discord-growth"
              color="blue"
              title="Discord Onboarding"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
            <Card 
              image="https://newportfolio.s3-us-west-2.amazonaws.com/destiny-medals-image.png"
              link="/destiny-medals"
              imageAlt="Image of Destiny Medals Project"
              title="Destiny Medals"
              color="purple"
              size="normal"
              onProjectEnter={projectEnter}
              onProjectLeave={cursorLeave}
            />
          </div>
        </motion.section>

        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave} />
      </div>
    </div>
  )
}

export default DesignTooling
