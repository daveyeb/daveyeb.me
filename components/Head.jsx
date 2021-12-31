import {
    default as NHead
} from 'next/head'

const Head = ({ title, desc }) => (
    <NHead>
        <title>
            {title}
        </title>

        <meta charSet="utf-8" />

        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={title} name="title" />
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
        <meta content={desc} name="description" />
        <meta content={desc} property="og:description" />
        <meta content={desc} name="twitter:description" />
        <meta content="en" property="og:locale" />


        <link rel="stylesheet" href="https://use.typekit.net/jlh4gie.css"></link>

    </NHead>
);

export default Head;