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
                <p className='text-slate-500 text-lg mx-10'>At HealthConnect, we are committed to revolutionizing healthcare through our AI-Powered Mobile Health Platform. Our comprehensive suite of services is designed to empower users, enhance patient outcomes, and streamline healthcare delivery.</p>
            </div>
            {/* <div className='flex gap-y-7 justify-around items-center my-12 flex-wrap'>
                <SubServices
                    title="Personalized Health Monitoring"
                    desc="Our platform utilizes advanced AI algorithms to provide real-time health monitoring tailored to individual needs. Users can track vital signs, manage chronic conditions, and receive personalized insights to improve their overall well-being." />
                <SubServices
                    title="AI-Driven Health Assessments"
                    desc="Leverage the power of artificial intelligence to conduct thorough health assessments. Our platform analyzes user data to identify potential health risks and offers actionable recommendations, enabling proactive health management." />
                <SubServices
                    title="Telemedicine Integration"
                    desc="Connect with healthcare professionals seamlessly through our integrated telemedicine services. Users can schedule virtual consultations, receive expert advice, and access medical prescriptions—all from the convenience of their mobile devices." />
                <SubServices
                    title="Medication Management"
                    desc="Stay on top of your medication regimen with our AI-powered reminders and tracking features. Our platform helps users manage prescriptions, schedules, and potential drug interactions, ensuring adherence and safety." />
                <SubServices
                    title="Health Education and Resources"
                    desc="Access a wealth of educational materials, articles, and videos tailored to your health interests. Our platform empowers users with knowledge, promoting informed decision-making and healthier lifestyle choices." />
                <SubServices
                    title="Data Analytics and Insights"
                    desc="Utilize our robust analytics tools to gain insights into health trends and patterns. Our platform aggregates user data to provide valuable feedback, helping both users and healthcare providers make informed decisions." />
            </div> */}
            <div><MarqueeDemo/></div>
        </>
    )
}

export default Services
