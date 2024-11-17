"use client"
import LogoHC from "@/public/LogoHC.jpg"
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { SignedIn, SignedOut, SignIn,UserButton } from "@clerk/nextjs"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(false)
    }

    return (
        <header className="body-font container mx-auto text-slate-500">
            <nav className="flex items-center text-base justify-center">
                <div className="container mx-auto flex justify-between p-5 items-center">
                    <Link href="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
                        <div>
                            <Image
                                className="w-20 rounded-2xl"
                                src={LogoHC}
                                alt="Health-Connect-Logo"
                            />
                        </div>
                        <span className="ml-3 text-2xl font-bold text-[#0077b6]">HealthConnect</span>
                    </Link>
                    <ul className="hidden lg:flex items-center text-base justify-center">
                        <SignedIn>
                            <li className="mr-5 hover"><Link href="#">Home</Link></li>
                            <li className="mr-5 hover"><Link href="#">About</Link></li>
                            <li className="mr-5 hover"><Link href="#">Services</Link></li>
                            <li className="mr-5 hover"><Link href="#">Contact Us</Link></li>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <div className='flex gap-x-3'>
                                <div className="inline-flex text-white items-center bg-[#0077b6] border-0 py-1 px-3 focus:outline-none hover:bg-[#0096c7] rounded text-base mt-4 md:mt-0">
                                    <Link href="/pages/SignUp">SignUp</Link>
                                </div>
                            </div>
                        </SignedOut>
                    </ul>
                    <div className='lg:hidden'>
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20" fill="">
                                    <rect width="30" height="3" fill="#FFFFFF" />
                                    <rect y="8.5" width="30" height="3" fill="#FFFFFF" />
                                    <rect y="17" width="30" height="3" fill="#FFFFFF" />
                                </svg>
                            </SheetTrigger>
                            <SheetContent className="">
                                <SheetHeader>
                                    <SheetDescription>
                                        <ul className="flex flex-col gap-y-5 items-start text-base justify-between mt-10">
                                            <li onClick={toggleMenu} className="mr-5 text-slate-500 text-lg hover"><Link href="#">Home</Link></li>
                                            <li className="mr-5 hover"><Link href="#">About</Link></li>
                                            <li className="mr-5 hover"><Link href="#">Services</Link></li>
                                            <li className="mr-5 hover"><Link href="#">Contact Us</Link></li>
                                            <div className='flex gap-x-3'>
                                                <div onClick={toggleMenu} className="inline-flex items-center bg-[#0077b6] border-0 py-1 px-3 focus:outline-none hover:bg-[#0096c7] rounded mt-4 md:mt-0 text-white text-lg hover">
                                                    <Link href="/pages/SignUp">SignUp</Link>
                                                </div>
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
