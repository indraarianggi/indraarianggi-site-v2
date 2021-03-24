import React from "react"
import styled from "styled-components"
import SocialButton from "../SocialButton"

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© 2020 indraarianggi</p>
      <span>
        <SocialButton
          type="linkedin"
          href="https://www.linkedin.com/in/indraarianggi/"
        />
        <SocialButton type="github" href="https://github.com/indraarianggi" />
        <SocialButton
          type="dribbble"
          href="https://dribbble.com/indraarianggi"
        />
      </span>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  font-family: var(--font-secondary);
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 84px;
  margin-bottom: 65px;
  border-top: 6px solid var(--color-border);
  position: relative;

  &::before {
    content: "";
    background-color: var(--color-border);
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 3px;
  }

  @media ${props => props.theme.breakpoints.medium} {
    flex-direction: row;
    justify-content: space-between;

    p {
      margin-left: 1em;
    }
  }

  @media ${props => props.theme.breakpoints.large} {
    margin-bottom: 0px;
  }
`

export default Footer
