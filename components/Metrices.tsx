"use client";

import MetriceCard from "./metriceCard";
import { motion } from "framer-motion";
import { containerVariants } from "./Hero";
import { LucideIcon } from "lucide-react";
import { metricData } from "@/lib/constant";

export interface IMetricData {
  title: string;
  Icon: LucideIcon
  value: number;
}



export default function Metrices() {
  return (
    <>
      {/* <MagicBento
        textAutoHide={true}
        enableStars
        enableSpotlight
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism
        clickEffect
        spotlightRadius={150}
        particleCount={12}
        glowColor="151, 60, 0"
        disableAnimations={false}
      /> */}
      <motion.div className="flex flex-row justify-center items-center gap-4 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Starts animation when the section enters the viewport
        viewport={{ once: true }}
      >
        {metricData.map((value, index) => <MetriceCard key={index} title={value.title} Icon={value.Icon} value={value.value} />)}
      </motion.div>
    </>
  )
}
