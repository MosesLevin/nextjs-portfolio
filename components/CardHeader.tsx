import Stern from '@/assets/Stern.svg'
import { twMerge } from 'tailwind-merge'

export default function CardHeader({
  title,
  description,
  className,
  className2,
}: {
  title: string
  description: string
  className?: string
  className2?: string
}) {
  return (
    <div className={twMerge('flex flex-col p-6 md:py-8 md:px-10', className)}>
      <div className={twMerge('inline-flex items-center gap-2', className2)}>
        <Stern className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl ">{title}</h3>
      </div>
      <p className="text-sm text-white/60 mt-2 lg:text-base lg:max-w-xs">
        {description}
      </p>
    </div>
  )
}