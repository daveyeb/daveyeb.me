import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'


const githubPage = () => {
    const w = window.open('https://github.com/daveyeb', '_blank')
    if (w) w.focus()
}

const linkedInPage = () => {
    const w = window.open('https://linkedin.com/in/daveyeb', '_blank')
    if (w) w.focus()
}

const rmapPage = () => {
    const w = window.open('https://moazl72kkqrgr57xycho2qzqzi0efgpy.lambda-url.us-east-1.on.aws/', '_blank')
    if (w) w.focus()
}

const enigmaPage = () => {
    const w = window.open('https://github.com/daveyeb/enigma.rs', '_blank')
    if (w) w.focus()
}

export default function Home() {


    // https://daveyeb.me/?code=4/0ARtbsJp7XVmenoZ6KzA7pL9i1a2yFBYFDrgCf_22CFJP_nmgMq6AQ8UUke5wW5Z6rWqGMQ&scope=https://www.googleapis.com/auth/sdm.service

    useEffect(() => {
        if (window != undefined) {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-691EMM8GS8');

            if (window.location.search.includes("code")) {
                // console.log(window.location.pathname + "api/hello/" + window.location.search)
                fetch(window.location.pathname + "api/hello" + window.location.search).then(res => {
                    // console.log(res.json())
                });
            }

        }

    }, [])

    const [hidden, setHidden] = useState("hidden");
    const [image, setImage] = useState("");
    const onMouseLeave = () => setHidden("hidden");


    return (
        <div className={styles.container}>
            <Head>
                <title>david yebōah , swe | projects</title>
                <meta name="description" content="personal website of david.yeboah" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
                <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
                <link rel="manifest" href="favicon/site.webmanifest" />
                <meta name="msapplication-config" content="favicon/browserconfig.xml" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <main className=" flex">
                <div className="sm:w-6/6   md:w-6/12">
                    <div className="flex-1 salu bold-text w-6/6 text-4xl mt-20 md:mt-60 md:ml-24">
                        <h1 style={{ color: "#FFD500" }}><span>projects </span><span>📽️</span></h1>
                    </div>
                    <p className='sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text'>
                    Here are two ongoing projects that I am currently developing. I have opted to implement both using Rust for the backend, while exploring various front-end frameworks for each. Click to launch/discover details about the respective tech stacks utilized
                    </p>
                    <ul className=" sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text ">
                        <li className="project-list" onMouseEnter={() => {
                            setImage("/r_map.png")
                            setHidden("")
                        }} onMouseLeave={onMouseLeave} onClick={rmapPage}>
                            <h3 className="text-2xl">rmap.rs <span >🔗</span></h3>
                            <p>A web app that examines source code repositories to create a network of dependencies among files and components. A cool way for programmers to visualize their code.</p>
                        </li>
                        <li className="mt-2 project-list" onMouseEnter={() => {
                            setImage("/Enigma_(crittografia)_-_Museo_scienza_e_tecnologia_Milano.jpg")
                            setHidden("")
                        }} onMouseLeave={onMouseLeave} onClick={enigmaPage}>
                            <h3 className="text-2xl">enigma.rs <span>🔗</span></h3>
                            <p>A terminal based program that mimicks the operations of an Enigma M3/M4 cipher machine developed by Germans during WWII.</p>
                        </li>
                    </ul>

                    <div className="mt-5 md:ml-24">
                        <Link href="/" className=' mt-6 uppercase pr-1'>home</Link><span>|</span>
                        <a className='pl-1 mt-6 uppercase pr-1' onClick={githubPage}>github</a><span>|</span>
                        <a className='pl-1 mt-6 uppercase pr-1' onClick={linkedInPage}>linkedin</a>
                        {/* <Link href="playlist" className='pl-1 mt-6 uppercase pr-1'>playlist</Link> */}
                    </div>
                    <a className='hidden mt-5 w-32 block md:ml-24 button text-center rounded-lg left-1.5 absolute'>Randomize</a>
                </div>

                <div className={` w-6/12 mt-20 md:mt-60 grid place-content-center ${hidden}`}>
                    <Image
                        src={image}
                        width={image.includes("r_map") ? 1000: 500}
                        height={500}
                        sizes='100vw'
                    />

                </div>

                <Script async src="https://www.googletagmanager.com/gtag/js?id=G-691EMM8GS8"></Script>
                
            </main>
            <footer className='fixed bottom-2 uppercase'>

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

        h1 > span {
          cursor: pointer;
        }

        .button:active {
          transform: scale(0.9);
        }
    `}</style>
        </div>
    )
}
