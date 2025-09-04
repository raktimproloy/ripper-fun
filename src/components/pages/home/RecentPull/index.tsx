'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Image from 'next/image'
import GradientCard from '@/components/pages/home/GradientCard'

interface CardData {
  id: number
  image: string
  title: string
  grade: string
  gradingCompany: string
  packType: string
  status: string
}

export default function RecentPull() {
  const { isDarkMode } = useLayout()

  const card1 = '/images/cards/card-1.png'
  const card2 = '/images/cards/card-2.png'
  const card3 = '/images/cards/card-3.png'
  const card4 = '/images/cards/card-4.png'

  const cardData: CardData[] = [
    {
      id: 1,
      image: card1,
      title: '2015 Pokemon XY Mega Rayquaza EX',
      grade: 'PSA 10 GEM MINT',
      gradingCompany: 'PSA',
      packType: 'Legend Pack',
      status: 'Just revealed'
    },
    {
      id: 2,
      image: card2,
      title: '2015 Pokemon XY Mario Pikachu',
      grade: 'PSA 10 GEM MINT',
      gradingCompany: 'PSA',
      packType: 'Legend Pack',
      status: 'Just revealed'
    },
    {
      id: 3,
      image: card3,
      title: '2015 Pokemon XY Galarian Moltres V',
      grade: 'TAG 10',
      gradingCompany: 'TAG',
      packType: 'Legend Pack',
      status: 'Just revealed'
    },
    {
      id: 4,
      image: card4,
      title: '2015 Pokemon XY Latias & Latios GX',
      grade: 'PSA 10 GEM MINT',
      gradingCompany: 'PSA',
      packType: 'Legend Pack',
      status: 'Just revealed'
    }
  ]

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  return (
    <section className={`w-full rounded-lg border-2 overflow-hidden ${
      isDarkMode ? 'border-[#565656]' : 'border-gray-300'
    }`}>
      {/* Section Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white text-center">Recent Pull</h2>
      </div>

      {/* Cards Container */}
      <div className="p-2 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {cardData.map((card) => (
            <GradientCard
              key={card.id}
              variant="default"
              className="w-full max-w-sm mx-auto"
            >
              <div className="h-full flex flex-col">
                {/* Card Image Container */}
                <div className="relative bg-[#262626] p-3 sm:p-4">
                  <div className="relative w-full h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-[#1F1F1F] flex-1 flex flex-col">
                  {/* Card Title */}
                  <div className="mb-3 sm:mb-4 flex-1">
                    <h3 className="text-xs sm:text-sm md:text-base text-white text-center font-semibold leading-tight">
                      {truncateText(card.title, 25)}
                    </h3>
                  </div>

                  {/* Pack Button */}
                  <div className="flex flex-col items-center">
                    <button 
                      className={`w-full py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-start gap-2 text-white shadow-lg transition-all duration-300 hover:scale-105`}
                      style={{
                        background: 'linear-gradient(to right, #E62D0C 0%, #262626 90%)'
                      }}
                    >
                      {/* Pack Icon */}
                      <div className="w-8 h-8 sm:w-10 sm:h-10 relative flex-shrink-0">
                        <Image
                          src={card3}
                          alt="Card"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block text-xs sm:text-sm font-medium">{card.packType}</span>
                        {/* Status Text */}
                        <p className="text-xs text-gray-300 mt-1 text-center">
                          {card.status}
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  )
}
