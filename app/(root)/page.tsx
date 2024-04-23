import Image from "next/image";
import pages from "../pages";
import Link from "next/link";

import { Comfortaa } from "next/font/google";
import Me from "../components/Me";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  flex-row min-h-screen  items-center flex-row w-7/12 justify-center text-xl">
      <div className=" w-12/12 flex-col flex md:flex-row gap-x-9">
        <div className="w-12/12 md:w-6/12">
          <h1
            className={`hcolor capitalize font-bold grid grid-cols-1 text-4xl sawton_bauhausmedium`}
          >
            <span className="">Hello,</span>
            <span>i&apos;m</span>
            <span>david</span>
          </h1>
          <p className=" mt-3 font-thin">
            I am a software developer based in New York with a passion for
            building scalable frontend and backend systems that have a
            real-world impact.
          </p>
          <ul className="flex  text-center py-4 lg:text-left flex-row w-full mt-6 text-xl">
            {pages.map(({ to, label, emoji, desc }, i) => (
              <li key={i} className="group rounded-lg border border-transparent ">
                <div className=" transition-transform w-12/12 group-hover:translate-y-1 motion-uce:transform-none">
                  <Link href={to}>
                    <h2 className="font-semibold hcolor sawton_bauhausmedium lowercase mb-3 text-2xl">
                      <span>{label}</span>{" "}
                      <span className="inline-block transition-transform group-hover:translate-x-1 motion-uce:transform-none">
                        {emoji}
                      </span>
                    </h2>
                    <p className="text-sm font-thin max-w-[30ch] w-3/4 pr-3 m-0">
                      {desc}
                    </p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-6/12  fledx  float-right">
          <Me/>
        </div>
      </div>
    </main>
  );
}
