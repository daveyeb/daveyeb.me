import React from 'react'

const GlobalStyles = () => (
    <style global jsx>
        {`
        
        // dev 
        * {
            // border: 1px solid #232421;
        }

        :root {
            
        }

        @font-face {
            font-display: fallback;
            font-family: "GT-Pressura-Pro-Mono-Light";
            font-style: normal;
            font-weight: 300;
            src: url("/font/GT-Pressura-Pro-Mono-Light.woff2") format("woff2");
        }
        
        @font-face {
            font-display: fallback;
            font-family: "GT-Pressura-Pro-Mono-Regular";
            font-style: normal;
            font-weight: normal;
            src: url("/font/GT-Pressura-Pro-Mono-Regular.woff2") format("woff2");
        }

        sup {
            vertical-align: top;
            position: relative;
            top: -0.5em;
            color: #505a5f;
        }

        .noise {
            width: 100%;
            height: 100%;
            position: fixed;
            left: 0;
            top: 0;
            pointer-events: none;
            z-index: -1;
            filter: brightness(.1);
            filter: contrast(-700%);
          }
          
          .noise:after {
            content: "";
            width: calc(100% + 20rem);
            height: calc(100% + 20rem);
            background-image: url('/image/noise.png');
            background-position: 50%;
            position: absolute;
            left: -10rem;
            top: -10rem;
            will-change: transform;
            -webkit-animation: noise 1s steps(2) infinite;
            animation: noise 1s steps(2) infinite
          }
          
          @-webkit-keyframes noise {
            0% {
              transform: translate3d(0, 9rem, 0)
            }
            10% {
              transform: translate3d(-1rem, -4rem, 0)
            }
            20% {
              transform: translate3d(-8rem, 2rem, 0)
            }
            30% {
              transform: translate3d(9rem, -9rem, 0)
            }
            40% {
              transform: translate3d(-2rem, 7rem, 0)
            }
            50% {
              transform: translate3d(-9rem, -4rem, 0)
            }
            60% {
              transform: translate3d(2rem, 6rem, 0)
            }
            70% {
              transform: translate3d(7rem, -8rem, 0)
            }
            80% {
              transform: translate3d(-9rem, 1rem, 0)
            }
            90% {
              transform: translate3d(6rem, -5rem, 0)
            }
            to {
              transform: translate3d(-7rem, 0, 0)
            }
          }
          
          @keyframes noise {
            0% {
              transform: translate3d(0, 9rem, 0)
            }
            10% {
              transform: translate3d(-1rem, -4rem, 0)
            }
            20% {
              transform: translate3d(-8rem, 2rem, 0)
            }
            30% {
              transform: translate3d(9rem, -9rem, 0)
            }
            40% {
              transform: translate3d(-2rem, 7rem, 0)
            }
            50% {
              transform: translate3d(-9rem, -4rem, 0)
            }
            60% {
              transform: translate3d(2rem, 6rem, 0)
            }
            70% {
              transform: translate3d(7rem, -8rem, 0)
            }
            80% {
              transform: translate3d(-9rem, 1rem, 0)
            }
            90% {
              transform: translate3d(6rem, -5rem, 0)
            }
            to {
              transform: translate3d(-7rem, 0, 0)
            }
          }

        
        `}
    </style>
)


export default GlobalStyles;