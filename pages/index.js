import styles from "../public/styles/design.module.css";
import Layout from "../components/Layout";
import meta from "../utils/meta";
import Intro from "../components/Intro";
import {useEffect} from 'react'


const pages = meta.pages
const title = `${pages.home.title}`;
const dg = styles.dg;

export default function Home() {

  useEffect(()=>{
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-176178393-1', 'auto');
      ga('send', 'pageview');
  },[])

  return (
    <>
      <Layout creator={meta.creator} title={title} pages={pages} mt={3}>
        <Intro/>
      </Layout>
    </>
  );
}
