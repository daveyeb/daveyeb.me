import styles from "../public/styles/design.module.css";
import Layout from "../components/Layout";
import gov from "../public/styles/main.module.css";
import meta from "../utils/meta";
import { useEffect, useState} from 'react'


const pages = meta.pages
const title = `${pages.playlists.title}`;
const dg = styles.dg;


export default function Playlists() {
  useEffect(() => {
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-176178393-1', 'auto');
    ga('send', 'pageview');

  }, [])

  return (
    <>
      <Layout creator={meta.creator} title={title} pages={pages} mt={3}>
        <div className={`__pt  ${styles['___mobilePages']} ${styles['row']} __100vh`}>
          <div className={`${styles['col-md-7']} ${styles['col-lg-5']} ${styles['flow']} __center `}>
            <h1>
              Playlists
            </h1>

            <div className={`${gov['govuk-inset-text']} __inset`}>
              Some tunes for the ones that enjoy music
            </div>


            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1EpezFalzCZ2Rl?utm_source=generator&theme=0" width="100%" height="600" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>

          </div>
        </div>

        <style jsx>
          {`
            
              .__pt {
                margin-top: 2em; 
              }

              .__lr {
                  padding-right: 7vw;
                  padding-left: 7vw;
              }

              @media only screen and (min-width: 48em) {
                .__pt {
                  margin-top: 0;
                }
              }
                
                .strong {
                    // font-family: "BDR Mono" !important;
                    font-size: var(--fs-200);
                    font-weight: normal !important;
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

                // button {
                //     height: 50vh !important; 
                //     width: 50vh !important; 
                // }

                .__container{
                    padding: 20px;
                    border: 1px solid #b1b4b6;
                    background-color: #fff;
                    
                }

                .__width60 {
                    max-width: 80%;
                }

                // iframe {
                //   border-radius:12px
                // }

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
