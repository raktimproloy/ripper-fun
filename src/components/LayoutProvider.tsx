'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import Sidebar from './common/Sidebar'
import SidebarToggle from './common/SidebarToggle'

interface LayoutContextType {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined)

export const useLayout = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider')
  }
  return context
}

interface LayoutProviderProps {
  children: React.ReactNode
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Start closed on mobile
  const [isDarkMode, setIsDarkMode] = useState(true) // Default to dark mode

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Apply dark mode to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.colorScheme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.colorScheme = 'light'
    }
  }, [isDarkMode])

  // Set initial dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  // Close sidebar on mobile when clicking outside
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true) // Open on desktop
      } else {
        setIsSidebarOpen(false) // Close on mobile
      }
    }

    // Set initial state based on screen size
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <LayoutContext.Provider value={{
      isSidebarOpen,
      toggleSidebar,
      isDarkMode,
      toggleDarkMode
    }}>
      <div className={`min-h-screen transition-all duration-300 ${
        isDarkMode ? 'dark bg-[#0a0a0a0]' : 'bg-white'
      }`}>
        <Sidebar 
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <SidebarToggle 
          isOpen={isSidebarOpen}
          onToggle={toggleSidebar}
        />
        <div className={`transition-all duration-300 ${
          isSidebarOpen ? 'lg:ml-64' : 'ml-0'
        }`}>
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  )
}
