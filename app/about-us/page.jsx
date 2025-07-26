'use client'
import Image from 'next/image'
import { Search, PenTool, Code, CheckCheck, Rocket, Headphones } from 'lucide-react';

import {
    AcademicCapIcon,
    CheckCircleIcon,
    HandRaisedIcon,
    RocketLaunchIcon,
    SparklesIcon,
    SunIcon,
    UserGroupIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link';
const stats = [
  { label: 'Business was founded', value: '2012' },
  { label: 'People on the team', value: '120+' },
  { label: 'Users on the platform', value: '250k' },
  { label: 'Paid out to creators', value: '$70M' },
]
const values = [
  {
    name: 'Be world-class.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take responsibility.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Be supportive.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: UserGroupIcon,
  },
  {
    name: 'Always learning.',
    description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share everything you know.',
    description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Enjoy downtime.',
    description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: SunIcon,
  },
]
const team = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    location: 'Toronto, Canada',
  },
  // More people...
]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  '30 days of paid vacation',
  'Annual team retreats',
  'Benefits for you and your family',
  'A great work environment',
]

export default function AboutUs() {

  return (
    <>
      <section 
      id="hero" 
      className="bg-gradient-to-br from-blue-50 via-purple-50 to-emerald-50 min-h-[500px] py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Catalysts of <span className="text-blue-600">AI Transformation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              We bridge the gap between business challenges and cutting-edge technology, creating intelligent solutions that elevate lives and drive sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                <i className="mr-2 h-5 w-5">
                  <svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
                </i>
                Discover Our Solutions
              </Link>
              {/* <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                <i className="mr-2 h-5 w-5">
                  <svg className="svg-inline--fa fa-play" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg>
                </i>
                Watch Our Story
              </button> */}
            </div>
          </div>
        </div>
      </section>


      <section id="who-we-are" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0]  mb-6">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-8">
               BrainHouse was born from countless late-night conversations about what’s broken in today’s digital world—and how AI, when done right, could actually fix it. Today, we’re building tools that blend intelligence, ethics, and experience into one seamless solution. At BrainHouse, we believe the future belongs to those who make intelligence accessible, ethical, and actionable. That’s why we’re building more than just AI-powered tools—we’re creating systems that think with purpose and design that feels human. Whether it’s transforming how cities operate, how businesses grow, or how people connect, we’re here to make AI work for everyone. Powered by vision, built with integrity—BrainHouse is your partner in digital evolution. We don’t just talk about the future—we’re engineering it.
              </p>
              {/* <p className="text-gray-600 text-lg mb-8">
                From helping cities become smarter to equipping healthcare with predictive tools, we develop AI systems that don't just automate, but elevate.
              </p> */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600">
                <p className="text-lg font-medium text-gray-900 italic">
                  "At Brainhouse, we believe in designing AI that elevates lives—not just performance."
                </p>
                <p className="text-blue-600 font-medium mt-2">— Founder & CEO</p>
              </div>
            </div>
            <div className="relative">
              <Image
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2ecd45312d-9012c896718293b331d4.png"
                alt="modern AI office with diverse team collaborating on futuristic technology, professional corporate setting"
                width={600}
                height={400}
                priority
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                    {/* <Lightbulb className="text-blue-600 h-6 w-6" /> */}
                    <i className="text-blue-600 h-6 w-6" data-fa-i2svg=""><svg className="svg-inline--fa fa-lightbulb" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="lightbulb" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"></path></svg></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Innovation First</p>
                    <p className="text-sm text-gray-500">Since 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   


      <section id="vision-mission" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0] mb-4">Vision & Mission</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our guiding principles that drive every decision and innovation at Brainhouse
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div id="vision-card" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-white text-2xl w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the most trusted partner for AI-powered transformation, enabling every business and institution to think smarter, act faster, and lead with purpose.
              </p>
            </div>
            <div id="mission-card" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-[#6f6f7d] to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-white text-2xl w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="target" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g className="missing">
                    <path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path>
                    <circle fill="currentColor" cx="256" cy="364" r="28">
                      <animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate>
                      <animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate>
                    </circle>
                    <path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z">
                      <animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate>
                    </path>
                    <path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z">
                      <animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate>
                    </path>
                  </g>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our mission is to blend AI innovation with human insight, creating adaptive and intelligent systems that solve real-world problems, enrich user experiences, and fuel sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section> 


      <section id="company-profile" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0] mb-4">Company Profile</h2>
            <p className="text-gray-600 text-lg">Key facts and figures about Brainhouse Technologies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div id="established-stat" className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-blue-600 w-8 h-8" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"></path>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#192DA0] ">2016</h3>
              <p className="text-gray-600">Established</p>
            </div>
            <div id="location-stat" className="text-center">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-[#155dfc] w-8 h-8 fill-[#155dfc]" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#192DA0] ">Ontario</h3>
              <p className="text-gray-600">Canada HQ</p>
            </div>
            <div id="presence-stat" className="text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="text-blue-600 w-10 h-10 fill-[#155dfc]" xmlns="http://www.w3.org/2000/svg" width="38.039" height="38.47" viewBox="0 0 38.039 38.47">
                  <path id="Trust_By_Design" data-name="Trust By Design" d="M25.251,2.025a1.8,1.8,0,0,0-1.143.405C22.425,3.754,17.914,6.821,12.2,6.46a1.865,1.865,0,0,0-1.984,1.683A32.226,32.226,0,0,0,11.6,20.291a1.763,1.763,0,0,0-.24.962V24.2L9.376,27.206l-.241.06a1.606,1.606,0,0,0-1.5-1.2H3.964A1.592,1.592,0,0,0,2.4,27.627V38.992a1.54,1.54,0,0,0,1.563,1.5H7.572a1.594,1.594,0,0,0,1.443-.962l2.045.842c.06,0,.119.06.24.06h8.48a2.326,2.326,0,0,0,2.284-1.925,2.233,2.233,0,0,0-.3-1.382,2.313,2.313,0,0,0,1.684-2.1,1.666,1.666,0,0,0-.06-.541c.361.18.781.421,1.142.6a1.918,1.918,0,0,0,1.624,0c14.612-7.156,14.552-22.49,14.191-27A1.873,1.873,0,0,0,38.36,6.4c-5.713.421-10.282-2.647-11.966-3.97A1.8,1.8,0,0,0,25.251,2.025Zm-.121,2.51a20.633,20.633,0,0,0,12.088,4.33h.661c.361,4.63-.06,17.619-12.628,23.873-.3-.18-.6-.3-.9-.48a1.483,1.483,0,0,0,.06-.722,2.26,2.26,0,0,0-1.022-1.8,2.415,2.415,0,0,0,.48-1.683,2.279,2.279,0,0,0-2.284-1.925h-4.39c-.241-.3-.421-.6-.661-.9l.18-.661V22.876A3.617,3.617,0,0,0,13.7,19.329,29.317,29.317,0,0,1,12.442,8.866H13.1A20.245,20.245,0,0,0,25.13,4.535Zm.121,6.134a7.156,7.156,0,1,0,7.156,7.156A7.135,7.135,0,0,0,25.251,10.67Zm1.954,5.021a.888.888,0,0,1,.631.27,1.009,1.009,0,0,1-.12,1.264L25.191,19.69a.872.872,0,0,1-1.264,0l-1.2-1.263a.894.894,0,1,1,1.324-1.2l.6.6c.06-.06,2.044-1.985,1.924-1.865A.891.891,0,0,1,27.206,15.691Zm-13.981,4.78a2.362,2.362,0,0,1,2.345,2.405V24.26l-.722,2.286a.612.612,0,0,0,.121.54.546.546,0,0,0,.48.241h6.134a1.049,1.049,0,0,1,1.082.9,1.064,1.064,0,0,1-1.022,1.2H19.479a.6.6,0,1,0,0,1.2h2.645a1.053,1.053,0,0,1,.061,2.1H19.057a.6.6,0,0,0,0,1.2h2.1a.979.979,0,0,1,.962,1.083c.06.421-.481.9-1.022.9H17.734a.6.6,0,0,0,0,1.2h2.1a1.064,1.064,0,0,1,1.022,1.2,1.049,1.049,0,0,1-1.082.9H11.361l-2.286-.9V28.409l.782-.241a.6.6,0,0,0,.3-.241l2.224-3.307a1.012,1.012,0,0,0,.12-.3V21.193A.7.7,0,0,1,13.224,20.471ZM5.768,35.986a1.022,1.022,0,0,1,0,2.045,1.022,1.022,0,0,1,0-2.045Z" transform="translate(-2.4 -2.025)" fill="#155dfc"/>
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#192DA0] ">Trust by Design</h3>
              {/* <p className="text-gray-600">Regions</p> */}
            </div>
            <div id="clients-stat" className="text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-blue-600 w-10 h-10 fill-[#155dfc]" xmlns="http://www.w3.org/2000/svg" width="38" height="55" viewBox="0 0 38 55">
                    <g id="Ethical_Ai" data-name="Ethical Ai" transform="translate(-13 -7)">
                      <circle id="Ellipse_10" data-name="Ellipse 10" cx="2" cy="2" r="2" transform="translate(30 9)" fill="#83ade6"/>
                      <path id="Path_23" data-name="Path 23" d="M51,61H39V52a4,4,0,0,1,4-4h4a4,4,0,0,1,4,4Z" fill="#4f5994"/>
                      <path id="Path_24" data-name="Path 24" d="M45,48l-2,7,2,3,2-3Z" fill="#e6e6e6"/>
                      <circle id="Ellipse_11" data-name="Ellipse 11" cx="4" cy="4" r="4" transform="translate(41 40)" fill="#f2d0a3"/>
                      <path id="Path_25" data-name="Path 25" d="M25,61H13V52a4,4,0,0,1,4-4h4a4,4,0,0,1,4,4Z" fill="#4f5994"/>
                      <path id="Path_26" data-name="Path 26" d="M19,48l-2,7,2,3,2-3Z" fill="#e6e6e6"/>
                      <circle id="Ellipse_12" data-name="Ellipse 12" cx="4" cy="4" r="4" transform="translate(15 40)" fill="#f2d0a3"/>
                      <circle id="Ellipse_13" data-name="Ellipse 13" cx="4.5" cy="4.5" r="4.5" transform="translate(27.5 38)" fill="#f2d0a3"/>
                      <path id="Path_27" data-name="Path 27" d="M39,62H25V51a4,4,0,0,1,4-4h6a4,4,0,0,1,4,4Z" fill="#192da0"/>
                      <path id="Path_28" data-name="Path 28" d="M32,47l-3,8,3,4,3-4Z" fill="#e6e6e6"/>
                      <path id="Path_29" data-name="Path 29" d="M41.9,10.508A.978.978,0,0,0,41,10H34.816A3,3,0,0,0,33,8.184V7H31V8.184A3,3,0,0,0,29.184,10H23a.978.978,0,0,0-.9.508l-3,6,1.789.9L23,13.192,25.1,17.4l1.789-.9L24.64,12h4.544A3,3,0,0,0,31,13.816V31H28l-1,4H37l-1-4H33V13.816A3,3,0,0,0,34.816,12H39.36l-2.254,4.508,1.789.9L41,13.192,43.1,17.4l1.789-.9ZM32,12a1,1,0,1,1,1-1A1,1,0,0,1,32,12Z" fill="#4f5994"/>
                      <path id="Path_30" data-name="Path 30" d="M17,16a6,6,0,0,0,12,0Z" fill="#5b6d80"/>
                      <path id="Path_31" data-name="Path 31" d="M35,16a6,6,0,0,0,12,0Z" fill="#5b6d80"/>
                    </g>
                  </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#192DA0] ">Ethical AI</h3>
              {/* <p className="text-gray-600">Trust by Design</p> */}
            </div>
          </div>


          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
                <div id="competencies">
                    <h3 className="text-xl font-bold text-black mb-4">Core Competencies</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="text-primary w-4 mr-3 w-4" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                            <span className="text-gray-600">AI consulting &amp; development</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-primary w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                            <span className="text-gray-600">Data engineering</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-primary w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                            <span className="text-gray-600">Smart infrastructure solutions</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-primary w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg></i>
                            <span className="text-gray-600">Industry AI applications</span>
                        </li>
                    </ul>
                </div>
                <div id="values">
                    <h3 className="text-xl font-bold text-black mb-4">Core Values</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center">
                            <i className="text-[#8b5cf6] w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-heart" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg></i>
                            <span className="text-gray-600">Human-centric Innovation</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-[#8b5cf6] w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path></svg></i>
                            <span className="text-gray-600">Ethical AI</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-[#8b5cf6] w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-graduation-cap" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="graduation-cap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"></path></svg></i>
                            <span className="text-gray-600">Continuous Learning</span>
                        </li>
                        <li className="flex items-center">
                            <i className="text-[#8b5cf6] w-4 mr-3" data-fa-i2svg=""><svg className="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></i>
                            <span className="text-gray-600">Excellence in Delivery</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>

          
        </div>
      </section>


      <section id="quality-policy" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Quality &amp; Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence through rigorous processes and methodologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Quality Card */}
            <div id="quality-card" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-primary w-5 text-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                  <path fill="currentColor" d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Quality Policy</h3>
              <p className="text-gray-600 mb-4">
                Quality at Brainhouse is not a checkbox; it's a commitment. Every project undergoes rigorous design reviews, iterative testing, and stakeholder validations.
              </p>
              {/* <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#8b5cf6]/10 text-primary rounded-full text-sm">ISO</span>
                <span className="px-3 py-1 bg-[#8b5cf6]/10 text-primary rounded-full text-sm">HIPAA</span>
                <span className="px-3 py-1 bg-[#8b5cf6]/10 text-primary rounded-full text-sm">GDPR</span>
              </div> */}
            </div>

            {/* Confidentiality Card */}
            <div id="confidentiality-card" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#8b5cf6]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-[#8b5cf6] w-5 text-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path>
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4">Confidentiality</h3>
              <p className="text-gray-600 mb-4">
                We implement enterprise-grade security protocols to protect client data, proprietary IP, and sensitive algorithms with strict NDAs and encrypted environments.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Encrypted environments", "Role-based access", "Secure cloud hosting"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="text-[#8b5cf6] w-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" width="16" height="16">
                      <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology Card */}
            <div id="methodology-card" className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="text-[#06b6d4] w-7 text-2xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                  <path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Delivery Methods</h3>
              <p className="text-gray-600 mb-4">
                We adapt our delivery to your pace and priorities with agile frameworks and modern DevOps practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {["Agile Teams", "MVP First", "DevOps Practices"].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="svg-inline--fa fa-check text-[#06b6d4]  w-3 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="development-process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#192DA0]   mb-4">Development Process</h2>
          <p className="text-gray-600 text-lg">Our agile process ensures rapid delivery and continuous improvement</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div id="discovery-phase" className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <Search className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Discovery & Research</h3>
            <p className="text-gray-600 text-sm">Understand business needs, user context, and technical opportunities</p>
          </div>
          <div id="design-phase" className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <PenTool className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Design</h3>
            <p className="text-gray-600 text-sm">Wireframes, workflows, architecture maps, and system blueprints</p>
          </div>
          <div id="development-phase" className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Code className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Development</h3>
            <p className="text-gray-600 text-sm">Modular coding with integration-ready microservices or APIs</p>
          </div>
          <div id="validation-phase" className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
              <CheckCheck className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Validation</h3>
            <p className="text-gray-600 text-sm">Unit, regression, and stress testing with user acceptance feedback</p>
          </div>
          <div id="deployment-phase" className="bg-gradient-to-br from-secondary/5 to-secondary/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
              <Rocket className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Deployment</h3>
            <p className="text-gray-600 text-sm">Cloud-native release pipelines, containerization, rollback mechanisms</p>
          </div>
          <div id="support-phase" className="bg-gradient-to-br from-accent/5 to-accent/10 p-6 rounded-xl">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
              <Headphones className="text-white" size={24} />
            </div>
            <h3 className="text-lg font-bold text-dark mb-2">Support</h3>
            <p className="text-gray-600 text-sm">Post-launch monitoring, updates, and real-time support</p>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
