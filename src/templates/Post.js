import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostContainer from "../components/PostContainer"

const Post = ({ data }) => {
  return (
    <Layout>
      <PostContainer {...data.markdownRemark} />
    </Layout>
  )
}

export default Post

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYY")
        category
        tags
        excerpt
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
