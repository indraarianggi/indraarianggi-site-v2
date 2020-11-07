import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = ({ children, href, linkType }) => {
  if (linkType === "internal") {
    return <ButtonInternal to={href}>{children}</ButtonInternal>
  }

  return (
    <ButtonExternal href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </ButtonExternal>
  )
}

const ButtonInternal = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.button};
  font-weight: 600;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  box-shadow: 6px 6px ${props => props.theme.colors.text};
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`

const ButtonExternal = styled.a`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.button};
  font-weight: 600;
  display: inline-block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  box-shadow: 6px 6px ${props => props.theme.colors.text};
  transition: all 300ms ease-in-out;

  &:hover {
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`

export default Button
