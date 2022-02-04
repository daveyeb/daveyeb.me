import Footer from './Footer'
import Head from 'next/head'
import Main from './Main'
import Nav from './Nav'

const Layout = ({title, children}) => {
    return  (
        <>
            <Head>
                <title>{title}</title>
                <link rel="stylesheet" href="/govuk/main.css" />
                <script src='/govuk/application-cdb5c05bd651c83d24aee0e46f326eb6.js'></script>
                <script src='/govuk/govuk-frontend-569db0887026b768c0bcbb8fb2e92cee.js'></script>
            </Head>
            
            <Nav></Nav>
                <Main>{children}</Main>
            <Footer></Footer>
        </>
    )
}

export default Layout 