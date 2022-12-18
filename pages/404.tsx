import Link from "next/link";
import React from "react";

const ErrorPage = () => {
  return (
    <section className="px-2 py-4 flex flex-col justify-center items-center gap-y-2 min-h-screen">
      <h1 className="text-[36px] md:text-[50px] lg:text-[160px] tracking-wider text-white font-bold font-karla">
        Oops!
      </h1>
      <p className="text-white text-[16px] md:text-[20px]">
        404 - Page not found.
      </p>
      <Link href="/">
        <button className="px-4 py-[10px] rounded-md bg-[royalblue] text-white font-karla mt-4 font-bold text-[16px] md:text-[20px] hover:bg-opacity-90">
          Return to homepage
        </button>
      </Link>
    </section>
  );
};

export default ErrorPage;
