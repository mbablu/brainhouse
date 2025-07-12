'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section
      id="hero"
      className="bg-gradient-to-br from-gray-900 via-secondary to-gray-800 text-white min-h-[700px] flex items-center pt-[70px]"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Brainhouse{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5C6EFF] to-[#D28EFF]">
               An AI First Company
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-10">
              Where Intelligent Systems Meet Human Possibility
            </p>
            {/* <p className="text-lg text-gray-400 mb-8">AI. Engineered for Impact.</p> */}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="bg-[#192da0] hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Explore Our Solutions
              </Link>
              <Link href="/contact-us" className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Talk to an AI Expert
              </Link>
              {/* <button className="text-gray-300 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors border border-gray-600 hover:border-gray-400">
                Download Case Study
              </button> */}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full h-96">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d4297fabd6-0a6a738e101e6a0d7732.png"
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}