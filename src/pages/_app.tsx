import { type AppType } from "next/dist/shared/lib/utils";
import Head from "../components/head/Head";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
