import { montserrat } from "@/lib/utils";

export default function GamesHeading({ heading, des }: { heading: string, des: string[] }) {
  return (
    <div className='relative
    max-md:grid-cols-1
    grid grid-cols-2 justify-between items-center gap-3  bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 overflow-hidden'>
      <div
        className="absolute -z-10 -left-10 -top-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-100 to-yellow-500 opacity-40 blur-3xl" />
      <div className="absolute -z-10 -right-10 -bottom-10 w-52 h-52 rounded-full bg-linear-to-b from-yellow-100 to-yellow-500 opacity-30 blur-3xl" />
      <h2 style={montserrat.style}
        className='text-4xl max-md:text-center max-md:text-2xl px-12 font-semibold
        max-sm:text-lg'>{heading}</h2>
      <p style={montserrat.style}
        className='text-lg max-md:text-base max-sm:text-sm'
      >
        {des[0]}
        <br />
        {des[1]}</p>
    </div>
  )
}
