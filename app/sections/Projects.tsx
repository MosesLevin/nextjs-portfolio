import project1Placeholder from '@/assets/img1.webp'
import project2Placeholder from '@/assets/img2.webp'
import project3Placeholder from '@/assets/img3.webp'
import Image from 'next/image'
import CheckmarkIcon from '@/assets/checkmark.svg'
import ArrowDiagonal from '@/assets/arrow-diag.svg'
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
    image: project2Placeholder,
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
    image: project3Placeholder,
  },
]

function Projects() {
  return (
    <section className="pb--16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="I transform concepts into engaging digital experiences."
        />

        {/* CARDS FOR PROJECTS */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20 ">
          {portfolioProject.map((project) => (
            <Card
              key={project.title}
              className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20  "
            >
              {/* grid for lg view */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  {/*!!! div to hold gradient, project title line and secondary info all to be changed!!!*/}
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.title}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  {/* project */}
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  {/* map over objects nested array for more info */}
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.result.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckmarkIcon className="size-4 md:size-6 text-white/50" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 px-6">
                      <span>Visit Live Site</span>
                      <ArrowDiagonal className="rotate-45 size-4" />
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
