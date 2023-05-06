import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import CasinoTwoToneIcon from "@mui/icons-material/CasinoTwoTone";
import { Skeleton } from "@mui/material";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "@/Firebase/Firebase";
import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/joy";
import { motion } from "framer-motion";
import Link from "next/link";
import { app } from "@/Firebase/Firebase";

export default function Gallery() {
  const [ImageUrl, setImageUrl] = React.useState<any[]>([]);
  const [Loading, setLoading] = React.useState(true);
  const [imageIndex, setImageIndex] = React.useState(
    Math.floor(Math.random() * (450 - 8 + 1)) + 8
  );
  const firestore = getFirestore(app);

  React.useEffect(() => {
    getGalleryData();
  }, [db]);

  const getGalleryData = async () => {
    const ref = `/Gujarat/Cities/Gallery/GalleryImageData`;
    const imageList = doc(db, ref);
    const mySnapshot = await getDoc(imageList);
    if (mySnapshot.exists()) {
      setImageUrl(mySnapshot.data().images);
      setLoading(false);
    }
  };

  const handleRandomized = () => {
    setImageIndex(Math.floor(Math.random() * (450 - 8 + 1)) + 8);
  };

  return (
    <div className="mt-32">
      <center className="md:px-32 min-[0px]:px-8">
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
          className="text-start md:text-9xl sm:text-5xl min-[0px]:text-5xl font-extrabold tracking-wider drop-shadow-xl shadow-slate-500 font-suezone"
          style={{
            color: "rgb(22,78,99,0.2)",
          }}
        >
          Gallery
        </motion.div>
        <div className="flex justify-end min-w-full mb-8">
          <Stack direction="row" gap={2}>
            <Tooltip title="Randomized" placement="left" arrow>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, rotate: 360 }}
                onClick={handleRandomized}
              >
                <CasinoTwoToneIcon
                  color="primary"
                  sx={{
                    fontSize: { xs: 30, md: 40 },
                  }}
                />
              </motion.button>
            </Tooltip>

            <Link href="/gallery">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white md:text-base min-[0px]:text-xs font-bold font-outfit tracking-wider bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 py-2 md:px-6 min-[0px]:px-3 rounded-full"
              >
                Show All
              </motion.button>
            </Link>
          </Stack>
        </div>
        {Loading ? (
          <Grid
            container
            xs={12}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {Array.from(Array(8)).map((_, index) => (
              <Grid xs={5} sm={5} md={4} lg={3} key={index}>
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
        ) : (
          <Grid
            container
            xs={12}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {ImageUrl.slice(imageIndex - 8, imageIndex).map((item) => (
              <Grid xs={6} sm={6} md={4} lg={3} key={item.title}>
                <Link href={`/${item.url}`}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="min-h-full min-w-full relative group"
                  >
                    <div
                      className="md:hidden min-[0px]:block group-hover:block min-h-full min-w-full absolute rounded-3xl"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0) 300px)",
                      }}
                    ></div>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                      }}
                      className="md:hidden min-[0px]:block group-hover:block"
                    >
                      <motion.div
                        initial={{
                          opacity: 0,
                        }}
                        whileInView={{
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: "easeInOut",
                        }}
                        className="text-white font-outfit font-bold md:tracking-wide min-[0px]:tracking-wider md:text-xl min-[0px]:text-xs"
                      >
                        {item.lName}
                      </motion.div>
                    </div>
                    <Image
                      src={item.src}
                      alt={item.title}
                      height={300}
                      width={500}
                      className="rounded-3xl"
                    />
                  </motion.div>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}
      </center>
    </div>
  );
}
