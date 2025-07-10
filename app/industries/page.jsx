'use client'
import Image from 'next/image'
import { Search, PenTool, Code, CheckCheck, Rocket, Headphones } from 'lucide-react';


export default function Industries() {

  return (
    <>
        <section id="hero" className="bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white min-h-[500px] py-20 flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Empower with AI</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">From precision in logistics to personalization in retail, our AI-powered innovations are redefining how industries think, respond, and evolve.</p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div id="critical-infrastructure" className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Critical Infrastructure</h3>
                            <div className="flex space-x-4 text-sm">
                                <span className="bg-white/20 px-3 py-1 rounded-full">Fintech</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">Logistics</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">Healthcare</span>
                            </div>
                        </div>
                        <div id="digital-experience" className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-3">Digital Experience</h3>
                            <div className="flex flex-wrap gap-2 text-sm">
                                <span className="bg-white/20 px-3 py-1 rounded-full">Education</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">Retail</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">Travel</span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">Entertainment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="fintech-section" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <i className="text-green-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-chart-line w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">AI Solutions for Fintech</h2>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Smart Finance for a Digital World</h3>
                        <p className="text-gray-600 mb-6">We transform financial operations through real-time fraud detection, automated risk profiling, intelligent advisory systems, and AI-powered credit scoring engines.</p>
                        
                        <div id="fintech-solutions" className="mb-8">
                            <h4 className="font-semibold text-gray-800 mb-3">Solutions Include:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <i className="text-green-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>AI-based fraud detection &amp; transaction monitoring</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-green-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Credit risk assessment using alternative data</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-green-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Virtual financial advisors &amp; chatbots</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-green-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Loan approval automation and underwriting intelligence</span>
                                </li>
                            </ul>
                        </div>

                        <div id="fintech-stats" className="grid md:grid-cols-3 gap-4 mb-8">
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-primary">83%</div>
                                <div className="text-sm text-gray-600">Firms prioritize AI</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-primary">60%</div>
                                <div className="text-sm text-gray-600">Fraud reduction</div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-primary">$1T</div>
                                <div className="text-sm text-gray-600">Robo-advisor assets</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-full h-96 object-cover rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/15202272a7-42ba8e5dd3e840898eac.png" alt="modern fintech AI dashboard with charts and financial data visualization" />
                    </div>
                </div>
            </div>
        </section>

        <section id="logistics-section" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img className="w-full h-96 object-cover rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/174dd52c7e-4dfd321e0d193a94ee33.png" alt="AI-powered logistics warehouse with automated systems and route optimization"/>
                    </div>
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                                <i className="text-orange-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-truck w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">AI Solutions for Logistics</h2>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Data-Driven Movement of Goods</h3>
                        <p className="text-gray-600 mb-6">From warehouse automation to intelligent fleet routing, we empower logistics providers with AI-powered efficiency, visibility, and optimization.</p>
                        
                        <div id="logistics-solutions" className="mb-8">
                            <h4 className="font-semibold text-gray-800 mb-3">Solutions Include:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <i className="text-orange-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Predictive delivery &amp; ETA forecasting</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-orange-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Route optimization using ML</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-orange-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Demand-driven warehouse and inventory planning</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-orange-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Intelligent supply chain control towers</span>
                                </li>
                            </ul>
                        </div>

                        <div id="logistics-stats" className="grid md:grid-cols-3 gap-4">
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-orange-600">25%</div>
                                <div className="text-sm text-gray-600">Cost reduction</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-orange-600">30%</div>
                                <div className="text-sm text-gray-600">Fewer delays</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-orange-600">73%</div>
                                <div className="text-sm text-gray-600">Leaders investing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="healthcare-section" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                <i className="text-red-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart-pulse w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"></path></svg></i>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">AI Solutions for Healthcare</h2>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Smarter Care, Faster Diagnosis</h3>
                        <p className="text-gray-600 mb-6">We design clinical-grade AI tools that support physicians, streamline hospital operations, and improve patient outcomes—ethically and securely.</p>
                        
                        <div id="healthcare-solutions" className="mb-8">
                            <h4 className="font-semibold text-gray-800 mb-3">Solutions Include:</h4>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start space-x-2">
                                    <i className="text-red-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>AI triage assistants for emergency and virtual care</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-red-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Patient monitoring and vitals analysis using computer vision</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-red-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Diagnostic support through NLP and image recognition</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <i className="text-red-500 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                    <span>Predictive analytics for hospital readmissions</span>
                                </li>
                            </ul>
                        </div>

                        <div id="healthcare-stats" className="grid md:grid-cols-3 gap-4">
                            <div className="bg-red-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-red-600">40%</div>
                                <div className="text-sm text-gray-600">Error reduction</div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-red-600">3+</div>
                                <div className="text-sm text-gray-600">Hours saved</div>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg text-center">
                                <div className="text-2xl font-bold text-red-600">$187B</div>
                                <div className="text-sm text-gray-600">Market by 2030</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-full h-96 object-cover rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/0c6197a99d-fffa6a6a80204e4ad1df.png" alt="AI healthcare technology with medical monitoring and diagnostic tools"/>
                    </div>
                </div>
            </div>
        </section>

        <section id="digital-industries" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Experience Solutions</h2>
                    <p className="text-xl text-gray-600">Transforming education, retail, travel, and entertainment with intelligent AI</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div id="education-card" className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <i className="text-purple-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-graduation-cap w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Intelligent Learning for Every Mind. We empower educators and learners through personalized content delivery, intelligent tutoring, and automated assessments.</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-lg font-bold text-purple-600">90%</div>
                                <div className="text-xs text-gray-600">Learning accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-purple-600">30%</div>
                                <div className="text-xs text-gray-600">More engagement</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-purple-600">61%</div>
                                <div className="text-xs text-gray-600">K-12 adoption</div>
                            </div>
                        </div>
                    </div>

                    <div id="retail-card" className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <i className="text-indigo-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-cart-shopping w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Retail</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Data-Led Personalization, Inventory Intelligence. We help retail brands predict customer behavior, manage inventory smartly, and create immersive shopping experiences.</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-lg font-bold text-indigo-600">50%</div>
                                <div className="text-xs text-gray-600">Retention uplift</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-indigo-600">80%</div>
                                <div className="text-xs text-gray-600">Inventory accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-indigo-600">$31B</div>
                                <div className="text-xs text-gray-600">Market by 2028</div>
                            </div>
                        </div>
                    </div>

                    <div id="travel-card" className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                <i className="text-teal-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-plane w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Travel</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Frictionless Journeys, Personalized Itineraries. We transform the travel experience through intelligent planning, conversational booking, and real-time support.</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-lg font-bold text-teal-600">60%</div>
                                <div className="text-xs text-gray-600">Want personalization</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-teal-600">70%</div>
                                <div className="text-xs text-gray-600">Fewer errors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-teal-600">80%</div>
                                <div className="text-xs text-gray-600">Inquiries handled</div>
                            </div>
                        </div>
                    </div>

                    <div id="entertainment-card" className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                                <i className="text-pink-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-play w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Entertainment</h3>
                        </div>
                        <p className="text-gray-600 mb-6">Content Discovery Meets Deep Learning. We enhance audience engagement with AI-curated experiences, from media tagging to recommendation engines.</p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-lg font-bold text-pink-600">80%</div>
                                <div className="text-xs text-gray-600">Netflix views</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-pink-600">40%</div>
                                <div className="text-xs text-gray-600">Time reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-lg font-bold text-pink-600">$12B</div>
                                <div className="text-xs text-gray-600">Market by 2027</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="cta-section" className="py-20 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
                <p className="text-xl text-blue-100 mb-8">Let's discuss how BrainHouse can revolut</p>
            </div>
        </section>

    </>
  )
}
