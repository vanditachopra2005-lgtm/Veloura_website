import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VELOURA - Premium Chocolate Brand',
  description: 'Discover luxury in every bite with VELOURA artisan chocolate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
