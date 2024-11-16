import React from 'react'
import TypingAnimation from './ui/typing-animation'
import CardTreatment from "@/components/TreatmentSection/CardTreatment"

const Treatments = () => {
    return (
        <>
            <div>
                <div className="text-[#0096c7] my-6 text-center font-semibold">
                    <TypingAnimation
                        className="text-4xl font-bold"
                        text="Treatments"
                    /></div>
                <p className='text-slate-500 text-lg text-center mx-10'>At HealthConnect,Enhancing Diagnostic Accuracy, Artificial Intelligence (AI) significantly improves diagnostic accuracy by analyzing vast amounts of medical data and identifying patterns that may be overlooked by human clinicians. For instance, AI algorithms can interpret medical imaging</p>
            </div>
            <div className='my-24 flex items-center justify-around'>
                <CardTreatment DiseaseName="Nose" DiseaseDetails=""/>
                <CardTreatment/>
            </div>
        </>
    )
}

export default Treatments
