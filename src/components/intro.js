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
              The Nook is a wine bar serving seasonal small plates and a range
              of low intervention & classic wines. Our focus is to serve only
              what we love, with the friendliest service and handpicked great
              music as a bonus!
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
