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
        <p style={{ marginBottom: 30 }}>
          I'm Indra Arianggi, Full Stack Web Developer, currently focused on
          exploring the world of Front-end with React.
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
  grid-template-columns: auto 1fr;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  margin-top: 50px;
  border: 3px solid ${props => props.theme.colors.text};
  box-shadow: 6px 6px ${props => props.theme.colors.text};

  .profile-pic {
    justify-self: center;
    width: 100px;
    height: 100px;
  }

  @media ${props => props.theme.breakpoints.medium} {
    width: 530px;
    margin: 50px auto 0;
  }

  @media ${props => props.theme.breakpoints.large} {
  }
`

export default ProfileCard