import React from 'react'

const Services = () => {
    return (
        <>
            <div>
                <h2 className="text-[#0096c7] my-6 text-center font-semibold">Our Services</h2>
                <p>At [Your Company Name], we are committed to revolutionizing healthcare through our AI-Powered Mobile Health Platform. Our comprehensive suite of services is designed to empower users, enhance patient outcomes, and streamline healthcare delivery.</p>
            </div>
            <div className='border my-12'>
                <div className='flex  flex-col justify-center items-center w-[90vw] sm:w-[45vw] lg:w-[30vw] p-5 rounded-2xl border border-[#0096c7]'>
                    <div className='text-2xl text-[#0096c7] font-semibold'>Personalized Health Monitoring</div>
                    <p className='text-slate-500'>Our platform utilizes advanced AI algorithms to provide real-time health monitoring tailored to individual needs. Users can track vital signs, manage chronic conditions, and receive personalized insights to improve their overall well-being.</p>
                </div>
            </div>
        </>
    )
}

export default Services
