import React, { lazy } from "react";
import { useAppContext } from "../context";
import Commits from "../components/search/commits";
import Issues from "../components/search/issues";
import Repositories from "../components/search/repositories";
import Topics from "../components/search/topics";
import Users from "../components/search/users";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Search = () => {
  const { categories, openedTab, setTab } = useAppContext();
  return (
    <>
      <section className="py-[60px] min-h-[100vh] h-full px-2">
        <header className="md:hidden flex max-w-[90vw] overflow-hidden overflow-x-scroll pb-2 tab">
          {categories.map((category, index) => {
            return (
              <article
                key={index}
                className={`px-2 py-2 w-[140px] text-white border-b-2 border-b-transparent flex justify-between items-center cursor-pointer gap-x-2 ${
                  openedTab === category.title && "border-b-orange-400"
                }`}
                onClick={() => {
                  setTab(category.title);
                }}
              >
                <p className="text-[14px]">{category.title}</p>
                <p className="bg-gray-500 text-white rounded-full justify-center items-center flex w-[25px] h-[25px] text-[14px]">
                  {category.count}
                </p>
              </article>
            );
          })}
        </header>
        <div className="flex flex-row relative items-start gap-[2rem]">
          <aside className="md:flex hidden flex-col h-full min-w-[250px] max-w-[250px] rounded-md">
            {categories.map((category, index: number) => {
              return (
                <article
                  className={`w-full flex cursor-pointer justify-between items-center p-3 border-gray-500 border-x-2 
                ${
                  index === categories.length - 1
                    ? "border-b-2 rounded-b-md"
                    : "border-b"
                } 
                ${index === 0 && "border-t-2 rounded-t-md"}
                ${openedTab === category.title && "border-l-orange-400"}
                `}
                  key={index}
                  onClick={() => {
                    setTab(category.title);
                  }}
                >
                  <p>{category.title}</p>
                  <p className="text-white bg-gray-500 w-[25px] h-[25px] rounded-full flex justify-center items-center text-[15px]">
                    {category.count}
                  </p>
                </article>
              );
            })}
          </aside>
          <main className="flex-1 md:py-0 py-4">
            {openedTab === "Repositories" && <Repositories />}
            {openedTab === "Commits" && <Commits />}
            {openedTab === "Topics" && <Topics />}
            {openedTab === "Users" && <Users />}
            {openedTab === "Issues" && <Issues />}
          </main>
        </div>
      </section>
    </>
  );
};

export default Search;
