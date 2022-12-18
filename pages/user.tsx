import { useRouter } from "next/router";
import { BiUser, BiLink } from "react-icons/bi";
import Image from "next/image";
import React, { useEffect } from "react";
import { useAppContext } from "../context";
import Repositories from "../components/user/repositories";
import Starred from "../components/user/starred";
import Followers from "../components/user/followers";
import Following from "../components/user/following";
import getGithubUser from "../utils/getGithubUser";
const User = () => {
  const { userCategories, openedUserTab, setUserTab, fetchUser, userResults } =
    useAppContext();
  const router = useRouter();
  const user = router.asPath.slice(router.asPath.indexOf("=") + 1);
  useEffect(() => {
    fetchUser(user);
  }, [user]);
  return (
    <section className="flex px-2 md:flex-row flex-col gap-[2rem] pt-8">
      <div className="flex-[0.4]">
        <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
          {/* image container */}
          <div className="md:w-[300px] md:h-[300px] w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-gray-500">
            <Image
              src={userResults?.user?.avatar_url}
              width="400px"
              height="400px"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <header className="flex flex-col gap-y-0 flex-1">
            <h1 className="font-karla tracking-tight font-bold text-[20px] md:text-[28px] m-0 p-0">
              {userResults?.user?.name}
            </h1>
            <p className="text-[16px] md:text-[18px] text-gray-400 m-0 p-0">
              {userResults?.user?.login}
            </p>
          </header>
        </div>
        <p className="text-[14px] md:text-[16px] mt-3">
          {userResults?.user?.bio}
        </p>
        <div className="flex flex-row gap-x-2 text-gray-300 items-center text-[14px] mt-2">
          <i>
            <BiUser />
          </i>
          <p
            className="cursor-pointer hover:text-blue-400 hover:underline"
            onClick={() => {
              setUserTab("Following");
            }}
          >
            <span className="text-white font-bold">
              {userResults?.user.following}
            </span>{" "}
            following
          </p>
          .
          <p
            className="cursor-pointer hover:text-blue-400 hover:underline"
            onClick={() => {
              setUserTab("Followers");
            }}
          >
            <span className="text-white font-bold">
              {userResults?.user?.followers}
            </span>{" "}
            followers
          </p>
        </div>
        {userResults?.user?.blog && (
          <a
            href={`https://${userResults?.user?.blog}`}
            className="flex flex-row gap-x-2 mt-2 text-gray-300 items-center hover:text-blue-400 hover:underline"
          >
            <span>
              <BiLink />
            </span>
            {userResults?.user?.blog}
          </a>
        )}
      </div>
      <div className="flex-[0.6]">
        <header className="flex max-w-[90vw] overflow-hidden overflow-x-scroll pb-2 gap-x-2 tab">
          {userCategories.map((userCategory, index: number) => {
            return (
              <article
                key={index}
                className={`flex cursor-pointer flex-row p-3 border-b-2 border-transparent gap-x-2 items-center max-w-fit flex-1 ${
                  openedUserTab === userCategory.title && "border-b-orange-400"
                }`}
                onClick={() => {
                  setUserTab(userCategory.title);
                }}
              >
                <span>{userCategory.icon}</span>
                <p className="text-[14px]">{userCategory.title}</p>
                <p className="bg-gray-500 text-white rounded-full justify-center items-center flex min-w-[25px] min-h-[25px] text-[14px]">
                  {userCategory.count}
                </p>
              </article>
            );
          })}
        </header>
        <main className="mt-4">
          {openedUserTab === "Repositories" && <Repositories />}
          {openedUserTab === "Stars" && <Starred />}
          {openedUserTab === "Followers" && <Followers />}
          {openedUserTab === "Following" && <Following />}
        </main>
      </div>
    </section>
  );
};

export default User;
