import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { H1, H2, P, A, Break } from "../components/design";
import { Container, Content } from "../components/Projects";

const Projects = () => {
  const Router = useRouter();

  useEffect(() => {
    if (Router.pathname == "/projects") {
      Router.push("/404");
    }
  });

  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"Personal Projects of David Yeboah | daveyeb.com"}
        image={"/"}
        page={Projects.name.toUpperCase()}
      >
        <Container>
          <Content>
            {/* <H2>Projects</H2>
            <Break />
            <Break />
            <P style={{ color: "#555555" }}>
              node-enigma is a Node.js module to cipher and decipher messages.
              This module is intended to imitate the operation of the Enigma
              M3/M4 developed during the WWII. This is a one of first
              independent projects I worked during my undergrad.
            </P> */}
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
