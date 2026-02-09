
import HexagonContainer from "@/components/hexagon";
import { gamesStudioList } from "@/lib/constant";
import Image, { StaticImageData } from "next/image";


const PartnerShowcase = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-yellow-50 via-pink-50 to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 font-medium mb-2">Our Studios</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-md:text-2xl">
            Where Innovation Meets Passion
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed max-md:text-base max-md:max-w-lg">
            Where passion meets expertise. Discover a collective of world-class studios, each dedicated to pushing the boundaries of mobile entertainment.
            <br />
            We have a unique understanding of the digital games space, connecting more than 70 million daily active players worldwide.
          </p>
        </div>

        {/* Honeycomb Grid */}
        <div className="relative flex items-center justify-center ">
          <div className="flex gap-8 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-1 max-md:hidden">
              {/* Row 1 */}
              <div className="flex gap-1 ml-18.75">
                <Hexagon src={gamesStudioList[0].src} id={gamesStudioList[0].id} />
                <Hexagon src={gamesStudioList[1].src} id={gamesStudioList[1].id} />
                <Hexagon src={gamesStudioList[2].src} id={gamesStudioList[2].id} />
              </div>
              {/* Row 2 */}
              <div className="flex gap-1">
                <Hexagon id={gamesStudioList[3].id} src={gamesStudioList[3].src} />
                <Hexagon id={gamesStudioList[4].id} src={gamesStudioList[4].src} />
                <Hexagon id={gamesStudioList[5].id} src={gamesStudioList[5].src} />
              </div>
              {/* Row 3 */}
              <div className="flex gap-1 ml-[75px]">
                <Hexagon id={gamesStudioList[6].id} src={gamesStudioList[6].src} />
                <Hexagon id={gamesStudioList[7].id} src={gamesStudioList[7].src} />
                <Hexagon id={gamesStudioList[8].id} src={gamesStudioList[8].src} />
              </div>
            </div>

            {/* Center Logo */}
            <div className="relative z-10 mx-4">
              <div className="w-64 h-64
              max-sm:w-36 max-sm:h-36
              bg-linear-to-br from-yellow-600 via-yellow-200 to-amber-600 rounded-[2.5rem] rotate-45 flex items-center justify-center shadow-2xl">
                <div className="-rotate-45 flex flex-col items-center">
                  {/* <div className="w-24 h-24 border-10 border-yellow-400 rounded-full mb-3"></div> */}
                  <Image
                    width={100}
                    height={100}
                    className="w-full h-full object-fill drop-shadow-2xl"
                    alt="as"
                    src={"/logo-1.png"}
                  />
                  {/* <div className="w-20 h-10 bg-amber-500 rounded-full"></div> */}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col-reverse gap-1 max-md:hidden">
              {/* Row 1 */}
              <div className="flex gap-1 ml-[75px]">
                <Hexagon id={gamesStudioList[0].id} src={gamesStudioList[0].src} />
                <Hexagon id={gamesStudioList[1].id} src={gamesStudioList[1].src} />
                <Hexagon id={gamesStudioList[2].id} src={gamesStudioList[2].src} />
              </div>
              {/* Row 2 */}
              <div className="flex gap-1">
                <Hexagon id={gamesStudioList[3].id} src={gamesStudioList[3].src} />
                <Hexagon id={gamesStudioList[4].id} src={gamesStudioList[4].src} />
                <Hexagon id={gamesStudioList[5].id} src={gamesStudioList[5].src} />
              </div>
              {/* Row 3 */}
              <div className="flex gap-1 ml-[75px]">
                <Hexagon id={gamesStudioList[6].id} src={gamesStudioList[6].src} />
                <Hexagon id={gamesStudioList[7].id} src={gamesStudioList[7].src} />
                <Hexagon id={gamesStudioList[8].id} src={gamesStudioList[8].src} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Version */}
        <div className="lg:hidden mt-12 flex flex-wrap justify-center gap-2">
          {gamesStudioList.map((value, index) => (
            <Hexagon
              id={value.id}
              key={index}
              src={value.src} />
          ))
          }
        </div>
      </div>
    </div>
  );
};

const Hexagon = ({ src, id }: { src: StaticImageData; id: string }) => {
  return (
    <div className="relative group">
      <HexagonContainer src={src} id={id} />
    </div>
  );
};

export default PartnerShowcase;