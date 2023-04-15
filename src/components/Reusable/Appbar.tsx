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
        ease: 'easeIn',
    }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "transparent",
          boxShadow: 0,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            paddingX: 2,
          }}
        >
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "#000",
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".08rem",
            }}
          >
            <div className="text-black">Tourism</div>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".08rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tourism
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" },mr: 3 }}>
            <Stack direction="row" gap={2}>
              <div className="cursor-pointer text-black">Home</div>
              <div className="cursor-pointer text-black">Category</div>
              <div className="cursor-pointer text-black">Gallay</div>
              <div className="cursor-pointer text-black">Contact Us</div>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
export default Appbar;
