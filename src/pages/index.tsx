import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Appbar from "@/components/Reusable/Appbar";
import Home from "@/components/Home/Home";
import Footer from "@/components/Reusable/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <title>Tourism App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F487E" />
        <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
      </Head>
      <Appbar />
      <Home />
      <Footer/>
    </>
  );
}
