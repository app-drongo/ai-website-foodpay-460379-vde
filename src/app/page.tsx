import type { Metadata } from 'next'

import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Pricing from '@/components/sections/home/Pricing'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Home',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
    </main>
  )
}
