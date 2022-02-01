import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/intro.module.css"

export default function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className={styles.intro__content}>
          <StaticImage
            className={`${styles.intro__img}  ${styles.left}`}
            src="../images/sour.jpg"
            alt="cocktail"
          />
          <div className={styles.intro__body}>
            <h2>OUR STORY</h2>
            <p>
              The Nook is an all day venue, where you can find drinks and food
              for all times of the day alongside friendly company and lively
              music. You can come and hangout with us in the deli or pop in for
              a shop!
            </p>
            <a href="/about" className="btn">
              READ MORE
            </a>
          </div>
          <StaticImage
            className={styles.intro__img}
            src="../images/burrata.jpg"
            alt="burrata"
          />
        </div>
      </div>
    </section>
  )
}
