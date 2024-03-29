import React from "react";
import Appbar from "@/components/Reusable/Appbar";
import ContactUs from "@/components/ContactUs/ContactUs";
import { Toolbar } from "@mui/material";
import Footer from "@/components/Reusable/Footer";

export default function contactUs() {
  return (
    <div>
      <Appbar />
      <Toolbar />
      <ContactUs />
      <Footer/>
    </div>
  );
}
