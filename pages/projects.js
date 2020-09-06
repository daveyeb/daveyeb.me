import React from "react";

import Layout from "../components/Layout";
import { H1, H2, P, A, Break } from "../components/design";
import { Container, Content } from "../components/Projects";

const Projects = () => {
  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"emmanuel is not 808"}
        image={"/"}
        page={Projects.name.toUpperCase()}
      >
        <Container>
          <Content>
            <H2>Projects</H2>
            <Break />
            <Break />
            <P style={{ color: "#555555" }}>
              node-enigma is a Node.js module to cipher and decipher messages.
              This module is intended to imitate the operation of the Enigma
              M3/M4 developed during the WWII. This is a one of first
              independent projects I worked during my undergrad.
            </P>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default Projects;
