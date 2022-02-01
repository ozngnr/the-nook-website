import React from "react"
import GoogleMapReact from "google-map-react"
import * as styles from "../styles/map.module.css"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <FaMapMarkerAlt className={styles.pinIcon} />
    <p className={styles.pinText}>{text}</p>
  </div>
)

export default function Map({ location, zoomLevel }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyCsBbTdDR5SpsxpSYDZUr672Bwqp_2zqyo" }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  )
}
