import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Athiti,Suez_One } from "next/font/google";

const athiti = Athiti({
  subsets: ["latin"],
  variable: "--font-athiti",
  weight: "700",
  style: "normal",
});
const suez_one = Suez_One({
  subsets: ["latin"],
  variable: "--font-suez_one",
  weight: "400",
  style: "normal",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${athiti.variable,suez_one.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
