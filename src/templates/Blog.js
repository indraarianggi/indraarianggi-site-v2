import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostListContainer from "../components/PostListContainer"
import Pagination from "../components/Pagination"

const Blog = ({ data, pageContext, location }) => {
  const { allMarkdownRemark, site, imageSharp } = data
  const { currentPage, numPages } = pageContext

  const seo = {
    title: `${site.siteMetadata.title} - Blog`,
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
      featureImage: frontmatter.featureImage
        ? frontmatter.featureImage.childImageSharp.fixed
        : imageSharp.fixed,
    }
  })

  return (
    <Layout seo={seo}>
      <PostListContainer posts={posts} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        context="blog"
      />
    </Layout>
  )
}

export default Blog

export const blogPostsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "blog" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
    imageSharp(fixed: { originalName: { eq: "default-image.png" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
