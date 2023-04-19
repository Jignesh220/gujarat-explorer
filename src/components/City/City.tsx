import React from "react";
import { useSearchParams } from "next/navigation";
import { Box } from "@mui/joy";
import Image from "next/image";
import { Grid } from "@mui/joy";

const images = [
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F1.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F2.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F3.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F4.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F5.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F6.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F7.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F8.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F9.webp?alt=media',
    'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F10.webp?alt=media',
  ];
export default function City() {
  const useSearch = useSearchParams();
  const cityName = useSearch.get("c");
  const [imageCover, setImageCover] = React.useState(images[Math.floor(Math.random() * images.length)]);
  

  return (
    <div className="relative min-h-screen">
      <div className="absolute min-h-full min-w-full">
        <Image
          src={imageCover}
          fill={true}
          alt="Cover_Image"
          loading="eager"
        />
      </div>
      <div
        className="absolute min-h-full min-w-full center-v-h capitalize text-center font-suezone text-9xl text-white"
        style={{
          backdropFilter: "blur(4px)",
          backgroundColor: "#0000007a",
          color: "#ffffff9a",
        }}
      >
        {cityName}
      </div>
    </div>
  );
}
