'use client'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full border-2 bg-white/10 backdrop-blur">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="nav-item cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={700}
          className="nav-item cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="nav-item cursor-pointer"
        >
          About
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
