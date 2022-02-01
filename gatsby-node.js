const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query ProjectsQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const slug = node.frontmatter.slug

    actions.createPage({
      path: "/menus/" + slug,
      component: path.resolve("./src/templates/menu-details.js"),
      context: { slug: slug },
    })
  })
}
