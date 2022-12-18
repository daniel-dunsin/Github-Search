import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppContext } from "../../context";
import { PageTitle } from "../../utils/PageTitle";

const Following = () => {
  const { userResults } = useAppContext();

  return (
    <section className="flex flex-col border-t border-gray-400">
      <PageTitle title={`People ${userResults?.user?.name} is following`} />
      {userResults?.following?.map((following, index: number) => {
        return (
          <article
            key={index}
            className="flex flex-row gap-x-4 items-center py-4 border-b border-gray-400"
          >
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
              <Image
                src={following?.avatar_url}
                width="60px"
                height="60px"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div>
              <Link href={`/user?user=${following?.login}`}>
                <a className="text-[15px] hover:text-blue-400 hover:underline cursor-pointer">
                  {following?.login}
                </a>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Following;
