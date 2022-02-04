import React from "react"
import { Link } from "gatsby"
import { FaInstagram } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import * as styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className={styles.footer__content}>
          <div className="navigation">
            <h3>Navigation</h3>
            <ul>
              <li>
                <Link to="/#intro">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/menus/dinner">Menus</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <h3>Contact Us</h3>
            <p>
              <a href="mailto:hello@thenooklondon.co.uk">
                hello@thenooklondon.co.uk
              </a>{" "}
              <br />
              020 7288 2929 <br />
              220 St. Paul's Road, London N1 2LL, UK <br />
            </p>
            <div className={styles.socialIcons}>
              <a
                aria-label="Instagram link"
                href="https://instagram.com/thenook_london"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram style={{ marginRight: "0.25em" }} />
              </a>
              <a
                aria-label="Facebook link"
                href="https://facebook.com/TheNookLondon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div>
            <div className={styles.hours}>
              <h3>Opening Hours</h3>
              <p>
                Wednesday - Saturday: 12:00 - 23:00 <br /> Sunday: 11:00 - 18:00
              </p>
              {/* <p>
                <span className={`${styles.neonText} ${styles.open}`}>
                  OPEN
                </span>
                <span className={`${styles.neonText} ${styles.closed}`}>
                  CLOSED
                </span>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
