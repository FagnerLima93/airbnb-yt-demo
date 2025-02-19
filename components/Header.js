import Image from "next/image";
import { MagnifyingGlassIcon, UserIcon, UserCircleIcon, GlobeAltIcon, Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* Left - Icon */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            {/* Here we're going to use the NEXT.JS image tag, instead of a regular img tag, it's way smaller than a jpeg and way more optimized for next js */}
            <Image src="https://links.papareact.com/qd3" alt='alt' fill className="object-contain object-left" />
        </div>
      
        {/* Middle - Search */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input type="text" placeholder="Start your search" className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" />
          <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />

          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <Bars3Icon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>
    </header>   
  )
}

export default Header