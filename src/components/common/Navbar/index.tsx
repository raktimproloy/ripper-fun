'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Image from 'next/image'

export default function Navbar() {
  const { isDarkMode, toggleSidebar } = useLayout()
  const searchIcon = '/images/icons/search.png'

  return (
    <header className={`w-full border-b pb-1 transition-colors duration-300 ${
      isDarkMode ? 'border-[#565656] bg-[#0a0a0a] ' : 'border-gray-200 bg-white'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-600 transition-colors"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Image src={searchIcon} alt="Search" width={20} height={20} />
            </div>
            <input
              type="text"
              placeholder="Search here..."
              className={`w-full pl-8 sm:pl-10 pr-4 py-2 text-white text-sm sm:text-base rounded-lg border transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-[#262626] border-0 text-white placeholder-gray-300 focus:border-[#E62D0C] focus:ring-1 focus:ring-[#E62D0C]' 
                  : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#E62D0C] focus:ring-1 focus:ring-[#E62D0C]'
              }`}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className={`px-3 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#E62D0C] text-white hover:bg-[#d0250a]' 
              : 'bg-[#E62D0C] text-white hover:bg-[#d0250a]'
          }`}>
            <span className="hidden sm:inline">Login</span>
            <span className="sm:hidden">L</span>
          </button>
          <button className={`px-3 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-[#262626] text-white border-0 hover:bg-[#565656]' 
              : 'bg-[#262626] text-white border-0 hover:bg-[#565656]'
          }`}>
            <span className="hidden sm:inline">Sign Up</span>
            <span className="sm:hidden">S</span>
          </button>
        </div>
      </div>
    </header>
  )
}
