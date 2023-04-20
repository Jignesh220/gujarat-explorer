import React from "react";
import { auth } from "@/Firebase/Firebase";
import { Button, Grid } from "@mui/joy";
import { motion } from "framer-motion";
import Image from "next/image";

const GridData = [
  {
    id: 1,
    title: "Add Tranding Citys",
    url: "add-tranding-citys",
  },
  {
    id: 2,
    title: "Add Citys",
    url: "add-citys",
  },
  {
    id: 3,
    title: "Add Citys information",
    url: "add-citys-information",
  },
  {
    id: 4,
    title: "update information",
    url: "update-information",
  },
];

export default function Admin() {
  const Logout = () => {
    auth.signOut();
  };
  return (
    <div>
      <div className="min-h-screen min-w-full relative">
        <Image
        src={'https://firebasestorage.googleapis.com/v0/b/gujarat-explorer.appspot.com/o/pexels-sam-kolder-2387873.jpg?alt=media&token=d45b8601-5aad-4e08-a036-2aa893551614'}
        alt="background_image_admin"
        fill={true}
        className="absolute object-cover"
        />
        <div className="min-h-full min-w-full absolute"
        style={{
            backgroundColor: '#0000005a'
        }}
        ></div>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          gap={2}
          sx={{ flexGrow: 1, minHeight: "100vh",position:'absolute' }}
          justifyContent="center"
          alignItems="center"
        >
          {GridData.map((item) => (
            <Grid xs={2} sm={4} md={3} key={item.id} sx={{
                borderRadius: '1.5rem',
                cursor: 'pointer'
            }}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                animate={{
                    backgroundColor: '#0000004a',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '1.5rem'
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeIn",
                }}
                className="min-w-full center-v-h h-72"
              >
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-violet-300 text-5xl text-center font-bold font-suezone tracking-wider">
                  {item.title}
                </div>
              </motion.div>
            </Grid>
          ))}
          <Grid xs={2} sm={4} md={3}
          sx={{
            borderRadius: '1.5rem',
            cursor: 'pointer'
        }}
          >
            <motion.div
              onClick={Logout}
              whileHover={{
                scale: 1.02,
              }}
              animate={{
                backgroundColor: '#0000004a',
                backdropFilter: 'blur(5px)',
                borderRadius: '1.5rem'
            }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
              className="min-w-full center-v-h  h-72 "
            >
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-violet-300 text-5xl text-center font-bold font-suezone tracking-wider">
                Log Out
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
