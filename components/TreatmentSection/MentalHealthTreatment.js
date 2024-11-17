import React from 'react'
import DiseaseTemplate from './DiseaseTemplate'
import Image from 'next/image'
import MentalHealth from "@/public/MentalHealth.png"

const MentalHealthTreatment = (props) => {
    return (
        <div href="#" className="flex items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={MentalHealth}
                alt="MentalHealth"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Depression Symptoms:"
                    SymptomsFirst="Persistent feelings of sadness"
                    SymptomsSecond="Hopelessness"
                    SymptomsThird="Emptiness"
                    SymptomsFourth="Loss of interest in activities once enjoyed"
                    SymptomsFifth="Changes in appetite and sleep patterns"
                    SymptomsSixth="Fatigue or lack of energy"
                    SymptomsSeventh="Difficulty concentrating or making decisions"
                    SymptomsEight="Thoughts of self-harm or suicide"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Anxiety Disorders Symptoms:"
                    SymptomsFirst="Often milder than acute cases but can include pain"
                    SymptomsSecond="Fever"
                    SymptomsThird="A general feeling of being unwell"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Kidney Abscess Symptoms:"
                    SymptomsFirst="High fever"
                    SymptomsSecond="Abdominal pain,"
                    SymptomsThird="Night sweats"
                    SymptomsFourth="Severe pain in the back or side"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Emphysematous Pyelonephritis (EPN) Symptoms:"
                    SymptomsFirst="Severe abdominal pain "
                    SymptomsSecond="Fever"
                    SymptomsThird="Confusion"
                    SymptomsFourth="Rapid deterioration"
                />
                <DiseaseTemplate
                    DiseaseSymptoms=" Renal Tuberculosis Symptoms:"
                    SymptomsFirst="Blood in the urinefever"
                    SymptomsSecond="Chronic back pain"
                    SymptomsThird="Fever"
                    SymptomsFourth="weight loss"
                />
            </div>
        </div>
    )
}

export default MentalHealthTreatment
