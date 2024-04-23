"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import pages from "../pages";

export default function Nav() {
  const segments = useSelectedLayoutSegments();
  const [hover, setHover] = useState<boolean>(false);
  const [hoverPages, setHoverPages] = useState<number>(-1);

  return (
    <header className="absolute pt-4 sawton_bauhausmedium flex flex-row text-xl font-thin  w-full justify-center">
      <nav className="flex flex row  w-7/12 justify-between">
        <div className="flex flex-row justify-center ">
          <Link
            href={"/"}
            className={`${!segments.length ? "hcolor" : ""} ${hover ? "ncolor": ""}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            index
          </Link>
          <div className="absolute top-14">{hover || !segments.length ? <span>☝🏾</span> : ""}</div>
        </div>
        <div>
          <ul className="flex flex-row ">
            {pages.map(({ to, label, emoji }, i) => {
              const isIncluded = segments.includes(to.split("/")[1]);

              return (
                <li
                  key={i}
                  className={`flex flex-col items-center  ${
                    isIncluded || hoverPages == i  ? "ncolor" : ""
                  }`}
                >
                  <Link key={i} href={to} className={`px-10`}
                              onMouseEnter={() => setHoverPages(i)}
                              onMouseLeave={() => setHoverPages(-1)}
                  >
                    {label}
                  </Link>
                  <div className="absolute top-14">
                    {isIncluded || hoverPages == i ? <span>{emoji}</span> : ""}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
