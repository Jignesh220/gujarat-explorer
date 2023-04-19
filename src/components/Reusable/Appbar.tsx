import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/joy";
import { motion } from "framer-motion";
import Logo from "../../images/Logo/logo.png";
import Image from "next/image";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Appbar() {
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
          background: 'linear-gradient(to right,#ffffff2a,#ffffff2a ,#002BFF8a )',
          backdropFilter: 'blur(3px)',
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
                color: '#000'
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image src={Logo} alt="Logo" width={30} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" }, mr: 3 }}>
            <Stack direction="row" gap={2}>
              <div className="cursor-pointer text-white font-athiti font-semibold tracking-wide">Home</div>
              <div className="cursor-pointer text-white font-athiti font-semibold tracking-wide">Category</div>
              <div className="cursor-pointer text-white font-athiti font-semibold tracking-wide">Gallay</div>
              <div className="cursor-pointer text-white font-athiti font-semibold tracking-wide">Contact Us</div>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
export default Appbar;
