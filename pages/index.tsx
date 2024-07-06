import { Inter } from "next/font/google";
import Link from "next/link";
import Voxid from "@/components/Voxid";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>david yeböah , swe | index</title>
      </Head>
      <main className="flex flex-col min-h-screen nudicaregular items-center w-12/12 justify-center text-xl">
        <div className=" w-8/12 flex-col flex md:flex-row gap-x-9">
          <div className="w-12/12  md:w-6/12">
            <h1
              className={`hcolor capitalize font-bold grid grid-cols-1 text-4xl sawton_bauhausmedium`}
            >
              <span className="">Hello,</span>
              <span>i&apos;m</span>
              <span>david</span>
            </h1>
            <p className="mt-3 font-thin">
              I am a software developer based in New York with a passion for
              building scalable frontend and backend systems that have a
              real-world impact.
            </p>

            <ul className="flex text-center py-4 lg:text-left flex-row w-full mt-6 text-xl">
              <li className="group rounded-lg border border-transparent ">
                <div className=" transition-transform w-12/12 group-hover:translate-y-1 motion-uce:transform-none">
                  <Link href={"/projects"}>
                    <h2 className="font-semibold hcolor sawton_bauhausmedium lowercase mb-3 text-2xl">
                      <span>projects</span>{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-uce:transform-none">
                        📽️
                      </span>
                    </h2>
                    <p className="text-sm font-thin max-w-[30ch] w-3/4 pr-3 m-0">
                      Explore my side projects with detailed information.
                    </p>
                  </Link>
                </div>
              </li>

              <li className="group rounded-lg border border-transparent ">
                <div className=" transition-transform w-12/12 group-hover:translate-y-1 motion-uce:transform-none">
                  <Link href={"/about"}>
                    <h2 className="font-semibold hcolor sawton_bauhausmedium lowercase mb-3 text-2xl">
                      <span>about</span>{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-uce:transform-none">
                        👨🏾‍💻
                      </span>
                    </h2>
                    <p className="text-sm font-thin max-w-[30ch] w-3/4 pr-3 m-0">
                      Learn about me, skillsets and experience.
                    </p>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-6/12  fledx border-dotted float-right">
            <Voxid></Voxid>
          </div>
        </div>
        <Analytics />
      </main>
    </>
  );
}
