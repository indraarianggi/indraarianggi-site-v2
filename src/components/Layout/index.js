import React from "react"
import styled from "styled-components"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Seo from "../Seo"

const Layout = ({ children, seo }) => {
  return (
    <Wrapper>
      <Seo {...seo} />
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media ${props => props.theme.breakpoints.large} {
    max-width: 800px;
    margin: 0 auto;
  }
`

const Content = styled.main`
  padding: 30px 15px;
`

export default Layout
