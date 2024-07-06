import Image from "next/image";

import {
  SiD3Dotjs,
  SiHtmx,
  SiJavascript,
  SiLeptos,
  SiTailwindcss,
  SiWebassembly,
} from "react-icons/si";
import { FaRust } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>david yeböah , swe | projects</title>
      </Head>
      <Nav />
      <main className="flex flex-row  min-h-screen nudicaregular pt-40 flex-row justify-center text-xl">
        <div className=" w-full  flex  flex-col items-center">
          <div className="w-8/12 ">
            <h1 className="text-4xl">
              <span className="hcolor ">projects</span>
            </h1>
            <p className="mt-6 w-6/12">
              In this portfolio, you&apos;ll find a variety of projects
              I&apos;ve undertaken, showcasing my expertise in UX design,
              frontend, and backend development. My work spans multiple
              industries, highlighting my versatility and commitment to creating
              solutions for real-world challenges.
            </p>
          </div>
          <div className="mt-16 image w-9/12">
            <Image
              src={"/rmap.gif"}
              alt={""}
              height={1902}
              width={3456}
              unoptimized
            ></Image>
          </div>

          <div className="col-span-2   mt-16  w-8/12 ">
            <div className="">
              <Link
                href={
                  "https://moazl72kkqrgr57xycho2qzqzi0efgpy.lambda-url.us-east-1.on.aws/"
                }
                className="flex flex-row"
                target="_blank"
              >
                <h2 className="text-3xl  hcolor pr-2 ">rmap.rs</h2>
                <sup>
                  <GoLinkExternal />
                </sup>
              </Link>
            </div>
            <p className=" mt-2  ">
              A web app that examines source code repositories to create a
              network of dependencies among files and components.
            </p>
            <div className=" mt-2">
              <p className=" inline ">
                <span className="text-base px-2  ncolor  dark:opacity-70">
                  motivation
                </span>
                As a side project, I developed a tool to assist coders, like
                myself, in visualizing their codebases. This idea stemmed from
                my experiences with large codebases, where I often struggled to
                find a starting point for understanding them. Using this project
                as a learning tool, I built a recursive decent parser from
                scratch to parse source codes, generating a dependency tree to
                facilitate comprehension of a codebase.
              </p>
            </div>
            <div className="mt-2 w-6/12 ">
              <p className=" inline flex flex-row">
                <span className="text-base px-2 pt-1.5  ncolor  dark:opacity-70">
                  made with
                </span>
                <span className="p-2">
                  <SiWebassembly />
                </span>
                <span className="p-2">
                  <FaRust />
                </span>
                <span className="p-2">
                  <SiHtmx />
                </span>
                <span className="p-2">
                  <SiTailwindcss />
                </span>
                <span className="p-2">
                  <SiJavascript />
                </span>
                <span className="p-2">
                  <SiD3Dotjs />
                </span>
              </p>
            </div>
          </div>

          <div className="mt-16 col-span-2 image w-9/12 ">
            <Image
              src={"/enigma.gif"}
              alt={""}
              height={1902}
              width={3456}
              unoptimized
            ></Image>
          </div>

          <div className="col-span-2 mt-16  w-8/12">
            <Link
              href={"https://leptos-enigma.vercel.app"}
              className="flex flex-row "
              target="_blank"
            >
              <h2 className="text-3xl  hcolor pr-2 sawton_bauhausmedium">
                enigma.rs
              </h2>
              <sup>
                <GoLinkExternal />
              </sup>

              {/* <div className=" flex flex-reow">
              <span className="flex flex-row text-base pr-2">link <GoLinkExternal /></span>
              <span className="flex flex-row text-base">source <TbSourceCode /></span>
              </div> */}
            </Link>

            <p className=" mt-2  ">
              A web app that mimicks the operations of an Enigma M3/M4 cipher
              machine developed by Germans during WWII.
            </p>
            <div className="mt-2">
              <p className=" inline">
                <span className="text-base px-2 ncolor  dark:opacity-70">
                  motivation
                </span>
                For a cryptography class final project, I chose to reverse
                engineer the Enigma machine by researching how it encrypts
                messages, analyzing each output of the ciphertext characters and
                the behavior of its components during encryption. Originally, I
                built it in Node.js and sha it as library on NPM. But later, I
                decided to rewrite it in Rust as a way to improve Rust
                programming skills.
              </p>
            </div>
            <div className="mt-2 w-6/12 mb-12">
              <p className=" inline flex flex-row">
                <span className="text-base px-2 pt-1.5 ncolor dark:opacity-70">
                  made with
                </span>
                <span className="p-2">
                  <SiWebassembly />
                </span>
                <span className="p-2">
                  <FaRust />
                </span>
                <span className="p-2">
                  <SiLeptos />
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
