import project1Placeholder from '@/assets/BuildingProjectsImg.png'

import Image from 'next/image'
import CheckmarkIcon from '@/assets/icons/checkmark.svg'
import ArrowDiagonal from '@/assets/icons/arrow-diag.svg'
import SectionHeader from '@/components/SectionHeader'
import Card from '@/components/Card'

const portfolioProject = [
  {
    year: '2020',
    title: 'Gin Distillery',
    result: [
      { title: 'Enhance UX by 70% ' },
      { title: 'Improve loading speed by 50%' },
      { title: 'Increase mobile traffic by 100%' },
    ],
    link: 'www.google.com',
    image: project1Placeholder,
  },
  {
    year: '2020',
    title: 'Gin Distillery',
    result: [
      { title: 'Enhance UX by 70% ' },
      { title: 'Improve loading speed by 50%' },
      { title: 'Increase mobile traffic by 100%' },
    ],
    link: 'www.google.com',
    image: project1Placeholder,
  },
  {
    year: '2020',
    title: 'Gin Distillery',
    result: [
      { title: 'Enhance UX by 70% ' },
      { title: 'Improve loading speed by 50%' },
      { title: 'Increase mobile traffic by 100%' },
    ],
    link: 'www.google.com',
    image: project1Placeholder,
  },
]

function Projects() {
  return (
    <section id="projects" className="pb--16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="I transform concepts into engaging digital experiences."
        />

        {/* CARDS FOR PROJECTS */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProject.map((project, projectIndex) => (
            // adding sticky class to Card with top-value so when it gets to top-value it will stick, adding "style" prop for sticky gap between cards
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16 "
              // style to calc "card stacking" distance from previos card on scroll down
              style={{
                top: `calc(64px + ${projectIndex * 50}px)`,
              }}
            >
              {/* grid for lg view */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/*!!! div to hold gradient, project title line and secondary info all to be changed!!!*/}
                  <div className="bg-gradient-to-r from-orange-400 dark:from-emerald-300 to-amber-300 dark:to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text text-shadow dark:text-shadow-none">
                    <span>{project.title}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  {/* project */}
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 dark:text-white text-black ">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 dark:border-white/5 border-black/5 mt-4 md:mt-5" />
                  {/* map over objects nested array for more info */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.result.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base dark:text-white/50 text-black/60"
                      >
                        <CheckmarkIcon className="size-4 md:size-6 dark:text-white/50 text-black/60" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="dark:bg-white/90 bg-black/80 dark:text-gray-950 text-white/90 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6 dark:hover:bg-white/95 hover:bg-black/95 dark:hover:text-black hover:text-white transition duration-[125ms] hover:ring-1 hover:ring-white/50 button-animation hover:scale-100">
                      <span>Visit Live Site</span>
                      <ArrowDiagonal className="rotate-45 size-4 dark:fill-black fill-white" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
