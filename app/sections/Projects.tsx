import project1Placeholder from '@/assets/img1.webp'
import project2Placeholder from '@/assets/img2.webp'
import project3Placeholder from '@/assets/img3.webp'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import CheckmarkIcon from '@/assets/checkmark.svg'

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
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4">
          I transform concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProject.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8"
            >
              <div className="flex">
                {/* div to hold gradient */}
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.title}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-4" />
              <ul>
                {project.result.map((result) => (
                  <li key={result.title}>
                    <CheckmarkIcon className="size-4 text-white" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button>View Live Site</button>
              </a>
              <Image src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
