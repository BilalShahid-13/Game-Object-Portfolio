"use client";
import Image from "next/image";
import Description from "./Description";
import Heading from "./Heading";
import Metrices from "./Metrices";
import HeroImage, { itemVariants } from "./heroImage";
import { montserrat } from "@/lib/utils";
import { motion, Variants } from "framer-motion"
import DownloadHero from "./downloadHero";

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // 0.3 seconds delay between each image
    }
  }
};

export default function Hero() {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* 1. Background Image Container */}
        {/* <div className="absolute inset-0 -z-10">
          <Image
            src="/Asset 2.svg"
            alt="Background"
            fill
            priority
            className="object-cover" // This prevents stretching
          />
        </div> */}

        {/* 2. Foreground Content */}

        <motion.div className="relative z-10 flex flex-col mt-32 justify-center items-center gap-3 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Starts animation when the section enters the viewport
          viewport={{ once: true }}
        >
          <HeroImage
            className="absolute left-10 top-0"
            src="/kids-playing-football.jpg"
          />

          <HeroImage
            className="absolute right-10 top-50"
            src="/3d-cartoon-back-school.jpg"
          />


          <Heading />
          <Description />
          <DownloadHero />

          <Metrices />
        </motion.div>
      </div>

    </>
  )
}
