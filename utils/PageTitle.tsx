import Head from "next/head";
import { useEffect } from "react";

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
