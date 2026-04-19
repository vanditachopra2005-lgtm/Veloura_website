export default function Benefits() {
  const benefits = [
    {
      icon: '🌍',
      title: 'Ethically Sourced',
      description: 'Fair-trade cocoa farmers for sustainable and responsible sourcing globally',
    },
    {
      icon: '👨‍🍳',
      title: 'Artisan Crafted',
      description: 'Master chocolatiers using traditional techniques with modern innovation',
    },
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Finest ingredients from around the world in every bar',
    },
    {
      icon: '💚',
      title: 'Sustainable',
      description: 'Eco-friendly packaging and processes that care for our planet',
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-8 duration-700" style={{ animationFillMode: 'both' }}>
          <h2 className="text-5xl md:text-6xl font-bold text-[#1A1410] mb-8" style={{ letterSpacing: '-0.02em' }}>
            Why Choose VELOURA?
          </h2>
          <p className="text-xl text-[#6B4423] max-w-2xl mx-auto font-light">
            Crafted with excellence, every bar represents our commitment to quality, sustainability, and artisan craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 md:p-10 rounded-xl bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] 
                         hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#E8D5C4]
                         hover:border-[#8B6F47] group
                         animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-3 whitespace-nowrap">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-500">{benefit.icon}</span>
                <h3 className="text-2xl font-bold text-[#1A1410] group-hover:text-[#6B4423] transition-colors duration-300">{benefit.title}</h3>
              </div>
              <p className="text-[#6B4423] leading-relaxed font-light text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
