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
  color: var(--color-text-button);
  background-color: var(--color-button);
  font-weight: 600;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 300ms ease-in-out;

  &.shadow {
    box-shadow: 6px 6px var(--color-shadow);
  }

  &.shadow:hover {
    box-shadow: none;
    transform: translate(6px, 6px);
  }
`

const ButtonExternal = styled.a`
  color: var(--color-text-button);
  background-color: var(--color-button);
  font-weight: 600;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  transition: all 300ms ease-in-out;

  &.shadow {
    box-shadow: 6px 6px var(--color-shadow);
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
