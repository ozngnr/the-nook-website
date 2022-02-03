import React, { useState } from "react"
import * as styles from "../styles/header.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const navClass = navOpen ? styles.navOpen : null

  const toggleNav = () => {
    return navOpen ? setNavOpen(false) : setNavOpen(true)
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
              placeholder="tracedSVG"
            />
          </Link>
          <button
            onClick={toggleNav}
            className={styles.navToggle}
            aria-label="menu button"
          >
            <span className={styles.hamburger}></span>
          </button>
          <nav>
            <ul>
              <li>
                <Link to="/#intro" onClick={toggleNav}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleNav}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menus/dinner" onClick={toggleNav}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleNav}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
