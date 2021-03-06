import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Tags = ({ category, tags }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <TagItem key={index} to={`/${category}/tag/${tag}`}>
          #{tag}
        </TagItem>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TagItem = styled(props => <Link {...props} />)`
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: 0.25em 0.75em;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--color-background);
    background-color: var(--color-text-link);
  }
`

export default Tags
