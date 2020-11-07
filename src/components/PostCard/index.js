import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Tags from "../Tags"

const PostCard = ({ title, date, tags, slug, featureImage }) => {
  return (
    <Card to={slug}>
      <Image
        fixed={featureImage}
        style={{ width: "100%", height: 200 }}
        alt={title}
      />
      <div>
        <h2>{title}</h2>
        <span className="info">{date}</span>
      </div>
      <Tags tags={tags} />
    </Card>
  )
}

const Card = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text};
  grid-template-rows: auto;
  display: grid;
  gap: 15px;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 300ms ease-in-out;

  h2 {
    font-size: 1.125rem;
    font-weight: 700;
  }

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

export default PostCard
