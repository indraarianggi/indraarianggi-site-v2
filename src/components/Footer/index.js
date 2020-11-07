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
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  min-height: 84px;
  margin-bottom: 65px;
  border-top: 6px solid ${props => props.theme.colors.text};
  position: relative;

  &::before {
    content: "";
    background-color: ${props => props.theme.colors.text};
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;
    height: 3px;
  }

  @media ${props => props.theme.breakpoints.medium} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${props => props.theme.breakpoints.large} {
    margin-bottom: 0px;
  }
`

export default Footer
