'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Navbar from '@/components/common/Navbar'
import Hero from '@/components/pages/home/Hero'
import RecentPull from '@/components/pages/home/RecentPull'
import Testimonials from '@/components/pages/home/Testimonials'
import CTA from '@/components/pages/home/CTA'
import Footer from '@/components/common/Footer'

export default function HomePage() {
  const { isDarkMode } = useLayout()

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-hidden ${
      isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
    }`}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="p-4 sm:p-6">
        <Hero />
      </div>

      {/* Recent Pull Section */}
      <div className="p-4 sm:p-6">
        <RecentPull />
      </div>

      {/* Testimonials Section */}
      <div className="p-4 sm:p-6">
        <Testimonials />
      </div>

      {/* CTA Section */}
      <div className="py-4 sm:py-6">
        <CTA />
      </div>

      {/* Footer */}
      <div className="p-4 sm:p-6">
        <Footer />
      </div>

      {/* Red Rings */}
      <div className="relative">
        {/* First Red Ring */}
        <div 
          className="absolute w-[175px] h-[175px] border-[19px] blur-[20px] border-[#E62D0C73] rounded-full opacity-60"
          style={{
            bottom: '-80px',
            left: '30%',
            transform: 'translateX(-50%)'
          }}
        ></div>
        
        {/* Second Red Ring */}
        <div 
          className="absolute w-[175px] h-[175px] border-[19px] blur-[20px] border-[#E62D0C73] rounded-full opacity-40"
          style={{
            bottom: '500px',
            right: '-1%',
            transform: 'translateX(50%)'
          }}
        ></div>
      </div>
      
    <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
    </div>
  )
}
