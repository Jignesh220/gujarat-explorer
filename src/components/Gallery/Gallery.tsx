import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  getFirestore,
} from "firebase/firestore";
import { db } from "@/Firebase/Firebase";
import { Button, CircularProgress, Grid } from "@mui/joy";
import { motion } from "framer-motion";
import Link from "next/link";
import { app } from "@/Firebase/Firebase";

export default function Gallery() {
  const [ImageUrl, setImageUrl] = React.useState<any[]>([]);
  const [Loading, setLoading] = React.useState(true);
  const firestore = getFirestore(app);

  React.useEffect(() => {
    // getUserData().then(() => {
    //   setLoading(false);
    // });
    getGalleryData();
  }, [db]);

  // const getUserData = async () => {
  //   const ref = `/Gujarat/Cities/locationData`;
  //   const imageList = collection(db, ref);
  //   const mySnapshot = await getDocs(imageList);
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image1,
  //         title: doc.data().locationName + "_1",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image2,
  //         title: doc.data().locationName + "_2",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image3,
  //         title: doc.data().locationName + "_3",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image4,
  //         title: doc.data().locationName + "_4",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image5,
  //         title: doc.data().locationName + "_5",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  //   mySnapshot.forEach((doc) => {
  //     setImageUrl((arr) => [
  //       ...arr,
  //       {
  //         src: doc.data().image6,
  //         title: doc.data().locationName + "_6",
  //         lName: doc.data().locationName,
  //         url: `cityitem?i=${doc.data().locationId}`,
  //       },
  //     ]);
  //   });
  // };
  const getGalleryData = async () => {
    const ref = `/Gujarat/Cities/Gallery/GalleryImageData`;
    const imageList = doc(db, ref);
    const mySnapshot = await getDoc(imageList);
    if (mySnapshot.exists()) {
      setImageUrl(mySnapshot.data().images);
      setLoading(false);
    }
  };
  if (Loading) {
    return (
      <div className="min-h-screen min-w-full center-v-h text-9xl  font-suezone">
        <CircularProgress variant="soft" size="lg" color="info" thickness={5} />
      </div>
    );
  }
  return (
    <div>
      <center>
        <div className="text-8xl font-suezone font-bold my-8 tracking-wide text-slate-400 opacity-50">
          Gallery
        </div>
        {/* <div className="mt-10">
          <Button variant="solid" color="primary" onClick={uploadGalleryData}>
            Upload
          </Button>
        </div> */}
        <Grid
          container
          xs={11.5}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {ImageUrl.map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={item.title}>
              <Link href={`/${item.url}`}>
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
                      className="text-white font-outfit font-bold md:tracking-wide min-[0px]:tracking-wider md:text-xl min-[0px]:text-sm"
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
      </center>
    </div>
  );
}
