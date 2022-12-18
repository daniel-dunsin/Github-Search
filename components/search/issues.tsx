import React from "react";
import { useAppContext } from "../../context";
import { BiGitBranch } from "react-icons/bi";
import { sliceDate } from "../../utils/sliceDate";
import { PageTitle } from "../../utils/PageTitle";
const Issues = () => {
  const { searchResults } = useAppContext();
  return (
    <section>
      <PageTitle title="Issues Result" />
      {searchResults?.issues?.length === 0 && (
        <div className="min-h-[300px] flex justify-center items-center p-2 text-white font-karla text-[24px] tracking-wide font-bold">
          No issues found
        </div>
      )}
      {searchResults?.issues?.length > 0 && (
        <div>
          <header className="py-2 font-karla text-[20px] border-b border-gray-500">
            Showing Available Issues Results
          </header>
          <main className="flex flex-col gap-0">
            {searchResults?.issues?.map((issue, index: number) => {
              const repo = issue.repository_url.split("/");
              return (
                <article key={index} className="py-4 border-b border-gray-500">
                  <div className="flex w-full flex-col gap-y-1 px-2">
                    <a
                      className="flex items-center text-[14px] text-gray-300 gap-x-2"
                      href={issue.html_url}
                    >
                      <span className="text-[16px] text-green-500">
                        <BiGitBranch />
                      </span>
                      {repo[4] + "/" + repo[5]} #{issue.number}
                    </a>
                    <a
                      href={issue.html_url}
                      className="text-[16px] text-blue-400"
                    >
                      {issue.title}
                    </a>
                    <h3 className="text-[15px] text-white">
                      {issue?.body?.length > 40 ? (
                        <p className="flex flex-wrap gap-x-2 items-center">
                          ${issue.body.slice(0, 40)}{" "}
                          <span className="w-[18px] h-[18px] bg-gray-700 flex justify-center items-center">
                            ...
                          </span>
                        </p>
                      ) : (
                        issue.body
                      )}
                    </h3>
                    <p className="text-[14px] text-gray-300">
                      {sliceDate(issue.updated_at)}
                    </p>
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

export default Issues;
