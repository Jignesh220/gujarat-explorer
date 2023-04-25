import React, { useRef, useState } from "react";
import { CircularProgress, Grid, Stack } from "@mui/joy";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/Firebase/Firebase";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const useSearch = useSearchParams();
  const [Location, setLocation] = React.useState<any[]>([]);
  const locationId = useSearch.get("i");
  React.useEffect(() => {
    if (locationId) {
      getLocationData();
    }
    setTimeout(() => {
      if (!locationId) {
        router.push("/");
      }
    }, 8000);
  }, [useSearch.get("i")]);

  const getLocationData = async () => {
    const ref = `/Gujarat/Cities/locationData`;
    const citiesImformation = collection(db, ref);
    const q = query(citiesImformation, where("locationId", "==", locationId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setLocation((arr) => [...arr, doc.data()]);
      console.log(doc.data());
    });
  };
  return (
    <div>
      <Grid container columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid
          xs={12}
          md={6}
          sx={{
            minHeight: "100vh",
            padding: 2,
            backgroundColor: "#fff",
            position: "relative",
          }}
        >
          {Location.map((item) => (
            <motion.div
              key={item.locationDataId}
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className="min-h-full min-w-full rounded-3xl"
            >
              <div className="center-v-h-absolute min-w-full">
                <center>
                  <div className="md:hidden min-[0px]:block text-5xl font-outfit font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-violet-400">
                    {item.locationName}
                  </div>
                  <div className="min-[0px]:mt-16 md:mt-1 md:px-16 min-[0px]:px-1">
                    <Grid
                      container
                      columns={13}
                      gap={1}
                      justifyContent="center"
                    >
                      <Grid xs={6}>
                        <Image
                          src={item.image1}
                          alt="image_1"
                          width={700}
                          height={500}
                          className="rounded-2xl "
                        />
                      </Grid>
                      <Grid xs={6}>
                        <Image
                          src={item.image2}
                          alt="image_2"
                          width={700}
                          height={500}
                          className="rounded-2xl "
                        />
                      </Grid>
                      <Grid xs={12}>
                        <Image
                          src={item.image3}
                          alt="image_3"
                          width={700}
                          height={500}
                          className="rounded-2xl "
                        />
                      </Grid>
                      <Grid xs={4}>
                        <Image
                          src={item.image4}
                          width={700}
                          height={500}
                          className="rounded-2xl "
                          alt="image_4"
                        />
                      </Grid>
                      <Grid xs={4}>
                        <Image
                          src={item.image5}
                          alt="image_5"
                          width={700}
                          height={500}
                          className="rounded-2xl "
                        />
                      </Grid>
                      <Grid xs={4}>
                        <Image
                          src={item.image6}
                          alt="image_6"
                          width={700}
                          height={500}
                          className="rounded-2xl  "
                        />
                      </Grid>
                    </Grid>
                  </div>
                </center>
              </div>
            </motion.div>
          ))}
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            minHeight: "100vh",
            padding: { md: 2, xs: 1 },
            backgroundColor: "#fff",
          }}
        >
          {Location.map((item) => (
            <motion.div
              key={item.locationDataId}
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              className="min-h-full min-w-full bg-gradient-to-br from-slate-800 from-10% via-slate-900 to-black to-95% shadow-2xl shadow-slate-200 rounded-3xl py-16 md:px-14 min-[0px]:px-5 text-white"
            >
              <div className="text-5xl text-center font-outfit font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-blue-600 to-violet-600">
                {item.locationName}
              </div>
              <Stack direction="column" gap={2}>
                <div className="text-start text-lg font-outfit text-white mt-8 tracking-wide">
                  {item.IntroCity}
                </div>
                <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                  {item.mainTitle}
                  <div className="mt-2 text-lg font-normal text-white">
                    {item.mainpara}
                  </div>
                </div>

                <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                  {item.subTitle}
                  <div className="mt-2 text-lg font-normal text-white">
                    {item.subPara}
                  </div>
                </div>

                <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                  {item.subTitle2}
                  <div className="mt-2 text-lg font-normal text-white">
                    {item.saubpara2}
                  </div>
                </div>
              </Stack>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
