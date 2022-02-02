import React from "react"
import "../styles/global.css"
import Footer from "./footer"
import Header from "./header"
import DateAdapter from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import enGbLocale from "date-fns/locale/en-GB"
import SEO from "./seo"

export default function Layout({ children }) {
  return (
    <LocalizationProvider dateAdapter={DateAdapter} locale={enGbLocale}>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </LocalizationProvider>
  )
}
