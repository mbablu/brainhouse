
"use client"
import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from "next/link";
import Image from 'next/image';
import FooterImg from './../public/images/CFIBLogo.svg';


export default function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const Modal = ({ isOpen, onClose, title, children }) => {
      if (!isOpen) return null;

      return (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-[85vw] lg:max-w-[70vw] w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {children}
            </div>
            {/* <div className="flex justify-end px-4 py-3 border-t border-gray-200">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div> */}
          </div>
        </div>
      );
    };


  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div id="footer-brand" className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-[#6f6f7d] rounded-lg flex items-center justify-center">
                <svg
                  className="text-white text-lg w-5 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="brain"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"
                  />
                </svg>
              </div>
              <span className="text-2xl fonimages/logo-dark.svg"t-bold">brainhouse</span> */}
              <Image className='w-[80px]' src="/images/brainhouse_Logo_signature_Dark.png" width={200} height={60} alt="logo" />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading AI consulting and development company creating intelligent
              solutions for the future.
            </p>
            <Image className='w-2/3' src={FooterImg} alt='CFID' width={360} height={216} />
            {/* <div className="flex space-x-4">
              <span className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <svg
                  className="text-lg"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="linkedin"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69.5V202.2h65.9V416zM102.4 174.4C79.5 174.4 64 158 64 135.5c0-22.1 15.1-38.5 38.4-38.5s38.4 16.4 38.4 38.5c0 22.5-15.2 38.9-38.4 38.9zM384 416h-65.8V312c0-24.8-8.8-41.8-30.7-41.8-16.8 0-26.9 11.4-31.3 22.4-1.6 3.8-2 9-2 14.3V416h-65.8V202.2h65.8v29.3c8.8-13.6 24.6-32.9 60-32.9 43.8 0 76.6 28.7 76.6 90.3V416z"
                  />
                </svg>
              </span>
            </div> */}
          </div>

          <div id="footer-about" className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us#who-we-are" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about-us#vision-mission" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/about-us#company-profile" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/about-us#quality-policy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link href="/about-us#quality-policy"className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Confidentiality
                </Link>
              </li>
              <li>
                <Link href="/about-us#Development Process" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Development Process
                </Link>
              </li>
              <li>
                <Link href="/about-us#Development Process" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Delivery Methodologies
                </Link>
              </li>
            </ul>
          </div>

          <div id="footer-services" className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              <div>
                {/* <h4 className="text-sm font-medium text-blue-400 mb-2">
                  AI Consulting &amp; Development
                </h4> */}
                
                <ul className="space-y-3 text-sm">
                  {/* <li>
                     <Link href="/services/ai-consulting-development" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      AI Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#genai-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      AI Product Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      AI Agent Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      AI Integration Services
                    </Link>
                  </li> */}
                  <li>
                      <Link
                        href="/services/ai-consulting-development"
                        className={`text-gray-400 hover:text-white transition-colors cursor-pointer`}
                      >
                        AI Consulting Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/generated-ai-development"
                        className={`text-gray-400 hover:text-white transition-colors cursor-pointer`}
                      >
                        Generated AI Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/data-science"
                        className={`text-gray-400 hover:text-white transition-colors cursor-pointer`}
                      >
                        Data Science
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/cyber-defense"
                        className={`text-gray-400 hover:text-white transition-colors cursor-pointer`}
                      >
                        Cyber Defense
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/custom-software-development"
                        className={`text-gray-400 hover:text-white transition-colors cursor-pointer`}
                      >
                        Custom Software Development
                      </Link>
                    </li>
                </ul>
              </div>
              {/* <div>
                <h4 className="text-sm font-medium text-purple-400 mb-2">
                  Generative AI
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      Generative AI Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      UX Pilot Integration
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      AI Chatbot Development
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>


          <div id="footer-industries" className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries#fintech-section" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-blue-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3l-49.8 33.1c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  AI for Fintech
                </Link>
              </li>
              <li>
                <Link href="/industries#logistics-section" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                  >
                    <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  AI for Logistics
                </Link>
              </li>
              <li>
                <Link href="/industries#healthcare-section" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-red-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                  >
                    <path d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9z" />
                  </svg>
                  AI for Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#digital-industries" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    fill="currentColor"
                  >
                    <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8-6.5 13-13.9 25.8-22.5 37.6-3.9 5.7-5 11.3-3.2 16.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32z" />
                  </svg>
                  AI for Education
                </Link>
              </li>
              <li>
                <Link href="/industries#digital-industries" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-purple-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                  </svg>
                  AI for Retail
                </Link>
              </li>
              <li>
                <Link href="/industries#digital-industries" className="text-gray-400 hover:text-white transition-colors flex items-center cursor-pointer">
                  <svg
                    className="w-4 mr-2 text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    fill="currentColor"
                  >
                    <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1h-56.2c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4h-42c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14h42c5 0 9.8 2.4 12.8 6.4L112 192h102.9l-49-171.6C162.9 10.2 170.6 0 181.2 0h56.2c11.5 0 22.1 6.2 27.8 16.1L365.7 192h116.6z" />
                  </svg>
                  AI for Travel
                </Link>
              </li>
            </ul>
          </div>

          <div id="footer-resources" className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Case Study</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/myth-busters" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  FAQ &amp; AI Myth Busters
                </Link>
              </li>
              {/* <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Documentation
                </Link>
              </li> */}
            </ul>

            <div
              id="footer-cta"
              className="bg-gradient-to-r from-blue-600 to-blue-600 rounded-lg p-4"
            >
              <h4 className="font-semibold mb-2">Free AI Assessment</h4>
              <p className="text-sm text-blue-100 mb-3">
                Discover your AI readiness potential
              </p>
              <Link href="/contact-us" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200 transition-colors cursor-pointer">
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div id="footer-bottom" className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 Brainhouse Inc. all rights reserved.
              </p>
              <div className="flex space-x-6">
                <button  onClick={() => setShowPrivacyModal(true)} className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                  Privacy Policy
                </button>
                <button onClick={() => setShowTermsModal(true)} className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Contact:</span>
              {/* <span className="text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer">
                info@brainhouse.ai
              </span> */}
              <a href="mailto:info@brainhouse.ai" className="text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer">
                  info@brainhouse.ai
              </a>
              <span className="text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer">
                +1 800-920-0350
              </span>
            </div>
          </div>
        </div>

        {/* Privacy Policy Modal */}
        <Modal 
          isOpen={showPrivacyModal} 
          onClose={() => setShowPrivacyModal(false)}
          title="Privacy Policy"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-base">
                Brainhouse Inc. ("we," "us," or "our") is a Canadian corporation headquartered in Ontario, specializing in AI-powered digital solutions and other software development and architecture. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner in compliance with applicable privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA) and, where applicable, the General Data Protection Regulation (GDPR).
              </p>
              
            </div>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">1. Information We Collect</h3>
              <p className="mb-3">We collect the following types of personal data:</p>
              <ul className="space-y-2 ml-4">
                <li><strong>Identification Data:</strong> Full name, email address, phone number</li>
                <li><strong>Account Data:</strong> Login credentials, preferences</li>
                <li><strong>Financial Data:</strong> Payment and billing information (via secure third-party processors)</li>
                <li><strong>Usage Data:</strong> IP address, device type, operating system, browser type, usage behavior</li>
                <li><strong>Communication Data:</strong> Inquiries, feedback, support interactions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h3>
              <p className="mb-3">We use your information to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Deliver and maintain our services</li>
                <li>• Respond to inquiries and provide support</li>
                <li>• Improve website and service functionality</li>
                <li>• Ensure security and fraud prevention</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">3. Data Sharing and Disclosure</h3>
              <p className="mb-3">We may share your data with:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>• Service providers (e.g., payment gateways, email service providers)</li>
                <li>• Legal authorities when required</li>
                <li>• Business partners (with your consent)</li>
              </ul>
              <p className="font-medium">We do not sell or rent personal data to third parties.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">4. Cookies and Analytics</h3>
              <p>We use cookies and analytics tools (e.g., Google Analytics) to monitor site traffic and user engagement. You can manage cookie preferences in your browser settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">5. International Data Transfers</h3>
              <p>Data may be transferred to or processed in countries outside your jurisdiction. We ensure appropriate safeguards (e.g., Standard Contractual Clauses) are in place for such transfers.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">6. Your Rights</h3>
              <p className="mb-3">Under applicable laws, you have the right to:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li>• Access and correct your personal data</li>
                <li>• Withdraw consent</li>
                <li>• Request deletion of your data</li>
                <li>• File a complaint with a supervisory authority</li>
              </ul>
              <p>For requests, contact 
                <a href="mailto:info@brainhouse.ai" className="text-blue-600 hover:text-blue-800 underline">
                  info@brainhouse.ai
                </a>
                .</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">7. Security</h3>
              <p>We use industry-standard encryption, firewalls, and access controls to safeguard your information.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">8. Contact</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Brainhouse Inc.</p>
                <p>Email: 
                  <a href="mailto:privacy@brainhouse.ai" className="text-blue-600 hover:text-blue-800 underline"></a>
                  <a href="mailto:info@brainhouse.ai" className="text-blue-600 hover:text-blue-800 underline">
                    info@brainhouse.ai
                  </a>
                  </p>
              </div>
            </section>
          </div>
        </Modal>

        {/* Terms of Service Modal */}
        <Modal 
          isOpen={showTermsModal} 
          onClose={() => setShowTermsModal(false)}
          title="Terms of Service"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="mb-6">
              <p className="text-base">
                These Terms of Service ("Terms") govern your access and use of the website <a href="https://brainhouse.ai" className="text-blue-600 hover:text-blue-800 underline">https://brainhouse.ai</a> and all related AI-powered software, APIs, tools, and services provided by BrainHouse Inc. ("we," "us," or "our"). By accessing or using our platform, you agree to be bound by these Terms.
              </p>
            </div>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h3>
              <p>By using our services, you confirm that you are at least the age of majority in your province or territory and agree to comply with these Terms and applicable laws.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">2. Services</h3>
              <p>BrainHouse provides access to AI-based digital tools, analytics dashboards, APIs, and software-as-a-service (SaaS) offerings tailored to different industries.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">3. User Responsibilities</h3>
              <p className="mb-3">You agree to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Use services only for lawful purposes</li>
                <li>• Provide accurate account and payment information</li>
                <li>• Maintain confidentiality of login credentials</li>
                <li>• Not misuse or reverse-engineer our platform or AI models</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">4. Account and Subscription</h3>
              <p>Some features require registration. Paid services may be offered as subscription plans. All payments are securely handled by third-party processors. Cancellation policies and billing cycles are defined at the time of purchase.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">5. Intellectual Property</h3>
              <p>All content, including code, design, graphics, AI models, and documentation, are the property of BrainHouse Inc. or its licensors. You may not reproduce or distribute any part of the services without express permission.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">6. AI and Data Processing</h3>
              <p>Our AI systems may process uploaded content and metadata to generate responses or analytics. You retain ownership of your data but grant us a license to process it for the intended functionality.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">7. Disclaimers</h3>
              <p>We make no warranties regarding uninterrupted access or accuracy of the AI outputs. All services are provided "as-is."</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">8. Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, BrainHouse Inc. shall not be liable for indirect or consequential damages, including data loss, arising from the use of our services.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">9. Governing Law</h3>
              <p>These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">10. Termination</h3>
              <p>We reserve the right to suspend or terminate your access if you breach these Terms or misuse the services.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">11. Changes to Terms</h3>
              <p>We may update these Terms at any time. Continued use of the site constitutes acceptance of the revised Terms.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">12. Contact Us</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">BrainHouse Inc.</p>
                <p>Email: <a href="mailto:privacy@brainhouse.ai" className="text-blue-600 hover:text-blue-800 underline">privacy@brainhouse.ai</a></p>
              </div>
            </section>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> The Privacy Policy and Terms of Service for Brainhouse Inc. have been drafted, including SaaS and AI data processing clauses with governing jurisdiction set to Ontario, Canada.
              </p>
            </div>
          </div>
        </Modal>
      </div>

      
    </footer>
  );
}
