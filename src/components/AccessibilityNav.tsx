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

//   return (
//     <div className="relative inline-block text-left" ref={dropdownRef}>
//       <button
//         className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {selectedLanguageName} {/* Display the selected language */}
//       </button>

//       {isOpen && (
//         <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//           <div className="py-1">
//             {languages.map((lang) => (
//               <button
//                 key={lang.code}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
//                 onClick={() => switchLanguage(lang.code)}
//               >
//                 {lang.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }
