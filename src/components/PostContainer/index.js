import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import Heading from "../Heading"
import Tags from "../Tags"
import PostBody from "../PostBody"
import ProfileCard from "../ProfileCard"

const PostContainer = ({ frontmatter, html }) => {
  const { title, date, tags, featureImage } = frontmatter

  return (
    <Container>
      <Heading>{title}</Heading>
      <div className="info">
        {date}
        <Tags tags={tags} />
      </div>
      <Image
        fixed={featureImage.childImageSharp.fixed}
        style={{ width: "100%", height: 435, margin: "30px 0" }}
      />
      <PostBody html={html} />
      <ProfileCard />
    </Container>
  )
}

const Container = styled.article`
  .info {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`

export default PostContainer
