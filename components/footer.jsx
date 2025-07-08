import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div id="footer-brand" className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
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
              <span className="text-2xl font-bold">BrainHouse</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading AI consulting and development company creating intelligent
              solutions for the future.
            </p>
            <div className="flex space-x-4">
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
            </div>
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
                <h4 className="text-sm font-medium text-blue-400 mb-2">
                  AI Consulting &amp; Development
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                     <Link href="/services#ai-consulting-details" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
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
                  </li>
                </ul>
              </div>
              <div>
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
              </div>
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
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resource#faq-section" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  FAQ &amp; AI Myth Busters
                </Link>
              </li>
              <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resource#case-studies-hero" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                  Documentation
                </Link>
              </li>
            </ul>

            <div
              id="footer-cta"
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4"
            >
              <h4 className="font-semibold mb-2">Free AI Assessment</h4>
              <p className="text-sm text-blue-100 mb-3">
                Discover your AI readiness potential
              </p>
              <span className="inline-flex items-center text-sm font-medium text-white hover:text-blue-200 transition-colors cursor-pointer">
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div id="footer-bottom" className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 BrainHouse. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                  Privacy Policy
                </span>
                <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                  Terms of Service
                </span>
                <span className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
                  Cookie Policy
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Contact:</span>
              <span className="text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer">
                hello@brainhouse.ai
              </span>
              <span className="text-blue-400 hover:text-blue-300 text-sm transition-colors cursor-pointer">
                +1 (234) 567-890
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
