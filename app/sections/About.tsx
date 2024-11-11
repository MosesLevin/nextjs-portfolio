import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import BookCover from '@/assets/book-alan-watts.jpeg'
import IconPlaceholder from '@/assets/github.svg'
import otherIconPlaceholder from '@/assets/arrow-diag.svg'
import mapImage from '@/assets/map.png'
import avatarIcon from '@/assets/placeholderAvatar.png'
import CardHeader from '@/components/CardHeader'
import ToolboxItems from '@/components/ToolboxItems'

type interfaceToolboxItem = { title: string; iconType: React.ElementType } // This ensures `iconType` is "typed" correctly
const toolboxItems: interfaceToolboxItem[] = [
  {
    title: 'JavaScript',
    iconType: IconPlaceholder,
  },
  {
    title: 'HTML5',
    iconType: otherIconPlaceholder,
  },
  {
    title: 'CSS3',
    iconType: IconPlaceholder,
  },
  {
    title: 'React',
    iconType: IconPlaceholder,
  },
  {
    title: 'TypeScript',
    iconType: IconPlaceholder,
  },
  {
    title: 'Github',
    iconType: IconPlaceholder,
  },
  {
    title: 'Github1',
    iconType: IconPlaceholder,
  },
  {
    title: 'TechNo12',
    iconType: IconPlaceholder,
  },
]

const hobbies = [
  {
    title: 'Hiking',
    emoji: '🏔️',
    left: '48%',
    top: '7%',
  },
  {
    title: 'Meditating',
    emoji: '🧘🏻',
    left: '1%',
    top: '0%',
  },

  {
    title: 'Playing',
    emoji: '🎸',
    left: '-3%',
    top: '46%',
  },

  {
    title: 'Gaming',
    emoji: '🎮',
    left: '6%',
    top: '67%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '59%',
    top: '78%',
  },
  {
    title: 'Running',
    emoji: '👟',
    left: '33%',
    top: '49%',
  },
  {
    title: 'Cooking',
    emoji: '🌮',
    left: '12%',
    top: '25%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '65%',
    top: '24%',
  },
]

export default function About() {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about what I like doing, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/*Section WHAT I READ */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="What I read"
                description="Explore the books shaping my perspectives."
                className2="md: whitespace-nowrap "
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image
                  src={BookCover}
                  alt="Book cover - Alan Watts - Out of your mind"
                />
              </div>
            </Card>
            {/* Section TOOLBOX*/}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the Technologies and tools I use to create online
                experiences."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          {/* Section HOBBIES*/}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies outside of the digital world."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            {/* Section MAP */}

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="local map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={avatarIcon}
                  alt="smiley face image"
                  className="size-20 rounded-full my-2 mx-2"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
