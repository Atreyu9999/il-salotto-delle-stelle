"use client";
import React from "react";
import HomeImg from "@/components/HomeImg/HomeImg";
import MainNavbar from "@/components/MainNavbar/MainNavbar";
import Works from "@/components/Works/Works";
import MiddleHeader from "@/components/MiddleHeader/MiddleHeader";
import FirstHeader from "@/components/FirstHeader/FirstHeader";
import Pricing from "@/components/Pricing/Pricing";
import { NextUIProvider } from "@nextui-org/react";
import Map from "@/components/Map/Map";
import Social from "@/components/Social/Social";
import Video1 from "@/components/Video_1/Video_1";
import Orari from "@/components/Orari/Orary";
import { DefaultSeo } from "next-seo";

export default function Home() {
  return (
    <NextUIProvider>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "it_IT",
          url: "https://il-salotto-delle-stelle.vercel.app/",
          siteName: "Il Salotto Delle Stelle di Rosario Autiero",
        }}
      />
      <HomeImg />
      <MainNavbar />
      <FirstHeader />
      <Works />
      <MiddleHeader />
      <Pricing />
      <Video1 />
      <Map address="via orlandi 6 - 40068 San Lazzaro Di Savena (BO)" />
      <Orari />
      <Social />
    </NextUIProvider>
  );
}
