import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import Stern from '@/assets/Stern.svg'
import BookCover from '@/assets/book-alan-watts.jpeg'
import Image from 'next/image'
import IconPlaceholder from '@/assets/github.svg'

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: <IconPlaceholder />,
  },
  {
    title: 'HTML5',
    icon: <IconPlaceholder />,
  },
  {
    title: 'CSS3',
    icon: <IconPlaceholder />,
  },
  {
    title: 'React',
    icon: <IconPlaceholder />,
  },
  {
    title: 'TypeScript',
    icon: <IconPlaceholder />,
  },
  {
    title: 'Github',
    icon: <IconPlaceholder />,
  },
  {
    title: 'Github',
    icon: <IconPlaceholder />,
  },
  {
    title: <IconPlaceholder />,
    icon: <IconPlaceholder />,
  },
]

export default function About() {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about what I like doing, and what inspires me"
      />
      <div>
        <Card>
          <div>
            <Stern />
            <h3>What I read</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image
            src={BookCover}
            alt="Book cover - Alan Watts - Out of your mind"
          />
        </Card>
        <Card>
          <div>
            <Stern />
            <h3>My Toolbox</h3>
            <p>
              Explore the Technologies and tools I use to create digital
              experiences.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
