import * as React from "react"
import { useState, useRef } from "react"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
// import { StaticImage } from "gatsby-plugin-image"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Card from "../components/Card.js"
import Footer from "../components/Footer.js"

import clockIcon from '../images/clock.svg'
import calendarIcon from '../images/calendar.svg'

import "../components/global.css"
import "../components/project.css"


const ServerVideo = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef()
  // const { scrollYProgress } = useViewportScroll();

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
        <title>Server Video Case Study</title>
        <link rel="canonical" href="https://danield.design/server-video/" />
      </Helmet>
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
                  src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/0-server-video-hero.png"
                  alt="Four mobile phones displaying server video project for Discord" />
              </motion.figure>
            </ClientOnly>
          </div>
          <div className="project-hero-background pink"></div>
        </motion.div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">
              Server Video
            </h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
                Bringing video, voice, and streaming to millions of people using Discord everyday.
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
                  className="details-label">Shipped May 2020
                    </motion.h3>
              </div>
            </ClientOnly>
          </div>
        </div>

        <div className="grid">
          <section className="project-main">
            <figure className="project-image project-image--full">
              <img alt="Server video design on mobile and desktop devices" src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/1-server-video-desktop-and-mobile.png" />
              {/* Using Static Image had a 1 point increase in performance but introduced more issues, future todo */}
              {/* <StaticImage 
                alt="Server video design on mobile and desktop devices"
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/1-server-video-desktop-and-mobile.png"
                quality="100"
                placeholder="blurUp"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
                /> */}
            </figure>
            <div className="body">
              <h3 className="h3 project-about">Discord is one of the most popular social apps in the world but our video chat was limited to groups of 10 people. Our team was focused on bringing video to everyone. </h3>
            </div>

            <figure className="project-image project-image--full">
              <img alt="Two phones displaying people using server video" src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/2nd-mobile-server-video-example.png" />
              {/* <StaticImage 
                alt="Two phones displaying people using server video"
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/2nd-mobile-server-video-example.png"
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
                /> */}
            </figure>

            <div className="body">
              <h2 className="h2">Discovery and Definition</h2>
              <p className="paragraph">
                The team had a strong understanding of what we were building from day one.
                During the time of this project, Discord was repositioning itself to be more
                inclusive to all types of communities. We needed a video feature that could serve
                everything from a study group, to friends streaming games to eachother, to remote learning.
              </p>
              <p className="paragraph">
                We had three primary goals:
              </p>
              <ul className="case-list">
                <li>Unify our three existing video features into one.</li>
                <li>Build a video chat experience that could scale to 50 people.</li>
                <li>Provide a seemless experience between iOS, Android, and Desktop.</li>
              </ul>
            </div>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/3rd-merge-projects.png"
                    alt="Illustration of our three projects merging into one"
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/3rd-merge-projects.png"
                    alt="Illustration of our three projects merging into one"
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                </figure>
                <figcaption>Merging our three features into one.</figcaption>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/4-server-video-old-desgin.jpg"
                    alt="Six people using our legacy version of Discord Video chat in 2017"
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/4-server-video-old-desgin.jpg"
                    alt="Six people using our legacy version of Discord Video chat in 2017"
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                </figure>
                <figcaption>Our legacy video chat for up to 10 people.</figcaption>
              </div>
            </div>

            <div className="body">
              <h2 className="h2">Designing a system</h2>
              <p className="paragraph">
                Server video was going to be released on desktop, Android, and iOS at
                the same time. We wanted the feature to be familiar if you switched
                between platforms (which is common for our users) by using the
                same patterns, visual language, and components.
              </p>
              <p className="paragraph">
                We designed and developed for each platform in tandem.
              </p>
              <h3 className="h3">Videos</h3>
              <p className="paragraph">
                I started design by solving for how videos would be displayed, starting with a two person call.
              </p>
              <p className="paragraph">
                Each person had their own 16:9 tile so we wouldn’t need to letterbox their video.
                Their name and additional states were also displayed in case they were muted
                or had their camera disabled.
              </p>
            </div>

            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/5-video-tiles.png"
                    alt="Two video tiles from the Discord Server video desktop, one with a video enabled and one with just an avatar."
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/5-video-tiles.png"
                    alt="Two video tiles from the Discord Server video desktop, one with a video enabled and one with just an avatar."
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                </figure>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/6-mobile-tiles.png"
                    alt="Two video tiles from the Discord Server video on iOS, one with a video enabled and one with just an avatar."
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/6-mobile-tiles.png"
                    alt="Two video tiles from the Discord Server video on iOS, one with a video enabled and one with just an avatar."
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                </figure>
              </div>
            </div>

            <figure className="project-image project-image--full">
              <img 
                alt="A pink rectangle with a mac book in the middle, on the screen are two women having a chat over discord server video"
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/7-video-chat-desktop.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/7-video-chat-desktop.png" 
                alt="A pink rectangle with a mac book in the middle, on the screen are two women having a chat over discord server video"
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>

            <div className="body">
              <h3 className="h3">Grid View</h3>
              <p className="paragraph">
                Discord has two major channels in which users talk. 
                Text channels and voice channels. Once a user was in voice, 
                they could enable their camera. Given the shape of our video 
                tiles, a grid felt like the most logical way to display 
                everyone who was participating.
              </p>
              <p className="paragraph">
                The engineers and I sat down to explore how we would the 
                grid would change as more people joined.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img 
                alt="Group of people hanging out on server video, displayed in a grid of rectangles."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/8-video-grid-view.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/8-video-grid-view.png" 
                alt="Group of people hanging out on server video, displayed in a grid of rectangles."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>
            <figure className="project-image project-image--full">
              <img 
                alt="Mobile grid of people using video on mobile to chat together."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/9-mobile-grid-view.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/9-mobile-grid-view.png" 
                alt="Mobile grid of people using video on mobile to chat together."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>
            <div className="image-2up">
              <div class="image-with-caption">
                <figure className="project-image project-image--half">
                  <video src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/scrolling-example.mp4" autoPlay muted loop />
                </figure>
              </div>
              <div className="image-with-caption">
                <figure className="project-image project-image--half">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/11-prototype-cropped.png"
                    alt="A screenshot of all the prototype flow examples tested for Server Video on mobile."
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/11-prototype-cropped.png"
                    alt="A screenshot of all the prototype flow examples tested for Server Video on mobile."
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                </figure>
              </div>
            </div>

            <div className="body">
              <h3 className="h3">Focused View</h3>
              <p className="paragraph">
                Once we had a fuctioning grid of people with cameras we ran into a new issue. 
                Our grid view scaled successfully to our goal of 50 people, but that meant 
                most video tiles were too small when you needed to focus on someone specific.
              </p>
              <p className="paragraph">
                It felt natural to click on a video to make it the full width of the UI, but 
                that came at the cost losing sight of what everyone else was doing.
              </p>
              <p className="paragraph">
                To solve this, I designed and protoyped a step between the grid view and a 
                full view, which we named the “Focused” view.
              </p>
              <p className="paragraph">
                This focused view made the entire experience more social. You could make one 
                person or screen a priority, but still see others as they spoke, react, or laughed.
              </p>
              <div className="image-with-caption project-image--inline">
                  <img
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/12-view-examples.png"
                    alt="Three simple collection of rectangles that demonstrate the different arrangement of videos for
                      the focused, grid, and full views available in the server video feature."
                  />
                  {/* <StaticImage 
                    src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/12-view-examples.png"
                    alt="Three simple collection of rectangles that demonstrate the different arrangement of videos for
                    the focused, grid, and full views available in the server video feature."
                    quality="100"
                    placeholder="blurUp"
                    objectFit="contain"
                    backgroundColor="#f9f9f9"
                    durationFadeIn="200"
                  /> */}
                <figcaption>We decided on three different states, grid, focused, and full.</figcaption>
              </div>
            </div>

            <figure className="project-image project-image--full">
              <img 
                alt="Collection of screens and lines that show prototype behavior for server video."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/13-desktop-prototype.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/13-desktop-prototype.png" 
                alt="Collection of screens and lines that show prototype behavior for server video."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>
            <figure className="project-image project-image--full">
              <img 
                alt="Macbook showing the 'Focused View' of Server Video in action with someone cooking on stream."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/14-desktop-focused-view.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/14-desktop-focused-view.png" 
                alt="Macbook showing the 'Focused View' of Server Video in action with someone cooking on stream."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>

            <div className="body">
              <h3 className="h3">Including Screenshare</h3>
              <p className="paragraph">
                A goal of Server Video was to make sure our screen sharing feature could embed within it.
              </p>
              <p className="paragraph">
                A unique aspect of Discord is that when someone is screen sharing, you have to choose to connect to it, this is because multiple people can screenshare at once.
              </p>
              <p className="paragraph">
                Active screen shares were displayed as if they were another member of the voice channel. 
                We added an monitor icon + “Username’s Screen” so users could know who’s was streaming.
              </p>
            </div>
            
            <figure className="project-image project-image--full">
              <img 
                alt="Someone live streaming a game on Discord."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/15-desktop-live.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/15-desktop-live.png"
                alt="Someone live streaming a game on Discord."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>
            <figure className="project-image project-image--full">
              <img 
                alt="Screenshot of the Discord design system and all the variations of the video tiles used in the server video feature."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/16-server-video-design-system.jpg"
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/16-server-video-design-system.jpg"
                alt="Screenshot of the Discord design system and all the variations of the video tiles used in the server video feature."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>
            <figure className="project-image project-image--full">
              <img 
                alt="Two phones showing Server Video being used and someone watching a stream on mobile."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/17-mobile-live.png" 
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/17-mobile-live.png"
                alt="Two phones showing Server Video being used and someone watching a stream on mobile."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>

            <div className="body">
              <h2 className="h2">Measuring and validating designs</h2>
              <p className="paragraph">
                In order to validate our design decisions we started with static prototypes. 
                These helped us explore multiple ideas quickly that we could then narrow down 
                further to start developing.
              </p>
              <p className="paragraph">
                Every iteration we had some confidence in would then be shipped to the internal company of 250 for 
                us to use during meetings, after work with friends, and with our most trusted users for feedback.
              </p>
              <p className="paragraph">
                Once we gathered feedback from these groups we’d ship to a smaller % of userbase to 
                then gather feedback via CX and social media communities.
              </p>
              <p className="paragraph">
                We then continued to measure success through experimentation and various metrics 
                like feature adoption, average length of a video chat, and data gathered 
                from a feedback prompt.
              </p>
            </div>

            <figure className="project-video project-image--full">
              <div className="iframe-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/NJJf1-Nj7Jc" title="Server Video Release" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </figure>
            
            <div className="body">
              <h2 className="h2">The Result</h2>
              <p className="paragraph">
                After completing and MVP, we released Server Video as an experiment to our users in May 2020. 
                We used CX tickets, feedback from social media, and quantitative data to make some additional changes.
              </p>
              <p className="paragraph">
                I can’t reveal exact numbers but we’ve seen it’s usage grow consistently since it’s introduction.
                <em>Server Video has become one of the most popular private streaming services on the internet.</em>
              </p>
 
              <p className="paragraph">
                Server Video was depicted in a Netflix show that covered remote life during Covid, 
                teachers use it for remote learning, and people use it all over the world to 
                connect to eachother. I consider Server Video one of my most rewarding projects as a designer. I’m 
                proud to have been a part of this team because of the impact this project has had in people’s lives.
              </p>
            </div>

            <figure className="project-image project-image--full">
              <img 
                alt="Three phones with screens displaying server video and young women watching their friend stream a social app."
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/17-server-video-mobile-3up.png"
              />
              {/* <StaticImage 
                src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-final/17-server-video-mobile-3up.png"
                alt="Three phones with screens displaying server video and young women watching their friend stream a social app."
                quality="100"
                placeholder="blurUp"
                objectFit="contain"
                backgroundColor="#f9f9f9"
                durationFadeIn="200"
              /> */}
            </figure>

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
              image="https://newportfolio.s3-us-west-2.amazonaws.com/design-tooling-image.png"
              imageAlt="UI of Design Tooling Plugins in Figma"
              link="/destiny-tooling"
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
    </div>
  )
}

export default ServerVideo
