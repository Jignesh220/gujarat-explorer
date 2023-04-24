import React, { useRef, useState } from "react";
import { Grid, Stack } from "@mui/joy";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
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
          <motion.div
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
                  Nalsarovar Bird Sanctuary
                </div>
                <div className="min-[0px]:mt-16 md:mt-1 md:px-16 min-[0px]:px-1">
                  <Grid container columns={13} gap={1} justifyContent="center">
                    <Grid xs={6}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F1?alt=media&token=6177ab64-1f79-40b1-ae33-4aa97c560eea"
                        }
                        alt="image_2"
                        width={700}
                        height={500}
                        className="rounded-2xl "
                      />
                    </Grid>
                    <Grid xs={6}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F2?alt=media&token=af4b88df-b337-4a4d-90d4-f05503f57418"
                        }
                        alt="image_2"
                        width={700}
                        height={500}
                        className="rounded-2xl "
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F3?alt=media&token=b9278484-c4d4-40e8-9669-d69839ddb94d"
                        }
                        alt="image_2"
                        width={700}
                        height={500}
                        className="rounded-2xl "
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F4?alt=media&token=3e0cc289-4489-4aa9-a28a-1a02da315009"
                        }
                        width={700}
                        height={500}
                        className="rounded-2xl "
                        alt="image_1"
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F5?alt=media&token=89bce4d7-7043-4358-8b42-26b0791c90c6"
                        }
                        alt="image_2"
                        width={700}
                        height={500}
                        className="rounded-2xl "
                      />
                    </Grid>
                    <Grid xs={4}>
                      <Image
                        src={
                          "https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/cities%2FAhmedabad%2F379cec3b-b3f4-436a-905b-1fdbddb795f4%2F6?alt=media&token=c95ce449-80ef-4329-9e45-3d88a550ce20"
                        }
                        alt="image_2"
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
          <motion.div
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
              Nalsarovar Bird Sanctuary
            </div>
            <Stack direction="column" gap={2}>
              <div className="text-start text-lg font-outfit text-white mt-8 tracking-wide">
                Nalsarovar Bird Sanctuary is a stunning natural haven located
                just an hour&#39;s drive away from Ahmedabad. Spread over an area of
                120.82 sq km, this sanctuary is a paradise for bird watchers and
                nature enthusiasts. It is home to more than 250 species of birds
                including pelicans, flamingos, egrets, herons, cranes, and many
                more.
              </div>
              <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                History of Nalsarovar
                <div className="mt-2 text-lg font-normal text-white">
                  The history of Nalsarovar dates back to the 15th century when
                  the lake was created as a result of the construction of a
                  check dam across the Sabarmati river. The lake was initially
                  used for irrigation and as a source of drinking water for
                  nearby villages. Over time, the lake became an important
                  habitat for a variety of bird species, and local communities
                  recognized its ecological significance. In the early 20th
                  century, the British colonial administration recognized the
                  importance of Nalsarovar as a wetland ecosystem and
                  established it as a protected area. In 1969, the Gujarat
                  government declared Nalsarovar a bird sanctuary to primarily
                  protect its bird population.
                </div>
              </div>

              <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                Best Time to go Nalsarovar
                <div className="mt-2 text-lg font-normal text-white">
                  The Ramsar Convention designation of Nalsarovar Bird Sanctuary
                  in 2012 recognized its ecological importance as a wetland
                  habitat for birds and other wildlife. The designation provides
                  a framework for the conservation and sustainable use of the
                  sanctuary and its surrounding wetlands. It also acknowledges
                  the socio-economic importance of the wetlands to the local
                  communities who depend on them for their livelihoods.The best
                  time to visit Nalsarovar Bird Sanctuary is during the winter
                  months from November to February. During this time, the
                  migratory birds flock to the sanctuary in large numbers,
                  creating a spectacular sight for visitors. The sanctuary also
                  has a few resident bird species which can be spotted
                  throughout the year.
                </div>
              </div>

              <div className="font-bold font-outfit text-xl tracking-wider text-blue-300">
                Conclusion
                <div className="mt-2 text-lg font-normal text-white">
                  Overall, a visit to Nalsarovar Bird Sanctuary is a great way
                  to unwind and reconnect with nature. The sanctuary&#39;s serene
                  atmosphere, breathtaking views, and diverse bird species make
                  it a perfect weekend getaway for families and nature
                  enthusiasts. It is a must-visit destination for anyone
                  visiting Ahmedabad.
                </div>
              </div>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
}
