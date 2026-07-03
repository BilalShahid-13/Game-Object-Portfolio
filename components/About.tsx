import { cn } from "@/lib/utils";
import { Gamepad2, Globe2, Star, Trophy, Users2, Zap } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

interface RatingItem {
  platform: string;
  rating: number;
  reviewCount: string;
  logoSrc: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const RATINGS: RatingItem[] = [
  { platform: "Google Play", rating: 4.8, reviewCount: "2.1M+", logoSrc: "/android.png" },
  { platform: "App Store", rating: 4.7, reviewCount: "980K+", logoSrc: "/apple-logo.png" },
  { platform: "Amazon", rating: 4.6, reviewCount: "310K+", logoSrc: "/icons8-amazon-appstore-96.png" },
  { platform: "Google Play", rating: 4.8, reviewCount: "2.1M+", logoSrc: "/android.png" },
  { platform: "App Store", rating: 4.7, reviewCount: "980K+", logoSrc: "/apple-logo.png" },
  { platform: "Amazon", rating: 4.6, reviewCount: "310K+", logoSrc: "/icons8-amazon-appstore-96.png" },
];

const STATS = [
  { icon: Gamepad2, label: "Games Published", value: "1,000+" },
  { icon: Users2, label: "Daily Active Users", value: "20M+" },
  { icon: Globe2, label: "Countries Reached", value: "120+" },
  { icon: Trophy, label: "Industry Awards", value: "48" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={
            i < Math.floor(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-neutral-200 text-neutral-200"
          }
        />
      ))}
    </span>
  );
}

function RatingCard({ item }: { item: RatingItem }) {
  return (
    <div className="flex items-center gap-4 mx-6 py-3 px-6 rounded-xl border border-neutral-200 bg-white shadow-sm shrink-0 min-w-[220px]">
      <Image
        src={item.logoSrc}
        alt={item.platform}
        width={28}
        height={28}
        quality={60}
        priority
        fetchPriority="high"
        loading="eager"
        className="object-contain opacity-70"
      />
      <div>
        <p className="text-xs text-neutral-500 font-medium tracking-wide uppercase">
          {item.platform}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <StarRating rating={item.rating} />
          <span className="text-xs font-bold text-neutral-800">{item.rating}</span>
          <span className="text-xs text-neutral-400">({item.reviewCount})</span>
        </div>
      </div>
    </div>
  );
}

/** Reusable standalone card — import and use anywhere */
export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-500">
      {/* Amber glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-transparent to-amber-400/5" />

      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden bg-neutral-100">
        <Image
          src={member.imageUrl}
          alt={member.name}
          fill
          quality={60}
          priority
          fetchPriority="high"
          loading="eager"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle bottom fade into card bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>

      {/* Info */}
      <div className="relative px-4 py-3">
        <h3 className="text-sm font-semibold text-neutral-900 leading-tight">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs text-amber-500 font-medium">
          {member.position}
        </p>
      </div>

      {/* Amber accent line slides in on hover */}
      <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

// ─── Marquee Strip ────────────────────────────────────────────────────────────

function RatingMarquee() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-50 to-transparent" />

      {/* Track — uses animate-marquee from globals.css */}
      <div
        className="flex w-max animate-marquee"
        style={{ ["--duration" as string]: "28s", ["--gap" as string]: "0px" } as React.CSSProperties}
      >
        {RATINGS.map((item, i) => (
          <RatingCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

interface AboutPageProps {
  /** Pass TEAM_MEMBERS.map(...) from the page — keeps this file import-free */
  teamCards?: React.ReactNode;
}

export default function AboutPage({ teamCards }: AboutPageProps) {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center pt-36 pb-24 px-6">
        {/* Soft amber radial glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[480px] bg-amber-400/15 blur-[120px] rounded-full" />

        {/* Tag pill */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/60 bg-amber-50 px-4 py-1 text-xs font-semibold text-amber-600 uppercase tracking-widest mb-6">
          <Zap size={11} />
          Who we are
        </span>

        <h1 className="relative max-w-4xl font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-neutral-900">
          We Build Games{" "}
          <span className="text-amber-400">Millions Play</span>,{" "}
          <br className="hidden sm:block" />
          Every Single Day.
        </h1>

        <p className="relative mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
          Game Object is a mobile-first studio crafting hyper-casual and simulation
          experiences loved across 120+ countries. We obsess over fun, polish, and
          retention — so every player keeps coming back.
        </p>
      </section>

      {/* ── RATING MARQUEE ────────────────────────────────────────────────── */}
      <section className="pb-4">
        <p className="text-center text-xs text-neutral-400 uppercase tracking-widest mb-4 font-medium">
          Rated across platforms
        </p>
        <RatingMarquee />
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-200 rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-3 py-10 px-6 text-center"
            >
              <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                <Icon size={20} className="text-amber-500" />
              </div>
              <p className="text-3xl font-extrabold text-neutral-900">{value}</p>
              <p className="text-xs text-neutral-400 uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div>
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              Our mission
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight text-neutral-900">
              Games should spark joy — instantly.
            </h2>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              We believe the best game is the one someone picks up while waiting for a
              bus and forgets to put down. Game Object exists to create those moments at
              global scale — simple mechanics, satisfying feedback, infinite replayability.
            </p>
            <p className="mt-4 text-neutral-500 leading-relaxed">
              Founded with a small team and a big backlog of ideas, we have grown into a
              studio of 500+ — united by one obsession: building experiences that are
              impossible to put down.
            </p>
          </div>

          {/* Right — decorative mosaic */}
          <div className="grid grid-cols-3 gap-2 h-72">
            {[
              "bg-amber-400/20 border-amber-200",
              "bg-neutral-100 border-neutral-200",
              "bg-neutral-200/60 border-neutral-200",
              "bg-neutral-100 border-neutral-200",
              "bg-amber-400/30 border-amber-300",
              "bg-neutral-100 border-neutral-200",
              "bg-neutral-200/60 border-neutral-200",
              "bg-neutral-100 border-neutral-200",
              "bg-amber-400/15 border-amber-200",
            ].map((cls, i) => (
              <div key={i} className={cn("rounded-xl border", cls)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-neutral-100">
        <div className="mx-auto max-w-6xl">
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-amber-500 uppercase tracking-widest">
              The people
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-neutral-900">
              Meet the Team
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-neutral-500 text-base">
              Designers, engineers, artists, and obsessives — all here because they
              care deeply about what shows up on your screen.
            </p>
          </div>

          {/* Grid — rendered from parent via teamCards prop */}
          {teamCards ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {teamCards}
            </div>
          ) : (
            <p className="text-center text-neutral-400 text-sm">No team members found.</p>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-neutral-50 border-t border-neutral-100">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-neutral-900">
            Want to build with us?
          </h2>
          <p className="text-neutral-500 text-lg mb-8">
            We are always looking for talented people who love games as much as we do.
          </p>
          <Button
            // href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-neutral-950 font-semibold px-8 py-3.5 text-sm hover:bg-amber-500 transition-colors shadow-sm"
          >
            Get in touch <span aria-hidden>→</span>
          </Button>
        </div>
      </section>
    </main>
  );
}