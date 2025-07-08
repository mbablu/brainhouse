'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header id="header" className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="w-[37px] h-[41px] bg-gradient-to-r from-[#6C63FF] to-[#9D4EDD] rounded-md flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
                    </svg>
                  </div>
                  <span className="text-[18px] font-bold text-[#333333]">BrainHouse</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="/services" className="text-gray-800 hover:text-[#111] transition-colors cursor-pointer">Solutions</Link>
                    <Link href="/industries" className="text-gray-800 hover:text-[#111] transition-colors cursor-pointer">Industries</Link>
                    <Link href="/resource" className="text-gray-800 hover:text-[#111] transition-colors cursor-pointer">Resources</Link>
                    <Link href="/about-us" className="text-gray-800 hover:text-[#111] transition-colors cursor-pointer">About</Link>
                    <Link href="/contact-us" className="bg-[#4338ca] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">Contact</Link>
                </nav>
                <button className="md:hidden">
                    <i className="text-gray-600" data-fa-i2svg=""><svg className="svg-inline--fa fa-bars" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                </button>
            </div>
        </div>
    </header>
  )
}