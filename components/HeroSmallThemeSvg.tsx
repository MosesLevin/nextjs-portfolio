'use client'
import { useTheme } from 'next-themes'
import SternWeit from '@/assets/SternWeit.svg'
import SonneWeit from '@/assets/icons/sunIcon.svg'

interface HeroSmallThemeSvgProps {
  lightClassName?: string
  darkClassName?: string
}

export default function HeroSmallThemeSvg({
  lightClassName,
  darkClassName,
}: HeroSmallThemeSvgProps) {
  const { theme } = useTheme()

  return theme === 'light' ? (
    <SonneWeit className={lightClassName} />
  ) : (
    <SternWeit className={darkClassName} />
  )
}
