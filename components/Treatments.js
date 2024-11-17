import React from 'react'
import TypingAnimation from './ui/typing-animation'
import NoseTreatment from "./TreatmentSection/NoseTreatment"
import EyeTreatment from './TreatmentSection/EyeTreatment'
import HeartTreatment from "./TreatmentSection/HeartTreatment"
import KidneyTreatment from './TreatmentSection/KidneyTreatment'
import MentalHealthTreatment from './TreatmentSection/MentalHealthTreatment'
import LungsTreatment from './TreatmentSection/LungsTreatment'

const Treatments = () => {
    return (
        <>
            <div>
                <div className="text-[#0096c7] my-6 text-center font-semibold">
                    <TypingAnimation
                        className="text-4xl font-bold"
                        text="Treatments"
                    /></div>
                <p className='text-slate-500 text-lg text-center mx-10'>At HealthConnect,Artificial Intelligence (AI) is transforming treatment methodologies in healthcare by enabling personalized medicine and enhancing therapeutic decision-making. By analyzing extensive patient data, including genetic profiles, medical histories, and lifestyle factors, AI algorithms can recommend tailored treatment plans that align with individual patient needs. This personalized approach not only improves treatment efficacy but also minimizes adverse effects, as therapies are better suited to the patient&apos;s unique characteristics.
                </p>
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
                <LungsTreatment
                    DiseaseName="Lungs"
                    DiseaseDetails="Lung health is crucial for overall well-being, as the lungs are vital organs responsible for breathing and oxygen exchange. Various lung diseases can significantly impact respiratory function and daily life. Here an overview of some common lung disorders and their symptoms:"
                />
                  <KidneyTreatment
                    DiseaseName="Kidney"
                    DiseaseDetails="Kidney infections, also known as pyelonephritis, are serious infections that typically start in the bladder or urethra and travel up to one or both kidneys. Here are some notable diseases and conditions associated with or caused by kidney infections"
                />
                <MentalHealthTreatment
                    DiseaseName="Mental Health"
                    DiseaseDetails="Mental health illnesses vary widely in their symptoms and impact on daily life. Here an overview of some common mental health disorders and their symptoms:"
                />
            </div>
        </>
    )
}

export default Treatments
