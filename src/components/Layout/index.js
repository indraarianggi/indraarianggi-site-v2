import React from "react"
import styled from "styled-components"
import Navigation from "../Navigation"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <Wrapper>
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
