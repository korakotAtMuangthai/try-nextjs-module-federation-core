import "@/styles/globals.css";
import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import SyncTranslation from "@/lib/translation/SyncTranslation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SyncTranslation />
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}
