'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  isDarkMode: boolean
  onToggleDarkMode: () => void
}

export default function Sidebar({ isOpen, onToggle, isDarkMode, onToggleDarkMode }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('Home')

  const homeIcon = '/images/icons/home.png'
  const marketplaceIcon = '/images/icons/market.png'
  const leaderboardIcon = '/images/icons/leader.png'
  const activityIcon = '/images/icons/activity.png'
  const referEarnIcon = '/images/icons/refer.png'
  const clawMachineIcon = '/images/icons/claw.png'
  const luckyDrawIcon = '/images/icons/lucky.png'
  const profileIcon = '/images/icons/profile.png'
  const supportIcon = '/images/icons/support.png'
  const darkModeIcon = '/images/icons/theme.png'

  const navigationItems = [
    { name: 'Home', icon: homeIcon },
    { name: 'Marketplace', icon: marketplaceIcon },
    { name: 'Leaderboard', icon: leaderboardIcon },
    { name: 'Activity', icon: activityIcon },
    { name: 'Refer & Earn', icon: referEarnIcon }
  ]

  const exploreItems = [
    { name: 'Claw Machine', icon: clawMachineIcon },
    { name: 'Lucky Draw', icon: luckyDrawIcon }
  ]

  const settingsItems = [
    { name: 'Profile', icon: profileIcon },
    { name: 'Support', icon: supportIcon }
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full bg-[#0a0a0a] border-r border-[#565656] transition-all duration-300 z-50 ${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      } lg:translate-x-0 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 py-6 border-b border-[#565656]">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-[#E62D0C]">RIPPER FUN</h1>
            <span className="bg-[#262626] text-white text-xs px-2 py-1 rounded">BETA</span>
          </div>
          <button
            onClick={onToggle}
            className="p-1 rounded-lg bg-[#262626] hover:bg-[#383838] border-1 border-[#565656] transition-colors relative left-7"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4">
          {/* Main Navigation */}
          <div className="px-4 space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative overflow-hidden ${
                  activeItem === item.name
                    ? 'bg-[#262626] text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#E62D0C] before:to-[#ff4d2e] before:rounded-r-full after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-6 after:bg-[#E62D0C]/40 after:rounded-full after:shadow-[0_0_15px_rgba(230,45,12,1)]'
                    : 'text-gray-300 hover:bg-[#262626] hover:text-white'
                }`}
              >
                <Image src={item.icon} alt={item.name} width={20} height={20} />
                <span className="text-sm font-medium">{item.name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-[#565656] my-4"></div>

          {/* Explore Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">EXPLORE</h3>
            <div className="space-y-1">
              {exploreItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative overflow-hidden ${
                    activeItem === item.name
                      ? 'bg-[#262626] text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#E62D0C] before:to-[#ff4d2e] before:rounded-r-full after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-6 after:bg-[#E62D0C]/40 after:rounded-full after:shadow-[0_0_15px_rgba(230,45,12,1)]'
                      : 'text-gray-300 hover:bg-[#262626] hover:text-white'
                  }`}
                >
                  <Image src={item.icon} alt={item.name} width={20} height={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#565656] my-4"></div>

          {/* Settings Section */}
          <div className="px-4">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">SETTINGS</h3>
            <div className="space-y-1">
              {settingsItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 relative overflow-hidden ${
                    activeItem === item.name
                      ? 'bg-[#262626] text-white before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#E62D0C] before:to-[#ff4d2e] before:rounded-r-full after:absolute after:-left-2 after:top-1/2 after:-translate-y-1/2 after:w-6 after:h-6 after:bg-[#E62D0C]/40 after:rounded-full after:shadow-[0_0_15px_rgba(230,45,12,1)]'
                      : 'text-gray-300 hover:bg-[#262626] hover:text-white'
                  }`}
                >
                  <Image src={item.icon} alt={item.name} width={20} height={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="px-4 mt-4">
            <button
              onClick={onToggleDarkMode}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-300 bg-[#262626] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image src={darkModeIcon} alt="Dark Mode" width={20} height={20} />
                <span className="text-sm font-medium">Dark Mode</span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-colors ${
                isDarkMode ? 'bg-[#E62D0C]' : 'bg-gray-600'
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  isDarkMode ? 'translate-x-5' : 'translate-x-0.5'
                } mt-0.5`}></div>
              </div>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
