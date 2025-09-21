import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SmoothScrolling />
      <Component {...pageProps} />
    </>
  );
}
