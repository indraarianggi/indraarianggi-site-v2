import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const NotFoundPage = () => {
  const seo = {
    title: "Aw, You get lost",
  }
  return (
    <Layout seo={seo}>
      <Container>
        <NotFoundSign>404</NotFoundSign>
        <p>Aw, you get lost?</p>
        <p>
          Let me guide you to <Link to="/">the right path</Link>.
        </p>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 90vh;

  a {
    color: var(--color-text-link);
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: var(--color-background);
    background-color: var(--color-text-link);
  }

  @media ${props => props.theme.breakpoints.large} {
    min-height: 70vh;
  }
`

const NotFoundSign = styled.h1`
  color: var(--color-text-link);
  font-size: 6rem;
  font-weight: 700;
  text-shadow: 6px 0px var(--color-shadow);
`

export default NotFoundPage
