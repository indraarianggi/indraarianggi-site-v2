/**
 * Resources:
 * https://joshwcomeau.com/gatsby/dark-mode/
 *
 */

import React from "react"

const MagicScriptTag = () => {
  const codeToRunOnClient = `
        (function() {
            function getInitialThemeMode() {
                const persistedThemePreference = window.localStorage.getItem(
                  "indraarianggi-site-theme"
                )
                const hasPersistedPreference = typeof persistedThemePreference === "string"
            
                // If the user has explicitly chosen light or dark,
                // let's use it. Otherwise, this value will be null.
                if (hasPersistedPreference) {
                  return persistedThemePreference
                }
            
                // If they haven't been explicit, let's check the media query
                const mql = window.matchMedia("(prefers-color-scheme: dark)")
                const hasMediaQueryPreference = typeof mql.matches === "boolean"
            
                if (hasMediaQueryPreference) {
                  return mql.matches ? "dark" : "light"
                }
            
                // If they are using a browser/OS that doesn't support color themes,
                // let's default to 'light'.
                return "light"
              }

              const themeMode = getInitialThemeMode();

              const root = document.documentElement;

              root.style.setProperty('--initial-theme-mode', themeMode);
        })()
    `

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
