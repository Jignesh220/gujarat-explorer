import React from "react";
import { useSearchParams } from "next/navigation";
import City from "@/components/City/City";
import Head from "next/head";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/joy";
import AppbarFixed from "@/components/Reusable/AppbarFixed";
import FooterFixed from "@/components/Reusable/FooterFixed";

export default function CityPage() {
  const useSearch = useSearchParams();
  const cityName = useSearch.get("c");
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Tourism App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F487E" />
        <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
      </Head>
      <AppbarFixed />
      <City />
      <FooterFixed/>
    </div>
  );
}
