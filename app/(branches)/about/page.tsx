import Image from "next/image";
import Link from "next/link";

import { Comfortaa } from "next/font/google";
import Me from "@/app/components/Me";
import { GoLinkExternal } from "react-icons/go";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function About() {
  return (
    <main className="flex  font-thin flex-row min-h-screen  pt-24 flex-row w-7/12 justify-center text-xl">
      <div className=" w-12/12 flex flex-col md:flex-col  justify-center">
        <div className="flex-col flex md:flex-row gap-x-9">
          <div className="w-6/12 md:w-6/12  flex flex-col justify-betsween">
            <h1
              className={`hcolor capitalize font-bold grid grid-cols-1 text-4xl sawton_bauhausmedium`}
            >
              <span className="">Hello,</span>
              <span>i&apos;m</span>
              <span>david</span>
            </h1>
            <p className=" mt-3 ">
              I am a software developer based in New York with a passion for
              building scalable frontend and backend systems that have a
              real-world impact.
            </p>
            <p className=" mt-6">
              I have a strong motivation for learning and excelling in emerging
              technologies. Equally, I thrive on sharing what I&apos;ve learned and
              collaborating with other engineers who believe in the art of
              coding and enjoy building cool things.
            </p>

            <p className="col-span-1 text-xl mt-6">
              When I&apos;m not progamming, I am traveling, taking photos, and
              exploring new ideas.
            </p>
          </div>
          <div className="w-6/12  absdolute float-rigsht flex flex-col items-center ">
            <p className="text-xl ">
              I find myself working extensively with Python, JavaScript, and
              Rust in my day-to-day programming activities.
            </p>
            <Me />
          </div>
        </div>

        <div className="">
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
                  State University of New York at Oswego. Bachelors in Computer
                  Science, Minors in Mathematics and Information Science.
                </span>{" "}
                <span className="text-sm px-2 ncolor dark:opacity-70">
                  formerly at
                </span>{" "}
                <span className="">Northrop Grumman, Deutsche Bank, IBM.</span>
              </p>
              <p className="flex  text-center justify-center p-1">
                <span className="text-sm px-2 ncolor dark:opacity-70 pt-1.5">
                  on the web
                </span>{" "}
                <span className="hcolor flex  inline lowercase ">
                  <Link href={"https://github.com/daveyeb"} target="_blank">
                    <span className="pr-1  hover:underline flex">
                      Github{" "}
                      <sup className="text-xs">
                        <GoLinkExternal />
                      </sup>
                    </span>
                  </Link>{" "}
                  <Link href="mailto:daveyeb@gmail.com">
                    <span className="pr-1  hover:underline flex">
                      Email{" "}
                      <sup className="text-xs">
                        <GoLinkExternal />
                      </sup>
                    </span>
                  </Link>{" "}
                  <Link href={"https://www.linkedin.com/in/daveyeb"} target="_blank">
                    <span className="pr-1 hover:underline flex">
                      linkedin
                      <sup className="text-xs">
                        <GoLinkExternal />
                      </sup>
                    </span>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
