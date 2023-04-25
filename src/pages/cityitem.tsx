import React from "react";
import Home from "@/components/CityItem/Home";
import { useSearchParams } from "next/navigation";
import { CircularProgress } from "@mui/joy";

export default function Cityitem() {
  const useSearch = useSearchParams();
  const location: string | null = useSearch.get("i");
  if (!useSearch.get("i")) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
        <CircularProgress variant="soft" size="lg" color="info" thickness={5} />
      </div>
    );
  }
  return (
    <div>
      <Home/>
    </div>
  );
}
