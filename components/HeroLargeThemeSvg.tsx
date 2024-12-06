'use client'
import { useTheme } from 'next-themes'
import Stern from '@/assets/Stern.svg'
import Sonne from '@/assets/icons/sonneGros.svg'

interface HeroLargeThemeSvgProps {
  lightClassName?: string
  darkClassName?: string
}

export default function HeroLargeThemeSvg({
  lightClassName,
  darkClassName,
}: HeroLargeThemeSvgProps) {
  const { theme } = useTheme()

  return theme === 'light' ? (
    <Sonne className={lightClassName} />
  ) : (
    <Stern className={darkClassName} />
  )
}
