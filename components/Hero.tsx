"use client";
import kids1 from "@/app/assets/3d-cartoon-back-school.avif";
import kids from "@/app/assets/kids-playing-football.avif";
import { Variants } from "framer-motion";
import Description from "./Description";
import Heading from "./Heading";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 0.3 seconds delay between each image
    }
  }
};

import { lazy } from "react";
const Metrices = lazy(() => import("./Metrices"))
const DownloadHero = lazy(() => import("./downloadHero"))
const HeroImage = lazy(() => import("./heroImage"))

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen w-full">

        <div className="
        relative z-10 flex flex-col mt-32 justify-center items-center gap-3 w-full"
        >
          <HeroImage
            className="animate-fade-up delay-1 absolute left-10 top-0 max-md:top-auto max-md:bottom-60 "
            src={kids}
            isLCP={true}
          />

          <HeroImage
            className="animate-fade-up delay-2 absolute right-10 top-50 max-md:top-auto max-md:bottom-60"
            src={kids1}
            isLCP={true}
          />

          <Heading />
          <Description />
          <DownloadHero />

          <Metrices />
        </div>
      </div>

    </>
  )
}
