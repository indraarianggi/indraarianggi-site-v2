import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import PostListContainer from "../components/PostListContainer"
import Pagination from "../components/Pagination"

const Tag = ({ data, pageContext }) => {
  const { tag, category, currentPage, numPages } = pageContext

  let posts = data.allMarkdownRemark.edges.map(post => {
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
    <Layout>
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
  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.background};
  text-decoration: none;
  padding: 0 0.5em;
  transition: all 300ms ease-in-out;

  /* &:after {
    content: "x";
    padding-left: 0.5em;
    margin-left: 0.5em;
    border-left: 1px solid ${props => props.theme.colors.background};
    display: none;
    transition: all 300ms ease-in-out;
  } */

  &:hover {
    text-decoration: line-through;
    cursor: pointer;

    /* &:after {
      display: inline-block;
    } */
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
  }
`
