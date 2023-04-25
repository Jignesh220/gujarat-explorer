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
        <title>Tourism App | {cityName ? cityName : ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../images/Logo/logo.png" />
      </Head>
      <City />
    </div>
  );
}
