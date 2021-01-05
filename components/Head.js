import { default as NextHead } from 'next/head'

const Head = ({title, description, img}) => {
    return (
    
    <NextHead>
        <title>{title}</title>
        <meta charSet="utf-8" />

        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={title} name="title" />
        <meta content={description} name="description" />
        <meta content={title} property="og:title" />
        <meta content={img} property="og:image" />
        <meta content={img} property="og:image:secure_url" />
        <meta content={description} property="og:description" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="en" property="og:locale" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={img} name="twitter:image" />

        <link href="/images/favicon.png" rel="shortcut icon" />
        <link rel="stylesheet" href="https://use.typekit.net/jlh4gie.css"></link>
    </NextHead>
    
    );

};

export default Head