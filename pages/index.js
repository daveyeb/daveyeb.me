import Head from 'next/head'
import Script from 'next/script'
import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const greetings = [
  'hola',
  'hello',
  'bonjour',
  'hallo',
  'yo',
  'salām',
  'ciao',
  'Привет'
]

const warInUkraine = () => {
  const w = window.open('https://www.google.com/search?q=war%20in%20ukraine#ip=1', '_blank')
  if(w) w.focus()
}

export default function Home() {
  const [greeting, setGreeting] = useState(greetings[0]);
  const shuffle = useCallback(()=> {
    setGreeting(greetings[(greetings.indexOf(greeting) + 1) % greetings.length])
  })

// https://daveyeb.me/?code=4/0ARtbsJp7XVmenoZ6KzA7pL9i1a2yFBYFDrgCf_22CFJP_nmgMq6AQ8UUke5wW5Z6rWqGMQ&scope=https://www.googleapis.com/auth/sdm.service

  useEffect(()=> 
  {
    if (window != undefined ) {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());

      gtag('config', 'UA-176178393-1');

      if(window.location.search.includes("code")){
        // console.log(window.location.pathname + "api/hello/" + window.location.search)
        fetch(window.location.pathname + "api/hello" + window.location.search).then(res => {
          // console.log(res.json())
        });
      }
      
    }

  }, [])

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000)
    return () => clearInterval(intervalID)

  }, [shuffle])

  return (
    <div className={styles.container}>
      <Head>
        <title>david yebōah , swe | home</title>
        <meta name="description" content="personal website of david.yeboah" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="favicon/site.webmanifest"/>
        <meta name="msapplication-config" content="favicon/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <main className="">
        <div>
          <div className="flex-1 bold-text w-2/6 text-4xl mt-20 md:mt-60 md:ml-24" onClick={warInUkraine}>
            <span><h1 className=" " style={{color:	"#005BBB"}}>{greeting}</h1></span>
            <span><h1 style={{color:	"#FFD500"}}>i&apos;m</h1></span>
            <span><h1 style={{color:	"#FFD500"}}>david</h1></span>
          </div>
          <p className='md:w-2/6 mt-5 md:ml-24 opacity-90 pg-text '>
            software developer at ibm rtp
            , working on making a productive environment for ibm employees
            worldwide and to also deliver the future of IT.
          </p>
          <a className='hidden mt-5 w-32 block md:ml-24 button text-center rounded-lg left-1.5 absolute'>Randomize</a>
        </div>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-176178393-1"></Script>
      </main>
      <footer className='fixed bottom-2 uppercase'>
        <a className='hidden block'>menu</a>
        {/* <a className='block'>musiclists</a>
        <a className='block'>blog</a> */}
      </footer>
      <style jsx>{`
        .button {
          // border: 1px solid coral;
          transition: all 0.15s ease 0s;
          color: #8d0125;
          cursor: pointer;
        }

        .button:hover {
          color: rgba(141, 1, 37, 0.8);
          background-color: rgba(221, 221, 221, 0.2);
        }

        .bold-text {
          // color: #586c72!important;
        }

        .pg-text {
          // color: #6e9197!important;
        }

        .button:active {
          transform: scale(0.9);
        }
    `}</style>
    </div>
  )
}
