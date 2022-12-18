import React from "react";
import { useAppContext } from "../../context";
import { languagesColor } from "../../public/resources/languagesColor";
import { BiStar } from "react-icons/bi";
import { sliceDate } from "../../utils/sliceDate";
import { PageTitle } from "../../utils/PageTitle";

const Starred = () => {
  const { userResults } = useAppContext();
  return (
    <section className="flex flex-col border-t border-gray-400">
      <PageTitle title={`${userResults?.user?.name} starred repositories`} />
      {userResults?.starred?.map((repo, index: number) => {
        return (
          <article
            key={index}
            className="flex flex-col gap-y-2 py-4 border-b border-gray-400"
          >
            <header className="flex gap-x-4 items-center">
              <a
                href={repo?.html_url}
                className="text-blue-500 font-karla font-bold tracking-wide text-[18px]"
              >
                {repo?.name}
              </a>
              <span className="text-[12px] border border-gray-300 text-gray-300 py-1 px-2 rounded-full">
                {repo?.private ? "Private" : "Public"}
              </span>
            </header>
            {repo?.description && (
              <p className="text-[14px] text-gray-300">{repo?.description}</p>
            )}
            <div className="flex flex-row gap-x-4 text-[14px] text-gray-400">
              {repo?.language && (
                <h2 className="flex flex-row gap-x-2">
                  <span
                    className="w-[12px] h-[12px] rounded-full"
                    style={{ backgroundColor: languagesColor[repo?.language] }}
                  ></span>
                  {repo?.language}
                </h2>
              )}
              {repo?.stargazers_count > 0 && (
                <h2 className="flex flex-row gap-x-2 items-center">
                  <span>
                    <BiStar />
                  </span>
                  {repo?.stargazers_count}
                </h2>
              )}
              {repo?.updated_at && <h2>{sliceDate(repo?.updated_at)}</h2>}
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Starred;
