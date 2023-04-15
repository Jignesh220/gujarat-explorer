import React from "react";
import "@splidejs/splide/css";
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

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import NavigationButton from "./NavigationButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const [ImageView1, setImageView1] = React.useState(false);
  const [ImageView2, setImageView2] = React.useState(false);
  const [ImageView3, setImageView3] = React.useState(false);
  const [ImageView4, setImageView4] = React.useState(false);
  const [ImageView5, setImageView5] = React.useState(false);
  const [ImageView6, setImageView6] = React.useState(false);
  const [ImageView7, setImageView7] = React.useState(false);
  const [ImageView8, setImageView8] = React.useState(false);
  const [ImageView9, setImageView9] = React.useState(false);
  const [ImageView10, setImageView10] = React.useState(false);
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
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView1(true);
                }}
                onViewportLeave={() => {
                  setImageView1(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView1
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView1
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">
                    Gir National Park
                  </div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Gir National Park
                  </div>
                </motion.div>
              </motion.div>
              <Image src={SasanGir} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onViewportEnter={() => {
                  setImageView2(true);
                }}
                onViewportLeave={() => {
                  setImageView2(false);
                }}
                animate={
                  ImageView2
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView2
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">
                    Jambughoda Wildlife Sanctuary
                  </div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Wildlife and safari park in Gujarat
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Jambughoda} alt="Image 2" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView3(true);
                }}
                onViewportLeave={() => {
                  setImageView3(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView3
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView3
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">
                    Modhera Sun Temple
                  </div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Historical landmark in Modhera, Gujarat
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Modhera} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView4(true);
                }}
                onViewportLeave={() => {
                  setImageView4(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView4
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView4
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Pavagadh</div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Hill station in India
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Pavagadh} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView5(true);
                }}
                onViewportLeave={() => {
                  setImageView5(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView5
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView5
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Rani Ki Vav</div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Historical landmark in Gujarat
                  </div>
                </motion.div>
              </motion.div>
              <Image src={RaniNiVav} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView6(true);
                }}
                onViewportLeave={() => {
                  setImageView6(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView6
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView6
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Rann of Kutch</div>
                </motion.div>
              </motion.div>
              <Image src={WhiteRan} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView7(true);
                }}
                onViewportLeave={() => {
                  setImageView7(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView7
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView7
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Saputara</div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Hill station in India
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Saputara} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView8(true);
                }}
                onViewportLeave={() => {
                  setImageView8(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView8
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView8
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Vadnagar</div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Historical landmark
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Vadnagar} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView9(true);
                }}
                onViewportLeave={() => {
                  setImageView9(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView9
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView9
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">
                    Akshardham Temple
                  </div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Hindu temple in Gandhinagar
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Akashardham} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-full min-w-full relative">
              <motion.div
                className="min-h-full min-w-full absolute rounded-3xl flex p-10"
                onViewportEnter={() => {
                  setImageView10(true);
                }}
                onViewportLeave={() => {
                  setImageView10(false);
                }}
                initial={{
                  
                  backdropFilter: "blur(5px)",
                  opacity: 1,
                  background: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={
                  ImageView10
                    ? {
                        
                        backdropFilter: "blur(0px)",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0) 300px)",
                        justifyContent: "center",
                        alignItems: "end",
                      }
                    : {}
                }
                transition={{
                  duration: 1,
                  ease: "easeIn",
                }}
              >
                <motion.div
                  initial={{
                    y: -40
                  }}
                  animate={
                    ImageView10
                      ? {
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    ease: "easeIn",
                  }}
                  className="text-3xl text-white font-bold"
                >
                  <div className="text-3xl text-center mb-3">Smritivan</div>
                  <div className="text-lg font-normal text-center text-slate-300">
                    Smritivan Earthquake Memorial and Museum
                  </div>
                </motion.div>
              </motion.div>
              <Image src={Miya} alt="Image 1" className="rounded-3xl" />
            </div>
          </SwiperSlide>
          <NavigationButton />
        </Swiper>
      </div>
    </div>
  );
}
