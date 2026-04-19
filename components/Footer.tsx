export default function Footer() {
  return (
    <footer className="bg-[#1A1410] py-20 md:py-28 border-t-2 border-[#6B4423]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Instagram Section */}
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700" style={{ animationFillMode: 'both' }}>
          <p className="text-[#D4C5B9] text-lg font-light mb-8">Follow Us</p>
          <a 
            href="https://www.instagram.com/velourachocolates?igsh=MXY1aXByeG12d3k4Zw%3D%3D&utm_source=qr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#F5E6D3] to-[#E8D5C4] hover:from-[#E8D5C4] hover:to-[#F5E6D3] text-[#1A1410] px-12 py-4 rounded-lg font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 transform"
          >
            <span className="text-3xl">📸</span>
            <span>Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#6B4423] mt-16 pt-12 text-center">
          <p className="text-[#D4C5B9] text-base opacity-80 font-light">© 2026 VELOURA. All rights reserved.</p>
          <p className="text-[#D4C5B9] text-base opacity-75 font-light mt-3">Crafted with ❤️ and premium chocolate</p>
        </div>
      </div>
    </footer>
  )
}
