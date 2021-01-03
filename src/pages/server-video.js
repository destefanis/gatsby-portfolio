import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import ClientOnly from "../components/ClientOnly.js"
import Cursor from "../components/Cursor.js"
import Navigation from "../components/Navigation.js"
import Footer from "../components/Footer.js"

import clockIcon from '../images/clock.svg'
import calendarIcon from '../images/calendar.svg'

import "../components/global.css"
import "../components/project.css"


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
        

        <ClientOnly>
          <Cursor cursorText={cursorText} cursorVariant={cursorVariant} />
        </ClientOnly>

        <div className="project-hero-wrapper pink">
          <Navigation onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
          <div className="project-hero">
            <figure className="project-hero-image">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-hero.png" 
              alt="Four mobile phones displaying server video project for Discord" />
            </figure>
          </div>
        </div>

        <div class="grid">
          <div className="project-intro">
            <h1 className="project-title">
              Server Video
            </h1>
            <div className="project-description">
              <p className="paragraph--large project-lede">
                Building a way for millions of Discord users to connect over voice, video, and streaming.
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
            <figure className="project-image">
              <img alt="Desktop design of Server Video" src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-image-1.png" />
            </figure>
            <div className="body">
              <h2 className="h2">The problem</h2>
              <p className="paragraph">
                Discord is one of the most popular social apps in the world, yet our video feature only worked in private groups up to 10 people.
              </p>
              <p className="paragraph">
                Unless you were in a group DM, you couldn’t connect to your friends or community over video. This meant we were only providing video features to a small percentage of the people using our product.
              </p>
            </div>

            <figure className="project-image project-image-8">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-old-desgin.jpg"
            alt="Previous design of Discord video chat released in 2017" />
            </figure>

          <div className="body">
            <h3 className="h2">Our goals</h3>
            <p className="paragraph">
              <em>Unify our three existing video features into one</em> that we could reuse across the product and build upon this new foundation for mobile screenshare.
            </p>
            <figure className="project-image-inline">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-merge.jpg"
              alt="Illustration of three features being merged into one" />
            </figure>
            <p className="paragraph">
              Provide a performant, reliable video chat feature that <em>scaled from 2 to 50 people</em> for desktop, iOS, and Android.
            </p>
            <p className="paragraph">
              <em>Provide a world class private screensharing experience</em> that our users are accustomed to and enhance it further by supporting video cameras and the ability to watch multiple streams at once. 
            </p>
            <figure className="project-image-inline">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-tiles.jpg"
              alt="Server video tiles, one without video enabled and one with of a young woman" />
            </figure>
            <p>
              Make users who have don’t have a camera (or have theirs turned off) <em>still feel like they’re part of the group</em>.
            </p>
          </div>

          <div className="body">
            <h3 className="h2">Discovery and definition</h3>
            <p className="paragraph">
              Before designing, the team contributed to a product spec by asking questions, doing competitive research, and further defining scope.
            </p>
            <p className="paragraph">
              For Server Video we were also building off three existing features, video chat (the group DM video feature mentioned above) Go Live (our new game streaming tech), and screenshare our oldest streaming feature.
            </p>
            <h3 className="h3">My role</h3>
            <p className="paragraph">
              As the sole designer on this project my role was:
            </p>
            <p className="paragraph">
              Given the heavy interactive nature of this project, the team elected to further define the problem through multiple rapid iterations which I’ll cover later.
            </p>
          </div>

          <div className="body">
            <h3 className="h2">Designing a system</h3>
            <p className="paragraph">
              Server video was going to be released on desktop, Android, and iOS at the same time. We wanted the feature to be familiar if you switched between platforms (which is common for our users) by using the same patterns, visual language, and components.
            </p>
          </div>

          <figure className="project-image">
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-desktop-and-mobile.png"
            alt="Desktop and mobile versions of server video side by side" />
          </figure>

          <div className="body">
            <h3 className="h3">Videos</h3>
            <p className="paragraph">
              During the definition phase we came up with some more granular requirements for the user experience:
            </p>
            <ol>
              <li>Support a grid view so users can see everyone in a call.</li>
              <li>I should be able to make a video larger (for presentations, watching a stream) but still see other people.</li>
              <li>I should be able to view one video without any others to replicate a theater or stream watching experience.</li>
            </ol>
            <figure className="inline-project-image">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-tile-views.jpg"
            alt="Three variations grids depicting the three views of Server Video, Grid, Focused, and Full" />
            </figure>
            <p className="paragraph">
              We named these Grid View, Focused View (one video larger), and Full View.
            </p>
            <p className="paragraph">
              We also decided people without video should also feel like part of the group. This way it was easy to track who was in the voice channel, who was talking, and it felt like video was more optional (which helped with video call fatigue).
            </p>
          </div>

          <figure className="project-image">
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-design-system.jpg"
            alt="All of our server video tiles variations displayed in our design system" />
          </figure>

          <div className="body">
            <p className="paragraph">
              To support large groups (15+) we settled on allowing the grid to be scrollable on desktop and mobile. The focused view helped to make streaming games or videos social as you could see both the stream and the people participating.
            </p>
          </div>

          <figure className="project-image">
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-controls-image.jpg"
            alt="Four variations of our server video controls stacked on eachother" />
          </figure>

          <div className="body">
            <h3 className="h3">Controls</h3>
            <p className="paragraph">
              For controls, I started on mobile first, even though it was starting development slightly after desktop, knowing that if the controls worked with a smaller viewport, they could work on desktop.
            </p>
            <p className="paragraph">
            Feedback and iteration during this process was done daily. I’d share my progress and gather feedback from the team after standup.
            </p>
            <p className="paragraph">
              Where I ended was four main buttons that were always consistent which were video camera, screenshare, mute, and disconnect. From there we could introduce secondary icons (like fullscreen, stream volume, a list of spectators) when neccessary on the sides.
            </p>
            <figure className="inline-project-image">
              <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-prototype.jpg"
            alt="Prototype flow of our mobile static prototype" />
            </figure>
            <h3 className="h3">Prototypes and validation</h3>
            <p className="paragraph">
              In order to validate my early design decisions I created static prototypes that I shared within the team. Prototyping features with so many states, entry points and variations gave us signal early on that these designs were worth testing further.
            </p>
            <p className="paragraph">
              Once I gathered and iterated on a prototype we would then prioritize building that interaction and share within the company to use.
            </p>
            <p className="paragraph">
              We set up a channel for gathering feedback from the company as they started using the feature daily for meetings.
            </p>
          </div>

          <div className="body">
            <h2 className="h2">We didn't get everything right the first time</h2>
            <p className="paragraph">
            After gathering feedback and iterating again, we’d release it to a small batch of users for additional qualitative feedback.
            </p>
            <p className="paragraph">
              The feedback we got helped to improve the visual design (the focused view took quite a few tries to get right), it validated some of our decisions with our controls, and users gave us ideas for important quality of life features to implement to make the product feel great.
            </p>
          </div>

          <div className="body">
            <h2 className="h2">The result</h2>
            <p className="paragraph">
              After completing and MVP, we released Server Video as an experiment to our users in May 2020. We used CX tickets, feedback from social media, and quantiative data to make some additional changes.
            </p>
            <figure className="inline-project-image">
              <iframe src="https://www.youtube.com/embed/NJJf1-Nj7Jc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>
            <p className="paragraph">
              We’ve been blown away as Server Video has become one of the most popular private streaming services on the internet.
            </p>
            <p className="paragraph">
              I can’t reveal exact numbers but we’ve seen it’s usage grow consistently since it’s introduction and become one of our most popular features.
            </p>
          </div>

          <figure className="project-image">
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-mobile-3up.png"
            alt="Three phones with three screens of server video being showcased" />
          </figure>

          <div className="body">
            <p className="paragraph">
              Users have created popular memes using Server Video (see on reddit, twitter, or this twitter post), it’s been featured in a Netflix show, teachers use it for remote learning, and people use it all over the world to connect to eachother.
            </p>
            <p className="paragraph">
              I consider Server Video one of my most rewarding projects as a designer. It’s complexity, requirements, and many systems was a challenge, but I’m proud to have been a part of this team because of the impact this project has had in people’s lives.
            </p> 
          </div>

          <figure className="project-image">
            <img src="https://newportfolio.s3-us-west-2.amazonaws.com/server-video-optimized/server-video-desktop-2.png"
            alt="Dark theme version of server video being used on Desktop" />
          </figure>

          <div className="body">
            <p className="paragraph">
              Thanks for reading!
            </p>
          </div>

          </section>
        </div>
        <Footer onFooterEnter={contactEnter} onFooterLeave={cursorLeave} onLinkEnter={linkEnter} onLinkLeave={cursorLeave}/>
      </div>
    </main>
  )
}

export default ServerVideo
