import { gamesStudioList } from '@/lib/constant'
import GamesHeading from './GamesHeading'
import { Marquee } from './ui/marquee'
import { MarqueeSection } from '@/section/marqueeContainer'
import { Heart } from 'lucide-react'

export default function StudioList() {
  return (
    <>
      <GamesHeading heading="Our Studios:Where Innovation Meets Passion"
        des={["Where passion meets expertise. Discover a collective of world-class studios, each dedicated to pushing the boundaries of mobile entertainment.", "We have a unique understanding of the digital games space, connecting more than 70 million daily active players worldwide."]}
      />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">

        <Marquee pauseOnHover className="[--duration:80s]">
          {gamesStudioList.map((image: any, index: number) => (
            <MarqueeSection index={index}
              image={image}
              className='w-24 h-24 mx-12'
              key={index}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse className="[--duration:80s]">
          {gamesStudioList.map((image: any, index: number) => (
            <MarqueeSection index={index}
              image={image}
              className='w-24 h-24 mx-12'
              key={index}
            />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        <div className='w-16 h-16 bg-yellow-400/90 p-2 justify-center items-center absolute backdrop-blur-md rounded-full'>
          <Heart className='text-white justify-center items-center text-center object-cover w-full h-full' />
        </div>
      </div>
    </>
  )
}
