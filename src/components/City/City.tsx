import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Box, CircularProgress, Stack } from "@mui/joy";
import Image from "next/image";
import { Grid } from "@mui/joy";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import { Button, IconButton, Tooltip } from "@mui/material";
import { useSwiper } from "swiper/react";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import { EffectCreative } from "swiper";
import { db } from "@/Firebase/Firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F1.webp?alt=media",
    id: 1,
    name: "Bai Harir Ni vav",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F2.webp?alt=media",
    id: 2,
    name: "Gandhi ashram",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F3.webp?alt=media",
    id: 3,
    name: "Heritage Walk",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F4.webp?alt=media",
    id: 4,
    name: "Hutheesing Jain Temple",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F5.webp?alt=media",
    id: 5,
    name: "Julta Minara",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F6.webp?alt=media",
    id: 6,
    name: "Kankaria Lake",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F7.webp?alt=media",
    id: 7,
    name: "Lalbhai Dalpathbhai Museum",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F8.webp?alt=media",
    id: 8,
    name: "Nalsarovar Bird Sanctuary",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F9.webp?alt=media",
    id: 9,
    name: "Sabarmati Riverfront",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover%2F10.webp?alt=media",
    id: 10,
    name: "Swaminarayan Temple",
  },
];
export default function City() {
  const useSearch = useSearchParams();
  const cityName = useSearch.get("c");
  const swiper = useSwiper();
  const [imageIndex, setimageIndex] = React.useState(0);
  const [Counter, setCounter] = React.useState(true);
  const [City, setCity] = React.useState<any[]>([]);
  const [cityId, setcityId] = React.useState<string | null>("");
  const [Citypage, setCitypage] = React.useState<any[]>([]);
  const [ImageArray, setImageArray] = React.useState<any[]>([]);

  useEffect(() => {
    if (cityName) {
      getCityData();
    }
  }, [cityName]);

  useEffect(() => {
    if (cityId) {
      getCityPageData();
    }
  }, [cityId]);

  const getCityData = async () => {
    const ref = `/Gujarat/Cities/Home`;
    const citiesImformation = collection(db, ref);
    const q = query(citiesImformation, where("cityName", "==", cityName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCity((arr) => [...arr, doc.data()]);
      setcityId(doc.data().cityId);
    });
  };
  const getCityPageData = async () => {
    const ref = `/Gujarat/Cities/Citypage`;
    const citiesImformation = collection(db, ref);
    const q = query(citiesImformation, where("cityId", "==", cityId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setCitypage((arr) => [...arr, doc.data()]);
      setImageArray((arr) => [
        ...arr,
        {
          id: doc.data().locationId,
          name: doc.data().location,
          src: doc.data().coverImageUrl,
        },
      ]);
    });
  };

  const NavigationButton = () => {
    const swiper = useSwiper();

    return (
      <Stack
        direction="row"
        gap={1.5}
        justifyContent="start"
        sx={{
          marginTop: 2,
        }}
      >
        <Tooltip title="Prev" arrow placement="left">
          <IconButton
            onClick={() => {
              swiper.slidePrev();
              if (imageIndex > 0) {
                setimageIndex(imageIndex - 1);
              } else {
                setimageIndex(9);
              }
            }}
            sx={{
              color: "#fff",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            <ArrowCircleLeftTwoToneIcon color="primary" sx={{ fontSize: 40 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Next" arrow placement="right">
          <IconButton
            onClick={() => {
              swiper.slideNext();
              if (imageIndex < 9) {
                setimageIndex(imageIndex + 1);
              } else {
                setimageIndex(0);
              }
            }}
            sx={{
              color: "#fff",
            }}
          >
            <ArrowCircleRightTwoToneIcon
              color="primary"
              sx={{ fontSize: 40 }}
            />
          </IconButton>
        </Tooltip>
      </Stack>
    );
  };
  return (
    <div className="relative min-h-screen">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeIn",
        }}
        className="absolute min-h-full min-w-full"
      >
        {ImageArray.filter((_, index) => index === imageIndex).map((item) => {
          return (
            <Image
              key={item.id}
              src={item.src}
              fill={true}
              alt="Cover_Image"
              className="bg-black object-cover"
            />
          );
        })}
      </motion.div>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid xs={6} sm={6} md={6}>
          <div
            className="min-h-screen min-w-full relative"
            style={{
              backgroundColor: "#000000aa",
            }}
          >
            <div className="center-v-h-absolute min-w-full p-20">
              <Stack direction="column" gap={2}>
                <div className="text-5xl font-bold text-white uppercase font-aboreto">
                  Welcome
                </div>
                <div className="text-5xl font-bold text-white uppercase font-aboreto">
                  To <span className="text-blue-500">{cityName}</span>
                </div>
                <div className="text-xl text-slate-300 font-outfit opacity-95 tracking-wide">
                  Ahmedabad, in western India, is the largest city in the state
                  of Gujarat. The Sabarmati River runs through its center. On
                  the western bank is the Gandhi Ashram at Sabarmati, which
                  displays the spiritual leader&#39;s living quarters and
                  artifacts. Across the river, the Calico Museum of Textiles,
                  once a cloth merchant&#39;s mansion, has a significant
                  collection of antique and modern fabrics.
                </div>
              </Stack>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={6} md={6}>
          <div
            className="min-h-screen min-w-full relative"
            style={{
              backgroundColor: "#000000aa",
            }}
          >
            <Grid container columns={12}>
              <Grid
                xs={12}
                sx={{
                  minHeight: "50vh",
                  position: "relative",
                }}
              >
                <div
                  className="absolute mb-10"
                  style={{
                    bottom: 0,
                    left: "50%",
                    transform: "translate(-50%,0%)",
                  }}
                >
                  {ImageArray.filter((_, index) => index === imageIndex).map(
                    (item) => (
                      <div
                        key={item.id}
                        className="md:text-8xl min-[0px]:text-5xl font-suezone tracking-wider capitalize opacity-50 text-white text-center"
                      >
                        {item.name}
                      </div>
                    )
                  )}
                </div>
              </Grid>
              <Grid
                xs={12}
                sx={{
                  minHeight: "50vh",
                  position: "relative",
                }}
              >
                <div className="px-5">
                  <Swiper
                    spaceBetween={5}
                    breakpoints={{
                      320: {
                        slidesPerView: 2,
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 2,
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 4,
                      },
                    }}
                    allowTouchMove={false}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper text-white"
                  >
                    {ImageArray.map((img) => {
                      return (
                        <SwiperSlide key={img.id}>
                          <Link href={`/cityitem?i=${img.id}`}>
                            <motion.div
                              whileHover={{
                                scale: 1.03,
                              }}
                              initial={{
                                opacity: 0,
                              }}
                              whileInView={{
                                opacity: 1,
                              }}
                              transition={{
                                duration: 0.8,
                                ease: "easeIn",
                              }}
                              exit={{
                                opacity: 0,
                              }}
                              className="md:w-52 md:h-80 min-[0px]:w-44 min-[0px]:h-72 relative cursor-pointer"
                              // onClick={() => {
                              //   setImageCover(img);
                              // }}
                            >
                              <Image
                                src={img.src}
                                alt="image_1"
                                fill
                                className="object-cover md:rounded-3xl min-[0px]:rounded-2xl absolute"
                              />
                              <div
                                className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-2xl"
                                style={{
                                  background:
                                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 60%), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 90%)",
                                }}
                              />
                              <div
                                className="md:rounded-3xl min-[0px]:rounded-2xl"
                                style={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: "50%",
                                  transform: "translate(-50%,0%)",
                                  marginBottom: 15,
                                }}
                              >
                                <Button
                                  variant="contained"
                                  color="primary"
                                  sx={{
                                    borderRadius: 8,
                                    textTransform: "none",
                                  }}
                                >
                                  <div className="font-outfit font-bold tracking-wider">
                                    Explore
                                  </div>
                                </Button>
                              </div>
                            </motion.div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                    <NavigationButton />
                  </Swiper>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
