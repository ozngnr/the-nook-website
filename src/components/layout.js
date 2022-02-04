import React from "react"
import "../styles/global.css"
import Footer from "./footer"
import Header from "./header"
import SEO from "./seo"

export default function Layout({ children }) {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
