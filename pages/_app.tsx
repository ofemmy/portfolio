import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="antialiased">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Oladayo | Olufemi</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
export default MyApp;
