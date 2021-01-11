import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import Master from '../components/Master'
import { Grommet } from 'grommet';

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


function MyApp({ Component, pageProps }) {
  return (

    <>
      <Grommet plain>
      <Master/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      </Grommet>
    </>
  )
}

export default MyApp
