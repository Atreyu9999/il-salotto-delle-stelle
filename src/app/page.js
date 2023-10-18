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

export default function Home() {
  return (
    <NextUIProvider>
      <HomeImg />
      <MainNavbar />
      <FirstHeader />
      <Works />
      <MiddleHeader />
      <Video1 />
      <Pricing />
      <Map address="via orlandi 6 - 40068 San Lazzaro Di Savena (BO)" />

      <Social />

      {/* <nav
        className="navbar sticky-top navbar-expand-lg navbar-light bg-white"
        data-spy="affix"
        data-offset-top="510"
      >
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse mt-sm-20 navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">
                  Resume
                </a>
              </li>
            </ul>
            <ul className="navbar-nav brand">
              <img src="" alt="" className="brand-img" />
              <li className="brand-txt">
                <h5 className="brand-title">John Doe</h5>
                <div className="brand-subtitle">Web Designer | Developer</div>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="#blog" className="nav-link">
                  Blog
                </a>
              </li>
              <li className="nav-item last-item">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </NextUIProvider>
  );
}
