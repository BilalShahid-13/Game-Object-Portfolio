"use client";
import { montserrat } from "@/lib/utils";
import { gameGenres, platformList } from "@/lib/constant";
import { Variants } from 'framer-motion';
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { lazy } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const DomeGallery = lazy(()=>import("./DomeGallery"))
const RotatingText = lazy(()=>import("./RotatingText"))
export default function Discover() {
  return (
    <>
      <div
        className="flex bg-[#1c1600] w-full
        max-md:flex-col max-md:py-12 max-md:gap-4 max-md:w-fit">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3
          }}
          variants={containerVariants}
          className="select-none flex flex-col justify-center items-center w-full gap-6 mx-6 max-md:mx-0 max-sm:px-5">
          <motion.h1
            variants={itemVariants}
            className={`${montserrat.className}
            text-6xl font-black text-white uppercase italic text-center max-sm:text-4xl `}>
            Discover Our Game Collection
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={montserrat.style}
            className="text-white font-semibold text-xl max-md:text-lg max-sm:text-base">From relaxing puzzles to thrilling adventures, find your next mobile obsession with Game Object.</motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-row justify-center items-center gap-3">
            <p
              //  variants={itemVariants}
              style={montserrat.style}
              className="text-white font-medium"> Find our titles on your favorite platforms</p>
            <RotatingText
              texts={platformList}
              mainClassName="sm:px-2 md:px-3 bg-yellow-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.div>
          <motion.div className="grid grid-cols-4 gap-4 justify-start items-center
          max-sm:grid-cols-3
          "
            variants={itemVariants}
          >
            {gameGenres.map((genre, index) =>
              <Badge className="bg-yellow-500 text-white px-4 py-3"
                style={montserrat.style}
                key={index}>{genre}</Badge>)}
          </motion.div>
        </motion.div>
        <div
          className="w-screen h-screen max-md:w-full max-md:h-screen">
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
          />
        </div>
      </div>
    </>
  )
}
