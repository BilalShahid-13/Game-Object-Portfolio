"use client";
import { montserrat } from "@/lib/utils";
import { motion } from "framer-motion";
export default function Description() {
  return (
    <div className="flex w-full justify-center px-4" >

      {/* 2. The Blurred Box: inline-block + w-fit ensures it only hugs the content */}
      < div
      // className="inline-block w-fit backdrop-blur-md bg-black/20 p-4 rounded-xl border border-white/10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={`text-black text-center ${montserrat.className}
      max-w-lg text-sm md:text-base font-medium uppercase tracking-widest leading-relaxed`}
        >
          Experience ultra-low latency, professional level boosting, and immersive gameplay mechanics.
        </motion.p>
      </div >
    </div>
  )
}
