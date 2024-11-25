'use client'
import { Link } from 'react-scroll'
import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

// works almost perfectly, i added offset option from react-scroll, need to style contact before continuing debugging contact and offset so it works on all screen sizes

function Navbar() {
  const [activeLink, setActiveLink] = useState('')

  const baseClass =
    'nav-item cursor-pointer px-4 py-1.5 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white transition duration-200'
  const activeClass =
    'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full border-2 bg-white/10 backdrop-blur">
        {[
          { to: 'home', label: 'Home', duration: 500 },
          { to: 'projects', label: 'Projects', duration: 700 },
          { to: 'about', label: 'About', duration: 800 },
          { to: 'contact', label: 'Contact', duration: 700 },
        ].map(({ to, label, duration }) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={duration}
            className={twMerge(baseClass, activeLink === to && activeClass)}
            onSetActive={() => setActiveLink(to)}
            spy={true}
            activeClass={activeClass}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Navbar

// 'use client'
// import { Link } from 'react-scroll'

// function Navbar() {
//   return (
//     <div className="flex justify-center items-center fixed top-3 w-full z-10">
//       <nav className="flex gap-1 p-0.5 border-white/15 rounded-full border-2 bg-white/10 backdrop-blur">
//         <Link
//           to="home"
//           smooth={true}
//           duration={500}
//           className="nav-item cursor-pointer"
//         >
//           Home
//         </Link>
//         <Link
//           to="projects"
//           smooth={true}
//           duration={700}
//           className="nav-item cursor-pointer"
//         >
//           Projects
//         </Link>
//         <Link
//           to="about"
//           smooth={true}
//           duration={800}
//           className="nav-item cursor-pointer"
//         >
//           About
//         </Link>
//         <Link
//           to="contact"
//           smooth={true}
//           duration={1000}
//           className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 cursor-pointer"
//         >
//           Contact
//         </Link>
//       </nav>
//     </div>
//   )
// }

// export default Navbar
