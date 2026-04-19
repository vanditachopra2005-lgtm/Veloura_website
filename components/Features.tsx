export default function Features() {
  const features = [
    {
      icon: '🍫',
      title: 'Premium Quality',
      description: 'Sourced from the finest cocoa plantations worldwide',
    },
    {
      icon: '✨',
      title: 'Artisan Crafted',
      description: 'Made with passion and precision by master chocolatiers',
    },
    {
      icon: '🌍',
      title: 'Ethically Sourced',
      description: 'Supporting responsible farming and fair trade practices',
    },
  ]

  return (
    <div className="mb-16 animate-in fade-in duration-700 delay-300">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-[#6B4423] mb-6 text-center">
          Experience Luxury in Every Bite
        </h2>
        <p className="text-lg text-[#2C1810] leading-8 opacity-85 text-center mb-8">
          Discover our exquisite collection of handcrafted chocolates, blended with the finest 
          ingredients from around the world. At VELOURA, we believe that chocolate is more than 
          just a treat—it's an experience of pure indulgence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-[#E8D5C4] animate-in fade-in duration-700"
            style={{ animationDelay: `${(index + 2) * 200}ms` }}
          >
            <div className="text-5xl mb-4 text-center">{feature.icon}</div>
            <h3 className="text-2xl font-bold text-[#6B4423] mb-3 text-center">
              {feature.title}
            </h3>
            <p className="text-[#8B6F47] text-center leading-6">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
