import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import "prismjs/themes/prism-okaidia.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "../../styles/prism-code-style.css"
import theme from "../../themes/theme"
import Navigation from "../Navigation"
import Footer from "../Footer"
import Seo from "../Seo"

const Layout = ({ children, seo }) => {
  const [themeMode, setThemeMode] = useState(undefined)

  useEffect(() => {
    const root = window.document.documentElement
    const initialThemeMode = root.style.getPropertyValue("--initial-theme-mode")
    setThemeMode(initialThemeMode)
  }, [])

  const handleThemeModeChange = prevThemeMode => {
    const newThemeMode = prevThemeMode === "light" ? "dark" : "light"
    setThemeMode(newThemeMode)

    const root = window.document.documentElement
    root.style.setProperty("--initial-theme-mode", newThemeMode)
    window.localStorage.setItem("indraarianggi-site-theme", newThemeMode)
  }

  return (
    <ThemeProvider theme={{ ...theme, colors: { ...theme.colors[themeMode] } }}>
      <GlobalStyles />
      <Container>
        <Seo {...seo} themeMode={themeMode} />
        <Navigation
          themeMode={themeMode}
          handleThemeModeChange={handleThemeModeChange}
        />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }

    :root {
      --color-text-body: ${props => props.theme.colors.textBody};
      --color-text-heading: ${props => props.theme.colors.textHeading};
      --color-text-secondary: ${props => props.theme.colors.textSecondary};
      --color-text-link: ${props => props.theme.colors.textLink};
      --color-text-button: ${props => props.theme.colors.textButton};
      --color-background: ${props => props.theme.colors.background};
      --color-button: ${props => props.theme.colors.button};
      --color-shadow: ${props => props.theme.colors.shadow};
      --color-border: ${props => props.theme.colors.border};
      --font-primary: ${props => props.theme.fonts.main};
      --font-secondary: ${props => props.theme.fonts.heading};
    }

    body, html {
        background-color: var(--color-background);
        color: var(--color-text-body);
        font-family: var(--font-primary);
        font-weight: 500;
    }
`

const Container = styled.div`
  @media ${props => props.theme.breakpoints.large} {
    max-width: 800px;
    margin: 0 auto;
  }
`

const Content = styled.main`
  padding: 30px 15px;
`

export default Layout
