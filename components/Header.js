/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { HomeIcon, PlusCircleIcon, SearchIcon } from '@heroicons/react/outline'

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto mt-4">
      {/* Left */}
        <div className="h-24 w-24 cursor-pointer relative hidden lg:inline-grid">
            <Image src="/logo.png" alt="Intagram-logo-1" layout="fill" className="object-contain" />
        </div>
        <div className="h-24 w-10 cursor-pointer relative  lg:hidden">
            <Image src="/logo2.png" alt="Intagram-logo-2" layout="fill" className="object-contain" />
        </div>
        
      {/* Middle */}

      <div className="relative mt-1">
        <div className="absolute top-3 left-3">
            <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input type='text' placeholder='Search Here' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus: focus:border-black rounded-md' />
      </div>

      {/* Right */}

      <div>
        <div className="flex space-x-5 items-center">
        <HomeIcon className="h-6 hidden md:inline-flex cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
        <img src="/profile.png" alt="Intagram-logo-2" className="h-10 cursor-pointer" />
        </div>
      </div>

    </div>
  )
}
