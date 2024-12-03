import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Card from './Card'
import CardHeader from './CardHeader'
import BookCover from '@/assets/book-alan-watts.jpeg'

// this was chatGPT, he said its more lightweight and ssr friendly than using "swiper" which i know.

const bookCovers = [BookCover, BookCover, BookCover]
const RotatingBookCovers = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bookCovers.length)
    }, 8000) // Change image every 3 seconds
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
