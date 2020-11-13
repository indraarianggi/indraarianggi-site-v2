import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import PostListContainer from "../components/PostListContainer"
import Pagination from "../components/Pagination"

const Tag = ({ data, pageContext, location }) => {
  const { allMarkdownRemark, site, imageSharp } = data
  const { tag, category, currentPage, numPages } = pageContext

  const seo = {
    title: `${site.siteMetadata.title} - ${category
      .charAt(0)
      .toUpperCase()}${category.slice(1)}: ${tag}`,
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
      <PageTitle>
        <span className="category">{category}</span> posts with{" "}
        <TagName to={`/${category}`}>{tag}</TagName> tag.
      </PageTitle>
      <PostListContainer posts={posts} />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        context={category}
        tag={tag}
      />
    </Layout>
  )
}

const PageTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;

  .category {
    text-transform: capitalize;
  }
`

const TagName = styled(props => <Link {...props} />)`
  background-color: var(--color-text-link);
  color: var(--color-background);
  text-decoration: none;
  padding: 0 0.5em;
  transition: all 300ms ease-in-out;

  &:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
`

export default Tag

export const tagPostsQuery = graphql`
  query($tag: String!, $category: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { category: { eq: $category }, tags: { eq: $tag } }
      }
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
