import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send email via mailto link
    const mailtoLink = `mailto:studio.a.events27@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez une idée ? Un projet à concrétiser ? Contactez-moi pour en discuter
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:studio.a.events27@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
                studio.a.events27@gmail.com
              </a>
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Téléphone</h3>
            <p className="text-gray-600">
              <a href="tel:+212621695313" className="text-primary-600 hover:text-primary-700 font-medium">
                +212 6 21 69 53 13
              </a>
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Localisation</h3>
            <p className="text-gray-600">
              Marrakech, Maroc
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="card p-8 md:p-12">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Merci ! Votre message a été envoyé avec succès. Je vous répondrai bientôt.
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                placeholder="Votre nom"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                placeholder="votre@email.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-900 font-semibold mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                placeholder="Sujet de votre message"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary justify-center text-center"
            >
              Envoyer mon message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
