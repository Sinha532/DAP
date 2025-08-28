import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your inquiry. We\'ll get back to you soon!')
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-sage/20 rounded-full text-deep-brown font-medium mb-6">
              <i className="fas fa-phone text-sage mr-2"></i>
              Get in Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-deep-brown mb-6">
              Order Your{" "}
              <span className="text-heritage-gold">Sweet</span> Journey
            </h2>
            <p className="text-lg text-village-brown mb-8" data-testid="text-contact-description">
              అసలైన పూతరేకుల రుచి చూడాలనుకుంటున్నారా?
              ఆర్డర్లు, బల్క్ ఎంక్వైరీలు, మరియు మా తయారీ విధానంపై మరిన్ని వివరాల కోసం మమ్మల్ని సంప్రదించండి.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-heritage-gold rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-deep-brown">Phone</div>
                  <div className="text-village-brown" data-testid="text-business-phone">+91 9951735997</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-heritage-gold rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-deep-brown">Email</div>
                  <div className="text-village-brown" data-testid="text-business-email">deliciousatreyapuramputharekul@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-heritage-gold rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <div className="font-semibold text-deep-brown">Address</div>
                  <div className="text-village-brown" data-testid="text-business-address">
                    Ravulapalem, Dr.B.R.Ambedkar Konaseema District<br />Andhra Pradesh, India
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 rounded-2xl village-shadow">
            <h3 className="text-2xl font-playfair font-semibold text-deep-brown mb-6">Send us a Message</h3>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div>
                <label className="block text-deep-brown font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-warm-beige border border-golden/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                  data-testid="input-contact-name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-deep-brown font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-warm-beige border border-golden/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                    data-testid="input-contact-email"
                    required
                  />
                </div>

                <div>
                  <label className="block text-deep-brown font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 xxxxx xxxxx"
                    className="w-full px-4 py-3 bg-warm-beige border border-golden/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold"
                    data-testid="input-contact-phone"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-deep-brown font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your order requirements or any questions..."
                  className="w-full px-4 py-3 bg-warm-beige border border-golden/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage-gold resize-none"
                  data-testid="textarea-contact-message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-heritage-gold text-white px-8 py-4 rounded-lg font-medium hover:bg-golden transition-all duration-300 transform hover:scale-105 village-shadow disabled:opacity-50"
                disabled={isSubmitting}
                data-testid="button-contact-submit"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
