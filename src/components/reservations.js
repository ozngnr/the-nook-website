import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../styles/reservations.module.css"
import "react-datepicker/dist/react-datepicker.css"
import DatePicker from "react-datepicker"

import moment from "moment"
import {
  IoCalendarClearOutline,
  IoTimeOutline,
  IoPeopleOutline,
} from "react-icons/io5"

//Base url to redirect to when user submits booking request
const BASE_URL =
  "https://www.opentable.com/restref/client/?rid=215409&restref=215409"

export default function Reservations() {
  const [partySize, setPartySize] = useState("2")
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("18:00")
  //create time options for form select
  const createTimeOptions = (startTime, endTime) => {
    const timesArr = []
    for (let i = startTime; i < endTime; i++) {
      for (let j = 0; j < 2; j++) {
        timesArr.push(i + ":" + (j === 0 ? "00" : j * 30))
      }
    }
    return timesArr
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formattedDate = moment(date).format("YYYY-MM-DD")
    window.open(
      `${BASE_URL}&partysize=${partySize}&datetime=${formattedDate}T${time}`
    )
  }

  return (
    <section className={styles.reservations} id="reservations">
      <div className={styles.reservations__form}>
        <h2>BOOK A TABLE</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.styledField}>
            <IoPeopleOutline className={styles.inputIcon} />
            <select
              size="large"
              value={partySize}
              onChange={e => setPartySize(e.target.value)}
            >
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
              <option value="5">5 People</option>
              <option value="6">6 People</option>
            </select>
          </div>
          <div className={styles.styledField}>
            <DatePicker
              className={styles.datePicker}
              popperClassName={styles.datePopper}
              selected={date}
              onChange={value => setDate(value)}
              dateFormat="dd/MM/yyyy"
            />
            <IoCalendarClearOutline className={styles.inputIcon} />
          </div>
          <div className={styles.styledField}>
            <IoTimeOutline className={styles.inputIcon} />
            <select
              value={time}
              placeholder="Select Time"
              onChange={e => setTime(e.target.value)}
            >
              {createTimeOptions(12, 22).map(time => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button className="btn" type="submit" style={{ width: "100%" }}>
            RESERVE
          </button>
        </form>
      </div>
      <StaticImage
        src="../images/reserve.jpg"
        alt="reservations image"
        aspectRatio={(1, 1)}
      />
    </section>
  )
}
