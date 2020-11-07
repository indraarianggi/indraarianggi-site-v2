import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import Heading from "../components/Heading"
import Button from "../components/Button"

const Home = () => {
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
    <Layout>
      <Container>
        <Image
          fixed={data.imageSharp.fixed}
          className="profile-pic"
          style={{ width: "100%" }}
        />
        <div className="introduction">
          <Heading>Hi, I'm Indra Arianggi</Heading>
          <p className="description">
            A Full Stack Web Developer, currently focused on exploring the world
            of Front-end with React.
          </p>
          <Button
            href="https://www.linkedin.com/in/indraarianggi/"
            linkType="external"
          >
            Know Me More
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 100vh;

  .profile-pic {
    border: 3px solid #2d2d2d;
    margin-bottom: 30px;
  }

  .description {
    margin-bottom: 30px;
  }

  @media ${props => props.theme.breakpoints.medium} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    align-items: center;
  }

  @media ${props => props.theme.breakpoints.large} {
    min-height: 70vh;
  }
`

export default Home
