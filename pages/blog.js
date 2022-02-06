import Layout from "./components/Layout";
import pages from "./meta";

export default function Blog() {
  return (
    <Layout title={pages.blog.name}>
      <WidthContainer>
        <BackLink>Back</BackLink>

        <Main type="main">
          <GRow>
            <GridCols size="full" desktop="half">
              <Heading size="xl">Two-thirds column</Heading>
              <p className={styles["govuk-body"]}>
                This is a paragraph inside a two-thirds wide column
              </p>
            </GridCols>
          </GRow>
        </Main>
      </WidthContainer>
    </Layout>
  );
}
