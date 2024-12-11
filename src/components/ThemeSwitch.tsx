import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure the theme is mounted before using it to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoid rendering until the component is mounted to prevent hydration issues

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="relative w-16 h-16 rounded-full transition-colors duration-300"
    >
      {/* Ball container */}
      <motion.div
        className="absolute inset-0 rounded-full flex justify-center items-center"
        animate={{ rotateY: theme === 'dark' ? 180 : 0 }} // Rotate 180 degrees when theme is dark
        transition={{ duration: 0.6 }}
      >
        {/* Sun and Moon Icons */}
        <motion.div
          className="absolute flex justify-center items-center"
          initial={{ opacity: theme === 'dark' ? 0 : 1 }}
          animate={{ opacity: theme === 'dark' ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span role="img" aria-label="sun" className="text-yellow-400 text-xl">
            🌞
          </span>
        </motion.div>
        <motion.div
          className="absolute flex justify-center items-center"
          initial={{ opacity: theme === 'dark' ? 1 : 0 }}
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span
            role="img"
            aria-label="moon"
            className="text-gray-800 dark:text-yellow-400 text-xl"
          >
            🌙
          </span>
        </motion.div>
      </motion.div>
    </button>
  )
}

export default DarkModeToggle
