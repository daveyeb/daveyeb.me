import Layout from "./components/Layout";
import pages from "./components/utils/meta";
import Col from "./components/design/Col";
import Heading from "./components/design/Heading";
import me from "../public/IMG_0146.JPG";
import Image from "next/dist/client/image";

export default function Home() {
  return (
    <Layout title={pages.home.name}>
      {/* <button className={styles['govuk-button']}>
                Save and continue
            </button> */}

      <Col gcol={"twothird"} ml={700} bg={"tomato"}>
        <Image src={me}></Image>
      </Col>

      {/* <Cols
        gcol={"onethird"}
        bg={"white"}
        mt={200}
        ml={200}
        height={400}
        className={"border"}
      >
        <div className="bd">
          <Heading size="m">Hola its David</Heading>
        </div>
      </Cols> */}

      <style jsx>
        {`
          .red {
            border: 1px solid red !important;
          }

          .intro {
            position: absolute;
          }
        `}
      </style>
    </Layout>
  );
}
