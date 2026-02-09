import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default function CarouselContainer({ screenshots, title }: { screenshots: string[], title: string }) {
  if (!screenshots || screenshots.length === 0) {
    return <div className="text-zinc-500 italic text-xs">No screenshots available.</div>;
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {screenshots.map((value, index) => (
          <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3 max-sm:basis-full">
            <div className="relative aspect-[9/16] max-sm:aspect-square w-full overflow-hidden rounded-lg border border-white/10">
              <Image
                src={value}
                fill
                alt={`${title} screenshot ${index}`}
                className="object-cover" // This ensures the image fills the box without stretching
                sizes="(max-width: 768px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Small, subtle buttons that don't break the layout */}
      <CarouselPrevious className="left-2 bg-white/50 border-none text-white hover:bg-neutral-200" />
      <CarouselNext className="right-2 bg-white/50 border-none text-white hover:bg-neutral-200" />
    </Carousel>
  )
}
