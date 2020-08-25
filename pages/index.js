import React from "react";

import Layout from "../components/Layout"
import { Container, Content, LineDrawing, Directive, Image} from "../components/Home"
import {H1, P, A, Break} from "../components/design"

const Home = () => {
  return (
    <>
      <Layout title={"david yeboah | scientist"} description={"emmanuel is not 808"} image={"/"} page={Home.name.toUpperCase()}>
        <Container>
          <Content>
            <H1>David Yeboah</H1>
            <P>is a SWE currently based in Melbourne -- building and maintaining software systems that inhabit E-8C JSTARS. Ex-CS student from Oswego State, engineer at Northrop Grumman.</P>
            <Directive>Take a look around.</Directive>
            <Break/>
            <Break/>
            <A href="/">MORE INFO &#10154;</A>
          </Content>
          <LineDrawing>
            <Image/>
          </LineDrawing>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
