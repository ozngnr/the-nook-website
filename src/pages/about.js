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
            The Nook is an all day venue, where you can find drinks and food for
            all times of the day alongside friendly company and lively music.
            You can come and hangout with us in the deli or pop in for a shop!
          </p>
          <div className={styles.about__content}>
            <div className={styles.row}>
              <div className={styles.aboutText}>
                <h3>DELI</h3>
                <p>
                  Fresh homemade food for all times of the day to have it in or
                  take away. We have breakfast specials and pastries in the
                  morning, indulgent hot sandwiches plus daily mezze and salads
                  for lunch and a dinner menu for dining with us in the
                  evenings.
                </p>
                <p>
                  We called it Contemporary European with a Turkish Twist which
                  in short, is a lot of fresh seasonal food that goes well with
                  wine. On Saturdays and Sundays we also cook all sorts of eggs
                  and shake some cocktails. We think a strong brunch is the best
                  way to start a cheeky weekend or get over a hangover!
                </p>
              </div>
              <div className={styles.aboutImg}>
                <StaticImage
                  src="../images/hero.jpg"
                  alt="a few plates of food on a table"
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
                  enjoy the playlist of the day.
                </p>
              </div>
              <div className={styles.aboutImg}>
                <StaticImage src="../images/turntable.jpg" alt="turntable" />
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
          </div>
        </div>
      </section>
    </Layout>
  )
}
