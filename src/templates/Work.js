import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostContainer from "../components/PostContainer"
import Pagination from "../components/Pagination"

const Work = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext

  let posts = data.allMarkdownRemark.edges.map(post => {
    const { fields, frontmatter } = post.node
    return {
      title: frontmatter.title,
      date: frontmatter.date,
      tags: frontmatter.tags,
      slug: fields.slug,
      featureImage: frontmatter.featureImage.childImageSharp.fixed,
    }
  })

  return (
    <Layout>
      <PostContainer posts={posts} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        context="work"
      />
    </Layout>
  )
}

export default Work

export const workPostsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "work" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            tags
            date(formatString: "MMMM DD, YYY")
            title
            featureImage {
              publicURL
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`