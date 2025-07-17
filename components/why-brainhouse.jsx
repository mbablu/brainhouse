export default function WhyBrainHouse() {
  return (
    <section id="why-brainhouse" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-3xl lg:text-4xl font-bold text-center text-secondary  mb-10 lg:mb-16">Why Brainhouse?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="space-y-8">
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M416 0c17.7 0 32 14.3 32 32c0 59.8-30.3 107.5-69.4 146.6c-28 28-62.5 53.5-97.3 77.4l-2.5 1.7c-11.9 8.1-23.8 16.1-35.5 23.9l-1.6 1c-6 4-11.9 7.9-17.8 11.9c-20.9 14-40.8 27.7-59.3 41.5H283.3c-9.8-7.4-20.1-14.7-30.7-22.1l7-4.7 3-2c15.1-10.1 30.9-20.6 46.7-31.6c25 18.1 48.9 37.3 69.4 57.7C417.7 372.5 448 420.2 448 480c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 497.7 0 480c0-59.8 30.3-107.5 69.4-146.6c28-28 62.5-53.5 97.3-77.4c-34.8-23.9-69.3-49.3-97.3-77.4C30.3 139.5 0 91.8 0 32C0 14.3 14.3 0 32 0S64 14.3 64 32H384c0-17.7 14.3-32 32-32z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">AI-Centric DNA</h3>
                <p className="text-gray-600">
                  We specialize in Generative AI, Machine Learning, and real-time analytics that drive smarter decisions.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-[#6f6f7d] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm80 416h-32v-32h32v32zm-96 0h-32v-32h32v32zm96-96h-32v-32h32v32zm-96 0h-32v-32h32v32zm0-96h-32v-32h32v32zm96 0h-32v-32h32v32z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Next-Gen AI Agents</h3>
                <p className="text-gray-600">
                  Voice, text, and multimodal AI agents that learn, evolve, and empower your operations.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-8">
            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                >
                  <path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v320c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H480V48z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">Industry Impact</h3>
                <p className="text-gray-600">
                  From smart cities and hospitals to fintech and eCommerce, we transform real-world systems into intelligent ecosystems.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <svg
                  className="w-4 h-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">MVP to Scale</h3>
                <p className="text-gray-600">
                  Whether you're launching a prototype or scaling globally, our AI-first frameworks support every phase of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}