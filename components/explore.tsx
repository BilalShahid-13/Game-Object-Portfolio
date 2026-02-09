"use client";
import { gamesStudioList } from "@/lib/constant";
import { montserrat } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { itemVariants } from "./heroImage";
import { containerVariants } from "./Hero";


export default function Explore() {
  return (
    <>
      <div className="flex flex-col ">
        <motion.div className="relative flex flex-col gap-3 justify-center items-center bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3
          }}
          variants={containerVariants}>
          {/* Background Glows */}
          <motion.div variants={itemVariants} className="absolute -z-10 -left-10 -top-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-300 to-yellow-800 opacity-40 blur-3xl" />
          <motion.div variants={itemVariants} className="absolute -z-10 -right-10 -bottom-10 w-52 h-52 rounded-full bg-orange-500 opacity-30 blur-md" />
          <h1 style={montserrat.style} className="font-semibold text-5xl max-sm:text-3xl">
            Explore Our Studios
          </h1>
          <p style={montserrat.style}
            className="font-normal text-lg max-sm:text-base"
          >Where innovation meets creativity. Discover our network of world-class studios, all driven by the mission to redefine mobile entertainment</p>
        </motion.div>
        <div className="grid grid-cols-4 gap-6 justify-center max-sm:grid-cols-3 justify-items-center items-center w-fit mx-auto p-4">
          {gamesStudioList.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              /* Using aspect-square ensures the circle doesn't distort if dimensions change */
              className="relative w-24 h-24 overflow-hidden rounded-full bg-white/5 border border-white/10 shadow-xl group"
            >
              <Image
                src={value.src}
                placeholder="blur"
                alt={
                  value.title || "Game Studio"}
                fill
                className="object-contain p-3 transition-transform duration-300 group-hover:scale-110 rounded-full"
              />

              {/* Optional: Subtle inner glow for a "Premium" look */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_10px_rgba(255,255,255,0.1)] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
