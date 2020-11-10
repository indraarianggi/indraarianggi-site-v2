import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostListContainer from "../components/PostListContainer"
import Pagination from "../components/Pagination"

const Work = ({ data, pageContext, location }) => {
  const { allMarkdownRemark, site } = data
  const { currentPage, numPages } = pageContext

  const seo = {
    title: `${site.siteMetadata.title} - Work`,
    pathname: location.pathname,
  }

  let posts = allMarkdownRemark.edges.map(post => {
    const { fields, frontmatter } = post.node
    return {
      title: frontmatter.title,
      date: frontmatter.date,
      category: frontmatter.category,
      tags: frontmatter.tags,
      slug: fields.slug,
      featureImage: frontmatter.featureImage.childImageSharp.fixed,
    }
  })

  return (
    <Layout seo={seo}>
      <PostListContainer posts={posts} />
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
            title
            date(formatString: "MMMM DD, YYY")
            category
            tags
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
    site {
      siteMetadata {
        title
      }
    }
  }
`
