'use client'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import GithubIcon from '@/assets/icons/github.svg'
import TypeScriptIcon from '@/assets/icons/typescript.svg'
import HtmlIcon from '@/assets/icons/html5.svg'
import JavaScriptIcon from '@/assets/icons/javascript.svg'
import ReactIcon from '@/assets/icons/react.svg'
import NodeIcon from '@/assets/icons/node.svg'
import DatabaseIcon from '@/assets/icons/sql.svg'
import Css3Icon from '@/assets/icons/css3.svg'
import BrowserIcon from '@/assets/icons/browser.svg'
import TailwindIcon from '@/assets/icons/tailwind.svg'
import ShopifyIcon from '@/assets/icons/shopify.svg'
import FirebaseIcon from '@/assets/icons/firebase.svg'
import CopilotIcon from '@/assets/icons/copilot.svg'
import GptIcon from '@/assets/icons/gpt.svg'
import berlinMap2 from '@/assets/berlinMap2.jpg'
import avatarIcon from '@/assets/MoSmileMemoji.png'
import CardHeader from '@/components/CardHeader'
import Toolbox from '@/components/Toolbox'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import RotatingBookCovers from '@/components/RotatingBookCovers'

type interfaceToolboxItem = { title: string; iconType: React.ElementType } // This ensures `iconType` is "typed" correctly
// "Stack" or toolbox - all could be pulled from a database if larger projectand not hard coded
const toolboxItems: interfaceToolboxItem[] = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: Css3Icon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'TypeScript',
    iconType: TypeScriptIcon,
  },
  {
    title: 'Node.js',
    iconType: NodeIcon,
  },
  {
    title: 'SQL',
    iconType: DatabaseIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'GPT',
    iconType: GptIcon,
  },
  {
    title: 'DevTools',
    iconType: BrowserIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindIcon,
  },
  {
    title: 'Shopify',
    iconType: ShopifyIcon,
  },
  {
    title: 'Copilot',
    iconType: CopilotIcon,
  },
  {
    title: 'Firebase',
    iconType: FirebaseIcon,
  },
]
// hobbies - all could be in database if larger project
const hobbies = [
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
    title: 'Hiking',
    emoji: '🏔️',
    left: '48%',
    top: '7%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '58%',
    top: '16%',
  },
]

export default function About() {
  const constrainRef = useRef(null)
  return (
    <section id="about" className="pt-20 lg:py-28 ">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about what I like doing, and what drives me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/*Section WHAT I READ */}
            <RotatingBookCovers />
            {/* Section TOOLBOX*/}
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="The technologies and tools I use to bring Websites & Apps to life"
                className=""
              />
              <Toolbox
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-left-movement [animation-duration:25s] hover:[animation-play-state:paused]"
              />
              <Toolbox
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-right-movement [animation-duration:25s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>
          {/* Section HOBBIES*/}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="When I'm not Coding"
                description="My interests and hobbies other than Tech"
                className="px-6 py-6"
              />
              {/* giving a ref to the parent div and telling framer-motion "drag" that that ref is the constraint */}
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  // adding framer motion for movement of the items inside the parent div, changing next component to client component
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            {/* Section MAP */}

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={berlinMap2}
                alt="local map"
                className="h-full w-full object-cover object-left-top transform -translate-y-10  scale-125  md:-translate-y-10 md:-translate-x-8 "
                // style={{
                //   transform: 'scale(1.5) translateX(16%) translateY(-10%)',
                // }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                {/* animate ping of div "under" image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2.5s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={avatarIcon}
                  alt="Smiling Web Developer"
                  className="size-30 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
