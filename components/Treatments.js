import React from 'react'
import TypingAnimation from './ui/typing-animation'
import NoseTreatment from "./TreatmentSection/NoseTreatment"
import EyeTreatment from './TreatmentSection/EyeTreatment'
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
                <NoseTreatment
                    DiseaseName="Nose"
                    DiseaseDetails="Nose infections can vary in severity and cause, but they generally lead to symptoms affecting the nose, sinuses, or surrounding areas. Here are some common types of nose infections and their symptoms:"
                />
                <EyeTreatment
                    DiseaseName="Eye"
                    DiseaseDetails="Eye infections can be caused by bacteria, viruses, fungi, or allergens, and they often lead to discomfort or vision issues. Here are some common types of eye infections and their symptoms:"
                />
            </div>
        </>
    )
}

export default Treatments
