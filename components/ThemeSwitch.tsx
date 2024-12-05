'use client'
// Make sure it's a client component

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import SunIcon from '@/assets/SunIcon.svg'
import MoonIcon from '@/assets/MoonIcon.svg'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // Set mounted to true only after the component is mounted on the client
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  // Render the toggle button based on the current theme
  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className=""
    >
      {resolvedTheme === 'dark' ? (
        <div className="border-2 border-white/70 bg-white/5 p-1 rounded-full hover:bg-white/30 text-orange-400 hover:text-amber-300 transition duration-300">
          <SunIcon className="w-8 h-8" />
        </div>
      ) : (
        <div className="border-2 border-black/30 bg-black/5 p-1 rounded-full hover:bg-gray-950/90 text-blue-600 hover:text-blue-200 transition duration-300">
          <MoonIcon className="w-8 h-8" />
        </div>
      )}
    </button>
  )
}
