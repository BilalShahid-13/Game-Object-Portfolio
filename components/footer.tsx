"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { containerVariants } from "./Hero";
import { itemVariants } from "./heroImage";

export default function GamingFooter() {
  return (
    <footer className="relative w-full px-4 pb-8 mt-20">
      {/* Glassmorphism Container */}
      <motion.div className="max-w-7xl mx-auto rounded-[40px] border border-white/20 bg-white/40 backdrop-blur-xl shadow-2xl overflow-hidden p-12 flex flex-col md:flex-row justify-between items-start gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}>

        {/* Left Column: Branding & Socials */}
        <motion.div className="flex flex-col gap-6" variants={itemVariants}>
          <div className="flex items-center gap-2">
            {/* Replace with your specific bolt logo */}
            <div className="relative h-auto bg-white rounded-full flex items-center justify-center shadow-sm py-4 px-8 max-sm:w-full gap-3">
              <Image src={"/logo-1.png"} width={40} height={40} alt='logo' priority className='w-8 h-8' />
              <span className="text-yellow-500 font-black text-2xl max-sm:text-xl">Game Object</span>
            </div>
          </div>

          <div className="flex gap-4">
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitter} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Facebook} />
          </div>

          <p className="text-gray-500 text-sm font-medium mt-4">
            © Game Object 2026
          </p>
        </motion.div>

        {/* Center Column: Navigation */}
        <motion.div className="flex flex-col gap-4" variants={itemVariants}>
          <h4 className="font-bold text-gray-900 text-lg">Home</h4>
          <nav className="flex flex-col gap-2">
            <FooterLink text="About" />
            <FooterLink text="Games" />
            <FooterLink text="Contact Us" />
          </nav>
        </motion.div>

        {/* Right Column: Contact */}
        <div className="md:text-right">
          <a
            href="mailto:hello@gamedistrict.co"
            className="text-gray-600 hover:text-yellow-500 font-semibold transition-colors text-lg max:sm:text-base max-sm:font-medium"
          >
            hello@gameobject.co
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

// Sub-components for cleaner code
const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="p-2 rounded-full text-gray-400 hover:text-yellow-500 hover:bg-yellow-500/10 transition-all">
    <Icon size={20} strokeWidth={2.5} />
  </a>
);

const FooterLink = ({ text }: { text: string }) => (
  <a href="#" className="text-gray-500 hover:text-yellow-500 font-medium transition-colors max-sm:text-sm">
    {text}
  </a>
);