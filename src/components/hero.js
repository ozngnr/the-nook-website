import React from "react"
import * as styles from "../styles/hero.module.css"
import { StaticImage } from "gatsby-plugin-image"

import { IoChevronDown } from "react-icons/io5"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroLogo}>
          <StaticImage
            src="../images/logo.png"
            alt="the nook logo"
            placeholder="none"
            width={250}
          />
          <h2>Wine, Wax & Deli</h2>
        </div>
        {/* <div className={styles.themeToggler}>
      <span className={styles.themeName}>dark</span>|
      <span className={styles.themeName}>light</span>
    </div> */}
        <div className={styles.scroll}>
          <span>scroll down</span>
          <IoChevronDown />
        </div>
      </div>
    </div>
  )
}

export default Hero
