import Arrow from '@/src/assets/icons/arrow-diag.svg'
import whiteNoise from '@/src/assets/WhiteNoise.jpg'
import Card from '@/src/components/Card'
import ContactForm from '@/src/components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 pt-32 lg:py-24 lg:pt-20">
      <div className="container">
        <Card>
          <div className="bg-gradient-to-r from-amber-300 dark:from-emerald-300 to-orange-500 dark:to-sky-400 text-gray-900 py-8 px-10 rounded-t-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${whiteNoise.src})`,
              }}
            ></div>
            <div className="flex">
              {/* upper flex div for  */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-center ">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl">
                    Let&apos;s create something amazing together
                  </h2>
                  <p className="text-sm md:text-base mt-2">
                    Ready to bring your next project to life? Let&apos;s connect
                    and discover how I can help you achieve your goals.
                  </p>
                </div>
                <div>
                  <a href="mailto:moses.levin14@gmail.com">
                    <button
                      className=" text-white bg-black inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 
                  button-animation ring-2 ring-gray-800 hover:ring-gray-800 hover:ring-4"
                    >
                      <span className="font-semibold">E-Mail</span>
                      <Arrow className="rotate-45 fill-white size-4" />
                    </button>
                  </a>
                </div>
              </div>
              {/* contact form */}
              <div className="flex"></div>
            </div>
          </div>
          <ContactForm />
        </Card>
      </div>
    </section>
  )
}

// {/* <a
// href={link.href}
// key={link.title}
// target="_blank"
// className="inline-flex items-center gap-2 hover:underline underline-offset-4"
// >
// {/* added declaration for SVGR in typescript in root so we can use link.icon */}
// <span className="font-semibold">{link.title}</span>
// <StackIcons
//   component={link.icon}
//   size="size-5 button-animation "
// />
// </a> */}
