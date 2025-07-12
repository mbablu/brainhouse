'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// import logoLight from '@/images/logo-light.svg';
// import logoDark from '@/images/logo-dark.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
 { name: 'Home', href: '/' },
 { name: 'About', href: '/about-us' },
 { 
   name: 'Services', 
   href: '/services',
   submenu: [
     { name: 'Submenu 1', href: '/services/submenu-1' },
     { name: 'Submenu 2', href: '/services/submenu-2' },
     { name: 'Submenu 3', href: '/services/submenu-3' },
     { name: 'Submenu 4', href: '/services/submenu-4' },
     { name: 'Bsubmenu', href: '/services/bsubmenu' }
   ]
 },
 { name: 'Industries', href: '/industries' },
 { name: 'Case Study', href: '/resource' },
 { name: 'Myth Busters', href: '/myth-busters' }
];

  return (
    <>
      <header 
        className={`fixed bg-[#000] top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-sm transform translate-y-0' 
            : 'bg-[#000] transform -translate-y-full'
        }`}
        style={{
          transform: isScrolled ? 'translateY(0)' : 'translateY(100%)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-2">
                  {isScrolled ? (
                      <Image className='w-[200px]' src="/images/logo-light.svg" width={200} height={60} alt="logo" />
                    ) : (
                      <Image className='w-[200px]' src="/images/logo-dark.svg" width={200} height={60} alt="logo" />
                    )}
                  
                </Link>
                
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center space-x-8">
              {/* {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))} */}
              <Link
                  href="/"
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Home
                </Link>

                <div className="relative group">
                  <Link
                    href="/services"
                    className={`items-center text-sm font-semibold transition-colors duration-300 hover:opacity-80 py-3 inline-flex ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    Services
                    <ChevronDown size={16} />
                  </Link>
                  <ul className="absolute top-full py-3 left-0 min-w-[220px] bg-white border border-[#fcfcfc] rounded-sm hidden group-hover:block">
                    <li>
                      <Link
                        href="/services/ai-consulting-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        AI Consulting Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/generated-ai-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Generated AI Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/data-science"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/cyber-defense"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Cyber Defense
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/custom-software-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 px-4 py-2 block hover:bg-gray-200`}
                      >
                        Custom Software Development
                      </Link>
                    </li>
                    
                  </ul>
                </div>

                <Link
                  href="/industries"
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Industries
                </Link>

                <Link
                  href="/resource"
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Case Study
                </Link>

                <Link
                  href="/myth-busters"
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  Myth Busters
                </Link>
                <Link
                  href="/about-us"
                  className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  About Us
                </Link>
              <Link href="/contact-us" className="bg-[#4338ca] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm">Brainstorm</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden menu-toggle p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300" />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 left-0 h-screen overflow-y-auto w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out mobile-menu ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center space-x-2">
              {/* <div className="w-[37px] h-[41px] bg-gradient-to-r from-[#6C63FF] to-[#9D4EDD] rounded-md flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z" />
                </svg>
              </div>
              <span className="text-[18px] font-bold text-[#333333]">BrainHouse</span> */}
              {/* <img src="images/logo.png" alt="logo" /> */}
              <Image className='w-[200px]' src="/images/logo-light.svg" width={200} height={60} alt="logo" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-900 hover:bg-gray-100"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <nav className="space-y-0">
            {/* {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))} */}

            <Link
                href="/"
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="relative">
                <Link
                  href="/services"
                  className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <ul className="left-0 min-w-[220px] bg-white border border-[#fcfcfc] rounded-sm mb-3">
                    <li>
                      <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="/services/ai-consulting-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 pl-2 ml-7 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        AI Consulting Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="/services/generated-ai-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 pl-2 ml-7 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Generated AI Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="/services/data-science"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 pl-2 ml-7 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="/services/cyber-defense"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 pl-2 ml-7 px-4 py-2 block hover:bg-gray-200 border-b border-gray-200`}
                      >
                        Cyber Defense
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsMobileMenuOpen(false)}
                        href="/services/custom-software-development"
                        className={`text-sm font-semibold transition-colors duration-300 hover:opacity-80 pl-2 ml-7 px-4 py-2 block hover:bg-gray-200`}
                      >
                        Custom Software Development
                      </Link>
                    </li>
                    
                  </ul>
              </div>
              <Link
                href="/industries"
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/resource"
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Study
              </Link>
              <Link
                href="/myth-busters"
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Myth Busters
              </Link>
              <Link
                href="/about-us"
                className="block py-2 px-4 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            <Link href="/contact-us" className="bg-[#4338ca] mt-7 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm w-full block text-center">Brainstorm</Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;