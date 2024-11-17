import React from 'react'
import AboutImg from "@/public/AboutImg.jpg"
import Image from 'next/image'
import BoxReveal from "@/components/ui/box-reveal";

const About = () => {
    return (
        <>
            <div className='flex sm:flex-row flex-col-reverse justify-around items-center'>
                <div className='w-10/12 sm:w-[45vw] mx-10 text-start text-slate-500'>
                    <h2 className="text-[#0096c7] my-6 text-center text-4xl font-semibold">
                        <BoxReveal boxColor={"#0096c7"} duration={0.5}>
                            <p className="font-semibold">
                                About Our AI-Powered Mobile Health Platform
                                <span className="text-[#0096c7]">.</span>
                            </p>
                        </BoxReveal>
                    </h2>
                    <div className='text-lg'>
                        <p>Welcome to Health Connect, your trusted online platform dedicated to enhancing your health and well-being. Our mission is to provide comprehensive medical information, resources, and support to empower individuals to take charge of their health.
                        </p>
                        <p>At Health Connect, we understand the importance of accessible and reliable health information. Our website features a wide range of topics, including disease prevention, treatment options, wellness tips, and expert advice from healthcare professionals. We strive to create a community where users can connect, share experiences, and find the guidance they need to make informed health decisions.
                        </p>

                        <p>Whether you&apos;re seeking information on a specific condition, looking for healthy lifestyle tips, or wanting to connect with healthcare providers, Health Connect is here to support you every step of the way. Together, let&apos;s prioritize health and well-being for a brighter future.
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        className="w-10/12 sm:w-[45vw] mx-auto rounded-2xl"
                        src={AboutImg}
                        alt="AboutImg-Logo"
                    />
                </div>
            </div>
        </>
    )
}

export default About
