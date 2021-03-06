import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Button from "../Button"

const ProfileCard = () => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "indraarianggi.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <Card>
      <div className="profile-pic">
        <Image
          fixed={data.imageSharp.fixed}
          style={{ width: "100%", height: "100%" }}
          alt="Indra Arianggi"
        />
      </div>
      <div>
        <p>
          Hi, I'am Indra Arianggi, a tech adventurer who begins to explore the
          vast world of Front End using React.
        </p>
        <Button
          href="https://www.linkedin.com/in/indraarianggi/"
          linkType="external"
        >
          Know Me More
        </Button>
      </div>
    </Card>
  )
}

const Card = styled.article`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  margin-top: 50px;
  border: 3px solid var(--color-border);
  box-shadow: 6px 6px var(--color-shadow);

  .profile-pic {
    display: none;
  }

  p {
    margin-bottom: 30px;
    line-height: 1.875em;
  }

  @media ${props => props.theme.breakpoints.medium} {
    grid-template-columns: auto 1fr;
    width: 530px;
    margin: 50px auto 0;

    .profile-pic {
      display: block;
      width: 100px;
      height: 100px;
    }
  }
`

export default ProfileCard
