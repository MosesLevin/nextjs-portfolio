import heroImage from '@/assets/dummy_600x400_ffffff_cccccc.png'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import whiteNoise from '@/assets/WhiteNoise.jpg'
import Stern from '@/assets/Stern.svg'
import SternWeit from '@/assets/SternWeit.svg'
import HeroSolarSystem from '@/components/HeroSolarSystem'

function Hero() {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${whiteNoise.src})`,
          }}
        ></div>
        {/* circles are borders with radius full different sizes */}
        <div className="size-[620px] hero-circles"></div>
        <div className="size-[820px] hero-circles"></div>
        <div className="size-[1020px] hero-circles"></div>
        <div className="size-[1220px] hero-circles"></div>
        {/* high opacity svgs. Component to set positioning and effects of svgs */}
        <HeroSolarSystem size={800} rotation={-72}>
          <Stern className="size-28 text-emerald-300" />
        </HeroSolarSystem>
        <HeroSolarSystem size={550} rotation={21}>
          <Stern className="size-12 text-emerald-300" />
        </HeroSolarSystem>
        <HeroSolarSystem size={590} rotation={97}>
          <Stern className="size-8 text-emerald-300" />
        </HeroSolarSystem>
        {/* low opacity svgs */}
        <HeroSolarSystem size={430} rotation={-13}>
          <SternWeit className="size-8 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem size={440} rotation={76}>
          <SternWeit className="size-5 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem size={530} rotation={175}>
          <SternWeit className="size-10 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem size={710} rotation={143}>
          <SternWeit className="size-14 text-emerald-300/20" />
        </HeroSolarSystem>

        {/* full circles */}
        <HeroSolarSystem size={720} rotation={83}>
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem size={520} rotation={-42}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem size={650} rotation={-7}>
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={heroImage}
            className="size-[100px]"
            alt="Alt description of image"
          />

          <div className="inline-flex bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Websites very good yes
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            amet enim eget risus efficitur malesuada. Praesent eu nulla
            venenatis, tincidunt quam nec, convallis mi.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <FontAwesomeIcon icon={faArrowDown} className="h-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👍🏻</span>
            <span className="font-semibold">Write to me</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
