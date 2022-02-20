import styles from "../public/styles/design.module.css";
import gov from "../public/styles/main.module.css";
import Intro from "../components/Intro";
import Layout from "../components/Layout";
import meta from "../utils/meta";
import Link from 'next/link'
import {useEffect} from 'react'

const pages = meta.pages
const title = `${pages.projects.title}`;
const dg = styles.dg;

export async function getStaticProps() {
    const user = process.env.USER
    const token = process.env.TOKEN

    const creds = `${user}:${token}`;

    const options = {
        mode: 'cors',
        headers: {
            'Authorization' : 'Basic ' + creds
        }
    }
    const res = await fetch("https://api.github.com/users/daveyeb/repos", options);
    const repos = await res.json();
    return {
        props: {
            repos,
        }
    };
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}


export default function Projects({ repos }) {

    useEffect(()=>{
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
          ga('create', 'UA-176178393-1', 'auto');
          ga('send', 'pageview');
      },[])


    return (
        <>
            <Layout creator={meta.creator} title={title} pages={pages} mt={3}>

                <div className={`${styles['row']} __pt __100vh`}>
                    <div className={`${styles['col-md-7']} ${styles['col-lg-5']} __pt ${styles['flow']} __center `}>
                        <div className="">
                            <h1>
                                Projects
                            </h1>
                        </div>

                        <div className={`${gov['govuk-inset-text']} __inset`}>
                            Outcomes of utilizing free time and experimenting with various languages and technology stacks
                        </div>


                        <div className={`${styles['flow']} ${styles['col-offset-']}`}>
                            {

                                repos.map((repo, i) => {
                                    return   (
                                        <>

                                            <div className={`${styles['flow']} __container __width60`} key={i}>
                                                <h2 >{repo.name}</h2>
                                                <strong  className={`${gov['govuk-tag']} strong ${gov['govuk-phase-banner__content__tag']}`}>
                                                    { repo.topics[0] }
                                                </strong>
                                                <p className={`__container`}>
                                                    {repo.description}
                                                </p>
                                                <div>
                                                    <a href={repo.html_url}  target="_blank" rel="noreferrer" className={`${gov['app-copy-button']} ${gov["govuk-link--no-visited-state"]}`} aria-live="assertive">Source code</a>
                                                </div>
                                            </div>

                                        </>
                                    ) 
                                })
                            }
                        </div>

                    </div>
                </div>

                <style jsx>
                    {`
            
                
                .strong {
                    // font-family: "BDR Mono" !important;
                    font-size: var(--fs-200);
                    font-weight: normal !important;
                }

                @media only screen and (max-width: 48em) {
                    .image {
             
                    }
                }

                .__pt {
                    margin-top: 2em ; 
                  }

                  @media only screen and (min-width: 48em) {
                    .__pt {
                      margin-top: 0;
                    }
                  }

                .__100vh {
                    height: 100vh;
                }

                .__center {
                    margin: 0 auto;
                }

                a {
                    color: #292929 !important;
                }

                .p0 {
                    padding: 0px !important;
                    border-bottom: 1px solid #000 !important; 
                }

                .__container{
                    padding: 20px;
                    border: 1px solid #b1b4b6;
                    background-color: #fff;
                    
                }

                .__width60 {
                    max-width: 100%;
                }

                h1 {
                    font-family: "Varela Round", sans-serif;
                    font-size: var(--fs-700);
                    font-weight: 400;
                }

                .__inset {
                    max-width: 60%;
                }

                @media only screen and (max-width: 48em) {
                    .__inset {
                        max-width: 100%;
                    }

                    .__width60 {
                        max-width: 100%;
                    }
                  }

                h2 {
                    font-family: "Varela Round", sans-serif;
                    font-size: var(--fs-500);
                    font-weight: 400;
                }

                
                `}
                </style>


            </Layout>
        </>
    );
}
