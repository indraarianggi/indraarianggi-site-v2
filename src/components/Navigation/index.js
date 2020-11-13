import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faFileAlt,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons"

const Navigation = ({ themeMode, handleThemeModeChange }) => {
  return (
    <NavWrapper>
      <LinkItem to="/" activeClassName="active">
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
      <ThemeButton
        className={themeMode === "dark" ? "dark" : "light"}
        onClick={() => handleThemeModeChange(themeMode)}
      >
        {
          <img
            src={themeMode === "dark" ? "/yoda.svg" : "/dartvader.svg"}
            alt={`to the ${themeMode === "dark" ? "light" : "dark"}`}
          />
        }
      </ThemeButton>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background-color: var(--color-background);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  border-top: 3px solid var(--color-border);
  box-shadow: 0 -2px 6px 0 rgba(0, 0, 0, 0.2);
  z-index: 2;

  @media ${props => props.theme.breakpoints.large} {
    background-color: transparent;
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    border-top: none;
    border-bottom: 6px solid var(--color-border);
    box-shadow: none;
  }
`

const LinkItem = styled(props => <Link {...props} />)`
  color: var(--color-text-body);
  font-weight: 600;
  text-decoration: none;

  &.active {
    color: var(--color-text-link);
  }

  .icon {
    display: block;
  }

  .text {
    display: none;
  }

  @media ${props => props.theme.breakpoints.large} {
    margin-left: 30px;

    .icon {
      display: none;
    }

    .text {
      display: block;
    }
  }
`

const ThemeButton = styled.span`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40px;
  cursor: pointer;

  &.light {
    padding: 0.5rem;
  }

  img {
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.large} {
    margin-left: 30px;

    img {
      width: 90%;
    }
  }
`

export default Navigation
