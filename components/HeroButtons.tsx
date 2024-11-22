'use client'
import ArrowDown from '@/assets/arrow-diag.svg'
import { Link } from 'react-scroll'
import Envelope from '@/assets/envelope.svg'

export default function HeroButtons() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <Link
        to="projects"
        smooth={true}
        className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer  hover:bg-white/5 hover:text-white transition duration-20"
      >
        <div className="font-semibold">Explore My Work</div>
        <ArrowDown className="rotate-180 size-4 fill-white" />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={900}
        className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer
        hover:bg-white/75 hover:text-black transition duration-200"
      >
        <Envelope className="size-5 fill-black stroke " />
        <span className="font-semibold">Write to me</span>
      </Link>
    </div>
  )
}
