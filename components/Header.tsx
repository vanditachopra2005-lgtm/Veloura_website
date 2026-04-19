import Image from 'next/image'

export default function Header() {
  return (
    <div className="text-center mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
      <div className="mb-6 inline-block">
        <Image
          src="/VELOURA.jpeg"
          alt="VELOURA Logo"
          width={140}
          height={140}
          className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-[#6B4423] mb-2 tracking-wider">
        VELOURA
      </h1>
      
      <p className="text-xl md:text-2xl text-[#8B6F47] italic font-light tracking-wide">
        Premium Artisan Chocolate Crafted to Perfection
      </p>
    </div>
  )
}
