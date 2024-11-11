import PlaceholderAvatarImg from '@/assets/dummy_600x400_ffffff_cccccc.png'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'
import Card from '@/components/Card'
import PlaceholderAvatarTelem from '@/assets/placeholderAvatar.png'

// placeholder data for personal customer references
const reference = [
  {
    name: 'Alice Johnson',
    position: 'Marketing Director, Creative Co.',
    text: 'Proin in velit id neque molestie ultrices. Cras aliquet tristique malesuada. Vivamus in dui accumsan sapien tristique malesuada id vel lectus. Quisque arcu leo, tincidunt non venenatis a, dapibus id ante. Proin et lacus non lacus bibendum scelerisque. Nam quis lectus neque. Mauris sit amet justo volutpat, vestibulum lacus a, venenatis metus. ',
    avatar: PlaceholderAvatarTelem,
  },
  {
    name: 'Michael Lee',
    position: 'Founder, Tech Innovators',
    text: 'Highly professional and incredibly talented. They turned our ideas into reality and gave us a website that truly represents our brand.',
    avatar: PlaceholderAvatarImg,
  },
  {
    name: 'Sandra Nguyen',
    position: 'Project Manager, Eco Solutions',
    text: 'Amazing attention to detail and a keen sense for aesthetics. The designer was responsive to feedback and delivered exactly what we needed.',
    avatar: PlaceholderAvatarImg,
  },
  {
    name: 'James Thompson',
    position: 'CEO, Thompson Financials',
    text: 'Excellent work! The designer was very knowledgeable and made sure our website is both functional and visually appealing. Highly recommended!',
    avatar: PlaceholderAvatarImg,
  },
  {
    name: 'Emma Patel',
    position: 'Owner, Artisanal Goods',
    text: 'We saw a big increase in customer engagement after our site redesign. The designer was easy to work with and understood our needs perfectly.',
    avatar: PlaceholderAvatarImg,
  },
]

export default function References() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what people that worked with me
        have to say."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {reference.map((reference) => (
              <Card
                key={reference.name}
                className="max-w-xs md:max-w-md p-6 md:p-8 "
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0">
                    <Image
                      src={reference.avatar}
                      alt={reference.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{reference.name}</div>
                    <div className="text-sm text-white/40">
                      {reference.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {reference.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
