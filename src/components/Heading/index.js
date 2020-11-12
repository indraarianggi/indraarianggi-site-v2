import React from "react"
import styled from "styled-components"

const Heading = ({ children }) => {
  return <H1>{children}</H1>
}

const H1 = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  font-weight: 700;

  @media ${props => props.theme.breakpoints.medium} {
    font-size: 2.125rem;
  }
`

export default Heading
