import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.backgroundColor};

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
