import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { db } from "@/Firebase/Firebase";
import { Grid, Stack } from "@mui/joy";
import Link from "next/link";
import { amber } from "@mui/material/colors";
import { Skeleton } from "@mui/material";

export default function ByCities() {
  const [Cities, setCities] = React.useState<any[]>([]);
  const [ArrayIndex, setArrayIndex] = React.useState(4);
  const [Loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    getUserData().then(() => {
      setLoaded(true);
    });
  }, [db]);

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
    <div className="min-w-full" id="ByCities">
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
              duration: 1,
              ease: "easeInOut",
            }}
            className="md:text-9xl sm:text-5xl min-[0px]:text-5xl font-extrabold tracking-wider drop-shadow-xl shadow-slate-500 font-suezone"
            style={{
              color: "rgb(22,78,99,0.2)",
            }}
          >
            City
          </motion.div>
          <div className="flex justify-end min-w-full">
            <motion.button
              initial={{
                opacity: 0.8,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (ArrayIndex === 4) {
                  setArrayIndex(Cities.length - 1);
                } else {
                  setArrayIndex(4);
                }
              }}
              className="text-white md:text-base min-[0px]:text-xs font-bold font-outfit tracking-wider bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 py-2 md:px-6 min-[0px]:px-3 rounded-full"
            >
              {ArrayIndex === 4 ? "Show More" : "Show Less"}
            </motion.button>
          </div>
        </div>
        {Loaded ? (
          <Grid
            container
            columns={{ xs: 12, sm: 12, md: 12 }}
            spacing={{ xs: 2, md: 3 }}
          >
            {Cities.slice(0, ArrayIndex).map((city) => (
              <Grid xs={6} lg={3} key={city.cityCode}>
                <Link href={`/city?c=${city.cityName}`}>
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="min-h-full min-w-full relative md:rounded-3xl min-[0px]:rounded-xl shadow-xl shadow-slate-500"
                  >
                    <div
                      className="min-h-full min-w-full absolute md:rounded-3xl min-[0px]:rounded-xl"
                      style={{
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
                      {city.cityName}
                    </motion.div>
                    <img
                      src={city.coverImageUrl}
                      alt={`${city.cityName}_cover`}
                      width={1000}
                      height={1000}
                      className="md:rounded-3xl min-[0px]:rounded-xl"
                    />
                  </motion.div>
                </Link>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            container
            xs={12}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {Array.from(Array(4)).map((_, index) => (
              <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                <Skeleton
                  variant="rectangular"
                  animation="pulse"
                  width="100%"
                  height={200}
                  sx={{
                    borderRadius: 8,
                    backgroundColor: "#C6E0FF",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
}
