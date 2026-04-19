'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-top-8 duration-700" style={{ animationFillMode: 'both' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A1410] mb-8" style={{ letterSpacing: '-0.02em' }}>
            Stay Updated
          </h2>
          <p className="text-xl text-[#6B4423] max-w-2xl mx-auto font-light mb-12">
            Get exclusive offers, new flavors, and insider stories delivered to your inbox. Only the good stuff.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationFillMode: 'both', animationDelay: '200ms' }}>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg border border-[#D4C5B9] focus:outline-none 
                         focus:border-[#6B4423] text-[#1A1410] placeholder-[#8B6F47] transition-all duration-300 
                         focus:shadow-lg font-light text-base"
            />
            <button
              type="submit"
              className="bg-[#1A1410] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#6B4423] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
          
          {submitted && (
            <div className="text-[#6B4423] font-semibold animate-in fade-in duration-300">
              ✓ Thanks for subscribing! Check your inbox.
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
