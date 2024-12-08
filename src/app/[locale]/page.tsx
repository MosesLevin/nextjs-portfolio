import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Banner from '../sections/Banner'
import References from '../sections/References'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Banner />
      <References />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
