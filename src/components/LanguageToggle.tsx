// import { useState, useRef, useEffect } from 'react'
// import { useRouter, usePathname } from '@/src/i18n/routing' // Import custom routing logic

// const languages = [
//   { code: 'en', name: 'English' },
//   { code: 'de', name: 'Deutsch' },
// ]

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [selectedLanguage, setSelectedLanguage] = useState<string>('en') // Track the selected language
//   const router = useRouter()
//   const currentPathname = usePathname() // Retrieve the current path
//   const dropdownRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false)
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [dropdownRef])

//   const switchLanguage = (lang: string) => {
//     // Update the selected language and close the dropdown
//     setSelectedLanguage(lang)
//     setIsOpen(false)

//     // Replace the existing locale in the current pathname
//     const newPathname = currentPathname.replace(/^\/(en|de)/, `/${lang}`)

//     // Push the new locale-aware path without scrolling to the top
//     router.push(
//       { pathname: newPathname, query: {} },
//       {
//         locale: lang,
//         scroll: false,
//       }
//     )

//     console.log(`Switching to language: ${lang}`)
//   }

//   // Find the name of the selected language
//   const selectedLanguageName = languages.find(
//     (lang) => lang.code === selectedLanguage
//   )?.name

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

// export default Dropdown

// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useRouter, usePathname } from '@/src/i18n/routing' // Use custom routing

// const LanguageToggle: React.FC = () => {
//   const router = useRouter()
//   const currentPathname = usePathname()
//   const [currentLanguage, setCurrentLanguage] = useState<'en' | 'de'>('en')
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   useEffect(() => {
//     // Set initial language from pathname
//     if (currentPathname.startsWith('/de')) {
//       setCurrentLanguage('de')
//     } else {
//       setCurrentLanguage('en')
//     }
//   }, [currentPathname])

//   const toggleLanguage = async (locale: 'en' | 'de') => {
//     if (locale === currentLanguage) return // Prevent toggling to the same language
//     const newPathname = currentPathname.replace(/^\/(en|de)/, `/${locale}`)

//     await router.push(
//       { pathname: newPathname, query: {} },
//       { locale, scroll: false }
//     )
//     setCurrentLanguage(locale) // Update state after successful navigation
//     setIsDropdownOpen(false) // Close dropdown
//   }

//   const dropdownOptions = [
//     { locale: 'en', label: 'EN' },
//     { locale: 'de', label: 'DE' },
//   ]

//   return (
//     <div className="relative inline-block">
//       {/* Current language button */}
//       <button
//         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-300"
//         aria-label="Toggle language dropdown"
//       >
//         {currentLanguage.toUpperCase()}
//       </button>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="absolute top-full mt-2 w-24 bg-gray-700 border border-gray-300 rounded-lg shadow-lg z-10">
//           <ul className="py-1">
//             {dropdownOptions
//               .filter((option) => option.locale !== currentLanguage) // Only show other language
//               .map((option) => (
//                 <li key={option.locale}>
//                   <button
//                     onClick={() => toggleLanguage(option.locale as 'en' | 'de')}
//                     className="w-full px-4 py-2 text-left hover:bg-gray-600"
//                   >
//                     {option.label}
//                   </button>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default LanguageToggle

// 'use client'

// import React, { useEffect, useState } from 'react'
// import ToggleSwitch from './ToggleSwitch' // Adjust the import path as necessary
// import { useRouter, usePathname } from '@/src/i18n/routing'
// import EnglishIcon from '@/src/assets/SunIcon.svg'
// import GermanIcon from '@/src/assets/Stern.svg'

// const LanguageToggle = () => {
//   const router = useRouter()
//   const currentPathname = usePathname()
//   const [isEnglish, setIsEnglish] = useState(true)

//   useEffect(() => {
//     // Set initial state based on the current language in the URL
//     setIsEnglish(currentPathname.startsWith('/en'))
//   }, [currentPathname])

//   const toggleLanguage = async () => {
//     const newLocale = isEnglish ? 'de' : 'en'
//     const newPathname = currentPathname.replace(/^\/(en|de)/, `/${newLocale}`)
//     await router.push(
//       { pathname: newPathname, query: {} },
//       { locale: newLocale, scroll: false }
//     )
//     setIsEnglish(!isEnglish) // Update state after successful navigation
//   }

//   return (
//     <ToggleSwitch
//       isSelected={isEnglish}
//       onToggle={toggleLanguage}
//       activeBgClass="bg-blue-600"
//       inactiveBgClass="bg-orange-600"
//       activeIcon={<EnglishIcon className="w-4 h-4 text-black" />}
//       inactiveIcon={<GermanIcon className="w-4 h-4 text-black" />}
//     />
//   )
// }

// export default LanguageToggle

//

'use client'

import { useRouter, usePathname } from '@/src/i18n/routing' // Use custom routing

const LanguageToggle = () => {
  const router = useRouter()
  const currentPathname = usePathname() // Retrieve the current path

  const toggleLanguage = (locale: string) => {
    // Replace the existing locale in the current pathname to avoid double locale prefix
    const newPathname = currentPathname.replace(/^\/(en|de)/, `/${locale}`)

    // Push the new locale-aware path without scrolling to the top
    router.push(
      { pathname: newPathname, query: {} },
      {
        locale,
        scroll: false,
      }
    )
  }

  return (
    <div>
      <button
        className="border-2 border-white/70 bg-white/5 p-1 rounded-full hover:bg-white/30 text-orange-400 hover:text-amber-300 transition duration-300"
        onClick={() => toggleLanguage('en')}
      >
        EN
      </button>
      <button
        className="font-serif hover:underline p-2 rounded-full text-orange-400 hover:text-amber-300 transition duration-300"
        onClick={() => toggleLanguage('de')}
      >
        DE
      </button>
    </div>
  )
}

export default LanguageToggle
