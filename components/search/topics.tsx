import React from "react";
import { useAppContext } from "../../context";
import { PageTitle } from "../../utils/PageTitle";
import { sliceDate } from "../../utils/sliceDate";
const Topics = () => {
  const { searchResults } = useAppContext();

  return (
    <section>
      <PageTitle title="Topics Result" />
      {searchResults?.topics?.length === 0 && (
        <div className="min-h-[300px] flex justify-center items-center p-2 text-white font-karla text-[24px] tracking-wide font-bold">
          No topics found
        </div>
      )}

      {searchResults?.topics.length > 0 && (
        <div>
          <header className="py-2 font-karla text-[20px] border-b border-gray-500">
            Showing Available Topics Results
          </header>
          <main className="flex flex-col gap-0">
            {searchResults?.topics.map((topic, index: number) => {
              return (
                <article
                  key={index}
                  className="flex items-center py-4 px-2 border-b border-gray-500"
                >
                  <header className="flex gap-x-4 items-center">
                    <span className="w-[20px] h-[20px] bg-secondary-dark border rounded-md flex items-center justify-center text-[15px] text-gray-300">
                      #
                    </span>
                    <a
                      href={`https://github.com/topics/${topic.name}`}
                      className=" text-[15px] flex flex-col gap-y-1"
                    >
                      <span className="text-blue-400 hover:underline">
                        {topic.name}
                      </span>
                      <p className="text-[14px] text-gray-300">
                        {sliceDate(topic.updated_at)}
                      </p>
                    </a>
                  </header>
                </article>
              );
            })}
          </main>
        </div>
      )}
    </section>
  );
};

export default Topics;
