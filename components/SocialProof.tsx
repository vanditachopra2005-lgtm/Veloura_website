'use client'

import Image from 'next/image'

export default function SocialProof() {
  const handleInstagramClick = () => {
    window.open(
      'https://www.instagram.com/velourachocolates?igsh=MXY1aXByeG12d3k4Zw%3D%3D&utm_source=qr',
      '_blank'
    )
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="animate-in fade-in slide-in-from-top-8 duration-700" style={{ animationFillMode: 'both' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A1410] mb-4" style={{ letterSpacing: '-0.02em' }}>
            @velourachocolates
          </h2>
          <p className="text-xl text-[#6B4423] max-w-2xl mx-auto leading-relaxed font-light mb-16">
            Join our community! Share your VELOURA moments and see what delicious creations we're crafting.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationFillMode: 'both', animationDelay: '300ms' }}>
          <button
            onClick={handleInstagramClick}
            className="inline-flex items-center gap-3 bg-[#1A1410] hover:bg-[#6B4423] text-white 
                       px-12 py-4 rounded-lg text-lg font-bold transition-all duration-300 shadow-lg 
                       hover:shadow-xl hover:-translate-y-1"
          >
            <span>📷</span>
            <span>Follow on Instagram</span>
          </button>
        </div>
      </div>
    </section>
  )
}
