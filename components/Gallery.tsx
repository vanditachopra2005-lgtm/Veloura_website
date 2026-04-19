import Image from 'next/image'

export default function Gallery() {
  const images = [
    {
      src: '/choclate_veloura.jpeg',
      alt: 'VELOURA Chocolate Collection',
      title: 'Signature Collection',
    },
    {
      src: '/image_posings.jpeg',
      alt: 'Premium Chocolate Presentation',
      title: 'Artisan Creations',
    },
    {
      src: '/lookofchoclate.jpeg',
      alt: 'Luxury Chocolate Details',
      title: 'Fine Craftsmanship',
    },
  ]

  return (
    <div className="mb-16 animate-in fade-in duration-700 delay-500">
      <h2 className="text-4xl font-bold text-[#6B4423] mb-10 text-center tracking-wide">
        Our Collection
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 animate-in fade-in duration-700"
            style={{ animationDelay: `${(index + 3) * 200}ms`, position: 'relative' }}
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <h3 className="text-white text-xl font-bold">{image.title}</h3>
                <p className="text-[#F5E6D3] text-sm mt-2">Premium Artisan Chocolate</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
