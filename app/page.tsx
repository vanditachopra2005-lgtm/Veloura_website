'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProductShowcase from '@/components/ProductShowcase'
import Benefits from '@/components/Benefits'
import Newsletter from '@/components/Newsletter'
import SocialProof from '@/components/SocialProof'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      <section id="products">
        <ProductShowcase
          title="Dark Chocolate Collection"
          description="Our signature dark chocolate collection features carefully selected cocoa from the finest plantations. Rich, bold, and beautifully crafted to deliver an unforgettable experience in every piece."
          imagePosition="right"
          features={[
            '70% pure cocoa from Ecuador',
            'Handcrafted in small batches',
            'No artificial additives',
            'Perfect for chocolate connoisseurs',
          ]}
        />
      </section>

      <ProductShowcase
        title="Artisan Flavored Collections"
        description="Discover our exquisite range of flavored chocolates, blending traditional craftsmanship with innovative flavor combinations. Each piece is a masterpiece of taste and texture."
        imagePosition="left"
        features={[
          'Limited edition flavors',
          'Premium natural ingredients',
          'Beautifully packaged for gifting',
          'Sustainable sourcing practices',
        ]}
      />

      <Benefits />
      <Newsletter />
      <SocialProof />
      <Footer />
    </main>
  )
}
