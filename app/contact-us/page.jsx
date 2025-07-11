'use client'

import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'


export default function ContactUs() {
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
                    Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt
                    integer elementum id sem. Arcu sed malesuada et magna.
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
                        <a href="mailto:hello@example.com" className="hover:text-white">
                            info@brainhouse.net
                        </a>
                        </dd>
                    </div>
                    </dl>
                </div>
            </div>
            <div className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
                <img className='rounded-[4px]' src="images/brainhouse.png" alt="brainhouse" />
            </div>
        </div>
        </div>
    </>
  )
}
