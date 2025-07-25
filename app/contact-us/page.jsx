'use client'
import React from 'react';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function ContactUs() {
    const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const questionAnswer = form.questionAnswer.value.trim()

    if (questionAnswer !== '11') {
      alert('Please write the correct answer to the math question.')
      return
    }

    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      companyName: form.companyName.value,
      projectType: form.projectType ? form.projectType.value : '',
      message: form.message.value,
    }

    

    try {
      const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            })

      const result = await response.json()

      if (response.ok) {
        alert('Message sent. Lets achieve extraordinary outcomes together..')
        form.reset();
      } else {
        alert(`Failed to send request: ${result.message}`)
      }
    } catch (error) {
      alert('An error occurred. Please try again.')
    }
  }
  return (
    <>
        <div className="relative isolate bg-gray-900 pt-[70px]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
                <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                    <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                    <svg
                        aria-hidden="true"
                        className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-700"
                    >
                        <defs>
                        <pattern
                            x="100%"
                            y={-1}
                            id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M130 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                        </defs>
                        <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                        <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                        </svg>
                        <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                    <div
                        aria-hidden="true"
                        className="absolute top-[calc(100%-13rem)] -left-56 transform-gpu blur-3xl lg:top-[calc(50%-7rem)] lg:left-[max(-14rem,calc(100%-59rem))]"
                    >
                        <div
                        style={{
                            clipPath:
                            'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                        }}
                        className="aspect-1155/678 w-288.75 bg-linear-to-br from-[#80caff] to-[#4f46e5] opacity-20"
                        />
                    </div>
                    </div>
                    <h2 className="text-2xl font-semibold tracking-tight text-pretty text-white sm:text-3xl">Brainstorm with Brainhouse</h2>
                    <p className="mt-6 text-lg/8 text-gray-300">
                    Let’s Build the Future Together – One Intelligent Solution at a Time.
At Brainhouse, we co-create AI-driven ecosystems tailored to your vision, whether you're scaling with cloud-native architectures, deploying autonomous agents, or activating predictive insights. Our team of AI architects, data scientists, and cloud strategists bring deep tech and deep listening to every engagement. We don’t force solutions—we shape them around your goals. Let’s train a smarter future, together.
                    </p>
                    <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                        Brainhouse Inc<br/>
                        Suite 200 <br/>
                        2020 Winston Park Drive<br/>
                        Oakville, ON<br/>
                        Canada L6H 6X7
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                        <a href="tel:+1 (555) 234-5678" className="hover:text-white">
                            +1 800-920-0350
                        </a>
                        </dd>
                    </div>
                    <div className="flex gap-x-4">
                        <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                        </dt>
                        <dd>
                        <a href="mailto:info@brainhouse.ai" className="hover:text-white">
                            info@brainhouse.ai
                        </a>
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>
            {/* <div className="px-6 pt-20 pb-20 sm:pb-32 lg:px-8 lg:py-48">
                <img className='rounded-[4px]' src="images/Dotted_world_map_Blue.svg" alt="brainhouse" />
            </div> */}
            <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
              <h2 className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg text-xl text-white font-bold mb-7'>Let's Brainstorm</h2>
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="block text-sm/6 font-semibold text-white">
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="phone-number"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company-name" className="block text-sm/6 font-semibold text-white">
                      Company Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="company-name"
                        name="companyName"
                        type="text"
                        autoComplete="text"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="projectType" className="block text-sm/6 font-semibold text-white">
                      Project Type
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="projectType"
                        name="projectType"
                        type="text"
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
                      Please Answer the questions.
                    </label>
                    <div className="mt-2.5 flex items-center">
                      <span className='text-white mr-5 text-lg'>7 + 4 =</span> <span><input type="text" name='questionAnswer' className="block w-[60px] rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500" /></span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 cursor-pointer"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
            
        </div>
        </div>
    </>
  )
}
