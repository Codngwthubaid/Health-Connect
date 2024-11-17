import React from 'react'
import Image from 'next/image'
import Kidney from "@/public/Kidney.jpg"
import DiseaseTemplate from './DiseaseTemplate'
import Link from 'next/link'
import { SquareArrowOutUpRight } from 'lucide-react'

const KidneyTreatment = (props) => {
    return (
        <div href="#" className="flex sm:flex-row flex-col items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Kidney}
                alt="Kidney"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Acute Pyelonephritis Symptoms:"
                    SymptomsFirst="Fever"
                    SymptomsSecond="Chills"
                    SymptomsThird="Back or flank pain"
                    SymptomsFourth="Nausea"
                    SymptomsFifth="Vomiting"
                    SymptomsSixth="Frequent and painful urination"
                    SymptomsSeventh="Cloudy or foul-smelling urine"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Chronic Pyelonephritis Symptoms:"
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
                  <button className='my-3 bg-orange-400 hover:bg-orange-500'>
                    <Link href="https://github.com/Rhythm2125/Health-Connect-App"><SquareArrowOutUpRight /></Link>
                </button>
            </div>
        </div>
    )
}

export default KidneyTreatment
