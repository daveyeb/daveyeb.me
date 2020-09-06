import React from "react";

import Layout from "../components/Layout";
import { H1, H2, P, A, Break } from "../components/design";
import { Container, Content } from "../components/About";

const About = () => {
  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"emmanuel is not 808"}
        image={"/"}
        page={About.name.toUpperCase()}
      >
        <Container>
          <Content>
            <H2>About</H2>
            <Break />
            <Break />
            <P style={{ color: "#555555" }}>
              {" "}
              I am, David, an associate software engineer at Northrop Grumman
              and a recent graduate at Oswego State University in Oswego, NY. I
              am exceptionally determined as a software engineer, and attempt to
              compose profoundly meaningful, clean and effective code.
            </P>
            <Break />
            <P style={{ color: "#555555" }}>
              My passion lies at the intersection of cryptography, artificial
              intelligence + machine learning, computer vision, data
              visualization and some ocassional problem solving tools i
              fabricate in my head. When I’m not creating journey maps and
              prototypes, I’m building helpful resources or writing about design
              and development. I’m currently building and maintaining to improve
              the JSTARS software that inhabits on a E-8C Boeing commerical
              plane.
            </P>
            <Break />
            <P style={{ color: "#555555" }}>
              Dont hesitate to connect with me on{" "}
              <A
                href="https://www.linkedin.com/in/daveyeb/"
                style={{ fontFamily: "GT-Pressura-Pro-Mono-Regular" }}
              >
                LinkedIn
              </A>
              , check out some of my work on{" "}
              <A
                href="https://github.com/daveyeb"
                style={{ fontFamily: "GT-Pressura-Pro-Mono-Regular" }}
              >
                Github
              </A>
              , give glance at my{" "}
              <A
                href="https://github.com/daveyeb/daveyeb.com"
                style={{ fontFamily: "GT-Pressura-Pro-Mono-Regular" }}
              >
                resume.
              </A>
            </P>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default About;
