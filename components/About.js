import React from 'react'
import LogoHC from "@/public/LogoHC.jpg"
import Image from 'next/image'
import BoxReveal from "@/components/ui/box-reveal";

const About = () => {
    return (
        <>
            <div className='flex justify-around items-center'>
                <div className='w-[45vw] mx-10 text-start text-slate-500'>
                    <h2 className="text-[#0096c7] my-6 text-center font-semibold">
                        <BoxReveal boxColor={"#0096c7"} duration={0.5}>
                            <p className="font-semibold">
                                About Our AI-Powered Mobile Health Platform
                                <span className="text-[#0096c7]">.</span>
                            </p>
                        </BoxReveal>
                    </h2>
                    <div className='text-lg'>
                        <p>Our AI-powered mobile health platform is designed to help healthcare providers like Ravi efficiently manage patient care across multiple locations. By streamlining the tracking of chronic conditions, our solution allows for easy input and retrieval of vital patient data. With features such as remote monitoring, healthcare providers can keep a close eye on patients' health, regardless of their location.
                        </p>
                        <p>The platform also utilizes predictive analytics to forecast potential health deteriorations, ensuring timely interventions and better patient outcomes. Automated alerts notify providers of necessary follow-ups, enabling swift action. Our mission is to transform healthcare delivery by enhancing efficiency and improving the quality of care through innovative AI technology.</p>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-[45vw] rounded-2xl"
                        src={LogoHC}
                        alt="Health-Connect-Logo"
                    />
                </div>
            </div>
        </>
    )
}

export default About
