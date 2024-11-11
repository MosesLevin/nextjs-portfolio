export default function StackIcons({
  component,
}: {
  component: React.ElementType
}) {
  // in order to put a gradient on SVG we can't use normal gradient in css, we can FILL and SVG with an ID (stack-icon-gradient) which we define here
  // set the recieved component prop as a Component again to be used in the return
  const Component = component
  return (
    <>
      {/* fill the prop SVG component with the url gradient set below it */}
      <Component className="size-10 fill-[url(#stack-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="stack-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  )
}
