'use client'

export default function CTA() {
  const handleInstagramClick = () => {
    window.open(
      'https://www.instagram.com/velourachocolates?igsh=MXY1aXByeG12d3k4Zw%3D%3D&utm_source=qr',
      '_blank'
    )
  }

  return (
    <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
      <div className="bg-gradient-to-r from-[#6B4423] to-[#8B6F47] rounded-3xl p-12 md:p-16 shadow-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5E6D3] mb-6 tracking-wide">
          Join Our Community
        </h2>
        
        <p className="text-[#E8D5C4] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-8">
          Follow us on Instagram for exclusive product launches, behind-the-scenes content, 
          and special offers available only to our followers.
        </p>

        <button
          onClick={handleInstagramClick}
          className="inline-flex items-center gap-3 bg-[#F5E6D3] hover:bg-[#FFFAF5] text-[#6B4423] 
                     px-8 md:px-10 py-4 rounded-full text-lg md:text-xl font-bold 
                     transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 
                     active:translate-y-0 transform"
        >
          <span className="text-2xl">📷</span>
          <span>Follow @velourachocolates</span>
        </button>

        <p className="text-[#E8D5C4] mt-8 text-sm">
          📌 Click the button above to visit our Instagram page
        </p>
      </div>
    </div>
  )
}
