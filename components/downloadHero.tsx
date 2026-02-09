"use client";
import dog from "@/app/assets/cute-dog.png";
import { montserrat } from '@/lib/utils';
import Image from 'next/image';

export default function DownloadHero() {
  return (
    <div className="relative w-70 h-70
    max-md:w-48 max-md:h-48 bg-linear-to-b from-white to-yellow-500/50 rounded-full flex flex-col items-center pt-12 overflow-hidden shadow-xl animate-fade-up delay-3"
    >
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

      <Image
        alt="Mascot"
        src={dog}
        placeholder='blur'
        sizes="(max-width: 768px) 170px, 300px"
        priority
        fetchPriority='high'
        className="absolute -bottom-12 z-10 w-52 object-contain"
      />
    </div>
  )
}
