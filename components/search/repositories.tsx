import React from "react";
import { useAppContext } from "../../context";
import { BiBook, BiStar } from "react-icons/bi";
import { languagesColor } from "../../public/resources/languagesColor";

const Repositories = () => {
  const { searchResults } = useAppContext();
  return (
    <section>
      {searchResults?.repositories?.length === 0 && (
        <div className="min-h-[300px] flex justify-center items-center p-2 text-white font-karla text-[24px] tracking-wide font-bold">
          No repositories found
        </div>
      )}
      {searchResults?.repositories.length > 0 && (
        <div>
          <header className="py-2 font-karla text-[20px] border-b border-gray-500">
            Showing Available Repositories Results
          </header>
          <main className="flex flex-col gap-0">
            {searchResults?.repositories.map((repo, index: number) => {
              return (
                <article
                  key={index}
                  className="py-4 px-2 border-b border-gray-500 flex flex-col"
                >
                  <header className="flex flex-row gap-x-4">
                    <i>
                      <BiBook />
                    </i>
                    <a
                      href={repo.html_url}
                      className="text-[16px] text-blue-400 hover:underline"
                    >
                      {repo.full_name}
                    </a>
                  </header>
                  <p className="text-gray-200 text-[14px] mt-2 pl-[30px]">
                    {repo.description}
                  </p>
                  <div className="flex mt-2 flex-row gap-x-4 text-[13px] text-gray-300 font-karla pl-[30px]">
                    <div className="flex flex-row gap-x-2 items-center">
                      <span>
                        <BiStar />
                      </span>
                      {repo.stargazers_count}
                    </div>
                    {repo.language && (
                      <div className="flex flex-row gap-x-2 items-center">
                        <span
                          className="w-[12px] h-[12px] rounded-full"
                          style={{
                            backgroundColor: languagesColor[repo.language],
                          }}
                        ></span>
                        {repo.language}
                      </div>
                    )}

                    {repo?.license?.name && <p>{repo.license.name}</p>}
                  </div>
                </article>
              );
            })}
          </main>
        </div>
      )}
    </section>
  );
};

export default Repositories;
