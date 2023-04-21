import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import Logo from "../../images/Logo/logo.png";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "@/Firebase/Firebase";

function AdminAppbar() {
  const [user] = useAuthState(getAuth(app));
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeIn",
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#ffffff",
          backdropFilter: "blur(3px)",
          boxShadow: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingX: 2,
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#000",
            }}
          >
            <Image src={Logo} alt="Logo" width={30} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                color: "#000",
              }}
            >
              <Image src={Logo} alt="Logo" width={30} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            {user && (
              <button
                onClick={() => {
                  getAuth(app).signOut();
                }}
                className="text-white font-bold font-outfit tracking-wider bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 py-2 px-6 rounded-full"
              >
                Log out
              </button>
            )}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" },justifyContent:'end',mr: 3 }}>
            {user && (
              <motion.button
              whileHover={{
                scale: 1.08
              }}
              transition={{
                duration:.5,
                ease: 'easeIn'
              }}
                onClick={() => {
                  getAuth(app).signOut();
                }}
                className="text-white shadow-2xl shadow-slate-400 font-bold font-outfit tracking-wider bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600 py-2 px-6 rounded-full"
              >
                Log out
              </motion.button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
export default AdminAppbar;
