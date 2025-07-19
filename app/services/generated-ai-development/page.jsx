'use client'
import Image from 'next/image'
import { Globe, Smartphone, Bot, UserCheck, TrendingUp, Settings, Brain, Users, Maximize2, Shield, Building, Truck, Heart, GraduationCap, ShoppingCart, Plane, Film, Lightbulb, MessageSquare, MessageCircle } from 'lucide-react';
import Link from 'next/link';




export default function GeneratedAiDevelopment() {

  return (
    <>
        <section id="hero-section" className="bg-gradient-to-br from-blue-600 to-blue-600 text-white py-24 lg:pt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Generative AI<br />
                        <span className="text-blue-200">Development</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        Generative AI is reshaping how businesses create, engage, and deliver value. We bring GenAI to life through purpose-driven solutions that amplify human creativity and supercharge productivity.
                    </p>
                    {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Get Started
                        </button>
                        <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                        Learn More
                        </button>
                    </div> */}
                </div>
            </div>
        </section>


        <section id="what-we-offer" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0]  mb-4">What We Offer</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our comprehensive GenAI solutions span from strategic consulting to implementation
                </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div id="consulting-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">Generative AI Consulting</h3>
                    <p className="text-gray-600 leading-relaxed">
                    We assess your organization's readiness to implement generative technologies by analyzing data maturity, infrastructure, and compliance needs. From strategic use case mapping to responsible AI adoption.
                    </p>
                </div>

                <div id="solutions-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-[#6f6f7d] rounded-xl flex items-center justify-center mb-6">
                    <Settings className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">Generative AI Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                    End-to-end generative applications using advanced models like GPT, DALL·E, and Stable Diffusion. From automating design to building intelligent co-pilots for your workforce.
                    </p>
                </div>

                <div id="UX Pilot-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center mb-6">
                    <MessageSquare className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">UX Pilot Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Seamlessly embed conversational AI into your CRM, internal tools, or customer-facing applications. Reduce support load and enhance knowledge management.
                    </p>
                </div>

                <div id="copilot-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Bot className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">Copilot Integration</h3>
                    <p className="text-gray-600 leading-relaxed">
                    CRM/ERP Cognitive Augmentation solutions that enhance your existing business systems with intelligent automation and decision support.
                    </p>
                </div>

                <div id="chatbot-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-red-500 rounded-xl flex items-center justify-center mb-6">
                    <MessageCircle className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">AI Chatbot Development</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Powered by LLMs and trained on your proprietary data, our chatbots support complex queries, drive conversions, and build trust across sales, HR, healthcare, and more.
                    </p>
                </div>

                <div id="llm-card" className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Brain className="text-white text-2xl w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-brain-gray mb-4">Large Language Models</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Fine-tune domain-specific LLMs tailored for your business context. Build and own your secure and private LLM ecosystem with zero data leakage.
                    </p>
                </div>
                </div>
            </div>
        </section>


        <section id="differentiator" className="py-16 bg-[#1e40af] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="flex items-center justify-center mb-6">
                <Shield className="text-3xl lg:text-4xl mr-4 w-10 h-10" />
                <h3 className="text-3xl font-bold">Key Differentiator</h3>
                </div>
                <p className="text-xl">Private cloud LLM deployments with zero data leakage</p>
            </div>
        </section>


        <section id="why-it-matters" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0]  mb-4">Why It Matters</h2>
                    <p className="text-xl text-gray-600">The impact of Generative AI on business performance</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div id="stat-1" className="text-center">
                        <div className="text-5xl font-bold text-brain-blue mb-4">66%</div>
                        <p className="text-gray-600">Productivity boost for content creators and marketing teams</p>
                        <p className="text-sm text-gray-500 mt-2">McKinsey</p>
                    </div>

                    <div id="stat-2" className="text-center">
                        <div className="text-5xl font-bold text-brain-purple mb-4">60%</div>
                        <p className="text-gray-600">Customer service teams expect to implement GenAI within two years</p>
                        <p className="text-sm text-gray-500 mt-2">Salesforce</p>
                    </div>

                    <div id="stat-3" className="text-center">
                        <div className="text-5xl font-bold text-green-500 mb-4">50%</div>
                        <p className="text-gray-600">Reduction in development time using GenAI for code generation</p>
                        <p className="text-sm text-gray-500 mt-2">GitHub Copilot</p>
                    </div>

                    <div id="stat-4" className="text-center">
                        <div className="text-5xl font-bold text-orange-500 mb-4">80%</div>
                        <p className="text-gray-600">Accuracy in automating tasks like email drafting and document parsing</p>
                        <p className="text-sm text-gray-500 mt-2">LLMs</p>
                    </div>
                </div>
            </div>
        </section>



        <section id="why-brainhouse" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0]  mb-4">Why BrainHouse</h2>
                    <p className="text-xl text-gray-600">What sets us apart in the GenAI landscape</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div id="reason-1" className="flex">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                                <i className="text-white" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                            </div>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-2xl font-bold text-brain-gray mb-3">Skilled Engineers, Creative Strategists</h3>
                            <p className="text-gray-600">Our GenAI team includes NLP experts, prompt engineers, and UI/UX designers who collaboratively shape intelligent systems that are both powerful and intuitive.</p>
                        </div>
                    </div>

                    <div id="reason-2" className="flex">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#6f6f7d] rounded-lg flex items-center justify-center">
                                <i className="text-white" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-lock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg></i>
                            </div>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-2xl font-bold text-brain-gray mb-3">Data Privacy by Design</h3>
                            <p className="text-gray-600">All our generative models respect compliance and governance frameworks, and we support on-premise or private-cloud LLM deployments.</p>
                        </div>
                    </div>

                    <div id="reason-3" className="flex">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                <i className="text-white" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-target" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="target" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path><circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate></circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate></path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg></i>
                            </div>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-2xl font-bold text-brain-gray mb-3">Use-Case First, Not Tech-First</h3>
                            <p className="text-gray-600">We focus on solving real business problems with measurable impact—from internal productivity to customer-facing automation.</p>
                        </div>
                    </div>

                    <div id="reason-4" className="flex">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                                <i className="text-white" data-fa-i2svg=""><svg className="w-5 h-5 svg-inline--fa fa-industry" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="industry" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"></path></svg></i>
                            </div>
                        </div>
                        <div className="ml-6">
                            <h3 className="text-2xl font-bold text-brain-gray mb-3">Experience Across Industries</h3>
                            <p className="text-gray-600">From healthcare triage bots to retail personalization engines, we've deployed GenAI that works in the real world, at scale.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-[#1e40af]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl lg:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Your AI-Powered Solution?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's create software that thinks, adapts, and evolves with your business needs.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </Link>
              {/* <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Consultation
              </button> */}
            </div>
          </div>
        </section>

    </>
  )
}
