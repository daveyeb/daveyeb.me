import styles from "../public/styles/design.module.css";
import Layout from "../components/Layout";
import meta from "../utils/meta";
import Intro from "../components/Intro";


const pages = meta.pages
const title = `${pages.home.title}`;
const dg = styles.dg;

export default function Home() {
  return (
    <>
      <Layout creator={meta.creator} title={title} pages={pages} mt={3}>
        <Intro/>
      </Layout>
    </>
  );
}
