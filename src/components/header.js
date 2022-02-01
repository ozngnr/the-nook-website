import React, { useState } from "react"
import * as styles from "../styles/header.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const navClass = navOpen ? styles.navOpen : null

  const toggleNav = () => {
    if (navOpen) {
      setNavOpen(false)
    } else {
      setNavOpen(true)
    }
  }

  return (
    <header className={navClass}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/#reservations" className={`${styles.reserveBtn} btn`}>
            BOOK A TABLE
          </Link>
          <Link to="/">
            <StaticImage
              src="../images/logo.png"
              alt="logo"
              width={150}
              loading="eager"
              placeholder="blurred"
            />
          </Link>
          <button onClick={toggleNav} className={styles.navToggle}>
            <span className={styles.hamburger}></span>
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/#intro">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menus/dinner">Menu</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
