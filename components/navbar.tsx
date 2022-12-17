import { useRouter } from "next/router";
import React, { ChangeEvent, FC } from "react";
import Link from "next/link";
import { BsGithub, BsSearch } from "react-icons/bs";
import { useAppContext } from "../context";

const Navbar: FC = () => {
  const router = useRouter();
  const { navbarSearchParam, updateNavbarSearch, handleNavbarFormSubmit } =
    useAppContext();

  return (
    <nav
      className={`p-4 text-white ${
        router.pathname === "/"
          ? "absolute top-0 left-0 w-full"
          : "bg-secondary-dark"
      }`}
    >
      <div
        className={`flex justify-between items-center w-full max-w-[1200px] mx-auto`}
      >
        <div className="flex gap-x-2 font-karla tracking-wider text-[18px] items-center cursor-pointer">
          <Link href="/">
            <span className="text-[26px]">
              <BsGithub />
            </span>
          </Link>
          <div
            className={`${
              router.pathname === "/" ? "block" : "md:block hidden"
            }`}
          >
            <Link href="/">
              <p>Github Search</p>
            </Link>
          </div>
        </div>
        <form
          className={`${
            router.pathname === "/"
              ? "md:flex hidden bg-secondary-dark"
              : "flex bg-main-dark"
          } flex-row gap-x-2  text-white border-2 border-gray-500 px-4 rounded-md py-2`}
          onSubmit={handleNavbarFormSubmit}
        >
          <input
            type="text"
            placeholder="Search Github"
            className="text-gray-200 bg-transparent text-[15px] outline-none placeholder:text-gray-200"
            value={navbarSearchParam}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              updateNavbarSearch(e.target.value);
            }}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
