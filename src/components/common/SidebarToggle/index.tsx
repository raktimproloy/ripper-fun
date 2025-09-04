'use client'

import React from 'react'

interface SidebarToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export default function SidebarToggle({ isOpen, onToggle }: SidebarToggleProps) {
  if (isOpen) return null

  return (
    <button
      onClick={onToggle}
      className="fixed left-4 top-5 z-50 p-1 rounded-lg bg-[#262626] hover:bg-[#383838] border-1 border-[#565656] transition-colors"
    >
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  )
}
