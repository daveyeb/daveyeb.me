import React from "react";

import Layout from "../components/Layout";
import { H2, H1, P, A, Break } from "../components/design";
import { Container, Content } from "../components/Blog";

const Blog = () => {
  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"emmanuel is not 808"}
        image={"/"}
        page={Blog.name.toUpperCase()}
      >
        <Container>
          <Content>
            <H2>Blog</H2>
            <Break />
            <Break />
            <P style={{ color: "#555555" }}> Currently in writing</P>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;
