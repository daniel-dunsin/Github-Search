import { AppProps } from "next/app";
import { lazy } from "react";
import "../styles/globals.css";

const Layout = lazy(() => import("../components/layout"));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
