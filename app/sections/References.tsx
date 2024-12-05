import Client1 from '@/assets/Client-1-memoji.png'
import Client3 from '@/assets/Client-3-memoji.png'
import Client4 from '@/assets/Client-4-memoji.png'
import Client5 from '@/assets/Client-5-memoji.png'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import Card from '@/components/Card'
import { Fragment } from 'react'

// placeholder data for personal customer references
const reference = [
  {
    name: 'E. Becker',
    position: 'CEO, NeueTraditionen',
    text: '"Ich bin von seinen Fähigkeiten, Engagement und Leidenschaft für Teamarbeit tiefstens überzeugt ...Moses war ein zentrales Mitglied eines Teams aus drei Entwicklern, das ein intuitiven "MVP" für unser Unternehmen entwickelt hat."',
    avatar: Client3,
  },
  {
    name: 'M. Krause',
    position: "Founder, Organic's Best Shop",
    text: '"...durch ein hohes Maß an Eigeninitiative und Identifikation aus, wodurch Herr Levin regelmäßig eigene konkrete Vorschläge unterbreitete, die dazu beitrugen mögliche Verbesserungspotenziale vollumfänglich auszuschöpfen."',
    avatar: Client4,
  },
  {
    name: 'J. Wiśniewski',
    position: 'Manager, PinkHouseHostel',
    text: '"Moses Levin beeindruckte uns mit seiner Kreativität und Verständnis moderner Webtechnologien. Seine Arbeit hat die Benutzerfreundlichkeit unserer Plattform signifikant gesteigert und zu positiven..."',
    avatar: Client1,
  },
  {
    name: 'F. Hankammer',
    position: 'CEO, HealingArts',
    text: '"Die Zusammenarbeit mit Moses war eine Freude. Er könnte mir die technischen Anforderungen des Projekts erklären, besonderes war mir wertvoll seine tiefgehende verstandnis meiner Vorstellung..."',
    avatar: Client5,
  },
]

export default function References() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What's Said about Me"
          description="Don't just take my word for it. See what people that worked with me
        have to say."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          {/* use keyframe from tailwind config to animate, pause animation on hover */}
          <div className="flex flex-none gap-8 pr-8 animate-left-movement [animation-duration:90s] hover:[animation-play-state:paused]">
            {/* duplicate references for animation like in Banner creating 2 sets of references in the map instead of 1 */}
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {reference.map((reference) => (
                  <Card
                    key={reference.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-600 inline-flex rounded-full items-center justify-center flex-shrink-0">
                        <Image
                          src={reference.avatar}
                          alt={reference.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold dark:text-white text-black">
                          {reference.name}
                        </div>
                        <div className="text-sm dark:text-white/40 text-black/60">
                          {reference.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base dark:text-white text-black">
                      {reference.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
