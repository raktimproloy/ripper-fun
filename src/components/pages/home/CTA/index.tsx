'use client'

import React, { useState } from 'react'
import { useLayout } from '@/components/LayoutProvider'

export default function CTA() {
  const { isDarkMode } = useLayout()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    // You can add API call or other logic here
  }

  return (
    <section className={`w-full border-0 overflow-hidden relative `}>
      {/* Background with subtle glow */}
      <div className={`absolute inset-0 ${
        isDarkMode ? 'bg-[#1F1F1F91]' : 'bg-white'
      }`}>
        {/* Subtle red glow from right side */}
        {/* <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#E62D0C]/10 to-transparent opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 sm:p-12 text-center">
        {/* FAQ Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white mb-8 sm:mb-12">
          Frequently Asked Questions
        </h2>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address here"
              required
              className={`w-full px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                isDarkMode 
                  ? 'bg-[#565656] focus:bg-[#6b6b6b]' 
                  : 'bg-gray-200 focus:bg-gray-100'
              }`}
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(#565656, #565656) padding-box, linear-gradient(to right, #E62D0C 0%, #262626 70%) border-box'
                  : 'linear-gradient(#f5f5f5, #f5f5f5) padding-box, linear-gradient(to right, #E62D0C, #E62D0C) border-box',
                border: '2px solid transparent'
              }}
            />
          </div>

          {/* Join Us Button */}
          <button
            type="submit"
            className={`w-[40%] mx-auto py-2 sm:py-3 px-6 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-[#E62D0C] text-white hover:bg-[#d0250a] hover:shadow-[#E62D0C]/25' 
                : 'bg-[#E62D0C] text-white hover:bg-[#d0250a] hover:shadow-[#E62D0C]/25'
            }`}
          >
            Join Us
          </button>
        </form>
      </div>
    </section>
  )
}
