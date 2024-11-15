"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <nav className="flex items-center text-base justify-center">
                <div className="container mx-auto flex justify-between p-5 items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-2xl font-bold">&lt;NU&#47;<span className='text-red-500'>Tourism</span>&gt;</span>
                    </Link>
                    <ul className="hidden lg:flex items-center text-base justify-center">
                        <li className="mr-5 hover:text-white"><Link href="/">Home</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/About">About</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/States">StatesToVisit</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/Places">PlacesToVisit</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/Blog">Blog</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/ChatBot">ChatBot</Link></li>
                        <li className="mr-5 hover:text-white"><Link href="/pages/Contact">ContactUs</Link></li>
                        <div className='flex gap-x-3'>
                            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                <Link href="/pages/SignUp">SignUp</Link>
                            </button>
                            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                                <Link href="/pages/Login">Login</Link>
                            </button>
                        </div>
                    </ul>
                    <div className='lg:hidden'>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="">
                                    <rect width="30" height="3" fill="#ef4444" />
                                    <rect y="8.5" width="30" height="3" fill="#ef4444" />
                                    <rect y="17" width="30" height="3" fill="#ef4444" />
                                </svg>
                            </SheetTrigger>
                            <SheetContent className="bg-gray-900">
                                <SheetHeader>
                                    <SheetDescription>
                                        <ul className="flex flex-col gap-y-5 items-start text-base justify-between mt-10">
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/">Home</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/About">About</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/States">StatesToVisit</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/Places">PlacesToVisit</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/Blog">Blog</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/ChatBot">ChatBot</Link></li>
                                            <li onClick={toggleMenu} className="mr-5 text-gray-400 text-lg hover:text-white"><Link href="/pages/Contact">Contact Us</Link></li>
                                            <div className='flex gap-x-3'>
                                                <button onClick={toggleMenu} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0 text-gray-400 text-lg hover:text-white">
                                                    <Link href="/pages/SignUp">SignUp</Link>
                                                </button>
                                                <button onClick={toggleMenu} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0 text-gray-400 text-lg hover:text-white">
                                                    <Link href="/pages/Login">Login</Link>
                                                </button>
                                            </div>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
