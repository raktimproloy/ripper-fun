'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Image from 'next/image'

export default function Hero() {
  const { isDarkMode } = useLayout()
  const heroLeft = '/images/hero-left.png'
  const heroRight = '/images/hero-right.png'
  const heroCard = '/images/hero-card.png'

  return (
    <section className={`relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg border-2 overflow-hidden ${
      isDarkMode ? 'border-[#565656]' : 'border-gray-300'
    }`}>
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Left Background Image */}
        <div className="absolute inset-0 w-1/2">
          <Image
            src={heroLeft}
            alt="Hero Left Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Right Background Image */}
        <div className="absolute right-0 inset-y-0 w-1/2">
          <Image
            src={heroRight}
            alt="Hero Right Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
      </div>

      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-[#565656]/50 opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center h-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Left Side - Text and Buttons */}
        <div className="flex-1 max-w-2xl text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Rip, Win, Repeat.
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-[#E62D0C] mb-6 sm:mb-8 leading-relaxed">
            Try your luck, win instant prizes, and choose to keep, swap, or redeem at 93% value!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <button className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-[#E62D0C] text-white hover:bg-[#d0250a] shadow-lg shadow-[#E62D0C]/25' 
                : 'bg-[#E62D0C] text-white hover:bg-[#d0250a] shadow-lg shadow-[#E62D0C]/25'
            }`}>
              Play Machines
            </button>
            
            <button className={`px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 ${
              isDarkMode 
                ? 'bg-[#565656] text-white hover:bg-[#6b6b6b] border border-gray-500' 
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}>
              See Referral
            </button>
          </div>
        </div>

        {/* Right Side - Trading Card */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative">
            {/* Trading Card Container */}
            <div className="relative w-48 h-60 sm:w-64 sm:h-80 lg:w-80 lg:h-96 transform rotate-[8deg] sm:rotate-[12deg] lg:rotate-[16deg] hover:rotate-[6deg] sm:hover:rotate-[10deg] lg:hover:rotate-[14deg] transition-transform duration-500">
              <Image
                src={heroCard}
                alt="Graded Pokémon Trading Card"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E62D0C]/20 to-transparent rounded-lg blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
