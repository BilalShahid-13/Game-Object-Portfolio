"use client";
import { montserrat } from "@/lib/utils";
import { motion } from "framer-motion";
import { Codesandbox } from "lucide-react";
import Image from "next/image";
import GrowthCard from "./GrowthCard";
import { containerVariants } from "./Hero";
import { itemVariants } from "./heroImage";
import { OrbitingCircles } from "./ui/orbiting-circles";
import dog from "@/app/assets/cute-dog.png"
import pig from "@/app/assets/pig.jpg"
import coin from "@/app/assets/coin.jpg"


export default function Growth() {
  return (
    <div className="flex flex-col gap-12 p-6"> {/* Main Column Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative flex flex-row justify-center items-center gap-6 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 overflow-hidden
        max-md:flex-col
        "
      >
        {/* Background Glows */}
        <motion.div variants={itemVariants} className="absolute -z-10 -left-10 -top-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-100 to-yellow-500 opacity-40 blur-3xl" />
        <motion.div variants={itemVariants} className="absolute -z-10 -right-10 -bottom-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-100 to-yellow-500 opacity-30 blur-3xl" />

        {/* tablet */}
        <div className="hidden max-md:flex max-md:flex-col justify-center items-center max-md:gap-4">
          <div className="hidden max-md:flex max-md:flex-row justify-center items-center max-md:gap-4">
            <Codesandbox className="w-24 h-24 p-4 bg-yellow-500 rounded-full text-white shadow-lg shrink-0 hidden max-md:flex" />
            {/* Content */}
            <motion.h1 variants={itemVariants} style={montserrat.style} className="text-xl font-bold w-full leading-tight">
              Growth Sandbox – Insight-Driven Game Growth
            </motion.h1>
          </div>
          <motion.p variants={itemVariants} style={montserrat.style} className="text-justify text-sm opacity-90">
            Harness the power of our advanced analytics to unlock what drives player engagement.
            Our data-driven insights and programs empower our team to refine each game’s potential.
          </motion.p>
        </div>
        {/* Content */}
        <motion.h1 variants={itemVariants} style={montserrat.style} className="text-2xl font-bold w-[40%] max-md:hidden leading-tight">
          Growth Sandbox – Insight-Driven Game Growth
        </motion.h1>

        <motion.p variants={itemVariants} style={montserrat.style} className="text-justify text-sm w-[40%] opacity-90 max-md:hidden">
          Harness the power of our advanced analytics to unlock what drives player engagement.
          Our data-driven insights and programs empower our team to refine each game’s potential.
        </motion.p>

        <Codesandbox className="w-24 h-24 p-4 bg-yellow-500 rounded-full text-white shadow-lg shrink-0 max-md:hidden" />
      </motion.div>

      {/* Section 2: Image & Insights */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative grid grid-cols-2 gap-6 overflow-hidden max-md:grid-cols-1"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="absolute -z-10 -left-10 -top-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-300 to-purple-800 opacity-40 blur-3xl" />
        <motion.div variants={itemVariants} className="absolute -z-10 -right-10 -bottom-10 w-52 h-52 rounded-full bg-pink-500 opacity-30 blur-md" />
        <GrowthCard heading={"Unlock Actionable Insights with Our Data Tools"}
          des={"  Our analytics suite dives deep into user behavior, spotlighting the most captivating features and identifying areas for improvement."}
          src="/dashboard-1.jpg"
        />
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden
        bg-zinc-200/20 backdrop-blur-xl p-10 rounded-3xl border border-white/20
        max-md:h-120">
          <span className="pointer-events-none whitespace-pre-wrap bg-linear-to-b from-zinc-800 to-zinc-800 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-black" style={montserrat.style}>
            Level Up Your Career
          </span>

          {/* Inner Circles */}
          <OrbitingCircles
            className="size-[30px] border-none "
            duration={20}
            delay={20}
            radius={80}
          >
            <Image src={dog}
              placeholder="blur"
              alt="asd" width={70} height={70} className="rounded-full" />
          </OrbitingCircles>

          {/* Outer Circles (Reverse) */}
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            reverse
            duration={20}
            radius={190}
          >
            <Image src={pig}
              placeholder="blur"
              alt="asd" width={70} height={70} className="rounded-full" />
            <Image src={coin}
            placeholder="blur"
            alt="asd" width={70} height={70} className="rounded-full" />
          </OrbitingCircles>
          <p style={montserrat.style}
            className="text-center">Ignite your passion and join us in redefining the future of gaming.</p>
        </div>

      </motion.div>
    </div>
  )
}
