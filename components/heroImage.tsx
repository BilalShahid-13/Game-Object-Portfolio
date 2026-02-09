"use client";
import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
// export default function HeroImage({ src, className }: { src: StaticImageData, className?: string }) {
//   return (
//     <>
//       <motion.div className={cn(`relative w-64 h-64 max-md:w-32 max-md:h-32 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]
//       max-sm:w-24 max-sm:h-24
//       ${className}`)}
//         variants={itemVariants}
//       >
//         <Image
//           src={src}
//           alt="Kids playing football"
//           fill
//           priority
//           loading="eager"
//           fetchPriority='high'
//           sizes="(max-width: 768px) 170px, 300px"
//           placeholder="blur"
//           className="object-cover"
//         />
//       </motion.div>
//     </>
//   )
// }

// HeroImage.tsx
export default function HeroImage({ src, className, isLCP = false }: { src: StaticImageData, className?: string, isLCP?: boolean }) {
  const containerClass = cn(`relative w-64 h-64 max-md:w-32 max-md:h-32 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-sm:w-24 max-sm:h-24`, className);

  // If it's the LCP image, render a normal div without motion props
  if (isLCP) {
    return (
      <div
      className={containerClass}
      >
        <Image
          src={src}
          alt="Kids playing"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 170px, 300px"
          placeholder="blur"
          className="object-cover"
        />
      </div>
    );
  }

  // Otherwise, keep the animation for the other images
  return (
    <motion.div className={containerClass} variants={itemVariants}>
      <Image src={src} alt="Kids playing" fill sizes="(max-width: 768px) 170px, 300px" className="object-cover" />
    </motion.div>
  );
}
