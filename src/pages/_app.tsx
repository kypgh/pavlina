import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SmoothScrolling from "@/components/SmoothScrolling";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ebGaramond.variable}`}>
      <SmoothScrolling />
      <Component {...pageProps} />
    </div>
  );
}
