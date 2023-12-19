import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "../lib/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>2023년 Read & Share | 우아한 언어</title>
        <link rel="icon" href="/favicon.ico" />
        <meta key="ogimage" property="og:image" content={`/img/cover.png`} />
        <meta
          property="og:title"
          key="ogtitle"
          content="2023년 Read & Share | 우아한 언어"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
