import React from "react"
import * as styles from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Reservations from "../components/reservations"

export default function Home() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLogo}>
            <StaticImage
              src="../images/logo.png"
              alt="the nook logo"
              placeholder="blurred"
              width={210}
            />
            <h2>Wine Bar & Restaurant</h2>
          </div>
          {/* <div className={styles.themeToggler}>
            <span className={styles.themeName}>dark</span>|
            <span className={styles.themeName}>light</span>
          </div> */}
          <div className={styles.scroll}>
            <span>scroll down</span>
            <FaChevronDown />
          </div>
        </div>
      </div>
      <Layout>
        <Intro />
        <Reservations />
      </Layout>
    </div>
  )
}
