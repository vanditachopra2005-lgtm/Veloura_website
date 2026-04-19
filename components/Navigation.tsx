'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <Image
            src="/VELOURA.jpeg"
            alt="VELOURA"
            width={40}
            height={40}
            className="rounded hover:opacity-80 transition"
          />
          <span className={`font-bold text-2xl transition-colors duration-300 ${
            isScrolled ? 'text-[#1A1410]' : 'text-white'
          }`}>VELOURA</span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-10 items-center font-medium ${isScrolled ? 'text-[#1A1410]' : 'text-white'}`}>
          {['Products', 'About', 'Newsletter'].map((item, i) => (
            <a 
              key={i}
              href={`#${item.toLowerCase()}`}
              className={`relative group text-base transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:text-[#6B4423]' 
                  : 'hover:text-[#F5E6D3]'
              }`}
            >
              {item}
              <span className={`absolute bottom-0 left-0 w-0 h-1 ${
                isScrolled 
                  ? 'bg-[#6B4423]' 
                  : 'bg-[#F5E6D3]'
              } group-hover:w-full transition-all duration-300`}></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className={`hidden md:block px-8 py-2 font-bold text-base rounded-lg transition-all duration-300 ${
          isScrolled
            ? 'bg-[#1A1410] text-white hover:bg-[#6B4423]'
            : 'bg-[#F5E6D3] text-[#1A1410] hover:bg-white'
        }`}>
          Shop
        </button>

        {/* Mobile Menu Button */}
        <button className={`md:hidden text-3xl ${isScrolled ? 'text-[#1A1410]' : 'text-white'}`}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
