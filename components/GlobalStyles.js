import React from "react";

const GlobalStyles = () => (
  <style global jsx>
    {`
      html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        color: #333;
        background-color: #f5f5f5;
      }

      body {
        margin: 0;
      }

      main {
        display: block;
      }

      h1 {
        font-size: 2em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-block-end: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
      }

      h2 {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-block-end: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
      }

      /* Grouping content
   ========================================================================== */

      /**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

      hr {
        box-sizing: content-box; /* 1 */
        height: 0; /* 1 */
        overflow: visible; /* 2 */
      }

      pre {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      /* Text-level semantics
   ========================================================================== */

      /**
 * Remove the gray background on active links in IE 10.
 */

      a {
        background-color: transparent;
      }

      /**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

      abbr[title] {
        border-bottom: none; /* 1 */
        text-decoration: underline; /* 2 */
        text-decoration: underline dotted; /* 2 */
      }

      b,
      strong {
        font-weight: bolder;
      }

      code,
      kbd,
      samp {
        font-family: monospace, monospace; /* 1 */
        font-size: 1em; /* 2 */
      }

      /**
 * Add the correct font size in all browsers.
 */

      small {
        font-size: 80%;
      }

      /* Embedded content
   ========================================================================== */

      img {
        border-style: none;
      }

      /* Forms
   ========================================================================== */

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit; /* 1 */
        font-size: 100%; /* 1 */
        line-height: 1.15; /* 1 */
        margin: 0; /* 2 */
      }

      button,
      input {
        /* 1 */
        overflow: visible;
      }

      button,
      select {
        /* 1 */
        text-transform: none;
      }

      button,
      [type="button"],
      [type="reset"],
      [type="submit"] {
        -webkit-appearance: button;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      button:-moz-focusring,
      [type="button"]:-moz-focusring,
      [type="reset"]:-moz-focusring,
      [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box; /* 1 */
        color: inherit; /* 2 */
        display: table; /* 1 */
        max-width: 100%; /* 1 */
        padding: 0; /* 3 */
        white-space: normal; /* 1 */
      }

      /**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

      progress {
        vertical-align: baseline;
      }

      /**
 * Remove the default vertical scrollbar in IE 10+.
 */

      textarea {
        overflow: auto;
      }

      /**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box; /* 1 */
        padding: 0; /* 2 */
      }

      /**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        height: auto;
      }

      /**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

      [type="search"] {
        -webkit-appearance: textfield; /* 1 */
        outline-offset: -2px; /* 2 */
      }

      /**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* 1 */
        font: inherit; /* 2 */
      }

      /* Interactive
   ========================================================================== */

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      /* Misc
   ========================================================================== */

      template {
        display: none;
      }

      [hidden] {
        display: none;
      }

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

      @font-face {
        font-display: fallback;
        font-family: "GT-Cinetype-Regular";
        font-style: normal;
        font-weight: normal;
        src: url("/font/GT-Cinetype-Regular-Trial.otf") format("woff2");
      }

      @font-face {
        font-display: fallback;
        font-family: "Signifier-Regular";
        font-style: normal;
        font-weight: normal;
        src: url("/font/signifier-test-regular.woff") format("woff");
      }

      @font-face {
        font-display: fallback;
        font-family: "Signifier-Thin";
        font-style: normal;
        font-weight: normal;
        src: url("/font/signifier-test-thin.woff") format("woff");
      }

      @font-face {
        font-display: fallback;
        font-family: "Signifier-Extralight";
        font-style: normal;
        font-weight: normal;
        src: url("/font/signifier-test-extralight.woff") format("woff");
      }

      @font-face {
        font-display: fallback;
        font-family: "Maelstrom-Sans-Bold";
        font-style: normal;
        font-weight: normal;
        src: url("/font/maelstrom-sans-test-bold.woff") format("woff");
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
      }

      .noise:after {
        content: "";
        width: calc(100% + 20rem);
        height: calc(100% + 20rem);
        background-image: url("/image/noise.png");
        background-position: 50%;
        position: absolute;
        left: -10rem;
        top: -10rem;
        will-change: transform;
        -webkit-animation: noise 1s steps(2) infinite;
        animation: noise 1s steps(2) infinite;
      }

      @-webkit-keyframes noise {
        0% {
          transform: translate3d(0, 9rem, 0);
        }
        10% {
          transform: translate3d(-1rem, -4rem, 0);
        }
        20% {
          transform: translate3d(-8rem, 2rem, 0);
        }
        30% {
          transform: translate3d(9rem, -9rem, 0);
        }
        40% {
          transform: translate3d(-2rem, 7rem, 0);
        }
        50% {
          transform: translate3d(-9rem, -4rem, 0);
        }
        60% {
          transform: translate3d(2rem, 6rem, 0);
        }
        70% {
          transform: translate3d(7rem, -8rem, 0);
        }
        80% {
          transform: translate3d(-9rem, 1rem, 0);
        }
        90% {
          transform: translate3d(6rem, -5rem, 0);
        }
        to {
          transform: translate3d(-7rem, 0, 0);
        }
      }

      @keyframes noise {
        0% {
          transform: translate3d(0, 9rem, 0);
        }
        10% {
          transform: translate3d(-1rem, -4rem, 0);
        }
        20% {
          transform: translate3d(-8rem, 2rem, 0);
        }
        30% {
          transform: translate3d(9rem, -9rem, 0);
        }
        40% {
          transform: translate3d(-2rem, 7rem, 0);
        }
        50% {
          transform: translate3d(-9rem, -4rem, 0);
        }
        60% {
          transform: translate3d(2rem, 6rem, 0);
        }
        70% {
          transform: translate3d(7rem, -8rem, 0);
        }
        80% {
          transform: translate3d(-9rem, 1rem, 0);
        }
        90% {
          transform: translate3d(6rem, -5rem, 0);
        }
        to {
          transform: translate3d(-7rem, 0, 0);
        }
      }
    `}
  </style>
);

export default GlobalStyles;
