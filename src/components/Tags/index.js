import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Tags = ({ category, tags }) => {
  return (
    <Container>
      {tags.map((tag, index) => (
        <TagItem key={index} to={`/${category}/tag/${tag}`}>
          {tag}
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
  color: ${props => props.theme.colors.secondary};
  font-size: 0.875rem;
  text-decoration: none;
  padding: 0.25em 0.75em;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.background};
    background-color: ${props => props.theme.colors.button};
  }
`

export default Tags
