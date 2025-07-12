'use client'
import Image from 'next/image'
import { Globe, Smartphone, Bot, UserCheck, TrendingUp, Settings, Brain, Users, Maximize2, Shield, Building, Truck, Heart, GraduationCap, ShoppingCart, Plane, Film, Lightbulb, MessageSquare, MessageCircle } from 'lucide-react';
import Link from 'next/link';




export default function DataScience() {

  return (
    <>
        <section id="hero" className="bg-gradient-to-br from-dark via-gray-900 to-primary text-white h-[600px] flex items-center">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center bg-[#06b6d4]/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <i className="mr-2" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                            Data Science &amp; Machine Learning
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Turn Your Data Into <span className="text-accent">Intelligence</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Build competitive advantage with scalable, AI-powered infrastructure. From Data Swamps to Intelligence Goldmines.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-accent text-dark px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                                Start Your Transformation
                            </button>
                            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-dark transition-colors">
                                View Case Studies
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-full h-80 object-cover rounded-2xl shadow-2xl" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/eecc5d51b5-f2f6952a83d6b41ed7d7.png" alt="futuristic data visualization dashboard with AI neural networks and analytics charts in dark blue theme" />
                    </div>
                </div>
            </div>
        </section>


        <section id="mission" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    At BrainHouse, we believe that data is not just the new oil—it's the fuel for next-generation business intelligence. Our Data Science &amp; Machine Learning services empower you to unlock insights, automate operations, predict outcomes, and scale confidently across industries. Whether you're building data lakes, deploying predictive models, or modernizing architecture, we bring the tools, talent, and tenacity to lead your transformation.
                </p>
            </div>
        </section>


        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark mb-4">What We Offer</h2>
                    <p className="text-lg text-gray-600">Comprehensive data solutions for the modern enterprise</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* <!-- Big Data Development --> */}
                    <div id="service-1" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-primary text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Big Data Development</h3>
                        <p className="text-gray-600 mb-6">We design and develop high-throughput, scalable data architectures using distributed frameworks like Hadoop, Spark, and Kafka. From ingestion to processing, we ensure your data pipelines are future-ready, fast, and fault-tolerant.</p>
                    </div>

                    {/* <!-- Modern Data Architecture --> */}
                    <div id="service-2" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-accent text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-sitemap" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sitemap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Modern Data Architecture</h3>
                        <p className="text-gray-600 mb-6">Say goodbye to silos. Our unified, cloud-native data platforms enable real-time analytics, machine learning, and actionable insights across business units—powering enterprise intelligence in motion.</p>
                    </div>

                    {/* <!-- Big Data Engineering --> */}
                    <div id="service-3" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-[#1e40af]/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-secondary text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-gears" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gears" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Big Data Engineering</h3>
                        <p className="text-gray-600 mb-6">We build and maintain data lakes, ETL pipelines, transformation frameworks, and real-time stream processing systems. Our engineers translate business goals into engineered solutions using tools like Apache Beam, Airflow, and Snowflake.</p>
                    </div>

                    {/* <!-- Big Data Analytics --> */}
                    <div id="service-4" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-green-500 text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-chart-bar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-bar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zm96 96c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 64H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Big Data Analytics</h3>
                        <p className="text-gray-600 mb-6">Tap into advanced analytics with tailored dashboards, anomaly detection, and custom KPIs. We bring business context to data science with domain-specific visualizations and predictive insights.</p>
                    </div>

                    {/* <!-- Data Warehouse Consulting --> */}
                    <div id="service-5" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-purple-500 text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-warehouse" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M0 488V171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4V488c0 13.3-10.7 24-24 24H568c-13.3 0-24-10.7-24-24V224c0-17.7-14.3-32-32-32H128c-17.7 0-32 14.3-32 32V488c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24V432H512l0 56c0 13.3-10.7 24-24 24zM128 400V336H512v64H128zm0-96V224H512l0 80H128z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Data Warehouse Consulting</h3>
                        <p className="text-gray-600 mb-6">We help you consolidate, cleanse, and manage your organizational data through robust warehousing solutions. Whether it's Redshift, BigQuery, or Snowflake, we optimize performance and security at scale.</p>
                    </div>

                    {/* <!-- Business Intelligence --> */}
                    <div id="service-6" className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                        <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6">
                            <i className="text-orange-500 text-xl" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-brain" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="brain" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"></path></svg></i>
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-4">Business Intelligence</h3>
                        <p className="text-gray-600 mb-6">Turn raw data into sharp decisions. We develop dynamic dashboards and self-service BI portals using Power BI, Tableau, and Looker—designed for fast decision-making and storytelling.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="tech-stack" className="py-20 bg-dark text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Technology Arsenal</h2>
                    <p className="text-lg text-gray-300">Cutting-edge tools for next-generation solutions</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div id="tech-1" className="bg-gray-800 p-6 rounded-xl">
                        <div className="flex items-center mb-4">
                            <i className="text-accent text-2xl mr-3" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-bars-staggered" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars-staggered" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg></i>
                            <h3 className="text-xl font-bold">Real-Time Lakehouses</h3>
                        </div>
                        <p className="text-gray-300">Delta Lake + Spark streaming</p>
                    </div>
                    
                    <div id="tech-2" className="bg-gray-800 p-6 rounded-xl">
                        <div className="flex items-center mb-4">
                            <i className="text-accent text-2xl mr-3" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path></svg></i>
                            <h3 className="text-xl font-bold">Predictive Analytics</h3>
                        </div>
                        <p className="text-gray-300">XGBoost ensembles for precision forecasting</p>
                    </div>
                    
                    <div id="tech-3" className="bg-gray-800 p-6 rounded-xl">
                        <div className="flex items-center mb-4">
                            <i className="text-accent text-2xl mr-3" data-fa-i2svg=""><svg className="w-6 h-6 svg-inline--fa fa-chart-pie" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z"></path></svg></i>
                            <h3 className="text-xl font-bold">ML-Powered BI</h3>
                        </div>
                        <p className="text-gray-300">Tableau/Power BI embedded intelligence</p>
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-300 mb-4">Tech Stack:</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-[#06b6d4]/20 text-accent px-4 py-2 rounded-full">Snowflake</span>
                        <span className="bg-[#06b6d4]/20 text-accent px-4 py-2 rounded-full">Databricks</span>
                        <span className="bg-[#06b6d4]/20 text-accent px-4 py-2 rounded-full">AWS SageMaker</span>
                    </div>
                </div>
            </div>
        </section>


        <section id="statistics" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark mb-4">Why It Matters</h2>
                    <p className="text-lg text-gray-600">The data speaks for itself</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div id="stat-1" className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">97.2%</div>
                        <p className="text-gray-600">of organizations are investing in big data &amp; AI initiatives</p>
                    </div>
                    
                    <div id="stat-2" className="text-center">
                        <div className="text-4xl font-bold text-accent mb-2">23X</div>
                        <p className="text-gray-600">more likely to acquire customers when data-driven</p>
                    </div>
                    
                    <div id="stat-3" className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">33%</div>
                        <p className="text-gray-600">reduction in operational costs with real-time analytics</p>
                    </div>
                    
                    <div id="stat-4" className="text-center">
                        <div className="text-4xl font-bold text-green-500 mb-2">20%</div>
                        <p className="text-gray-600">increase in customer retention with predictive analytics</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="why-brainhouse" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark mb-4">Why BrainHouse</h2>
                    <p className="text-lg text-gray-600">What sets us apart in the data science landscape</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div id="advantage-1" className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="text-primary" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">Experienced Data Engineers &amp; AI Scientists</h3>
                                <p className="text-gray-600">Our team blends deep statistical knowledge with hands-on expertise in building scalable data systems that power decision intelligence.</p>
                            </div>
                        </div>
                        
                        <div id="advantage-2" className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-[#06b6d4]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="text-accent" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-target" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="target" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path><circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate></circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate></path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">Business-Driven, Tech-Led</h3>
                                <p className="text-gray-600">We don't build solutions in a vacuum. Every pipeline, model, and dashboard is aligned with your core business KPIs.</p>
                            </div>
                        </div>
                        
                        <div id="advantage-3" className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-[#4338ca]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="text-secondary" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-cloud" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"></path></svg></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">Cloud-Native and Vendor-Agnostic</h3>
                                <p className="text-gray-600">Whether you're on AWS, Azure, GCP, or hybrid—we optimize for performance, cost, and security with cloud-native best practices.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-8">
                        <div id="advantage-4" className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="text-green-500" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path></svg></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">Security &amp; Compliance First</h3>
                                <p className="text-gray-600">We engineer with governance, data lineage, and compliance (HIPAA, GDPR, SOC2) from day one.</p>
                            </div>
                        </div>
                        
                        <div id="advantage-5" className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className="text-purple-500" data-fa-i2svg=""><svg className="w-4 h-4 svg-inline--fa fa-trophy" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trophy" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"></path></svg></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-dark mb-2">Proven Use Cases Across Industries</h3>
                                <p className="text-gray-600">From predicting inventory needs in retail to anomaly detection in healthcare—we've turned data into results for clients worldwide.</p>
                            </div>
                        </div>
                        
                        <div id="cloud-services" className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] p-6 rounded-xl text-white">
                            <h3 className="text-xl font-bold mb-2">Cloud Services</h3>
                            <p>From on-premise to AWS, Azure, or Google Cloud—our cloud architects help you scale data workloads, deploy AI solutions, and improve time-to-insight while reducing costs.</p>
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
