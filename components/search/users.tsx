import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppContext } from "../../context";
import { PageTitle } from "../../utils/PageTitle";

const Users = () => {
  const { searchResults } = useAppContext();
  return (
    <section>
      <PageTitle title="Users Result" />
      {searchResults?.users?.length === 0 && (
        <div className="min-h-[300px] flex justify-center items-center p-2 text-white font-karla text-[24px] tracking-wide font-bold">
          No user found
        </div>
      )}
      {searchResults?.users?.length > 0 && (
        <div>
          <header className="py-2 font-karla text-[20px] border-b border-gray-500">
            Showing Available Users Results
          </header>
          <main className="flex flex-col gap-0">
            {searchResults?.users?.map((user, index: number) => {
              return (
                <article
                  key={index}
                  className="flex items-center justify-between py-4 px-2 border-b border-gray-500"
                >
                  <div className="flex flex-row gap-x-4">
                    {/* image container */}
                    <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                      <Image
                        src={user.avatar_url}
                        width="40px"
                        height="40px"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <Link href={"/user?user=" + user.login}>
                      <p className="text-blue-400 hover:underline cursor-pointer">
                        {user.login}
                      </p>
                    </Link>
                  </div>
                  <Link href={"/user?user=" + user.login}>
                    <button className="px-3 text-[14px] border border-gray-500 hover:underline py-2 rounded-md text-blue-400 bg-secondary-dark">
                      View profile
                    </button>
                  </Link>
                </article>
              );
            })}
          </main>
        </div>
      )}
    </section>
  );
};

export default Users;
