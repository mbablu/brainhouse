'use client';

export default function OurValues() {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#192DA0] mb-6">
            Passionate About People, Obsessed with Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            At Brainhouse, we are passionate about democratizing AI. We build tools that transform industries and empower communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200 text-center">
            <i className="text-4xl text-primary mb-6 inline-block">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
              </svg>
            </i>
            <h3 className="text-xl font-semibold text-secondary mb-4">Accessible Intelligence</h3>
            <p className="text-gray-600">
              Give everyone access to intelligent decision-making, regardless of technical expertise or resources.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border border-green-200 text-center">
            <i className="text-4xl text-green-600 mb-6 inline-block">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>
            </i>
            <h3 className="text-xl font-semibold text-secondary mb-4">Underserved Sectors</h3>
            <p className="text-gray-600">
              Support healthcare, education, and urban mobility with AI solutions that matter.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border border-purple-200 text-center">
            <i className="text-4xl text-[#6f6f7d] mb-6 inline-block">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
              </svg>
            </i>
            <h3 className="text-xl font-semibold text-secondary mb-4">Ethical AI</h3>
            <p className="text-gray-600">
              Respect privacy, amplify diversity, and reduce bias in every solution we create.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
