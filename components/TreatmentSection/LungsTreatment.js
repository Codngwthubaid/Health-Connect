import React from 'react'
import Image from 'next/image'
import DiseaseTemplate from './DiseaseTemplate'
import Lungs from "@/public/Lungs.jpg"
import Link from 'next/link'

const LungsTreatment = (props) => {
    return (
        <div href="#" className="flex sm:flex-row flex-col items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Lungs}
                alt="Lungs"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Pneumonia Symptoms:"
                    SymptomsFirst="High fever"
                    SymptomsSecond="Cough (with or without mucus)"
                    SymptomsThird="Shortness of breath"
                    SymptomsFourth="Chest pain, especially when breathing or coughing"
                    SymptomsFifth="Fatigue and weakness"
                    SymptomsSixth="Chills and sweating"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Bronchitis Symptoms:"
                    SymptomsFirst="Persistent cough (often with mucus)"
                    SymptomsSecond="Sore throat"
                    SymptomsThird="Fatigue"
                    SymptomsFourth="Muscle tension and rapid heart rate"
                    SymptomsFifth="Shortness of breath"
                    SymptomsSixth="Chest discomfort"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Tuberculosis (TB) Symptoms:"
                    SymptomsFirst="Persistent cough lasting more than 3 weeks (sometimes with blood)"
                    SymptomsSecond="Chest pain"
                    SymptomsThird="Fatigue and weakness"
                    SymptomsFourth="Night sweats"
                    SymptomsFifth="Unexplained weight loss"
                    SymptomsSixth="Fever and chills"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Obsessive-Compulsive Disorder (OCD) Symptoms:"
                    SymptomsFirst="Persistent, unwanted thoughts (obsessions) leading to repetitive behaviors (compulsions)"
                    SymptomsSecond="Compulsions are performed to alleviate the distress caused by obsessions (e.g., excessive hand washing, checking locks repeatedly)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Influenza (Flu) Symptoms:"
                    SymptomsFirst="Fever and chills"
                    SymptomsSecond="Headache"
                    SymptomsThird="Dry or productive cough"
                    SymptomsFourth="Fatigue"
                    SymptomsFifth="Muscle aches"
                    SymptomsSixth="Sore throat"
                />
                <button className='my-3 bg-orange-400 hover:bg-orange-500'>
                    <Link href="#">View More</Link>
                </button>
            </div>
        </div>
    )
}

export default LungsTreatment
