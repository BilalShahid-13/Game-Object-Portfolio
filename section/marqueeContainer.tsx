import { Marquee } from '@/components/ui/marquee'
import { DEFAULT_IMAGES } from '@/lib/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function MarqueeSection({
  index, image, className
}: { index: number, image: { src: string, alt: string }, className?: string }) {
  return (
    <div key={index} className={cn(`relative w-32 h-32`, className)}>
      <Image
        src={image.src}
        alt={image.src}
        fill
        priority={index < 3}
        sizes="(max-width: 768px) 600px, 600px"
        placeholder="blur"
        className="rounded-lg object-cover shadow-md shadow-black/10"
      />
    </div>
  )
}
export default function MarqueeContainer() {
  return (
    <>
      <Marquee pauseOnHover className="[--duration:80s]">
        {DEFAULT_IMAGES.map((image: any, index: number) => (
          <MarqueeSection index={index}
            image={image}
            key={index}
          />
        ))}
      </Marquee>
      <Marquee pauseOnHover reverse className="[--duration:80s]">
        {DEFAULT_IMAGES.map((image: any, index: number) => (
          <MarqueeSection index={index}
            image={image}
            key={index}
          />
        ))}
      </Marquee>
      <div className="from-background opacity-70 pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background opacity-70 pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </>
  )
}
