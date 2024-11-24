import Arrow from '@/assets/arrow-diag.svg'
import whiteNoise from '@/assets/WhiteNoise.jpg'
import Card from '@/components/Card'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-16 pt-32 lg:py-24 lg:pt-20">
      <div className="container">
        <Card>
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-t-3xl text-center md:text-left relative overflow-hidden z-0">
            <div
              className="absolute inset-0 opacity-5 -z-10"
              style={{
                backgroundImage: `url(${whiteNoise.src})`,
              }}
            ></div>
            <div className="flex">
              {/* upper flex div for  */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-16 items-center">
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
                  <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                    <span className="font-semibold">E-Mail</span>
                    <Arrow className="rotate-45 fill-white size-4" />
                  </button>
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
