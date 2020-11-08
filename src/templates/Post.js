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
        tags
        excerpt
        date(formatString: "MMMM DD, YYYY")
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
