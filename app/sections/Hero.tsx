import heroImage from '@/assets/MoComputerMemoji.png'
import Image from 'next/image'
import whiteNoise from '@/assets/WhiteNoise.jpg'
import Stern from '@/assets/Stern.svg'
import SternWeit from '@/assets/SternWeit.svg'
import HeroSolarSystem from '@/components/HeroSolarSystem'
import HeroButtons from '@/components/HeroButtons'

function Hero() {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip ">
      <div
        id="home"
        className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      >
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
        <HeroSolarSystem
          size={440}
          rotation={76}
          shouldOrbit
          orbitDuration="14s"
          shouldSpin
          spinDuration="3s"
        >
          <SternWeit className="size-5 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={430}
          rotation={-13}
          shouldOrbit
          orbitDuration="27s"
          shouldSpin
          spinDuration="3s"
        >
          <SternWeit className="size-8 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={520}
          rotation={-42}
          shouldOrbit
          orbitDuration="30s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={530}
          rotation={175}
          shouldOrbit
          orbitDuration="33s"
          shouldSpin
          spinDuration="3s"
        >
          <SternWeit className="size-10 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={550}
          rotation={21}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="7s"
        >
          <Stern className="size-12 text-emerald-300" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={590}
          rotation={97}
          shouldOrbit
          orbitDuration="39s"
          shouldSpin
          spinDuration="8s"
        >
          <Stern className="size-8 text-emerald-300" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={650}
          rotation={-7}
          shouldOrbit
          orbitDuration="42s"
          spinDuration=""
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={710}
          rotation={143}
          shouldOrbit
          orbitDuration="45s"
          shouldSpin
          spinDuration="3s"
        >
          <SternWeit className="size-14 text-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={720}
          rotation={83}
          shouldOrbit
          orbitDuration="48s"
          spinDuration=""
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroSolarSystem>
        <HeroSolarSystem
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="51s"
          shouldSpin
          spinDuration="6s"
        >
          <Stern className="size-28 text-emerald-300" />
        </HeroSolarSystem>
        {/* low opacity svgs */}

        {/* full circles */}
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={heroImage}
            className="size-[100px]"
            alt="Web Developer coding on PC"
          />

          <div className="inline-flex bg-gray-950 border border-gray-800 px-4 py-1.5 items-center gap-4 rounded-lg">
            <div className="relative bg-green-500 size-2.5 rounded-full ">
              <div className="absolute bg-green-500  inset-0 rounded-full animate-ping-lg"></div>
            </div>

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
        <HeroButtons />
      </div>
    </section>
  )
}

export default Hero
