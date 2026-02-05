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
      {/* <motion.div className="flex flex-row
  max-md:grid max-md:grid-cols-3
  max-sm:grid max-sm:grid-cols-2
  max-md:[&>*:last-child]:col-span-3
  max-md:gap-y-8 max-md:mt-16
  justify-center items-center gap-4 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Starts animation when the section enters the viewport
        viewport={{ once: true }}
      >
        {metricData.map((value, index) => <MetriceCard key={index} title={value.title} Icon={value.Icon} value={value.value} />)}
      </motion.div> */}
      <motion.div className="flex flex-row
  max-md:grid max-md:grid-cols-3
  max-sm:grid max-sm:grid-cols-2
  max-sm:px-5
  max-md:gap-y-8 max-md:mt-16
  justify-center items-center gap-4 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {metricData.map((value, index) => <MetriceCard key={index} title={value.title} Icon={value.Icon} value={value.value} />)}
      </motion.div>
    </>
  )
}
