import Head from 'next/head'
import Script from 'next/script'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'



export default function Home() {
  useEffect(()=>{
    if(window != undefined){
      console.log('heya')
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'UA-176178393-1');
  
    }
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>david yebōah , swe | home</title>
        <meta name="description" content="personal website of david.yeboah" />
        <link rel="icon" href="/favicon.ico" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-176178393-1"></Script>
      </Head>

      <main className="">
        <div className="flex-1 w-2/6 text-4xl mt-10 md:mt-60 md:ml-24">
          <span><h1 className=" ">hola</h1></span>
          <span><h1>i&apos;m</h1></span>
          <span><h1>david</h1></span>
        </div>
        <p className='md:w-2/6 mt-5 md:ml-24 opacity-90'>
        software developer at ibm rtp
        , working on making a productive environment for ibm employees
                worldwide and to also deliver the future of IT.
        </p>
        <a className='mt-5 w-32 block md:ml-24 button p-6'>Read More</a>
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
        }

        .button:hover {
          color: purple;
          background-color: rgba(221, 221, 221, 0.2);
        }

        .button:active {
          transform: scale(0.9);
        }
    `}</style>
    </div>
  )
}
