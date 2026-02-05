"use client";
import { montserrat } from '@/lib/utils';
import { motion } from "framer-motion";
import Image from 'next/image';
import { itemVariants } from './heroImage';

export default function GrowthCard({ heading, des, src }: { heading: string; des: string; src: string }) {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="max-w-2xl bg-zinc-200/30 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl">

        <motion.h1
          variants={itemVariants}
          style={montserrat.style} className="text-3xl font-bold mb-2 text-yellow-950">
          {heading}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          style={montserrat.style} className="opacity-90 text-yellow-900 mb-6">
          {des}
        </motion.p>

        {/* Image Container with Blur Effect */}
        <div className="relative w-full h-80 overflow-hidden rounded-xl shadow-inner group">
          {/* This creates a glass-like finish over the image */}
          <div className="absolute inset-0 z-10 bg-white/5 pointer-events-none" />

          <Image
            src={src}
            alt="Dashboard Analytics"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </motion.div>
    </>
  )
}
