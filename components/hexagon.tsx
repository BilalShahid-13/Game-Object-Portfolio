"use client";
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

export default function HexagonContainer({ src, id }: { src: StaticImageData, id: string }) {
  const navigate = useRouter()
  return (
    <>
      <div className='hexagon'>
        <Image
          onClick={() => { navigate.push(`/games/${id}`) }}
          width={100}
          height={100}
          className="cursor-pointer w-full h-full object-fill drop-shadow-2xl"
          alt="as"
          src={src}
        />
      </div>
    </>
  )
}
