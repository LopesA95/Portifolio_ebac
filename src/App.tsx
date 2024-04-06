import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import { Projects } from './containers/Projects'
import { Sidebar } from './containers/Sidebar'
import { About } from './containers/About'
import { Container, GlobalStyle } from './styles'
import { themeLight } from './themes/light'
import { themeDark } from './themes/Dark'

export function App() {
  const [isThemeDark, setThemeDark] = useState(false)

  function toggleTheme() {
    setThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}
