import "tailwindcss/tailwind.css";
import "../global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className="antialiased">
      <Toaster />
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>Oladayo | Olufemi</title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
export default MyApp;
