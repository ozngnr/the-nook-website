import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default function SEO({ title, description, keywords, image }) {
  const { site } = useStaticQuery(query)
  const { siteTitle, siteDescription, siteImage, siteKeywords } =
    site.siteMetadata

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    keywords: keywords || siteKeywords,
    image: image || siteImage,
    meta: [],
  }

  return (
    <Helmet
      lang="en"
      title={seo.title}
      titleTemplate={siteTitle}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `keywords`,
          content: seo.keywords,
        },
        {
          property: `image`,
          content: seo.image,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(seo.meta)}
    >
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CG7P8P55MP"
      ></script>
      <script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-CG7P8P55MP');
      </script>
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteTitle
        siteDescription
        siteImage
        siteKeywords
      }
    }
  }
`

SEO.deafultProps = {
  meta: [],
  lang: `en`,
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
