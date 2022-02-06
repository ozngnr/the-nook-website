import React from "react"
import GoogleMapReact from "google-map-react"
import * as styles from "../styles/map.module.css"
import { FaMapMarkerAlt } from "react-icons/fa"

const LocationPin = ({ place, placeId, text }) => (
  <div className={styles.pin}>
    <a
      href={`https://www.google.com/maps/search/?api=1&query=${place}&query_place_id=${placeId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaMapMarkerAlt className={styles.pinIcon} />
    </a>{" "}
    <p className={styles.pinText}>{text}</p>
  </div>
)

export default function Map({ location, zoomLevel }) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.GATSBY_MAPS_API_KEY }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <LocationPin
        place={location.place}
        placeId={location.placeId}
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  )
}
