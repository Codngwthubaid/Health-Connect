import React from 'react'
import Image from 'next/image'
import Nose from "@/public/Nose.png"
import DiseaseTemplate from './DiseaseTemplate'
import { SquareArrowOutUpRight } from 'lucide-react'
import Link from 'next/link'

const pages = (props) => {
    return (
        <div href="#" className="flex sm:flex-row flex-col items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Nose}
                alt="Nose"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Inusitis (Sinus Infection) Symptoms:"
                    SymptomsFirst="Nasal congestion or blockage"
                    SymptomsSecond="Thick, colored nasal discharge (yellow or green)"
                    SymptomsThird="Facial pain or pressure (especially around the cheeks, forehead, or eyes)"
                    SymptomsFourth="Headache"
                    SymptomsFifth="Reduced sense of smell or taste"
                    SymptomsSixth="Cough, particularly at night"
                    SymptomsSeventh="Sore throat"
                    SymptomsEight="Fatigue"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Rhinitis (Nasal Inflammation) Symptoms:"
                    SymptomsFirst="Runny nose or nasal discharge"
                    SymptomsSecond="Sneezing"
                    SymptomsThird="Post-nasal drip (mucus dripping down the throat)"
                    SymptomsFourth="Itchy nose, throat, or eyes"
                    SymptomsFifth="Nasal congestion"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Nasal Vestibulitis Symptoms:"
                    SymptomsFirst="Redness or swelling inside the nostrils"
                    SymptomsSecond="Painful, swollen areas around the nose"
                    SymptomsThird="Crusty sores or scabs inside the nostrils"
                    SymptomsFourth="Often caused by bacterial infections (e.g., Staphylococcus aureus)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Nasal Polyps Infection Symptoms:"
                    SymptomsFirst="Snoring"
                    SymptomsSecond="Post-nasal drip"
                    SymptomsThird="Chronic nasal congestion"
                    SymptomsFourth="Decreased sense of smell"
                    SymptomsFifth="Frequent sinus infections"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Nasal Abscess (Boil or Furuncle) Symptoms:"
                    SymptomsFirst="Painful lump inside or around the nostrils"
                    SymptomsSecond="Redness and swelling"
                    SymptomsThird="Tenderness around the affected area"
                    SymptomsFourth="Pus or drainage from the lump (if it ruptures)"
                />
               <button className='my-3 bg-orange-400 hover:bg-orange-500'>
                    <Link href="https://github.com/Rhythm2125/Health-Connect-App"><SquareArrowOutUpRight /></Link>
                </button>
            </div>
        </div>

    )
}

export default pages
