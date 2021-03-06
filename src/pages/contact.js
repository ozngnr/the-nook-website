import React from "react"
import { graphql } from "gatsby"
import * as styles from "../styles/contact.module.css"
import Layout from "../components/layout"
import Map from "../components/map"
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa"

export default function Contact({ data }) {
  const { location, contact, tel } = data.contact.siteMetadata

  return (
    <Layout>
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.contact__info}>
              <h1>GET IN TOUCH</h1>
              <h3>Better yet, see us in person.</h3>
              <p>
                We love meeting new people, so feel free to come and say hi
                anytime.
              </p>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <FaPhone />
                    </td>
                    <td>
                      <a
                        aria-label="Restaurant phone number"
                        href={`tel:+44${tel}`}
                      >
                        {tel}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FaEnvelope />
                    </td>
                    <td>
                      <a
                        aria-label="Restaurant email address"
                        href={`mailto:${contact}`}
                      >
                        {contact}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FaMapMarkerAlt />
                    </td>
                    <td>{location.address}</td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.socials}>
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
              <h3>Opening Hours</h3>
              <table className={styles.hours}>
                <tbody>
                  <tr>
                    <td>Mon - Tue:</td>
                    <td>Closed</td>
                  </tr>
                  <tr>
                    <td>Wed - Thur:</td>
                    <td>12:00 - 23:00</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>11:00 - 17:00</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
            <div className={styles.contact__map}>
              <Map location={location} zoomLevel={17} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ContactDetails {
    contact: site {
      siteMetadata {
        location {
          place
          placeId
          address
          lat
          lng
        }
        contact
        tel
      }
    }
  }
`
