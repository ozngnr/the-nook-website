import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "../styles/reservations.module.css"
import BookingForm from "./bookingForm"

export default function Reservations() {
  return (
    <section className={styles.reservations} id="reservations">
      <div className={styles.reservations__form}>
        <h2>BOOK A TABLE</h2>
        <BookingForm />
      </div>
      <StaticImage
        src="../images/reserve.jpg"
        alt="reservations image"
        aspectRatio={(1, 1)}
      />
    </section>
  )
}
