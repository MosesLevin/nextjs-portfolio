'use client'
import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<string>('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (response.ok) {
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setStatus(data.error || 'Failed to send the message.')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4"
        >
          Send Message
        </button>

        {status && (
          <p
            className={`mt-2 ${
              status.includes('success') ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
