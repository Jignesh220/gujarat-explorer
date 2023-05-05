import React from "react";
import Head from "next/head";
import Gallery from "@/components/Gallery/Gallery";
import Appbar from "@/components/Reusable/Appbar";
import Footer from "@/components/Reusable/Footer";
import {Toolbar} from '@mui/material'

export default function gallery() {
  return (
    <div>
      <Head>
        <title>Tourism App | Gallery</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1F487E" />
        <link rel="apple-touch-icon" href="/icon-192-maskable.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#1F487E" />
      </Head>
      <div>
        <Appbar />
        <Toolbar/>
        <Gallery />
        {/* <div className="text-5xl font-outfit font-bold text-center min-h-screen pt-8">Coming Soon</div> */}
        <Footer />
      </div>
    </div>
  );
}
