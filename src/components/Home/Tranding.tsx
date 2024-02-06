import React, { useRef, useState } from "react";
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
import { IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { amber } from "@mui/material/colors";
import ArrowCircleLeftTwoToneIcon from "@mui/icons-material/ArrowCircleLeftTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import { Skeleton } from "@mui/material";

export default function Tranding() {
  const [Cities, setCities] = React.useState<any[]>([]);
  const [Loaded, setLoaded] = React.useState(false);
  const [imageIndex, setimageIndex] = React.useState(0);
  const [textIndex, settextIndex] = React.useState(0);
  const [color, setColor] = useState("#537EB3");
  React.useEffect(() => {
    getUserData().then(() => {
      setLoaded(true);
    });
  }, [db]);

  const handleClick = () => {
    let randomColor;
    do {
      randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (getBrightness(randomColor) > 128);
    setColor(randomColor);
  };

  function getBrightness(hex: any) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  }

  const getUserData = async () => {
    const ref = `/Gujarat/Cities/Home`;
    const userInformation = collection(db, ref);
    const mySnapshot = await getDocs(userInformation);
    mySnapshot.forEach((doc) => {
      // console.log((arr) => [...arr, doc.data()]);
      setCities((arr) => [...arr, doc.data()]);
    });
  };

  const NavigationButton = () => {
    const swiper = useSwiper();
    return (
      <Stack
        direction="row"
        gap={1.5}
        justifyContent={{ md: "start", xs: "center" }}
        sx={{
          marginTop: 2,
        }}
      >
        <Tooltip
          title="Prev"
          arrow
          placement="left"
        >
          <IconButton
            onClick={() => {
              swiper.slidePrev();
              handleClick();
            }}
            sx={{
              color: "#fff",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            <ArrowCircleLeftTwoToneIcon
              color="primary"
              sx={{ fontSize: 40 }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Next"
          arrow
          placement="right"
        >
          <IconButton
            onClick={() => {
              swiper.slideNext();
              handleClick();
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
    <div className="min-w-full mt-32">
      <div className="md:px-32 min-[0px]:px-8">
        <div className="md:pb-6 min-[0px]:pb-5">
          <motion.div
            initial={{
              opacity: 0.8,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="md:text-9xl sm:text-5xl min-[0px]:text-5xl font-extrabold tracking-wider drop-shadow-xl shadow-slate-500 font-suezone"
            style={{
              color: "rgb(22,78,99,0.2)",
            }}
          >
            Tranding
          </motion.div>
        </div>
        <Grid
          container
          xs={11}
          justifyContent="center"
        >
          <Grid
            xs={0}
            md={6}
            sx={{
              display: { md: "block", xs: "none" },
            }}
          >
            <div className="min-h-full min-w-full relative">
              <div className="center-v-h-absolute">
                {Loaded ? (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    className="text-2xl"
                  >
                    {Cities.filter((_, index) => index == textIndex).map(
                      (city) => (
                        <div
                          key={city.cityName}
                          className="text-6xl font-suezone tracking-wider font-bold"
                          style={{
                            color: color,
                            opacity: 0.7,
                          }}
                        >
                          {city.cityName}
                        </div>
                      ),
                    )}
                  </motion.div>
                ) : (
                  <Typography
                    component="div"
                    variant="h1"
                    width="100%"
                  >
                    <Skeleton />
                  </Typography>
                )}
              </div>
            </div>
          </Grid>
          <Grid md={6}>
            <Box
              sx={{
                width: { md: 700, xs: 250 },
                height: 400,
              }}
            >
              {Loaded ? (
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  loop={true}
                  className="mySwiper rounded-3xl"
                  onSlideChange={(swiper) => {
                    handleClick();
                    settextIndex(swiper.activeIndex);
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {Cities.map((city) => (
                    <SwiperSlide
                      className="flex justify-center items-center"
                      key={city.cityName}
                    >
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
                          <img
                            src={city.coverImageUrl}
                            alt={`${city.cityName}_cover`}
                            className="rounded-3xl object-cover md:w-[700px] w-[250px]"
                          />
                          <div className="md:hidden min-[0px]:flex min-h-full min-w-full bg-black opacity-50 absolute rounded-3xl"></div>
                          <motion.div
                            whileHover={{
                              opacity: 1,
                              color: amber[500],
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeIn",
                            }}
                            className="md:hidden min-[0px]:flex md:text-7xl min-[0px]:text-3xl opacity-60 font-suezone min-h-full min-w-full absolute rounded-3xl center-v-h text-white font-bold tracking-wider"
                          >
                            {city.cityName}
                          </motion.div>
                        </motion.div>
                      </Link>
                    </SwiperSlide>
                  ))}
                  <NavigationButton />
                </Swiper>
              ) : (
                <Skeleton
                  width="100%"
                  height="100%"
                  sx={{
                    borderRadius: 8,
                    backgroundColor: "#C6E0FF",
                  }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
