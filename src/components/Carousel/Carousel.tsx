import React from "react";
import Image from "next/image";
import { Toolbar } from "@mui/material";
import Miya from "../../images/miya.webp";
import Akashardham from "../../images/akashardham.webp";
import Jambughoda from "../../images/jambughoda.webp";
import Modhera from "../../images/modhera_sun_temple.webp";
import Pavagadh from "../../images/pavagadh.webp";
import RaniNiVav from "../../images/rani_ni_vav.webp";
import Saputara from "../../images/saputara.webp";
import Saputara2 from "../../images/saputata-2.webp";
import SasanGir from "../../images/sasan_gir.webp";
import Vadnagar from "../../images/vadnagar.webp";
import WhiteRan from "../../images/white_ran.webp";
import { amber } from "@mui/material/colors";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import NavigationButton from "./NavigationButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";
import { Box } from "@mui/joy";

const ImageArray = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fsasan_gir.webp?alt=media&token=66749331-d740-49c4-a532-26f40ba1bdf1",
    title: "Gir National Park",
    subTitle: "Gir National Park",
    url: "/cityitem?i=36ab0696-db20-4cd0-bcda-871f977f02c8",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fjambughoda.webp?alt=media&token=bde99df3-5612-4caa-b677-38b8c4d0103c",
    title: "Jambughoda Wildlife Sanctuary",
    subTitle: "Wildlife and safari park in Gujarat",
    url: "/cityitem?i=ac401fd1-d513-4ae2-a228-2a241aa6b1f5",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fpavagadh.webp?alt=media&token=4782f59b-32bb-4451-bae6-43975eb454b4",
    title: "Pavagadh",
    subTitle: "Hill station in India",
    url: "/cityitem?i=3e8f4dcc-b715-4acd-a1f0-ab75968e8c07",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Frani_ni_vav.webp?alt=media&token=bf473f2c-a88d-4e40-bca2-7bf5953a2c64",
    title: "Rani Ki Vav",
    subTitle: "Historical landmark in Gujarat",
    url: "/cityitem?i=d38fbc84-cf17-4ff9-9510-b7c8e9a3abab",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fwhite_ran.webp?alt=media&token=cabab91d-432e-4b30-8c49-14d0ce10310a",
    title: "Rann of Kutch",
    subTitle: "Tourist place",
    url: "/cityitem?i=341011c2-67d3-496e-bbec-b7a6613c626c",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fsaputara.webp?alt=media&token=915f10a1-2ad8-4f1b-8937-b49070a91aae",
    title: "Saputara",
    subTitle: "Hill station in India",
    url: "/cityitem?i=aab1f176-ba41-4913-862d-8ea273314274",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Home%2Fakashardham.webp?alt=media&token=01954464-f01c-45bd-a1d1-33434d3a7ebb",
    title: "Akshardham Temple",
    subTitle: "Hindu temple in Gandhinagar",
    url: "/cityitem?i=28387428-18e7-4dbb-a960-263eea205d0a",
  },
];

export default function Carousel() {
  const [ImageView1, setImageView1] = React.useState(false);
  return (
    <div>
      <Toolbar />
      <div className="px-5 rounded-3xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper text-white"
          autoplay={true}
        >
          {ImageArray.map((item) => (
            <SwiperSlide key={item.url}>
              <Link href={item.url} className="min-h-full min-w-full">
                <Box
                  sx={{
                    minHeight: { xs: 300, md: 700 },
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <img
                    src={item.src}
                    alt="Image 1"
                    className="md:rounded-3xl min-[0px]:rounded-2xl object-cover bg-black"
                  />
                  <motion.div
                    className="min-h-full min-w-full absolute rounded-3xl flex md:p-10 min-[0px]:p-1 group"
                    onViewportEnter={() => {
                      setImageView1(true);
                    }}
                    onViewportLeave={() => {
                      setImageView1(false);
                    }}
                    initial={{
                      backdropFilter: "blur(5px)",
                      opacity: 1,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    whileInView={{
                      backdropFilter: "blur(0px)",
                      justifyContent: "center",
                      alignItems: "end",
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeIn",
                    }}
                  >
                    <motion.div
                      initial={{
                        y: -40,
                      }}
                      whileInView={{
                        y: 0,
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeIn",
                      }}
                      className="text-white font-bold"
                    >
                      <motion.div className="md:text-5xl min-[0px]:text-xl opacity-50 font-suezone text-center md:mb-3 min-[0px]:mb-1 tracking-wider group-hover:opacity-100 group-hover:text-amber-300 transition ease-in duration-500">
                        {item.title}
                      </motion.div>
                      <div className="md:text-xl min-[0px]:text-sm font-suezone font-normal text-center text-slate-300 tracking-wider">
                        {item.subTitle}
                      </div>
                    </motion.div>
                  </motion.div>
                </Box>
              </Link>
            </SwiperSlide>
          ))}
          <NavigationButton />
        </Swiper>
      </div>
    </div>
  );
}
