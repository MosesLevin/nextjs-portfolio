'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import ToggleSwitch from './ToggleSwitch'
import SunIcon from '@/src/assets/SunIcon.svg'
import MoonIcon from '@/src/assets/MoonIcon.svg'

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Set initial state based on the current theme
    setIsDark(resolvedTheme === 'dark')
  }, [resolvedTheme])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
    setIsDark(!isDark) // Update state after setting the theme
  }

  return (
    <ToggleSwitch
      isSelected={isDark}
      onToggle={toggleTheme}
      activeBgClass="bg-gray-800 ring-2 dark:ring-gray-600"
      inactiveBgClass="bg-amber-500 ring-2 ring-brown5 dark:ring-black/40"
      activeIcon={<MoonIcon className="size-6 text-sky-700" />}
      inactiveIcon={<SunIcon className="size-6 text-yellow-400" />}
    />
  )
}

export default ThemeSwitch

// 'use client'
// // Make sure it's a client component

// import { useState, useEffect } from 'react'
// import { useTheme } from 'next-themes'
// import SunIcon from '@/src/assets/SunIcon.svg'
// import MoonIcon from '@/src/assets/MoonIcon.svg'

// export default function ThemeSwitch() {
//   const [mounted, setMounted] = useState(false)
//   const { setTheme, resolvedTheme } = useTheme()

//   // Set mounted to true only after the component is mounted on the client
//   useEffect(() => setMounted(true), [])

//   if (!mounted) return null

//   // Render the toggle button based on the current theme
//   return (
//     <button
//       onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
//       className=""
//     >
//       {resolvedTheme === 'dark' ? (
//         <div className="border-2 border-white/70 bg-white/5 p-1 rounded-full hover:bg-white/30 text-orange-400 hover:text-amber-300 transition duration-300">
//           <SunIcon className="w-8 h-8" />
//         </div>
//       ) : (
//         <div className="border-2 border-black/30 bg-black/5 p-1 rounded-full hover:bg-gray-950/90 text-blue-600 hover:text-blue-200 transition duration-300">
//           <MoonIcon className="w-8 h-8" />
//         </div>
//       )}
//     </button>
//   )
// }
