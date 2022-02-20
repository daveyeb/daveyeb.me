import styles from "../public/styles/design.module.css";
import Layout from "../components/Layout";
import meta from "../utils/meta";
import gov from "../public/styles/main.module.css";


const pages = meta.pages
const title = `${pages.blog.title}`;
const dg = styles.dg;


export default function Blog() {
  return (
    <>
      <Layout creator={meta.creator} title={title} pages={pages} mt={3}>
        <div className={`${styles['row']} __pt  __100vh`}>
          <div className={`${styles['col-md-7']} ${styles['col-lg-5']} ${styles['flow']} __pt __center `}>
            <h1>
              Blog
            </h1>

            <div className={`${gov['govuk-inset-text']} __inset`}>
              Writings about personal interests and tutorials
            </div>

            <div className={`${styles['center-xs']} ${styles['pt10']} ${styles['mt10']}`}>

            <iframe src="https://giphy.com/embed/Wn0Lj9phmxne7atJsM" width="200" height="200" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/sunday-tinymckittens-sundyfunday-Wn0Lj9phmxne7atJsM">via GIPHY</a></p>
            </div>


          </div>
        </div>

        <style jsx>
          {`
            

            .__pt {
              margin-top: 2em ; 
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

                .__container{
                    padding: 20px;
                    border: 1px solid #b1b4b6;
                    background-color: #fff;
                    
                }

                .__width60 {
                    max-width: 80%;
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
