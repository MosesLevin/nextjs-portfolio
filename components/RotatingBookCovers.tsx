import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Card from './Card'
import CardHeader from './CardHeader'
import AlanBookCover from '@/assets/Book7-AlanWatts.jpeg'
import CosmosBookCover from '@/assets/Book6-Cosmos.jpg'
import NatGeoBookCover from '@/assets/Book2-natgeo.jpg'
import PoohBookCover from '@/assets/Book4-Pooh.jpg'
import RiedelBookCover from '@/assets/Book3-AnorganischeChemie.jpg'
import HarryPotterBookCover from '@/assets/Book5-HarryPotter.jpg'
import PragmaticProgrammerBookCover from '@/assets/Book1-PragmaticProgrammer.jpg'
import LifeOfPiBookCover from '@/assets/Book8-LifeOfPi.jpg'

// this was good ol friend, he said its more lightweight and ssr friendly than using "swiper" which i know.

const bookCovers = [
  AlanBookCover,
  NatGeoBookCover,
  PragmaticProgrammerBookCover,
  CosmosBookCover,
  HarryPotterBookCover,
  RiedelBookCover,
  LifeOfPiBookCover,
  PoohBookCover,
]
const RotatingBookCovers = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bookCovers.length)
    }, 8000) // Change image every 8 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [])

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    }),
  }

  return (
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader
        title="What I read"
        description="Explore books that shaped my perspectives"
        className2="md:whitespace-nowrap"
      />
      <div className="relative w-40 h-60 mx-auto mt-2 md:mt-0 overflow-hidden">
        <AnimatePresence custom={1}>
          <motion.div
            key={currentIndex}
            custom={1} // Direction (can add logic to handle swipe direction)
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full h-full"
          >
            <Image
              src={bookCovers[currentIndex]}
              alt={`Book cover ${currentIndex + 1}`}
              layout="fill"
              objectFit="contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  )
}

export default RotatingBookCovers
