'use client'

export default function Hero() {
  const handleShopClick = () => {
    const element = document.getElementById('products')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full mt-16 md:mt-0 pt-32 pb-40 md:pt-48 md:pb-48 bg-gradient-to-b from-[#1A1410] via-[#2C1810] to-[#1A1410] text-white overflow-hidden flex items-center justify-center min-h-screen">
      {/* Animated gradient blobs */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-[#6B4423] opacity-30 rounded-full blur-3xl -z-10" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B6F47] opacity-20 rounded-full blur-3xl -z-10" style={{ animation: 'float 10s ease-in-out infinite 2s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center">
        {/* Main heading */}
        <div className="mb-8 animate-in fade-in slide-in-from-top-12 duration-1000" style={{ animationFillMode: 'both' }}>
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-[#F5E6D3] via-white to-[#E8D5C4] bg-clip-text text-transparent">
              VELOURA
            </span>
          </h1>
          <div className="h-2 w-32 bg-gradient-to-r from-[#8B6F47] via-[#F5E6D3] to-[#8B6F47] mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Tagline */}
        <div className="mb-8 animate-in fade-in duration-1000" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          <p className="text-2xl md:text-4xl font-light text-[#E8D5C4] tracking-wide leading-relaxed">
            Luxury Artisan Chocolate
          </p>
          <p className="text-xl md:text-2xl font-light text-[#D4C5B9] mt-3">
            Crafted to Perfection
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-3xl mx-auto animate-in fade-in duration-1000" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          <p className="text-lg md:text-xl text-[#D4C5B9] leading-relaxed font-light">
            Discover premium artisan chocolate made from ethically sourced cocoa beans. Every bar is a masterpiece of craftsmanship and taste.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <button
            onClick={handleShopClick}
            className="px-12 py-4 bg-[#F5E6D3] text-[#1A1410] font-bold text-lg rounded-lg
                       hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1
                       active:translate-y-0 group w-full sm:w-auto"
          >
            <span className="flex items-center justify-center gap-3">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🍫</span>
              Shop Now
            </span>
          </button>
          <button
            className="px-12 py-4 border-2 border-[#F5E6D3] text-[#F5E6D3] font-bold text-lg rounded-lg
                       hover:bg-[#F5E6D3] hover:text-[#1A1410] transition-all duration-300 w-full sm:w-auto"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
