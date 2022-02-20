// import Footer from "./Footer";
import Head from "next/head";
import Main from "./Main";
import Nav from "./Nav";
import ss from "../utils/ss"; // styled system

const Layout = ({ creator, title, pages, children }) => {
  return (
    <>
      <Head>
        <title>{`${creator} ${title}`}</title>
        <script src="/js/application-cdb5c05bd651c83d24aee0e46f326eb6.js"></script>
        <script src="/js/govuk-frontend-569db0887026b768c0bcbb8fb2e92cee.js"></script>
      </Head>

      <Main>
        <Nav p={3} active={title} pages={pages}/>
        {children}
      </Main>
      {/* <Footer/> */}
    </>
  );
};

export default ss(Layout);
