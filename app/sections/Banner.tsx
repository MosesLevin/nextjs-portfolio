import Stern from '@/assets/Stern.svg'
import HeroLargeThemeSvg from '@/components/HeroLargeThemeSvg'
import { Fragment } from 'react'
const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Responsive',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]

function Banner() {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip ">
      <div className="bg-gradient-to-r from-amber-300 dark:from-emerald-300 to-orange-500 dark:to-sky-400 -rotate-3 -mx-2">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 pr-4 animate-left-movement [animation-duration:30s]">
            {/* duplicating the words with new array with 2 values, fill with dummy value of 0  */}
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <HeroLargeThemeSvg
                      darkClassName="size-6 text-gray-900 -rotate-12"
                      lightClassName="size-6 text-gray-900 -rotate-12"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
