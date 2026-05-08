"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { montserrat } from "@/lib/utils"; // Assumes your project's utility for the font
import { motion } from "framer-motion";
import {
    Download,
    Gamepad2,
    Globe,
    Mail,
    ShieldCheck,
    Smartphone,
    Star,
    Trophy
} from "lucide-react";

// Reusing the animation logic from your Hero.tsx and heroImage.tsx
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
} as const;

const games = [
    {
        title: "Extreme Stunts GT Racing",
        description: "Experience adrenaline-pumping racing with impossible stunts. Join over 5 million players worldwide in the ultimate GT challenge.",
        downloads: "5M+",
        rating: "4.5/5",
        link: "https://play.google.com/store/apps/details?id=com.madcap.extreme.stunts.gt.racing",
        color: "from-yellow-500 to-orange-600",
        tags: ["Racing", "Stunts", "Action"],
        isPopular: true
    },
    {
        title: "Drive Maze Parking Challenge",
        description: "Master the art of precision driving. Navigate through complex mazes and challenging parking spots in this top-tier simulator.",
        downloads: "100K+",
        rating: "4.2/5",
        link: "https://play.google.com/store/apps/details?id=com.varleytg.drivemaze.parking.challenge",
        color: "from-blue-500 to-indigo-600",
        tags: ["Simulation", "Parking", "Strategy"],
        isPopular: false
    }
];


export default function LandingPage() {
    // const lenis = useLenis();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            if ((window as any).lenis) {
                (window as any).lenis.scrollTo(element, {
                    offset: -80,
                    duration: 1.5,
                });
            } else {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    return (
        <div className="bg-[#0d0d00] text-[#f5f0e0] min-h-screen selection:bg-yellow-500/30">
            {/* 1. NAVIGATION */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0d0d00]/80 border-b border-white/10 px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center font-black text-black">B</div>
                    <span className={`${montserrat.className} font-extrabold tracking-tighter`}>
                        BOWMAN <span className="text-yellow-500">FLEET</span>
                    </span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-semibold opacity-70">
                    <a href="#games"
                        onClick={(e) => scrollToSection(e, "games")}
                        className="hover:text-yellow-500 transition-colors cursor-pointer"
                    >Games</a>
                    <a href="#about" onClick={(e) => scrollToSection(e, "about")}
                        className="hover:text-yellow-500 transition-colors cursor-pointer">About</a>
                    <a href="mailto:admin@bowmanfleetllc.com" className="hover:text-yellow-500 transition-colors">Contact</a>
                </div>
                <Button size="sm" className="bg-yellow-500 text-black font-bold hover:bg-yellow-400">
                    Get Started
                </Button>
            </nav>

            {/* 2. HERO SECTION */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                {/* Background Glows based on your Growth.tsx logic */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-500/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="max-w-5xl mx-auto text-center relative z-10"
                >
                    <motion.div variants={itemVariants}>
                        <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 mb-6 px-4 py-1">
                            🚀 5,000,000+ Downloads Worldwide
                        </Badge>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        className={`${montserrat.className} text-6xl md:text-8xl font-black italic uppercase leading-[0.9] mb-8`}
                    >
                        Redefining <span className="text-yellow-500">Mobile</span> Entertainment
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto mb-10">
                        Bowman Fleet Solutions LLC develops high-octane racing experiences and precision simulators that dominate the charts.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                        <Button className="h-14 px-8 bg-yellow-500 text-black font-black text-lg rounded-2xl hover:scale-105 transition-transform">
                            EXPLORE OUR GAMES
                        </Button>
                        <Button variant="outline" className="h-14 px-8 border-white/20 backdrop-blur-md font-bold text-lg rounded-2xl">
                            LEARN MORE
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* 3. FEATURED GAMES (GRID) */}
            <section id="games" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-[#1c1600] to-transparent">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <Badge className="bg-yellow-500 text-black font-bold mb-4 uppercase tracking-widest">Our Portfolio</Badge>
                            <h2 className={`${montserrat.className} text-5xl font-black italic uppercase`}>Top Rated Games</h2>
                        </div>
                        <p className="max-w-md opacity-60 text-sm md:text-right">
                            Join millions of players in our highly immersive environments designed for maximum performance and thrill.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {games.map((game, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-2xl hover:border-yellow-500/40 transition-all duration-500 shadow-2xl"
                            >
                                {game.isPopular && (
                                    <div className="absolute top-6 right-6 z-20 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full animate-pulse">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="p-8 md:p-12">
                                    <div className="flex items-center gap-5 mb-8">
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${game.color} flex items-center justify-center shadow-lg`}>
                                            <Gamepad2 className="w-10 h-10 text-white" />
                                        </div>
                                        <div>
                                            <h3 className={`${montserrat.className} text-3xl font-bold leading-tight`}>{game.title}</h3>
                                            <div className="flex gap-2 mt-2">
                                                {game.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-yellow-500/80">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="opacity-70 mb-8 leading-relaxed text-lg">
                                        {game.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/5 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase opacity-40 mb-1">Downloads</span>
                                            <div className="flex items-center gap-2">
                                                <Trophy className="w-5 h-5 text-yellow-500" />
                                                <span className="text-2xl font-black">{game.downloads}</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold uppercase opacity-40 mb-1">Store Rating</span>
                                            <div className="flex items-center gap-2">
                                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                                <span className="text-2xl font-black">{game.rating}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button
                                        asChild
                                        className="w-full h-16 bg-yellow-500 hover:bg-yellow-400 text-black font-black text-lg rounded-2xl"
                                    >
                                        <a href={game.link} target="_blank" rel="noopener noreferrer">
                                            <Download className="mr-2 h-6 w-6" /> PLAY ON GOOGLE PLAY
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. COMPANY STATS / ABOUT */}
            <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: ShieldCheck, title: "Secure Gaming", desc: "Our fleet solutions ensure safe and fair play for all users." },
                        { icon: Globe, title: "Global Reach", desc: "Operating in over 50+ countries with localized experiences." },
                        { icon: Smartphone, title: "Optimized Tech", desc: "Games built to run smoothly on both high-end and entry-level devices." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                            <item.icon className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className={`${montserrat.className} text-xl font-bold mb-3`}>{item.title}</h4>
                            <p className="opacity-60 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. FOOTER / CONTACT */}
            <footer className="bg-[#050500] border-t border-white/10 pt-20 pb-10 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                        <div className="max-w-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-black text-black">B</div>
                                <span className={`${montserrat.className} font-extrabold`}>BOWMAN FLEET SOLUTIONS</span>
                            </div>
                            <p className="opacity-50 text-sm">
                                Leading the mobile gaming industry with data-driven fleet solutions and immersive interactive experiences.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
                            <div className="flex flex-col gap-4">
                                <span className="font-black text-yellow-500 uppercase tracking-widest text-[10px]">Contact</span>
                                <a href="mailto:admin@bowmanfleetllc.com" className="hover:text-yellow-500 flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> admin@bowmanfleetllc.com
                                </a>
                                <span className="opacity-50 flex items-center gap-2"><Globe className="w-4 h-4" /> bowmanfleetllc.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-[10px] font-bold opacity-30 uppercase tracking-widest">
                            © 2024 Bowman Fleet Solutions LLC. All Rights Reserved.
                        </p>
                        <div className="flex gap-6 text-[10px] font-bold opacity-30 uppercase tracking-widest">
                            <a href="#" className="hover:opacity-100">Privacy Policy</a>
                            <a href="#" className="hover:opacity-100">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}