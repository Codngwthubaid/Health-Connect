import React from 'react'
import SubServices from './ServicesSection/SubServices'
import TypingAnimation from './ui/typing-animation'
import { MarqueeDemo } from './ServicesSection/SubServices'
const Services = () => {
    return (
        <>
            <div>
                <div className="text-[#0096c7] my-6 text-center font-semibold">
                    <TypingAnimation
                        className="text-4xl font-bold"
                        text="Our Services"
                    /></div>
                <p className='text-slate-500 text-lg text-center mx-10'>At HealthConnect, we are committed to revolutionizing healthcare through our AI-Powered Mobile Health Platform. Our comprehensive suite of services is designed to empower users, enhance patient outcomes, and streamline healthcare delivery.</p>
            </div>
            <div><MarqueeDemo/></div>
        </>
    )
}

export default Services
