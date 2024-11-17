import React from 'react'
import TypingAnimation from './ui/typing-animation'
import NoseTreatment from "./TreatmentSection/NoseTreatment"
import EyeTreatment from './TreatmentSection/EyeTreatment'
import HeartTreatment from "./TreatmentSection/HeartTreatment"
import KidneyTreatment from './TreatmentSection/KidneyTreatment'
import MentalHealthTreatment from './TreatmentSection/MentalHealthTreatment'

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
            <div className='my-24 flex flex-wrap gap-y-5 items-start justify-around'>
                <NoseTreatment
                    DiseaseName="Nose"
                    DiseaseDetails="Nose infections can vary in severity and cause, but they generally lead to symptoms affecting the nose, sinuses, or surrounding areas. Here are some common types of nose infections and their symptoms:"
                />
                <EyeTreatment
                    DiseaseName="Eye"
                    DiseaseDetails="Eye infections can be caused by bacteria, viruses, fungi, or allergens, and they often lead to discomfort or vision issues. Here are some common types of eye infections and their symptoms:"
                />
                <HeartTreatment
                    DiseaseName="Heart"
                    DiseaseDetails="Heart diseases encompass a variety of conditions affecting the heart, ranging from structural problems to electrical disturbances. Here are some common heart diseases and their associated symptoms:"
                />
                <KidneyTreatment
                    DiseaseName="Kidney"
                    DiseaseDetails="Kidney infections, also known as pyelonephritis, are serious infections that typically start in the bladder or urethra and travel up to one or both kidneys. Here are some notable diseases and conditions associated with or caused by kidney infections"
                />
                <MentalHealthTreatment
                    DiseaseName="Mental Gealth"
                    DiseaseDetails="Mental health illnesses vary widely in their symptoms and impact on daily life. Here an overview of some common mental health disorders and their symptoms:" />
            </div>
        </>
    )
}

export default Treatments
