'use client'

import Image from 'next/image'

interface ProductShowcaseProps {
  title: string
  description: string
  imagePosition: 'left' | 'right'
  features?: string[]
}

export default function ProductShowcase({
  title,
  description,
  imagePosition,
  features = [],
}: ProductShowcaseProps) {
  const imageSection = (
    <div className="flex-1 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] rounded-2xl p-16 md:p-20 flex items-center justify-center min-h-[500px] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative group">
      <div className="absolute inset-0 bg-gradient-to-t from-[#6B4423]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Image
          src="/lookofchoclate.jpeg"
          alt="Premium Chocolate Collection"
          width={400}
          height={500}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  )

  const contentSection = (
    <div className="flex-1 flex flex-col justify-center py-8 md:py-0">
      <div className="animate-in fade-in slide-in-from-left-8 duration-700" style={{ animationFillMode: 'both' }}>
        <h2 className="text-5xl md:text-6xl font-bold text-[#1A1410] mb-8 leading-tight">{title}</h2>
        <p className="text-lg md:text-xl text-[#6B4423] mb-10 leading-relaxed font-light">{description}</p>

        {features.length > 0 && (
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-4 text-[#1A1410] animate-in fade-in slide-in-from-left-4 duration-500"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <span className="text-2xl mt-1 flex-shrink-0 text-[#8B6F47]">✓</span>
                <span className="text-lg md:text-lg leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-20 items-stretch`}>
          {imageSection}
          {contentSection}
        </div>
      </div>
    </section>
  )
}
