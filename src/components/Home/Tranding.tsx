import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "./styles.css";
// import '../../styles/tranding.css'

// import required modules
import { EffectCards } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "@/Firebase/Firebase";
import Image from "next/image";
import { Grid, Stack } from "@mui/joy";
import Link from "next/link";
import { amber } from "@mui/material/colors";

export default function Tranding() {
  const [Cities, setCities] = React.useState<any[]>([]);
  const [ArrayIndex, setArrayIndex] = React.useState(4);
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const ref = `/Gujarat/Cities/Home`;
    const userInformation = collection(db, ref);
    const mySnapshot = await getDocs(userInformation);
    mySnapshot.forEach((doc) => {
      // console.log((arr) => [...arr, doc.data()]);
      setCities((arr) => [...arr, doc.data()]);
    });
  };
  return (
    <div className="min-w-full mt-16">
      <div className="md:px-32 min-[0px]:px-8">
        <div className="md:pb-6 min-[0px]:pb-5">
          <div
            className="md:text-9xl sm:text-5xl min-[0px]:text-5xl font-extrabold tracking-wider drop-shadow-xl shadow-slate-500 font-suezone"
            style={{
              color: "rgb(22,78,99,0.2)",
            }}
          >
            Tranding
          </div>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          loop={true}
          className="mySwiper w-64 h-96"
        >
          {Cities.map((city) => (
            <SwiperSlide className="flex justify-center items-center" key={city.cityName}>
              <Link href={`/city?c=${city.cityName}`}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeIn",
                  }}
                  className="min-h-full min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500"
                >
                  <Image
                    src={city.coverImageUrl}
                    alt={`${city.cityName}_cover`}
                    fill={true}
                    className="md:rounded-3xl min-[0px]:rounded-xl"
                  />
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
