import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Intro from "../components/intro"
import Reservations from "../components/reservations"

export default function Home() {
  return (
    <div>
      <Hero />
      <Layout>
        <Intro />
        <Reservations />
      </Layout>
    </div>
  )
}
