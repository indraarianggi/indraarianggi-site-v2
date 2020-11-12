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
        <div className="profile-pic">
          <Image
            fixed={data.imageSharp.fixed}
            style={{ width: "100%", height: "100%" }}
            alt="Indra Arianggi"
          />
        </div>
        <div className="introduction">
          <Heading>Hi, I'm Indra Arianggi</Heading>
          <p className="description">
            A tech adventurer exploring the vast world of Frontend with React.
          </p>
          <Button
            href="https://www.linkedin.com/in/indraarianggi/"
            linkType="external"
            shadow
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
    align-self: center;
    margin-bottom: 30px;
    border: 3px solid #2d2d2d;
    width: 250px;
    height: 300px;
  }

  .description {
    margin: 20px 0 30px 0;
  }

  @media ${props => props.theme.breakpoints.medium} {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
    align-items: center;

    .profile-pic {
      margin-bottom: 0;
    }
  }

  @media ${props => props.theme.breakpoints.large} {
    min-height: 70vh;
  }
`

export default Home
