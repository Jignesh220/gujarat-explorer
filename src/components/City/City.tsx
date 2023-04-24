import React from "react";
import { useSearchParams } from "next/navigation";
import { Box, Stack } from "@mui/joy";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
  const [imageCover, setImageCover] = React.useState(images[0]);

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
                console.log(imageIndex - 1);
                setImageCover(images[imageIndex - 1]);
              } else {
                setimageIndex(9);
                console.log(9);
                setImageCover(images[9]);
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
                console.log(imageIndex + 1);
                setImageCover(images[imageIndex + 1]);
              } else {
                setimageIndex(0);
                console.log(0);
                setImageCover(images[0]);
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
        <Image
          src={imageCover.src}
          fill={true}
          alt="Cover_Image"
          className="bg-black"
        />
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
                  <div className="md:text-8xl min-[0px]:text-5xl font-suezone tracking-wider capitalize opacity-50 text-white text-center">
                    {imageCover.name}
                  </div>
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
                    {images.map((img) => (
                      <SwiperSlide key={img.id}>
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
                            opacity:0
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
                      </SwiperSlide>
                    ))}
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
