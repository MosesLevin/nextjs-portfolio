import { useState, useRef, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'
import LanguageToggle from './LanguageToggle'

const AccessibilityNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en') // Track the selected language
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
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="inline-flex justify-center w-full p-6 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Display the selected language */}
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 p-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <ThemeSwitch />
            <LanguageToggle />
          </div>
        </div>
      )}
    </div>
  )
}

export default AccessibilityNav

// {languages.map((lang) => (
//     <button
//       key={lang.code}
//       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//       onClick={() => switchLanguage(lang.code)}
//     >
//       {lang.name}
//     </button>
//   ))}
