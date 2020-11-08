import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Button = ({ children, href, linkType, shadow }) => {
  if (linkType === "internal") {
    return (
      <ButtonInternal to={href} className={shadow ? "shadow" : ""}>
        {children}
      </ButtonInternal>
    )
  }

  return (
    <ButtonExternal
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={shadow ? "shadow" : ""}
    >
      {children}
    </ButtonExternal>
  )
}

const ButtonInternal = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.button};
  font-weight: 600;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 300ms ease-in-out;

  &.shadow {
    box-shadow: 6px 6px ${props => props.theme.colors.text};
  }

  &.shadow:hover {
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`

const ButtonExternal = styled.a`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.button};
  font-weight: 600;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 300ms ease-in-out;

  &.shadow {
    box-shadow: 6px 6px ${props => props.theme.colors.text};
  }

  &:hover {
    opacity: 0.9;
  }

  &.shadow:hover {
    opacity: 1;
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`

export default Button
