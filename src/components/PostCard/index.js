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
        <h2>{title}</h2>
      </LinkArea>
      <div className="info">
        <span>{date}</span>
        <Tags category={category} tags={tags} />
      </div>
    </Card>
  )
}

const Card = styled.article`
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
  padding: 10px;
  border: 3px solid transparent;
  transition: all 300ms ease-in-out;

  .info {
    color: var(--color-text-secondary);
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    border: 3px solid var(--color-border);
    box-shadow: 6px 6px var(--color-shadow);
    transform: translate(-6px, -6px);
  }
`

const LinkArea = styled(props => <Link {...props} />)`
  color: var(--color-text-heading);
  display: grid;
  grid-template-rows: auto;
  gap: 10px;
  text-decoration: none;
  cursor: pointer;

  h2 {
    font-family: var(--font-secondary);
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export default PostCard
