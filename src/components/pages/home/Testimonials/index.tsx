'use client'

import React from 'react'
import { useLayout } from '@/components/LayoutProvider'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TestimonialData {
  id: number
  name: string
  memberSince: string
  location: string
  rating: number
  review: string
  avatar: string
}

export default function Testimonials() {
  const { isDarkMode } = useLayout()

  const image = '/images/testimonials/image.png'
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      name: "Tony Meander",
      memberSince: "August 2020",
      location: "Lagos, Nigeria",
      rating: 5,
      review: "I just received my first five @ripper.fun cards! Purchased or won on the platform using the Claw and the Lucky Draw, and delivered to my home in just a few days. You guys are doing an amazing job!",
      avatar: image
    },
    {
      id: 2,
      name: "Sarah Johnson",
      memberSince: "March 2021",
      location: "New York, USA",
      rating: 5,
      review: "The platform is incredible! I've been collecting cards for years and this is by far the best experience. The quality of cards and the excitement of the games is unmatched.",
      avatar: image
    },
    {
      id: 3,
      name: "Marcus Chen",
      memberSince: "December 2020",
      location: "Tokyo, Japan",
      rating: 5,
      review: "Amazing service and incredible card quality. The delivery was super fast and the cards arrived in perfect condition. Highly recommend to any collector!",
      avatar: image
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      memberSince: "June 2021",
      location: "Madrid, Spain",
      rating: 5,
      review: "The Lucky Draw feature is so much fun! I've won some amazing cards and the whole experience keeps me coming back. Great platform!",
      avatar: image
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className={`w-full max-w-7xl mx-auto rounded-lg border-0 overflow-hidden px-4 sm:px-6 lg:px-8`}>
      {/* Section Header */}
      <div className="py-4 sm:py-6 lg:py-8">
        <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white text-center">Testimonials</h2>
      </div>

      {/* Testimonial Container */}
      <div className="relative p-2 sm:p-4 lg:p-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-12">
                <div className={`relative rounded-lg p-4 sm:p-6 md:p-8 transition-all duration-500 ${
                  isDarkMode ? 'bg-[#171717]' : 'bg-gray-100'
                }`}>
                  {/* Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-lg p-[2px]"
                    style={{
                      background: 'linear-gradient(to bottom, #E62D0C 0%, #262626 70%)'
                    }}
                  >
                    <div className={`w-full h-full rounded-lg ${
                      isDarkMode ? 'bg-[#0a0a0a]' : 'bg-gray-100'
                    }`}></div>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    {/* Left Side - Avatar */}
                    <div className="flex-shrink-0 order-1 md:order-1">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 overflow-hidden bg-[#E62D0C] rounded-lg">
                        <Image
                          src={testimonial.avatar}
                          alt="image"
                          fill
                          className="object-cover transform scale-x-[-1]"
                          priority
                        />
                      </div>
                    </div>

                    {/* Right Side - Testimonial Info */}
                    <div className="flex-1 text-center md:text-left order-2 md:order-2">
                      {/* Name */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                        {testimonial.name}
                      </h3>

                      {/* Member Info */}
                      <div className="text-xs sm:text-sm md:text-base text-gray-400 mb-3 space-y-1">
                        <p>Member since {testimonial.memberSince}</p>
                        <p>{testimonial.location}</p>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-3 sm:mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Review */}
                      <blockquote className="text-xs sm:text-sm md:text-base text-white leading-relaxed italic">
                        {`"`}{testimonial.review}{`"`}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Custom Pagination */}
        <div className="swiper-pagination flex justify-center mt-4 sm:mt-6 gap-2"></div>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #6b7280;
          opacity: 1;
          margin: 0 3px;
          transition: all 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .testimonial-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px;
          }
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #E62D0C;
          transform: scale(1.2);
        }
        
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: white;
          display: none;
        }
        
        @media (min-width: 640px) {
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: block;
          }
        }
        
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 0;
        }
        
        .swiper-button-prev,
        .swiper-button-next {
          color: white;
          width: 40px;
          height: 40px;
        }
        
        @media (min-width: 640px) {
          .swiper-button-prev,
          .swiper-button-next {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>
    </section>
  )
}
