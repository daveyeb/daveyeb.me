import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import pages from "./pages";
import { useRouter } from "next/router";

export default function Nav() {
  const {pathname} = useRouter();
  const [hIndex, setHIndex] = useState<boolean>(false);
  const [hPages, setHPages] = useState<number>(-1);


  return (
    <div className="absolute nudicaregular flex flex-row text-xl mt-4  w-full justify-center">
      <nav className="flex flex row  w-8/12 justify-between">
        <div className="flex flex-row justify-center ">
          <Link
            href={"/"}
            className={`${pathname == "/" ? "hcolor" : ""} ${
              hIndex ? "ncolor" : ""
            }`}
            onMouseEnter={() => setHIndex(true)}
            onMouseLeave={() => setHIndex(false)}
          >
            index
          </Link>
          <div className="absolute top-10">
            {hIndex || pathname == "/" ? <span>☝🏾</span> : ""}
          </div>
        </div>
        <div>
          <ul className="flex flex-row ">
            {pages.map(({ to, label, emoji }, i) => {
              const isIncluded = pathname.includes(to.split("/")[1]);

              return (
                <li
                  key={i}
                  className={`flex flex-col items-center  ${
                    isIncluded || hPages == i ? "ncolor" : ""
                  }`}
                >
                  <Link
                    key={i}
                    href={to}
                    className={`px-10`}
                    onMouseEnter={() => setHPages(i)}
                    onMouseLeave={() => setHPages(-1)}
                  >
                    {label}
                  </Link>
                  <div className="absolute top-10">
                    {isIncluded || hPages == i ? <span>{emoji}</span> : ""}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
