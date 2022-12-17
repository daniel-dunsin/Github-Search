import Head from "next/head";
import Image from "next/image";
import { ChangeEvent } from "react";
import { BsGithub, BsSearch } from "react-icons/bs";
import { useAppContext } from "../context";
export default function Home() {
  const { searchParam, updateSearch, handleFormSubmit } = useAppContext();
  return (
    <>
      <Head>
        <title>Github Search</title>
      </Head>
      <main className="pt-[150px] flex md:flex-row flex-col justify-center md:justify-start gap-[1rem] items-center px-2">
        {/* text */}
        <div className="flex-1 flex flex-col gap-4 justify-center items-center md:justify-start md:items-start">
          <h1 className="font-karla tracking-wide lg:text-[56px] md:text-[40px] text-[27px] flex gap-x-4 items-center">
            <span>
              <BsGithub />
            </span>
            Github Search
          </h1>
          <p className="max-w-[450px] text-center md:text-start md:mx-0 mx-auto">
            Github search is a mini github clone & a web application that uses
            github API for searching for users, repositories, commits, e.t.c.
            <span className="font-bold text-[18px] ml-1">
              Input in the searchbox and try it out!
            </span>
          </p>
          <form
            className="flex flex-row gap-x-2 items-center bg-secondary-dark text-white border-2 border-gray-500 px-4 rounded-md py-2 w-[90vw] max-w-[300px]"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              placeholder="Search Github"
              className="text-gray-200 bg-transparent text-[15px] outline-none flex-[0.9]"
              value={searchParam}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                updateSearch(e.target.value);
              }}
            />
            <button
              type="submit"
              className="flex-[0.1] flex justify-end items-center"
            >
              <BsSearch />
            </button>
          </form>
        </div>
        {/* image */}
        <div className="flex-1 w-full flex justify-center items-center">
          <Image
            src={"/images/github.png"}
            width="450px"
            height="450px"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </main>
    </>
  );
}
