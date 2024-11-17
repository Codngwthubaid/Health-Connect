import React from 'react'
import HowsItWorkSteps from './HowsItWorkSteps/HowsItWorkSteps'
import Image from 'next/image'
import HowsItWorked from "@/public/HowsItWorked.jpg"
import TypingAnimation from './ui/typing-animation'

const HowsItWork = () => {
    return (
        <>
            <section className="text-slate-500  body-font">
                <div>
                    <div className="text-[#0096c7] my-6 text-center font-semibold">
                        <TypingAnimation
                            className="text-4xl font-bold"
                            text="How Health Connect Works"
                        />
                    </div>
                    <p className='text-slate-500 text-lg text-center mx-10'>At Health Connect, Artificial Intelligence (AI) operates in medical imaging through advanced algorithms that analyze and interpret vast amounts of imaging data. These algorithms leverage machine learning and deep learning techniques, allowing them to learn from extensive datasets containing various medical images, such as X-rays, MRIs, and CT scans. By training on these datasets, AI can identify complex patterns and anomalies that might be missed by human clinicians, thereby enhancing diagnostic accuracy</p>
                </div>
                <div className="container px-5 py-24 mx-auto flex ">
                    <div className="flex w-full lg:flex-row flex-col-reverse gap-5">
                        <div className="lg:w-2/5 md:pr-10 md:py-6">
                            <HowsItWorkSteps
                                StepNumber="Step 1"
                                Head="Easy Registration"
                                Desc="Sign up for a free account to access personalized features. Just provide basic information to get started."
                            />
                            <HowsItWorkSteps
                                StepNumber="Step 2"
                                Head="Explore Resources"
                                Desc="Browse our extensive library of articles, guides, and videos on various health topics. Use the search function to find specific information quickly."
                            />
                            <HowsItWorkSteps
                                StepNumber="Step 3"
                                Head="Connect with Experts"
                                Desc="Access expert advice through our webinars, Q&A sessions, and articles written by healthcare professionals. Stay informed with the latest health trends and research."
                            />
                            <HowsItWorkSteps
                                StepNumber="Step 4"
                                Head="Join the Community"
                                Desc="Engage with other users in our discussion forums. Share your experiences, ask questions, and provide support to others on their health journeys."
                            />
                            <HowsItWorkSteps
                                StepNumber="Step 5"
                                Head="Find Local Providers"
                                Desc="Use our directory to locate healthcare providers, clinics, and specialists in your area. Read reviews and get contact information to make appointments easily."
                            />
                            <HowsItWorkSteps
                                StepNumber="Step 6"
                                Head="Personalized Recommendations"
                                Desc="Based on your interests and health goals, receive tailored suggestions for articles, tips, and resources that best suit your needs."
                            />
                        </div>
                        <Image
                            src={HowsItWorked}
                            alt="HowsItsWorked"
                            className="object-cover object-center rounded-xl w-10/12 lg:w-1/2 mx-auto"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowsItWork
