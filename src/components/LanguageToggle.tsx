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
        English
      </button>
      <button
        className="border-2 border-white/70 bg-white/5 p-1 rounded-full hover:bg-white/30 text-orange-400 hover:text-amber-300 transition duration-300"
        onClick={() => toggleLanguage('de')}
      >
        Deutsch
      </button>
    </div>
  )
}

export default LanguageToggle
