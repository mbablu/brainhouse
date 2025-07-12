'use client'
import Image from 'next/image'
import { Search, PenTool, Code, CheckCheck, Rocket, Headphones } from 'lucide-react';
import Link from 'next/link';


export default function Resources() {

  return (
    <>
        <section id="case-studies-hero" className="gradient-bg text-white py-20 pt-30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                        Real-world impact is the measure of success. Our AI-first philosophy and engineering-driven culture have helped organizations transform data into decisions, automate processes, and elevate experiences.
                    </p>
                </div>
            </div>
        </section>

        <section id="case-studies-grid" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[#192DA0]  mb-4">Industry-Leading Case Studies</h2>
                    <p className="text-gray-600">Powered by Machine Learning, Generative AI, and Big Data Engineering</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    <div id="parking-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-blue-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-car" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">AI-Driven Parking Enforcement Platform</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Outdated parking management tools, poor ticketing accuracy, no mobile integration</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">Real-time AI-powered platform with license plate recognition (OCR), digital ticketing, and centralized dashboard</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">40%</div>
                                <div className="text-sm text-gray-600">Enforcement Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">3x</div>
                                <div className="text-sm text-gray-600">Faster Ticketing</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">50%</div>
                                <div className="text-sm text-gray-600">Labor Reduction</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">Cities lose over $10B/year in inefficient parking enforcement</p>
                    </div>

                    <div id="smart-city-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-green-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-city" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="city" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Smart City Planning &amp; Infrastructure Analytics</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Lack of predictive data in urban planning decisions</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">Big data analytics engine using satellite imagery, mobility patterns, and sentiment data</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">25%</div>
                                <div className="text-sm text-gray-600">Zoning Accuracy</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">20%</div>
                                <div className="text-sm text-gray-600">Cost Reduction</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">Smart city projects using AI reduce infrastructure costs by 20% (WEF)</p>
                    </div>

                    <div id="retail-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-[#6f6f7d] text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-cart-shopping" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Retail Customer Behavior Prediction Engine</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Poor conversion and cart abandonment in e-commerce marketplace</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">Behavioral analytics engine combining session tracking and purchase history</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">38%</div>
                                <div className="text-sm text-gray-600">Repeat Purchase Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">20%</div>
                                <div className="text-sm text-gray-600">Cart Abandonment Drop</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">Predictive AI can increase e-commerce ROI by over 300%</p>
                    </div>

                    <div id="content-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-orange-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-pen-nib" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pen-nib" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Generative AI Content Assistant</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Manual content creation slowing down publishing pipeline</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">Custom LLM-based tool for generating articles, social posts, and video summaries</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">65%</div>
                                <div className="text-sm text-gray-600">Turnaround Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">200+</div>
                                <div className="text-sm text-gray-600">Hours Saved Monthly</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">Generative AI can save publishers 30-70% in content production costs</p>
                    </div>

                    <div id="credit-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-indigo-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-credit-card" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="credit-card" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Credit Bureau AI Risk Engine</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Credit evaluation for underbanked population lacked data sources</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">Custom scoring model integrating telecom, utility bills, and social graph data</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">1M+</div>
                                <div className="text-sm text-gray-600">Users Enabled</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">28%</div>
                                <div className="text-sm text-gray-600">Risk Accuracy</div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">Over 1.7B people globally are credit-invisible</p>
                    </div>

                    <div id="hr-case" className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 card-hover">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                                <i className="text-pink-600 text-xl" data-fa-i2svg=""><svg className="svg-inline--fa w-5 h-5 fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">AI-Powered Recruitment Assistant</h3>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm font-semibold text-[#192DA0]  mb-2">Challenge:</p>
                            <p className="text-gray-700 mb-4">Recruiters overwhelmed by resume screening, poor candidate matching</p>
                            <p className="text-sm font-semibold text-blue-600 mb-2">Solution:</p>
                            <p className="text-gray-700 mb-4">NLP-based resume parsing, role matching using embeddings</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">80%</div>
                                <div className="text-sm text-gray-600">Screening Time Reduction</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600">2x</div>
                                <div className="text-sm text-gray-600">Quality Hire Ratio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
