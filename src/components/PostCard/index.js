import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Tags from "../Tags"

const PostCard = ({ title, date, category, tags, slug, featureImage }) => {
  return (
    <Card>
      <LinkArea to={slug}>
        <Image
          fixed={featureImage}
          style={{ width: "100%", height: 200 }}
          alt={title}
        />
        <div>
          <h2>{title}</h2>
          <span className="info">{date}</span>
        </div>
      </LinkArea>
      <Tags category={category} tags={tags} />
    </Card>
  )
}

const Card = styled.article`
  display: grid;
  grid-template-rows: auto;
  gap: 15px;
  padding: 10px;
  border: 3px solid transparent;
  transition: all 300ms ease-in-out;

  .info {
    color: ${props => props.theme.colors.secondary};
    font-size: 0.875rem;
  }

  &:hover {
    border: 3px solid ${props => props.theme.colors.text};
    box-shadow: 6px 6px ${props => props.theme.colors.text};
    transform: translate(-6px, -6px);
  }
`

const LinkArea = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text};
  display: grid;
  grid-template-rows: auto;
  gap: 15px;
  text-decoration: none;
  cursor: pointer;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }
`

export default PostCard
