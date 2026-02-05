"use client";
import { montserrat } from '@/lib/utils'
import Image from 'next/image'
import { itemVariants } from './heroImage'
import { motion } from "framer-motion"

export default function DownloadHero() {
  return (
    <motion.div className="relative w-70 h-70
    max-md:w-48 max-md:h-48 bg-linear-to-b from-white to-yellow-500/50 rounded-full flex flex-col items-center pt-12 overflow-hidden shadow-xl"
      variants={itemVariants}
    >

      {/* 2. Text Section: Moves to the top half */}
      <div className="flex flex-col justify-center items-center text-yellow-400 z-20
      max-md:gap-3">
        <h1 style={montserrat.style} className="font-bold text-6xl max-md:text-4xl leading-none">
          1.5
        </h1>
        <h1 style={montserrat.style} className="font-bold text-3xl uppercase tracking-tight max-md:text-xl max-md:bg-black/20 max-md:backdrop-blur-sm max-md:px-2 max-md:rounded-md">
          Billion
        </h1>
        <p style={montserrat.style} className="font-medium text-lg text-pink-400 max-md:text-lg max-md:bg-black/20 max-md:backdrop-blur-sm max-md:px-2 max-md:rounded-md">
          Downloads
        </p>
      </div>

      {/* 3. Mascot Image: Positioned at the bottom, overlapping the edge */}
      <Image
        width={400}
        height={400}
        alt="Mascot"
        src="/cute-dog.png"
        className="absolute -bottom-12 z-10 w-52 object-contain"
      />
    </motion.div>
  )
}
