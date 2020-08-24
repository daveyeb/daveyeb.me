import React, {useEffect} from 'react'
// eslint-disable-next-line node/no-unpublished-import
import ReactGA from 'react-ga'

const MyApp = ({ Component, pageProps }) => {
  
  useEffect(() => {
    if(!window.GA_INITIALIZED) {
      ReactGA.initialize("UA-176178393-1")
      window.GA_INITIALIZED = true
    }
    
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)

  })
  
  return <Component {...pageProps} />
}

export default MyApp
