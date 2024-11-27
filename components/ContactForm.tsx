'use client'
import React, { useState } from 'react'
import { send } from '@emailjs/browser'

//  form data which handleChange sets on change (react change event) for all form inputs
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  // states for submit button, if failed or success
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // final form data api request to emailjs
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSuccessMessage('')

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      await send(serviceId, templateId, formData, publicKey)

      setSuccessMessage('Your message has been sent successfully!')
      setFormData({ name: '', email: '', message: '' }) // Reset form
    } catch (error) {
      console.error('Failed to send email:', error)
      setSuccessMessage('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  // uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center
  return (
    <form onSubmit={handleSubmit} className="mx-6">
      <div className="container py-10 md:flex md:flex-col md:items-center md:justify-center ">
        {/* <h2 className="text-2xl font-serif mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-transparent"> */}
        <h2 className="text-2xl font-serif mb-4 text-white/90 text-center">
          Contact Me
        </h2>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="name"
            className="block text-base font-semibold text-white/60"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 ring-sky-400 focus:ring-sky-300 focus:ring-4 hover:ring-sky-400 hover:ring-4 focus-within:hover:ring-sky-300 focus-within:hover:ring-4"
          />
        </div>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="email"
            className="block text-base font-semibold text-white/60"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 ring-sky-400 focus:ring-sky-300 focus:ring-4 hover:ring-sky-400 hover:ring-4 focus-within:hover:ring-sky-300 focus-within:hover:ring-4"
            // focus:ring-blue-500 focus:border-blue-500
            // focus:outline-none focus ring-2 focus:ring-sky-400 focus:border-emerald-300
          />
        </div>
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="message"
            className="block text-base font-semibold text-white/60"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full md:w-[420px] lg:w-[550px] px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 ring-sky-400 focus:ring-sky-300 focus:ring-4 hover:ring-sky-400 hover:ring-4 focus-within:hover:ring-sky-300 focus-within:hover:ring-4"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-[420px] lg:w-[550px] py-3 px-3 bg-gradient-to-r mt-4 from-emerald-300 to-sky-400 text-gray-950 font-semibold 
          button-animation focus:ring-1 focus-visible:ring-white hover:ring-2 hover:ring-sky-200 hover:text-black "
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {successMessage && (
          <p className="mt-4 text-center text-emerald-400">{successMessage}</p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
