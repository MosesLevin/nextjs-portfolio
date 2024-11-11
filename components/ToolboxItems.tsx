import { twMerge } from 'tailwind-merge'
import StackIcons from './StackIcons'

export default function ToolboxItems({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string
    iconType: React.ElementType
  }[]
  className?: string
  itemsWrapperClassName?: string
  // this ts tells us the prop is going to be this an item which is type object, which has a title and icontype,
  // and the [] after that says it's going to be an array of those objects
}) {
  return (
    <div
      className={twMerge(
        'flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className={twMerge(
          'flex flex-none py-0.5 gap-6 pr-6',
          itemsWrapperClassName
        )}
      >
        {/* mapping over the "stack" icons and making a new component to feed the icons into to be able to set color individually, 
since the icons are components with svgr/webpack we need to "feed a component" which we handle in the component itself */}
        {items.map((item) => (
          <div
            key={item.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <StackIcons component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
