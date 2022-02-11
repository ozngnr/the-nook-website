import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout.js"
import * as styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <section>
        <div className="container">
          <h1>ABOUT US</h1>
          <p>
            The Nook is a wine bar, where you can find drinks of all varieties
            and seasonal food! Our focus is to serve only what we love, with the
            friendliest service and handpicked great music as a bonus!
          </p>
          <div className={styles.about__content}>
            <div className={styles.row}>
              <div className={styles.aboutText}>
                <h3>DELI</h3>
                <p>
                  Fresh homemade food alongside all the wine bar classics. We
                  have great suppliers for our cheese, charcuterie, olives and
                  snacks. We pickle and ferment, as well as banging out
                  delicious chutneys, sauces and spreads.
                </p>
                <p>
                  It is possible to shop deli products, bottles of natural wine,
                  beers and fresh bread from Bread by Bike for takeaway. We are
                  working on our takeaway offer to be available for deliveries
                  in London and nationwide too. Just keep an eye on our updates!
                  On Friday and Saturdays we also cook some eggs and cheeky
                  sandwiches for lunchtime alongside shaking some cocktails just
                  because we think a strong brunch is the best way to start a
                  cheeky weekend or get over a hangover!
                </p>
              </div>
              <div className={styles.aboutImg}>
                <StaticImage
                  src="../images/hero.jpg"
                  alt="a few plates of food on a table"
                  placeholder="none"
                />
              </div>
            </div>

            <div className={`${styles.row} ${styles.reverse}`}>
              <div className={styles.aboutText}>
                <h3>WINE</h3>
                <p>
                  We serve a good mixture of classic and natural wines from
                  various places such as Italy, France, Spain, Austria, Georgia,
                  Armenia and even from London. We try to choose our wines with
                  a big focus on affordability, tastiness and originality. Also
                  available: Exale beers on tap, selection of craft beers and
                  tasty coffee from Volcano Coffee Works.
                </p>
              </div>
              <div className={styles.aboutImg}>
                <StaticImage
                  src="../images/wine.jpg"
                  alt="a hand holding a wine bottle"
                  imgClassName={styles.aboutImg}
                  className={styles.aboutImg}
                  placeholder="none"
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.aboutText}>
                <h3>WAX</h3>
                <p>
                  We have a small selection of records for sale. Our selection
                  is from independent labels, predominantly London based. You
                  can listen to the records, just ask us to get it on for you or
                  enjoy the playlist of the day. We also have a full dj set up
                  for parties and private hires in the Nook, just give us a
                  shout for more info!
                </p>
              </div>
              <div className={styles.aboutImg}>
                <StaticImage
                  src="../images/turntable.jpg"
                  alt="turntable"
                  placeholder="none"
                />
              </div>
            </div>
            <span className={styles.photoCredit}>
              <em>
                Photo by{" "}
                <a href="https://unsplash.com/@getuliodt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Getúlio Moraes
                </a>{" "}
                on{" "}
                <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </em>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}
