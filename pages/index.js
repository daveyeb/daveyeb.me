import React from "react";

import Layout from "../components/Layout";
import {
  Container,
  Content,
  LineDrawing,
  Directive,
  Portrait,
} from "../components/Home";
import { H1, P, A, Break } from "../components/design";

const Home = () => {
  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"emmanuel is not 808"}
        image={"/"}
        page={Home.name.toUpperCase()}
      >
        <Container>
          <Content>
            <H1>David Yeboah</H1>
            <Break />
            <P style={{ color: "#555555" }}>
              SWE currently based in Melbourne ─ building and maintaining
              software systems that inhabit E-8C JSTARS. Ex-CS student from
              Oswego State, engineer at Northrop Grumman.
            </P>
            <Directive
              style={{
                color: "#555555",
                fontFamily: "GT-Pressura-Pro-Mono-Regular",
                fontSize: "1em",
                lineHeight: "1.5rem",
              }}
            >
              Take a look around.
            </Directive>
            <Break />
            <Break />
            <A href="/about">MORE INFO &#10154;</A>
          </Content>
          <LineDrawing>
            <Portrait />
          </LineDrawing>
        </Container>
      </Layout>
    </>
  );
};

export default Home;
