import React from "react";
import { useAppContext } from "../../context";
import { PageTitle } from "../../utils/PageTitle";
import { sliceDate } from "../../utils/sliceDate";

const Commits = () => {
  const { searchResults } = useAppContext();
  return (
    <section>
      <PageTitle title="Commits Result" />
      {searchResults?.commits?.length === 0 && (
        <div className="min-h-[300px] flex justify-center items-center p-2 text-white font-karla text-[24px] tracking-wide font-bold">
          No commits found
        </div>
      )}

      {searchResults?.commits.length > 0 && (
        <div>
          <header className="py-2 font-karla text-[20px] border-b border-gray-500">
            Showing Available Commit Results
          </header>
          <main className="flex flex-col gap-0">
            {searchResults?.commits?.map((commit, index: number) => {
              return (
                <article
                  key={index}
                  className="flex items-center justify-between py-4 border-b border-gray-500"
                >
                  <div className="text-gray-400 flex flex-col gap-y-1">
                    <h3 className="text-[14px]">
                      {commit.repository.full_name}
                    </h3>
                    <a
                      href={commit.html_url}
                      className="text-[16px] text-blue-400 hover:underline"
                    >
                      {commit.commit.message.length > 70 ? (
                        <p className="flex flex-wrap gap-x-2 items-center">
                          ${commit.commit.message.slice(0, 70)}{" "}
                          <span className="w-[18px] h-[18px] bg-gray-700 flex justify-center items-center">
                            ...
                          </span>
                        </p>
                      ) : (
                        `${commit.commit.message}`
                      )}
                    </a>
                    <p className="text-[14px]">
                      {sliceDate(commit.commit.committer.date)}
                    </p>
                  </div>
                  <div className="hidden md:flex w-fit px-2 py-2 rounded-md bg-secondary-dark border border-gray-500 text-blue-400 text-[14px] ">
                    {commit.sha.slice(0, 7)}
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

export default Commits;
