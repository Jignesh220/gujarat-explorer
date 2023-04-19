import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suez_One,Aboreto,Alegreya,Capriola,Outfit } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: "400",
  style: "normal",
});
const suez_one = Suez_One({
  subsets: ["latin"],
  variable: "--font-suez_one",
  weight: "400",
  style: "normal",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: "400",
  style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${aboreto.variable} ${suez_one.variable} ${outfit.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
