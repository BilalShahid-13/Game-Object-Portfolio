import { TGetGames } from "@/app/actions/getGames";
import CarouselContainer from "@/components/carouselContainer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { montserrat } from "@/lib/utils";
import { Play } from "lucide-react";
import Link from "next/link";

export default function ListGamesCard({ title, description, screenshots, studioName, link, rating, installs, genre }: TGetGames) {
  return (
    <>
      <Card className="w-full max-w-5xl overflow-hidden border-none bg-white text-black">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side: Angled Image Gallery */}
            <div className="relative h-auto overflow-hidden bg-neutral-100 flex items-center justify-center p-4">
              <div className="w-full max-w-sm md:max-w-md">
                <CarouselContainer title={title} screenshots={screenshots} />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex flex-col justify-center p-12 space-y-6">
              <h2 className="text-4xl font-black tracking-tighter leading-tight uppercase italic max-sm:text-lg max-sm:font-bold" style={montserrat.style}>
                {title}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                {description}
              </p>
              <Button asChild className="cursor-pointer">
                <Link href={link} target="_blank" className="flex flex-row justify-center items-center gap-2">
                  <Play />
                  PlayStore
                </Link>
              </Button>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-6 max-sm:grid-cols-1 max-md:grid-cols-2" style={montserrat.style}>
                <div>
                  <div className="text-2xl font-bold">{installs ?? 0}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">Install</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    {Number(rating) ? Number(rating).toFixed(1) : 3}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">{genre}</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-500">Genre</div>
                </div>
              </div>

            </div>

          </div>
        </CardContent>
      </Card>
    </>
  )
}
