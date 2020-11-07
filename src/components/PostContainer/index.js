import React from "react"
import styled from "styled-components"
import PostCard from "../PostCard"

const PostContainer = ({ posts }) => {
  return (
    <Container>
      {posts.map(post => {
        return <PostCard key={post.title} {...post} />
      })}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px 15px;

  @media ${props => props.theme.breakpoints.medium} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export default PostContainer
