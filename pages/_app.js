import '../styles/master.css'
import { Grommet } from 'grommet';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Grommet plain>
        <Component {...pageProps} />
      </Grommet>
    </>
  )
}

export default MyApp
