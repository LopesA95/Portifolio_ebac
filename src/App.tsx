import { Projects } from './containers/Projects'
import { Sidebar } from './containers/Sidebar'
import { About } from './containers/About'
import { Container, GlobalStyle } from './styles'

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Sidebar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}
