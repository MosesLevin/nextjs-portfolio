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
      <div className="container py-10 ">
        {/* <h2 className="text-2xl font-serif mb-4 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-center text-transparent"> */}
        <h2 className="text-2xl font-serif mb-4 text-white text-center">
          Get in touch!
        </h2>
        <div className="mb-4">
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
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 focus:ring-sky-400 focus:border-emerald-300"
          />
        </div>
        <div className="mb-4">
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
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 focus:ring-sky-400 focus:border-emerald-300"
            // focus:ring-blue-500 focus:border-blue-500
            // focus:outline-none focus ring-2 focus:ring-sky-400 focus:border-emerald-300
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-base font-semibold text-white/60"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm text-gray-950 focus:outline-none focus ring-2 focus:ring-sky-400 focus:border-emerald-300"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 px-3 bg-gradient-to-r mt-4 from-emerald-300 to-sky-400 text-gray-950 font-semibold rounded hover:bg-blue-700"
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

// 'use client'
// import { useState } from 'react'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   })
//   const [status, setStatus] = useState<string>('')

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setStatus('Sending...')

//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })

//     const data = await response.json()

//     if (response.ok) {
//       setStatus('Message sent successfully!')
//       setFormData({ name: '', email: '', message: '' })
//     } else {
//       setStatus(data.error || 'Failed to send the message.')
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="name"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
//             required
//           />
//         </div>

//         <div>
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="email"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
//             required
//           />
//         </div>

//         <div>
//           <label
//             className="block text-sm font-medium text-gray-700"
//             htmlFor="message"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             rows={4}
//             className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
//         >
//           Send Message
//         </button>

//         {status && (
//           <p
//             className={`mt-2 ${
//               status.includes('success') ? 'text-green-500' : 'text-red-500'
//             }`}
//           >
//             {status}
//           </p>
//         )}
//       </form>
//     </div>
//   )
// }

// export default ContactForm
