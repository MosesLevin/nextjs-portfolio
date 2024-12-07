'use client'
import ArrowDown from '@/assets/icons/arrow-diag.svg'
import { Link } from 'react-scroll'
import Envelope from '@/assets/icons/envelope.svg'

export default function HeroButtons() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
      <Link
        to="projects"
        smooth={true}
        className="inline-flex items-center gap-2 border dark:border-white/15 border-black/20 px-6 h-12 rounded-xl cursor-pointer dark:hover:bg-white/5  hover:bg-brown3 transition"
      >
        <div className="font-semibold text-black dark:text-white">
          Explore My Work
        </div>
        <ArrowDown className="rotate-180 size-4 dark:fill-white fill-black" />
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={900}
        className="inline-flex items-center gap-2 border dark:border-white border-black dark:bg-white bg-black dark:text-gray-900 text-white h-12 px-6 rounded-xl cursor-pointer
         dark:hover:text-black hover:text-white transition button-animation hover:ring-2 dark:hover:ring-white/50 hover:ring-black/70"
      >
        <Envelope className="size-5 dark:fill-black fill-white stroke " />
        <span className="font-semibold">Write to me</span>
      </Link>
    </div>
  )
}
