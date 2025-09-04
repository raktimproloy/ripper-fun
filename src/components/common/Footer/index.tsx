'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Image from 'next/image'

export default function Footer() {
  const { isDarkMode } = useLayout()

  const facebookIcon = '/images/icons/facebook.png'
  const instagramIcon = '/images/icons/insta.png'
  const twitterIcon = '/images/icons/twitter.png'

  const quickLinks = [
    'Home',
    'Marketplace', 
    'Leaderboard',
    'Refer and Earn',
    'Claw Machine'
  ]

  const supportLinks = [
    'Contact',
    'Documentation',
    'Term of Services',
    'Privacy Policy'
  ]

  const socialMedia = [
    { name: 'Facebook', icon: facebookIcon },
    { name: 'Instagram', icon: instagramIcon },
    { name: 'Twitter', icon: twitterIcon }
  ]

  return (
    <footer className={`w-full rounded-lg border-1 overflow-hidden relative ${
      isDarkMode ? 'border-[#565656]' : 'border-gray-300'
    }`}>
      {/* Background with subtle glow */}
      <div className={`absolute inset-0`}>
        {/* Subtle red glow from bottom center */}
        {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/2 bg-gradient-to-t from-[#E62D0C]/10 to-transparent opacity-50"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Logo */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                <span className="relative">
                  RIPPER FUN
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Discover the world{`'`}s first Pokemon marketplace where digitized card can be bought, sold, traded, vaulted, and earn income, instantaneously, all in one seamless platform.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Social Media</h3>
            <p className="text-sm text-gray-400 mb-4">
              Follow us on social media for latest updates
            </p>
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                    isDarkMode 
                      ? 'bg-gray-800 hover:bg-[#E62D0C]' 
                      : 'bg-gray-200 hover:bg-[#E62D0C]'
                  }`}
                >
                  <Image src={social.icon} alt={social.name} width={index == 0 ?10:20} height={index == 0?10:20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
