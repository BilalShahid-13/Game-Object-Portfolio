"use client";
import { montserrat } from '@/lib/utils';
import { motion } from "framer-motion";
import { Orbit, Trophy } from 'lucide-react';
import { Badge } from './ui/badge';
import OrbitGradientIcon, { ZapGradientIcon } from './OrbitGradientIcon';

export default function Heading() {
  return (
    <>
      <div className="text-center relative select-none
      flex flex-col gap-3 justify-center items-center
      "
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}

        >
          <Badge variant="default"
            className={`${montserrat.className} font-semibold text-sm`}>
            <Trophy size={14} className="text-yellow-400" />
            Ranked #1 Gaming Studio 2025
          </Badge>
        </motion.div>
        <div
        // className='inline-block px-8 py-4 backdrop-blur-md bg-black/20 rounded-2xl w-fit'
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-[12vw] md:text-[10vw] font-black text-black tracking-[-0.05em] leading-[0.85] uppercase italic"
          >
            DOMINATE <br />
            <span className="relative inline-block">
              THE REALM
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-500"
              />
            </span>
            {/* <Orbit className='absolute top-0 right-0 ' /> */}
            <OrbitGradientIcon />
            <ZapGradientIcon />
            <motion.div
              initial={{ opacity: 0,y:0,x:0 }}
              animate={{ opacity: 1,y:10,x:10 }}
              transition={{ delay: 1 }}
              className="absolute right-0 top-17 hidden lg:block rotate-90 origin-center"
            >
              <span className="text-[10px] font-bold tracking-[1em] text-yellow-500/60 uppercase whitespace-nowrap">
                GAME . OBJECT
              </span>
            </motion.div>
          </motion.h1>
        </div>

        {/* Sub-text positioned like Game District */}

      </div>

    </>
  )
}
