import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/menus.module.css"
import { graphql, Link } from "gatsby"

export default function MenuDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, footnote, file } = data.markdownRemark.frontmatter
  const menus = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <section>
        <div className={styles.menus}>
          <ul className={styles.navigation}>
            {menus.map(node => (
              <li key={node.id}>
                <Link to={`/menus/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.menu}>
            <div>
              <h2>{title}</h2>
              {footnote && <p>{footnote}</p>}
            </div>
            {file && (
              <>
                <h3>Wine List</h3>
                <p>
                  We update our wine list regularly, please download the latest
                  one{" "}
                  <a
                    href={file.publicURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit" }}
                  >
                    <strong>
                      <u>here</u>
                    </strong>
                  </a>
                  .
                </p>
              </>
            )}
            <div dangerouslySetInnerHTML={{ __html: html }}></div>
            <span>
              <em>
                <u>
                  Please note all menus are samples and the content and prices
                  are subject to change
                </u>
              </em>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        footnote
        file {
          publicURL
        }
      }
    }
    allMarkdownRemark(sort: { fields: frontmatter___title }) {
      nodes {
        frontmatter {
          title
          footnote
          slug
        }
        id
      }
    }
  }
`
