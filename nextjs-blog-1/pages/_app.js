import "../styles/globals.css";
import Head from "next/head";
import "styles/global.css"
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>我的博客</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
