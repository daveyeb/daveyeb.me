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
    const w = window.open('https://leptos-enigma.vercel.app/', '_blank')
    if (w) w.focus()
}

const rmapSource = () => {
    const w = window.open('https://github.com/daveyeb/rmap.rs', '_blank')
    if (w) w.focus()
}

const enigmaSource = () => {
    const w = window.open('https://github.com/daveyeb/enigma.rs', '_blank')
    if (w) w.focus()
}



export default function Home() {


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
                    <div className="flex-1 cursor-none  bold-text w-6/6 text-4xl mt-20 md:mt-60 md:ml-24">
                        <h1 className="text-indigo-600"><span>projects </span><span>📽️</span></h1>
                    </div>
                    <p className='sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text tex'>
                        I have opted to implement both using Rust for the backend, while exploring various front-end frameworks for each.
                    </p>
                    <ul className=" sm:w-6/6 md:w-4/6 mt-5 md:ml-24 opacity-90 pg-text text-l">
                        <li className="project-list" onMouseEnter={() => {
                            setImage("/rmap.gif")
                            setHidden("")
                        }} onMouseLeave={onMouseLeave}>
                            <h3 className="text-2xl">rmap.rs</h3>
                            <p>A web app that examines source code repositories to create a network of dependencies among files and components. </p>
                            {/* A cool way for programmers to visualize their code. */}
                            <a className='mt-6 pr-1 hover:underline' onClick={rmapSource} style={{ color: "#005BBB" }}>source</a><span>|</span>
                            <a className='mt-6 p-1 hover:underline' onClick={rmapPage} style={{ color: "#005BBB" }}>launch</a>
                        </li>
                        <div className="mt-3 project-list" onMouseEnter={() => {
                            setImage("/enigma.gif")
                            setHidden("")
                        }} onMouseLeave={onMouseLeave}>
                            <h3 className="text-2xl cursor-none">enigma.rs</h3>
                            <p>A web app that mimicks the operations of an Enigma M3/M4 cipher machine developed by Germans during WWII.</p>
                            <a className='mt-6 pr-1 hover:underline' onClick={enigmaSource} style={{ color: "#005BBB" }}>source</a><span>|</span>
                            <a className='mt-6 p-1 hover:underline' onClick={enigmaPage} style={{ color: "#005BBB" }}>launch</a>
                        </div>
                    </ul>

                    <div className="mt-5 md:ml-24 text-lg">
                        <Link href="/" className=' mt-6 uppercase pr-1 hover:underline' style={{ color: "#005BBB" }}>home</Link><span>|</span>
                        <a className='pl-1 mt-6 uppercase pr-1 hover:underline' onClick={githubPage} style={{ color: "#005BBB" }}>github</a><span>|</span>
                        <a className='pl-1 mt-6 uppercase pr-1 hover:underline' onClick={linkedInPage} style={{ color: "#005BBB" }}>linkedin</a>
                        {/* <Link href="playlist" className='pl-1 mt-6 uppercase pr-1 hover:underline' style={{ color: "#005BBB" }}>playlist</Link> */}
                    </div>
                    <a className='hidden mt-5 w-32 block md:ml-24 button text-center rounded-lg left-1.5 absolute'>Randomize</a>
                </div>

                <div className={`w-6/12 mt-20 md:mt-60  grid place-content-center ${hidden} no-display`}>
                    <Image
                        src={image}
                        width={1000}
                        height={1000}
                        className='image'
                    />
                    {
                        (image.includes("rmap")) ?
                            <div className='p-5 text-center'>Tech Stacks: Rust, HTMX, Javascript, D3.js, and Web Assembly</div> :
                            <div className='p-5 text-center '>Tech Stacks: Rust, Leptos, Web Assembly, TailwindCSS </div>
                    }
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
