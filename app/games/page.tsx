"use server";
import GamesHeading from "@/components/GamesHeading";
import { GamesLoadingSkeleton } from "@/components/GamesLoadingSkeleton";
import { TextAnimate } from "@/components/ui/text-animate";
import DiscoverGames from "@/section/discoverGames";
import MarqueeContainer from "@/section/marqueeContainer";
import Partners from "@/section/partners";
import { Suspense } from "react";

export default async function GamesPage() {

  return (
    <main className="mt-32 p-8 flex flex-col justify-center items-center overflow-hidden gap-3">
      <TextAnimate
        className="text-6xl max-md:text-3xl font-semibold text-center w-1/2 max-md:w-full max-sm:text-xl"
        animation="blurInUp" by="character" once>
        Your Next
        Favorite Game Awaits!
      </TextAnimate>
      <MarqueeContainer />
      <GamesHeading heading="Discover
              Our Game Collection"
        des={["Casual puzzles to epic adventures, discover your next mobile obsession. We craft unforgettable experiences for every player.", "We have a unique understanding of the digital games space, connecting more than 7 million daily active players worldwide."]}
      />
      <Suspense fallback={<GamesLoadingSkeleton />}>
        <DiscoverGames id={"7050987846191348839"} />
      </Suspense>
      <Partners />

    </main>
  )
}