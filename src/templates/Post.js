import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostContainer from "../components/PostContainer"

const Post = ({ data, location }) => {
  const {
    title,
    category,
    excerpt,
    featureImage,
  } = data.markdownRemark.frontmatter

  const seo = {
    title: `${category.charAt(0).toUpperCase()}${category.slice(1)} - ${title}`,
    description: excerpt,
    pathname: location.pathname,
    image: featureImage ? featureImage.publicURL : null,
    isArticle: true,
  }

  return (
    <Layout seo={seo}>
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
        date(formatString: "MMM DD, YYYY")
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
