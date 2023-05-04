import React from "react";
import Head from "next/head";
import Home from "@/components/CityItem/Home";
import { useSearchParams } from "next/navigation";
import { CircularProgress } from "@mui/joy";
import Appbar from "@/components/Reusable/Appbar";
import Footer from "@/components/Reusable/Footer";
import {Toolbar} from '@mui/material'

export default function Cityitem() {
  const useSearch = useSearchParams();
  const location: string | null = useSearch.get("i");
  if (!useSearch.get("i")) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
        <Head>
          <title>Tourism App</title>
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#1F487E" />
          <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
          <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
        </Head>
        <CircularProgress variant="soft" size="lg" color="info" thickness={5} />
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Tourism App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F487E" />
        <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
      </Head>
      <Appbar />
      <Toolbar/>
      <Home />
      <Footer />
    </div>
  );
}
