import React from "react";
import { useSearchParams } from "next/navigation";
import City from "@/components/City/City";
import Head from "next/head";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/joy";

export default function CityPage() {
  const useSearch = useSearchParams();
  const cityName = useSearch.get("c");
  const router = useRouter();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     if (!useSearch.get("c")) {
  //       router.push("/");
  //     }
  //   }, 8000);
  // }, [useSearch.get("c")]);
  // if (useSearch.get("i")) {
  //   return (
  //     <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
  //       <CircularProgress variant="soft" size="lg" color="info" thickness={5} />
  //     </div>
  //   );
  // }
  return (
    <div>
      <Head>
        <title>Tourism App</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F487E" />
        <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
      </Head>
      <City />
    </div>
  );
}
