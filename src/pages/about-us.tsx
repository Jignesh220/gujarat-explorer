import React from "react";
import Appbar from "@/components/Reusable/Appbar";
import { Toolbar } from "@mui/material";
import Footer from "@/components/Reusable/Footer";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function about() {
  return (
    <div>
      <Appbar />
      <Toolbar />
      <AboutUs />
      <Footer />
    </div>
  );
}
