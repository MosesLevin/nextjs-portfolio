import { useState, useRef, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'
import LanguageToggle from './LanguageToggle'
import AccessibilityIcon from '@/src/assets/icons/accessibility.svg'

const AccessibilityNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="ring-2 dark:ring-white ring-black rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AccessibilityIcon
          className="size-8 md:size-10 text-gray-900 dark:text-white rounded-full shadow-lg ring-1 ring-gray-500
        hover:scale-125 transition-all duration-200"
        />
      </button>
      {isOpen && (
        <div
          className="absolute right-0 mt-2 ring-2 ring-brown5 dark:ring-gray-400 rounded-2xl shadow-lg bg-gray-50 w-28 "
          style={{ transformOrigin: 'top right' }}
        >
          <div className="flex flex-col items-center gap-6 mt-4">
            <ThemeSwitch />
            <LanguageToggle />
          </div>
        </div>
      )}
    </div>
  )
}

export default AccessibilityNav
