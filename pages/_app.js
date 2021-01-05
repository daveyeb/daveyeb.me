import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    color: #555555;
    font-family: lores-9-minus-wide, sans-serif;
    font-weight: 400;
    font-style: normal;
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    color: #333;
    background-color: #f5f5f5;
    margin: 0;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
  
  
}

export default MyApp