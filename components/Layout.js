import React from "react";
// eslint-disable-next-line node/no-unpublished-import
import cxs from "cxs/component";

import Header from "./Header";
import Footer from "./Footer";
import Head from "./Head";
import GlobalStyles from "./GlobalStyles";

const Noise = cxs("div")({});
const Container = cxs("main")({});
const Content = cxs("div")({});

const Layout = ({ title, description, image, page, children }) => {
  return (
    <>
      <Noise className={"noise"}/>
      <Head title={title} description={description} image={image}/>
      <Header page={page}/>
      <Container>
        <Content>{children}</Content> 
        <GlobalStyles/>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
