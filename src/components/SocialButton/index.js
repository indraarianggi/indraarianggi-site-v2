import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedinIn,
  faGithub,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"

const SocialButton = ({ type, href }) => {
  let icon
  if (type === "linkedin") {
    icon = <FontAwesomeIcon icon={faLinkedinIn} />
  } else if (type === "github") {
    icon = <FontAwesomeIcon icon={faGithub} />
  } else if (type === "dribbble") {
    icon = <FontAwesomeIcon icon={faDribbble} />
  }

  return (
    <ButtonWrapper href={href} target="_blank" rel="noopener noreferrer">
      {icon}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.a`
  color: var(--color-text-body);
  background-color: transparent;
  padding: 0.5em 1em;
  transition: all 300ms ease-in-out;

  &:hover {
    color: var(--color-background);
    background-color: var(--color-text-link);
  }
`

export default SocialButton
