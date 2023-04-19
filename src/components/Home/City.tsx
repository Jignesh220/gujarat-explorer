import React from "react";
import { Grid, Container } from "@mui/joy";
import Image from "next/image";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Akshardham from "../../images/akashardham.webp";
import { motion } from "framer-motion";
import { blue, red, amber } from "@mui/material/colors";
import Link from "next/link";

export default function City() {
  return (
    <div className="min-w-full">
      <div className="md:px-32 min-[0px]:px-8">
        <div className="md:pb-12 min-[0px]:pb-5">
          <div
            className="md:text-9xl sm:text-5xl min-[0px]:text-5xl font-extrabold tracking-wider drop-shadow-2xl font-suezone"
            style={{
              color: "rgb(22,78,99,0.2)",
            }}
          >
            City
          </div>
        </div>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12 }}
          spacing={{xs: 2,md: 3}}
        >
          <Grid xs={6} lg={3}>
            <Link href={'/city?c=ahmedabad'}>
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
              <div
                className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
                style={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "#0000007a",
                }}
              />
              <motion.div
                whileHover={{
                  opacity: 1,
                  color: amber[500],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
                className="lg:text-5xl md:text-4xl min-[0px]:text-xl opacity-60 font-suezone min-h-full min-w-full absolute rounded-3xl center-v-h text-white font-bold tracking-wider"
              >
                Ahmedabad
              </motion.div>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover.webp?alt=media&token=18f28390-7b58-4997-ae6d-8c21c13d79b4"
                }
                alt="Ahmedabad_cover"
                width={1000}
                height={1000}
                className="md:rounded-3xl min-[0px]:rounded-xl"
              />
            </motion.div>
            </Link>
          </Grid>
          <Grid xs={6} lg={3}>
          <Link href={'/city?c=gandhinagar'}>
            <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }} 
            className="min-h-full min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500">
              <div
                className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
                style={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "#0000007a",
                }}
              />
              <motion.div
                whileHover={{
                  opacity: 1,
                  color: amber[500],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
                className="lg:text-5xl md:text-4xl min-[0px]:text-xl opacity-60 font-suezone min-h-full min-w-full absolute rounded-3xl center-v-h text-white font-bold tracking-wider"
              >
                Gandhinagar
              </motion.div>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Gandhinagar%2Fcover.webp?alt=media&token=1bcd18f0-6836-4f51-bbab-c1d87e12d521"
                }
                alt="Gandhinagar_cover"
                width={1000}
                height={1000}
                className="md:rounded-3xl min-[0px]:rounded-xl"
              />
            </motion.div></Link>
          </Grid>
          <Grid xs={6} lg={3}>
          <Link href={'/city?c=vadodara'}>
            <motion.div 
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }}
            className="min-h-full min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500">
              <div
                className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
                style={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "#0000007a",
                }}
              />
              <motion.div
                whileHover={{
                  opacity: 1,
                  color: amber[500],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
                className="lg:text-5xl md:text-4xl min-[0px]:text-xl opacity-60 font-suezone min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl center-v-h text-white font-bold tracking-wider"
              >
                Vadodara
              </motion.div>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Vadodara%2Fcover.webp?alt=media&token=8bc0f323-4fb3-4d74-aec3-66364ecbf855"
                }
                alt="Vadodara_cover"
                width={1000}
                height={1000}
                className="md:rounded-3xl min-[0px]:rounded-xl"
              />
            </motion.div>
            </Link>
          </Grid>
          <Grid xs={6} lg={3}>
          <Link href={'/city?c=ahmedabad'}>
            <motion.div 
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }}
            className="min-h-full min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500">
              <div
                className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
                style={{
                  backdropFilter: "blur(1px)",
                  backgroundColor: "#0000007a",
                }}
              />
              <motion.div
                whileHover={{
                  opacity: 1,
                  color: amber[500],
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeIn",
                }}
                className="lg:text-5xl md:text-4xl min-[0px]:text-xl opacity-60 font-suezone min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl center-v-h text-white font-bold tracking-wider"
              >
                Ahmedabad
              </motion.div>
              <Image
                src={
                  "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/Ahmedabad%2Fcover.webp?alt=media&token=18f28390-7b58-4997-ae6d-8c21c13d79b4"
                }
                alt="Ahmedabad_cover"
                width={1000}
                height={1000}
                className="md:rounded-3xl min-[0px]:rounded-xl"
              />
            </motion.div>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="min-h-screen"></div>
    </div>
  );
}
