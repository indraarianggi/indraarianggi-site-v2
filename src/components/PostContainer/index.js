import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Heading from "../Heading"
import Tags from "../Tags"
import PostBody from "../PostBody"
import ProfileCard from "../ProfileCard"

const PostContainer = ({ frontmatter, html }) => {
  const { title, date, category, tags, featureImage } = frontmatter

  return (
    <Container>
      <Heading>{title}</Heading>
      <div className="info">
        <p>{date}</p>
        <Tags category={category} tags={tags} />
      </div>
      {featureImage && (
        <div className="feature-image">
          <Image
            fixed={featureImage.childImageSharp.fixed}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
      <PostBody html={html} />
      {/* <ProfileCard /> */}
    </Container>
  )
}

const Container = styled.article`
  .info {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 20px;
  }

  .feature-image {
    margin-bottom: 30px;
    width: 100%;
    height: 240px;
  }

  @media ${props => props.theme.breakpoints.medium} {
    .feature-image {
      height: 432px;
    }
  }
`

export default PostContainer
