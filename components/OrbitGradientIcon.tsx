import { Orbit, Zap } from 'lucide-react'
import { motion } from 'framer-motion';
export default function OrbitGradientIcon() {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="yellowOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* yellow-500 is roughly #EAB308, orange-500 is #F97316 */}
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        className="absolute top-0 right-0 -mr-8 size-10 max-sm:size-7"
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Orbit
          className="size-full" // Let the motion.div control the size/position
          style={{ stroke: 'url(#yellowOrangeGradient)' }}
        />
      </motion.div>
    </>
  )
}



export function ZapGradientIcon() {
  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="yellowOrangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {/* yellow-500 is roughly #EAB308, orange-500 is #F97316 */}
            <stop offset="0%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute top-0 left-0
        -mr-8 size-10 max-sm:size-7"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] ,delay:1}}
      >
        <Zap className="size-full"
          style={{ stroke: 'url(#yellowOrangeGradient)' }} />
      </motion.div >
    </>
  )
}
