'use client'
import Image from 'next/image'
import { Globe, Smartphone, Bot, UserCheck, TrendingUp, Settings, Brain, Users, Maximize2, Shield, Building, Truck, Heart, GraduationCap, ShoppingCart, Plane, Film, Lightbulb, MessageSquare, MessageCircle } from 'lucide-react';
import Link from 'next/link';




export default function CyberDefense() {

  return (
    <>
        <section id="hero" className="gradient-bg min-h-[600px] py-20 lg:pt-30 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            AI-Powered Cyber Defense: Where Innovation Meets <span className="text-yellow-300">Impenetrable Security</span>
                        </h1>
                        <p className="text-xl mb-8 text-gray-100">
                            In the age of AI, cybersecurity isn't a firewall—it's a cognitive shield. BrainHouse engineers self-learning defense systems that evolve faster than threats.
                        </p>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8">
                            <p className="text-lg font-semibold text-yellow-300">87% of breaches now target AI/ML pipelines (IBM, 2024)</p>
                            <p className="text-gray-200">We ensure your intelligence assets stay intelligent—not compromised.</p>
                        </div>
                        <button className="bg-white text-[#6f6f7d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition cyber-glow">
                            Get Security Assessment
                        </button>
                    </div>
                    <div className="relative">
                        <img className="w-full h-96 object-cover rounded-lg shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1356a630d5-49a47440da2f0719ba41.png" alt="futuristic cybersecurity shield with AI neural networks, blue and purple glowing effects, digital protection concept" />
                    </div>
                </div>
            </div>
        </section>

        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#192DA0] mb-4">What We Offer</h2>
                    <p className="text-xl text-gray-600">Comprehensive AI-powered cybersecurity solutions</p>
                </div>
                
                <div className="space-y-12">
                    <div id="zero-trust" className="bg-gray-50 rounded-2xl p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero-Trust AI Architecture</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-[#6f6f7d] mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path></svg></i>
                                        <span>Microsegmented LLM deployments</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-[#6f6f7d] mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-user-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                                        <span>Continuous device/user behavioral auth</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-[#6f6f7d] mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-lock" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg></i>
                                        <span>Confidential computing for sensitive models</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Applications</h4>
                                <div className="space-y-2">
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-[#6f6f7d]">Fintech:</span> Isolated credit scoring models
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-[#6f6f7d]">Healthcare:</span> HIPAA-enforced patient data silos
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="bg-purple-100 rounded-full p-8">
                                    <i className="text-[#6f6f7d] text-4xl" data-fa-i2svg=""><svg className="w-7 h-7 svg-inline--fa fa-network-wired" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"></path></svg></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="threat-hunting" className="bg-blue-50 rounded-2xl p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Threat Hunting</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-blue-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-magnifying-glass" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></i>
                                        <span>Anomaly detection trained on 10M+ attack patterns</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-blue-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                                        <span>Predictive threat modeling with 93% accuracy</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-blue-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg></i>
                                        <span>Autonomous incident response playbooks</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Applications</h4>
                                <div className="space-y-2">
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-blue-600">Retail:</span> Real-time POS intrusion prevention
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-blue-600">Logistics:</span> Supply chain attack simulation
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="bg-blue-100 rounded-full p-8">
                                    <i className="text-blue-600 text-4xl" data-fa-i2svg=""><svg className="w-7 h-7 svg-inline--fa fa-crosshairs" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="llm-fortification" className="bg-green-50 rounded-2xl p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure LLM &amp; AI Agent Fortification</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-green-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-shield-virus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-virus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"></path></svg></i>
                                        <span>Anti-jailbreak prompt shielding</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-green-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-eye-slash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path></svg></i>
                                        <span>Model inversion attack prevention</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <i className="text-green-600 mr-3" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-filter" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="filter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"></path></svg></i>
                                        <span>Output watermarking &amp; toxicity filtering</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Applications</h4>
                                <div className="space-y-2">
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-green-600">Media:</span> Copyright-safe GenAI content
                                    </div>
                                    <div className="bg-white rounded-lg p-3">
                                        <span className="font-medium text-green-600">Education:</span> Bias-free tutoring agents
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="bg-green-100 rounded-full p-8">
                                    <i className="text-green-600 text-4xl" data-fa-i2svg=""><svg className="w-7 -h-7 svg-inline--fa fa-brain" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path></svg></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="stats" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why It Matters</h2>
                    <p className="text-xl text-gray-300">The cybersecurity landscape is evolving rapidly</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div id="stat-1" className="stat-card bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold mb-2">$4.45M</div>
                        <div className="text-lg">Average breach cost for AI-powered companies (IBM 2024)</div>
                    </div>
                    <div id="stat-2" className="stat-card bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold mb-2">68%</div>
                        <div className="text-lg">of GenAI adopters expose sensitive data via ungoverned models (Gartner)</div>
                    </div>
                    <div id="stat-3" className="stat-card bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-8 text-center">
                        <div className="text-4xl font-bold mb-2">80%</div>
                        <div className="text-lg">reduction in remediation costs with early security integration (MITRE)</div>
                    </div>
                </div>
            </div>
        </section>


        <section id="advantages" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#192DA0] mb-4">BrainHouse Cyber Advantage</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div id="advantage-1" className="text-center p-8 bg-purple-50 rounded-2xl">
                        <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <i className="text-[#6f6f7d] text-3xl" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Resilience</h3>
                        <p className="text-gray-600">Battle-tested security frameworks with enterprise-grade protection</p>
                    </div>
                    <div id="advantage-2" className="text-center p-8 bg-blue-50 rounded-2xl">
                        <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <i className="text-blue-600 text-3xl" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Augmented Defense</h3>
                        <p className="text-gray-600">Machine learning algorithms that adapt and evolve with emerging threats</p>
                    </div>
                    <div id="advantage-3" className="text-center p-8 bg-green-50 rounded-2xl">
                        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                            <i className="text-green-600 text-3xl" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-certificate" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="certificate" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.3-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"></path></svg></i>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Expertise</h3>
                        <p className="text-gray-600">Industry-recognized certifications and compliance standards</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="industry-safeguards" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#192DA0] mb-4">Industry-Specific Safeguards</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div id="fintech-safeguard" className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <i className="text-[#6f6f7d] text-3xl mr-4" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-building-columns" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building-columns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></i>
                            <h3 className="text-2xl font-bold text-gray-900">Fintech</h3>
                        </div>
                        <p className="text-gray-600">SWIFT CSP-compliant transaction shielding</p>
                    </div>
                    <div id="healthcare-safeguard" className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <i className="text-blue-600 text-3xl mr-4" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-heart-pulse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart-pulse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"></path></svg></i>
                            <h3 className="text-2xl font-bold text-gray-900">Healthcare</h3>
                        </div>
                        <p className="text-gray-600">HITRUST-certified patient data enclaves</p>
                    </div>
                    <div id="government-safeguard" className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center mb-6">
                            <i className="text-green-600 text-3xl mr-4" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-flag-usa" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="flag-usa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1v36.1l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-20.3-9-41.8-14.7-63.6-16.9v32.2c17.4 2.1 34.4 6.7 50.6 13.9l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 136.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 203.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 232.3v62l-44.7 16.2c-42.8 15.6-90 13.9-131.6-4.6l-16.1-7.2c-40.2-17.9-85-22.5-128.1-13.3L64 299.1v32.7l70.2-15.1c36.4-7.8 74.3-3.9 108.4 11.3l16.1 7.2c49.2 21.9 105 23.8 155.6 5.4L448 328.3v33.5c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 400v80c0 17.7-14.3 32-32 32s-32-14.3-32-32V416 345.5 312.8 249.5 216.8 153.5 120.8 64 32C0 14.3 14.3 0 32 0zm80 96A16 16 0 1 0 80 96a16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-32 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm32 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"></path></svg></i>
                            <h3 className="text-2xl font-bold text-gray-900">Government</h3>
                        </div>
                        <p className="text-gray-600">FedRAMP-ready AI infrastructure</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="cta" className="py-20 gradient-bg">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Free Cyber Resilience Audit</h2>
                <p className="text-xl text-gray-100 mb-8">Get a 25-point vulnerability scorecard in 72 hours</p>
                <button className="bg-white text-[#6f6f7d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition cyber-glow text-lg">
                    <i className="mr-2" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path></svg></i>
                    Assess Your AI Security Posture
                </button>
            </div>
        </section>


        {/* <footer id="footer" className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">BrainHouse</div>
                    <p className="text-gray-400">AI-Powered Cybersecurity Solutions</p>
                </div>
            </div>
        </footer> */}

    </>
  )
}
