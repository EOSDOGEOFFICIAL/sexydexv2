import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '../components/Pancakeswap/uikit/src'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }

  const tempDark = { ...dark, tooltip: { ...dark.tooltip, background: "#47ffee" }, colors: { ...dark.colors, primary: "#0056AC", textSubtle: "#47ffee", backgroundAlt: "#000", secondary: "#47ffee", text: "#47ffee", gradients: { ...dark.colors.gradients, bubblegum: 'linear-gradient(139.73deg,#ffffff00 0%,#ffffff00 100%)', cardHeader:'linear-gradient(139.73deg,#ffffff00 0%,#ffffff00 100%)' } }, card: { ...dark.card, background: "#000" } }
  console.log(tempDark)
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? tempDark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
