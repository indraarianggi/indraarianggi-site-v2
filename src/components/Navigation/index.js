import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faFileAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

const Navigation = () => {
  return (
    <NavWrapper>
      <LinkItem to="/" activeClassName="active" partiallyActive={true}>
        <FontAwesomeIcon icon={faHome} size="lg" className="icon" />
        <span className="text">Home</span>
      </LinkItem>
      <LinkItem to="/blog" activeClassName="active" partiallyActive={true}>
        <FontAwesomeIcon icon={faFileAlt} size="lg" className="icon" />
        <span className="text">Blog</span>
      </LinkItem>
      <LinkItem to="/work" activeClassName="active" partiallyActive={true}>
        <FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon" />
        <span className="text">Work</span>
      </LinkItem>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background-color: ${props => props.theme.colors.button};
  font-weight: 600;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media ${props => props.theme.breakpoints.large} {
    background-color: transparent;
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    border-bottom: 6px solid ${props => props.theme.colors.text};
    box-shadow: none;
  }
`

const LinkItem = styled(props => <Link {...props} />)`
  color: ${props => props.theme.colors.text};
  padding: 0.5em 1em;
  text-decoration: none;

  .active {
    color: yellow;
    border-bottom: 3px solid ${props => props.theme.colors.text};
  }

  .icon {
    display: block;
  }

  .text {
    display: none;
  }

  @media ${props => props.theme.breakpoints.large} {
    .icon {
      display: none;
    }

    .text {
      display: block;
    }
  }
`

export default Navigation
