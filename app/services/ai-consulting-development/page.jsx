'use client'
import Image from 'next/image'
import { Globe, Smartphone, Bot, UserCheck, TrendingUp, Settings, Brain, Users, Maximize2, Shield, Building, Truck, Heart, GraduationCap, ShoppingCart, Plane, Film } from 'lucide-react';
import Link from 'next/link';




export default function AiConsultingDevelopment() {

  return (
    <>
        <section
          id="hero-section"
          className="bg-gradient-to-br from-dark via-gray-900 to-gray-800 text-white min-h-[600px] flex items-center pt-30 pb-20"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <h1 className="text-4xl lg:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                AI Consulting &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Development
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with intelligent solutions. From AI strategy to custom development, we deliver
                precision-engineered AI that drives real-world value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                  Start Your AI Journey
                </button>
                <button className="border border-gray-400 text-gray-300 hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bf4dc36c07-b4f3499e8a3bc3110535.png"
                alt="futuristic AI brain neural network visualization with glowing nodes and connections, dark tech background"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>


        <section id="stats-section" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div id="stat-1" className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-gray-600">Faster Decision Velocity</div>
              </div>
              <div id="stat-2" className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <div className="text-gray-600">Support Cost Reduction</div>
              </div>
              <div id="stat-3" className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-gray-600">Enterprise Data Underutilized</div>
              </div>
              <div id="stat-4" className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$15.7T</div>
                <div className="text-gray-600">AI Economic Impact by 2030</div>
              </div>
            </div>
          </div>
        </section>



        <section id="services-overview" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations and deliver measurable results
              </p>
            </div>

            <div id="services-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div id="web-dev-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="text-blue-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Web Development</h3>
                <p className="text-gray-600 mb-4">AI-Native Applications That Scale With Ambition. Modern, responsive, and AI-ready web applications tailored to your business model.</p>
                <div className="text-sm text-gray-500">
                  <strong>Tech stack:</strong> React, Angular, Node.js, Django, Python, .NET Core, GraphQL, REST APIs
                </div>
              </div>

              <div id="mobile-dev-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="text-green-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Mobile Apps</h3>
                <p className="text-gray-600 mb-4">AI-enabled mobile apps for iOS and Android that leverage ML models, real-time analytics, computer vision, and voice interfaces.</p>
                <div className="text-sm text-gray-500">
                  <strong>Features:</strong> Smart notifications, behavioral analytics, chat integration, recommendation engines
                </div>
              </div>

              <div id="chatbot-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Bot className="text-purple-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Chatbot Development</h3>
                <p className="text-gray-600 mb-4">NLP-powered bots that understand, learn, and act—supporting multichannel conversations across web, WhatsApp, Facebook, and internal systems.</p>
                <div className="text-sm text-gray-500">
                  <strong>Integration:</strong> GPT, Rasa, Dialogflow, Microsoft Bot Framework
                </div>
              </div>

              <div id="assistant-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <UserCheck className="text-orange-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Virtual Assistant Tool Development</h3>
                <p className="text-gray-600">Intelligent assistants that automate workflows, schedule tasks, answer questions, and offer insights for internal and customer-facing applications.</p>
              </div>

              <div id="analytics-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-red-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Customer Care Analytics</h3>
                <p className="text-gray-600">Sentiment analysis, agent performance monitoring, call summarization, and trend detection using AI and natural language processing.</p>
              </div>

              <div id="other-dev-card" className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="text-indigo-600 text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Developments</h3>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• React/Angular Frontends with TensorFlow.js</li>
                  <li>• Voice-Enabled Mobile Apps: Biometric security + NLP</li>
                  <li>• AutoML Infusion: Predictive features out-of-the-box</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section id="stats-section" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why It Matters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div id="stat-1" className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">89%</div>
                <p className="text-gray-600">Companies compete primarily on customer experience</p>
              </div>
              <div id="stat-2" className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                <p className="text-gray-600">Improvement in user retention through AI personalization</p>
              </div>
              <div id="stat-3" className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
                <p className="text-gray-600">Enterprise apps will use voice interfaces by 2026</p>
              </div>
              <div id="stat-4" className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
                <p className="text-gray-600">Reduction in operational costs with intelligent automation</p>
              </div>
            </div>
          </div>
        </section>


        <section id="why-brainhouse" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why BrainHouse</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div id="features-list" className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-First Engineering Culture</h3>
                    <p className="text-gray-600">Every app we build is designed to learn and evolve, integrating smart components like recommendation engines and predictive analytics from day one.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Multi-Disciplinary Teams</h3>
                    <p className="text-gray-600">Our team includes AI scientists, front-end architects, mobile developers, and UX strategists working as an integrated pod.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalability Without Compromise</h3>
                    <p className="text-gray-600">Whether it's 1,000 users or 1 million, we build systems that scale with your growth across geographies, platforms, and performance tiers.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security & Compliance Ready</h3>
                    <p className="text-gray-600">Our software meets the highest compliance standards and undergoes rigorous QA, performance testing, and audit readiness.</p>
                  </div>
                </div>
              </div>
              <div id="why-visual">
                <img 
                  className="w-full h-96 rounded-2xl object-cover shadow-lg" 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3c817b34bb-a36e4912e125e5d7a7f2.png" 
                  alt="professional software development team collaborating on AI projects, modern office environment"
                />
              </div>
            </div>
          </div>
        </section>


        <section id="industries" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Empower with AI</h2>
            <p className="text-xl text-gray-600 mb-12">Delivering intelligent solutions across critical sectors</p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div id="critical-infrastructure" className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Critical Infrastructure</h3>
                <div className="flex justify-center flex-wrap space-x-6 text-gray-600">
                  <span className="flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Fintech
                  </span>
                  <span className="flex items-center">
                    <Truck className="w-4 h-4 mr-2" />
                    Logistics
                  </span>
                  <span className="flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Healthcare
                  </span>
                </div>
              </div>
              <div id="digital-experience" className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Digital Experience</h3>
                <div className="flex justify-center flex-wrap space-x-4 text-gray-600">
                  <span className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Education
                  </span>
                  <span className="flex items-center">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Retail
                  </span>
                  <span className="flex items-center">
                    <Plane className="w-4 h-4 mr-2" />
                    Travel
                  </span>
                  <span className="flex items-center">
                    <Film className="w-4 h-4 mr-2" />
                    Entertainment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-[#1e40af]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your AI-Powered Solution?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's create software that thinks, adapts, and evolves with your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project Today
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

    </>
  )
}
