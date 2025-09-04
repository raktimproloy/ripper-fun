'use client'

import React from 'react'

interface GradientCardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'red' | 'blue' | 'purple'
}

export default function GradientCard({ 
  children, 
  className = '', 
  variant = 'default' 
}: GradientCardProps) {
  const gradientClasses = {
    default: 'bg-gradient-to-br from-[#565656] to-[#404040]',
    red: 'bg-gradient-to-br from-[#E62D0C] to-[#d0250a]',
    blue: 'bg-gradient-to-br from-blue-600 to-blue-800',
    purple: 'bg-gradient-to-br from-purple-600 to-purple-800'
  }

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${gradientClasses[variant]}`} />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
