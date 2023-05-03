import {useEffect} from 'react'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router'
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
  const router = useRouter()

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('Service worker registered with scope:', registration.scope)
        }).catch(error => {
          console.error('Service worker registration failed:', error)
        })
      })
    }
  }, [router.route])
  return (
    <main className={`${aboreto.variable} ${suez_one.variable} ${outfit.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
