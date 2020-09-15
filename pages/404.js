import React from "react";

import Layout from "../components/Layout";
import { Container, Content } from "../components/Blog";

import { colOffset, padding } from "../components/design/Styles";

const NotFound = () => {
  return (
    <>
      <Layout
        title={"david yeboah | scientist"}
        description={"404 | daveyeb.com"}
        image={"/"}
        page="404"
      >
        <Container>
          <Content>
            <div className={"div-404"}>
              <h1
                style={{
                  display: "inline-block",
                  borderRight: "1px solid rgba(0, 0, 0,.3)",
                  margin: "0",
                  marginRight: "20px",
                  padding: "10px 23px 10px 0",
                  fontSize: "24px",
                  fontWeight: "500",
                  verticalAlign: "top",
                }}
              >
                404
              </h1>
              <div
                style={{
                  display: "inline-block",
                  textAlign: "left",
                  lineHeight: "49px",
                  height: "49px",
                  verticalAlign: "middle",
                }}
              >
                <h2
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    lineHeight: "inherit",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  Work in progress.
                </h2>
              </div>
              <style jsx>{`
                body {
                  margin: 0;
                }

                .div-404 {
                  padding-top: 200px;
                  margin-left: 16.6667%;
                  padding-bottom: 320px;
                }

                @media screen and (min-width: 62em) {
                  .div-404 {
                    padding-top: 184px;
                    margin-left: 33.3333%;
                  }
                }
              `}</style>
            </div>
          </Content>
        </Container>
      </Layout>
    </>
  );
};

export default NotFound;
