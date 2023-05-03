import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "@/Firebase/Firebase";
import Image from "next/image";
import { Box, Grid, Stack, Tooltip } from "@mui/joy";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { amber } from "@mui/material/colors";

export default function Export() {
  const [Cities, setCities] = React.useState<any[]>([]);
  React.useEffect(() => {
    getUserData();
  }, [db]);

  const getUserData = async () => {
    const ref = `/Gujarat/Cities/Home`;
    const userInformation = collection(db, ref);
    const mySnapshot = await getDocs(userInformation);
    mySnapshot.forEach((doc) => {
      // console.log((arr) => [...arr, doc.data()]);
      setCities((arr) => [...arr, doc.data()]);
      console.log(doc.data());
    });
  };
  return (
    <div className="">
      {Cities.map((item) => (
        <div key={item.locationId}>
          {`{
                        cityName: "${item.cityName}",
                        url: "city?c=${item.cityId}",
                        name: "${item.cityName}",
                    },
                    `}
        </div>
      ))}
    </div>
  );
}
