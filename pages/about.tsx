import { Inter } from "next/font/google";
import Link from "next/link";
import Voxid from "@/components/Voxid";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>david yeböah , swe | about</title>
      </Head>
      <Nav />
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

            <p className="mt-6 font-thin">
              I have a strong motivation for learning and excelling in emerging
              technologies. Equally, I thrive on sharing what I&apos;ve learned
              and collaborating with other engineers who believe in the art of
              coding and enjoy building cool things.
            </p>

            <p className="col-span-1 font-thin mt-6">
              When I&apos;m not progamming, I am traveling, taking photos, and
              exploring new ideas.
            </p>
          </div>
          <div className="w-6/12 fledx border-dotted float-right">
            <Voxid></Voxid>
          </div>
        </div>
        <div className="w-8/12 mt-6 font-thin">
          <div className="w-full text-center flex justify-center">
            <div className="text-xl w-6/6 mt-6 ">
              <p>
                <span className="text-sm px-2 ncolor dark:opacity-70">
                  place of birth
                </span>
                <span className="">Born in Udine, Italy.</span>
                <span className="text-sm px-2 ncolor dark:opacity-70">
                  education
                </span>{" "}
                <span className="">
                  SUNY Oswego. Bachelors in Computer Science, Minors in
                  Mathematics and Information Science.
                </span>{" "}
                <span className="text-sm px-2 ncolor dark:opacity-70">
                  formerly at
                </span>{" "}
                <span className="">Northrop Grumman, Deutsche Bank, IBM.</span>
                <span className="text-sm px-2 ncolor dark:opacity-70">
                  currently
                </span>{" "}
                <span className="">Working as a freelancer.</span>
              </p>
              <p className="flex  text-center justify-center p-1">
                <span className="text-sm px-2 ncolor dark:opacity-70 pt-1.5">
                  on the web
                </span>{" "}
                <span className="hcolor flex inline lowercase">
                  <Link href={"https://github.com/daveyeb"} target="_blank">
                    <span className="pr-2 otwlink flex">Github</span>
                  </Link>{" "}
                  <Link href="mailto:daveyeb@gmail.com">
                    <span className="pr-2 otwlink flex">Email </span>
                  </Link>{" "}
                  <Link
                    href={"https://www.linkedin.com/in/daveyeb"}
                    target="_blank"
                  >
                    <span className="pr-2 otwlink flex">linkedin</span>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <Analytics />
      </main>
    </>
  );
}
