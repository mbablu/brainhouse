'use client'
import Image from 'next/image'
import { Search, PenTool, Code, CheckCheck, Rocket, Headphones } from 'lucide-react';
import Link from 'next/link';


export default function Services() {

  return (
    <>
        <section id="hero" className="bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] text-white h-[600px] flex items-center pt-[70px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        AI Solutions That <span className="text-accent">Transform</span> Business
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                        From AI consulting to generative AI development, we deliver intelligent solutions that drive real-world value and operational excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact-us" className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-colors cursor-pointer">
                            Schedule Consultation
                        </Link>
                        {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#06b6d4] transition-colors cursor-pointer">
                            Schedule Consultation
                        </button> */}
                    </div>
                </div>
            </div>
        </section>


        <section id="services-overview" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Our AI Services</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive AI solutions designed to accelerate your digital transformation and unlock unprecedented business value.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div id="ai-consulting-card" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                        <div className="flex items-center mb-6">
                            <div className="bg-primary text-white p-3 rounded-lg mr-4">
                                <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-brain" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">AI Consulting &amp; Development</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Transform your business with intelligent solutions that deliver measurable impact. From strategic consulting to full-scale AI implementation.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center">
                                <i className="text-primary mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">40% faster decision velocity</span>
                            </div>
                            <div className="flex items-center">
                                <i className="text-primary mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">30% support cost reduction</span>
                            </div>
                            <div className="flex items-center">
                                <i className="text-primary mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">90% of enterprise data optimized</span>
                            </div>
                        </div>
                        {/* <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors">
                            Learn More
                        </button> */}
                    </div>

                    <div id="genai-card" className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                        <div className="flex items-center mb-6">
                            <div className="bg-accent text-white p-3 rounded-lg mr-4">
                                <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa  w-5 h-5 fa-wand-magic" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M14.1 463.3c-18.7-18.7-18.7-49.1 0-67.9L395.4 14.1c18.7-18.7 49.1-18.7 67.9 0l34.6 34.6c18.7 18.7 18.7 49.1 0 67.9L116.5 497.9c-18.7 18.7-49.1 18.7-67.9 0L14.1 463.3zM347.6 187.6l105-105L429.4 59.3l-105 105 23.3 23.3z"></path></svg></i>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Generative AI Development</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            Harness the power of generative AI to amplify creativity, boost productivity, and deliver exceptional customer experiences.
                        </p>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center">
                                <i className="text-accent mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">66% productivity boost</span>
                            </div>
                            <div className="flex items-center">
                                <i className="text-accent mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">50% faster development</span>
                            </div>
                            <div className="flex items-center">
                                <i className="text-accent mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>
                                <span className="text-gray-700">Private cloud LLM deployments</span>
                            </div>
                        </div>
                        {/* <button className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
                            Learn More
                        </button> */}
                    </div>
                </div>
            </div>
        </section>

        <section id="ai-consulting-details" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Consulting &amp; Development</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        At Brainhouse, AI isn't just a tool—it's a mindset. Our comprehensive AI services help businesses envision, design, and implement intelligent solutions that deliver real-world value.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
                    <div id="ai-consulting-service" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-lightbulb" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Consulting</h3>
                        <p className="text-gray-600">Personalized AI roadmaps aligned with business growth and operational efficiency.</p>
                    </div>

                    <div id="ai-product-dev" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-gears" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gears" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Product Development</h3>
                        <p className="text-gray-600">Co-develop AI-driven digital products with intuitive UX and robust backend integrations.</p>
                    </div>

                    <div id="ai-software-dev" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Software Development</h3>
                        <p className="text-gray-600">Custom software that integrates AI/ML into core business processes.</p>
                    </div>

                    <div id="ai-agent-dev" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Agent Development</h3>
                        <p className="text-gray-600">Intelligent agents for 24/7 support and automated complex workflows.</p>
                    </div>

                    <div id="ai-integration" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-plug" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plug" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Integration Services</h3>
                        <p className="text-gray-600">Seamless integration with existing CRMs, ERPs, and IoT platforms.</p>
                    </div>

                    <div id="voice-agents" className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="bg-blue-100 text-primary p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-microphone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microphone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Voice Agents</h3>
                        <p className="text-gray-600">Voice-enabled solutions for customer service and accessibility applications.</p>
                    </div>
                </div>

                <div id="impact-stats" className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why It Matters</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">90%</div>
                            <p className="text-gray-600">of enterprise data is unstructured and underutilized</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">40%</div>
                            <p className="text-gray-600">boost in operational efficiency with AI</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">$15.7T</div>
                            <p className="text-gray-600">projected AI contribution to global economy by 2030</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="genai-details" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Generative AI Development</h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Generative AI is reshaping how businesses create, engage, and deliver value. We bring GenAI to life through purpose-driven solutions that amplify human creativity and supercharge productivity.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mb-16">
                    <div id="genai-consulting" className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
                        <div className="bg-accent text-white p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Generative AI Consulting</h3>
                        <p className="text-gray-600 mb-4">Strategic use case mapping and responsible AI adoption for future-proof, scalable solutions.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><i className="text-accent mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Data maturity assessment</li>
                            <li className="flex items-center"><i className="text-accent mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Compliance alignment</li>
                            <li className="flex items-center"><i className="text-accent mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>ROI forecasting</li>
                        </ul>
                    </div>

                    <div id="genai-solutions" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
                        <div className="bg-purple-600 text-white p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-wand-magic-sparkles" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic-sparkles" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Generative AI Solutions</h3>
                        <p className="text-gray-600 mb-4">End-to-end generative applications using GPT, DALL·E, and Stable Diffusion.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><i className="text-purple-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Automated design generation</li>
                            <li className="flex items-center"><i className="text-purple-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Intelligent co-pilots</li>
                            <li className="flex items-center"><i className="text-purple-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Document automation</li>
                        </ul>
                    </div>

                    <div id="UX Pilot-integration" className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                        <div className="bg-green-600 text-white p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-6 h-6 fa-comments" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">UX Pilot Integration</h3>
                        <p className="text-gray-600 mb-4">Seamless conversational AI integration for CRM, internal tools, and customer applications.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><i className="text-green-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Contextual responses</li>
                            <li className="flex items-center"><i className="text-green-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Knowledge management</li>
                            <li className="flex items-center"><i className="text-green-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Multi-channel support</li>
                        </ul>
                    </div>

                    <div id="llm-development" className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
                        <div className="bg-orange-600 text-white p-3 rounded-lg w-fit mb-4">
                            <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-6 h-6 fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Large Language Models</h3>
                        <p className="text-gray-600 mb-4">Domain-specific LLMs with private cloud deployments and zero data leakage.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center"><i className="text-orange-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Custom fine-tuning</li>
                            <li className="flex items-center"><i className="text-orange-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Secure deployment</li>
                            <li className="flex items-center"><i className="text-orange-600 mr-2" data-fa-i2svg=""><svg className="svg-inline--fa fa-check w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg></i>Industry-specific models</li>
                        </ul>
                    </div>
                </div>

                <div id="genai-stats" className="bg-gradient-to-r from-[#6366f1] to-[#06b6d4] rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-8 text-center">GenAI Impact</h3>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">66%</div>
                            <p className="opacity-90">productivity boost for content creators</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">60%</div>
                            <p className="opacity-90">of teams implementing GenAI</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">50%</div>
                            <p className="opacity-90">reduction in development time</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">80%</div>
                            <p className="opacity-90">accuracy in task automation</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="why-brainhouse" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Brainhouse</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our expertise, methodology, and commitment to excellence make us the ideal partner for your AI transformation journey.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div id="customer-first" className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="bg-primary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-First Engineering</h3>
                        <p className="text-gray-600">Every solution designed with your users, workflows, and goals in mind.</p>
                    </div>

                    <div id="elite-team" className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="bg-accent text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-medal" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="medal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Elite Engineering Team</h3>
                        <p className="text-gray-600">Certified specialists in AI, cloud, and DevOps with deep domain expertise.</p>
                    </div>

                    <div id="collaboration" className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
                        <div className="bg-secondary text-white p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                            <i className="text-2xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-handshake" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Frictionless Collaboration</h3>
                        
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
