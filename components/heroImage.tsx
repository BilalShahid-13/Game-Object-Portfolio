"use client";

import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Image from "next/image";

export const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
export default function HeroImage({ src, className }: { src: string, className?: string }) {
  return (
    <>
      <motion.div className={cn(`relative w-64 h-64 max-md:w-32 max-md:h-32 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]
      max-sm:w-24 max-sm:h-24
      ${className}`)}
        variants={itemVariants}
      >
        <Image
          src={src}
          alt="Kids playing football"
          fill
          className="object-cover"
        />
      </motion.div>
    </>
  )
}
