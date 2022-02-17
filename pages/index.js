import Head from '../components/Head'
import Main from '../components/Main'
import Image from 'next/image'

const headProp = {
  title: 'David Yeböah, Engineer',
  desc: 'Over two years of software development (Front + Back) experience with an intense eagerness to improve'
}

const navProps = {pages:
    [{
        name: 'Home',
        link: '/',
        num: 1
    },
    {
        name: 'Projects',
        link: '/projects',
        num: 2
    },
    {
        name: 'Blog',
        link: '/blog',
        num: 3
    },
    {
        name: 'Playlists',
        link: '/playlists',
        num: 4
    }]}


export default function Home() {
  return (
    <div>
      <Head {...headProp} >
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main {...navProps}>
      <div className=' row middle-xs tall main'>
            <p className='col-xs-4 mt2 '>
                <div className="status">live</div>
                <h1 className='greet'>Hola I&apos;m David</h1>
                <ul className='intro list'>
                    <li className=''>Software Engineer primarily based in Raleigh</li>
                    <li className=''>Providing tooling to internal brokers to help deal with potential profit & losses</li>
                    <li className=''>Grad student at Unversity of Southern California</li>
                    <li className=''>Engineer at Deutsche Bank</li>
                </ul>
            </p>
            <div className='col-xs-8 photo bottom-xs center-xs'>
                <Image src="/IMG_0146.JPG" alt="Can your eyebrows do this?" width={772} height={506.5} priority={true}/>
            </div>
        </div>
        <style jsx>
            {`
                div {
                    font-family: 'GTMaru' !important;
                }

                .main {
                    height: 100vh;
                    padding-left: 10% !important;
                }

                .status {
                    color: #d0021b;
                    font-family: 'srrqzbab' !important;
                }
                
                .greet {
                    font-size: 10.375vw;
	                letter-spacing: 28%;
	                line-height: 120%;
                }

                @media (min-width: 48em) {
                    .greet {
                        font-size: 3.1875vw
                    }
                }

                img {
                    position: relative;
                    margin: 0 auto;  
                    border-radius: 1.5%;
                    border-bottom-left-radius:  11%;
                    border-top-left-radius: 11%;
                    padding-left: 10%;
                    filter: grayscale(100%) !important;
                }

                .photo {
                    padding-right: 10%;
                }
                
                @media (min-width: 62em) {
                    .greet {
                        font-size: 2.32vw
                    }
                }

                .intro {
                    font-size: 17.6px;
                    line-height: 137.5%;
                    line-height: 140%;
                }
                
                @media (min-width: 62em) {
                    .intro {
                        font-size: 15px
                    }
                }
                
                @media (min-width: 75em) {
                    .intro {
                        font-size: 1.2vw
                    }
                }
                
                @media (min-width: 100em) {
                    .intro {
                        font-size: 20px
                    }
                }

                ul {
                    list-style: none;
                }

                li {
                    margin-bottom: 0.8rem
                }

                .list li::before {
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    left: -8px;
                    top: 14px;
                    content: '';
                    display: block;
                    background: #666;
                    position: relative;
                }

                @media (min-width: 48em) {
                    .list li::before {
                        top: 14px;
                    }
                }

                @media (min-width: 62em) {
                    .list li::before {
                        top: 15px;
                    }
                }

                @media (min-width: 89em) {
                    .list li::before {
                        top: 16px;
                    }
                }

                @media (min-width: 89em) {
                    .list li::before {
                        top: 16px;
                    }
                }

                @media (min-width: 100em) {
                    .list li::before {
                        top: 19.5px;
                    }
                }

            `}
        </style>
      </Main>


    </div>
  )
}
