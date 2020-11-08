const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

// Create slug for each content
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const url = createFilePath({ node, getNode })

    createNodeField({
      name: "slug",
      node,
      value: url,
    })
  }
}

// Generate/Create a page for each content
exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              tags
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const postsPerPage = 6

  // Blog content
  const blogPosts = data.allMarkdownRemark.edges.filter(
    post => post.node.frontmatter.category === "blog"
  )
  const blogNumPages = Math.ceil(blogPosts.length / postsPerPage)
  // Creating blog page with pagination
  Array.from({ length: blogNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/blog" : `/blog/page/${i + 1}`,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: blogNumPages,
      },
    })
  })

  // Work content
  const workPosts = data.allMarkdownRemark.edges.filter(
    post => post.node.frontmatter.category === "work"
  )
  const workNumPages = Math.ceil(workPosts.length / postsPerPage)
  // Creating work page with pagination
  Array.from({ length: workNumPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? "/work" : `/work/page/${i + 1}`,
      component: path.resolve("./src/templates/Work.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages: workNumPages,
      },
    })
  })

  // Creating post page
  data.allMarkdownRemark.edges.forEach(post => {
    actions.createPage({
      path: post.node.fields.slug,
      component: path.resolve("./src/templates/Post.js"),
      context: {
        slug: post.node.fields.slug,
      },
    })
  })
}
