import React from 'react'
import Eye from "@/public/Eye.png"
import Image from 'next/image'
import DiseaseTemplate from './DiseaseTemplate'

const EyeTreatement = (props) => {
    return (
        <div href="#" className="flex sm:flex-row flex-col items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Eye}
                alt="Eye"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Conjunctivitis (Pink Eye) Symptoms:"
                    SymptomsFirst="Redness in the white part of the eye"
                    SymptomsSecond="Crusty eyelids or eyelashes, especially in the morning (if bacterial)"
                    SymptomsThird="Swollen eyelids"
                    SymptomsFourth="Sensitivity to light"
                    SymptomsFifth="Discharge (watery, yellow, or green)"
                    SymptomsSixth="Itching or burning sensation"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Blepharitis Symptoms:"
                    SymptomsFirst="Red, swollen, and irritated eyelids"
                    SymptomsSecond="Excessive tearing or dry eyes"
                    SymptomsThird="Itchy or burning eyes"
                    SymptomsFourth="Gritty feeling in the eyes"
                    SymptomsFifth="Flaky or greasy scales on eyelashes"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Keratitis Symptoms:"
                    SymptomsFirst="Pain or tenderness in the eye"
                    SymptomsSecond="A feeling of something in the eye (foreign body sensation)"
                    SymptomsThird="Watery eyes"
                    SymptomsFourth="Sensitivity to light (photophobia)"
                    SymptomsFifth="Blurry vision"
                    SymptomsSixth="Redness"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Stye (Hordeolum) Symptoms:"
                    SymptomsFirst="Red, swollen bump on the eyelid (usually near the lash line)"
                    SymptomsSecond="Possible pus-filled center"
                    SymptomsThird="Crustiness around the eye"
                    SymptomsFourth="Pain or tenderness"
                    SymptomsFifth="Swollen eyelid"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Uveitis Symptoms:"
                    SymptomsFirst="Eye redness"
                    SymptomsSecond="Floaters (dark spots or lines in vision)"
                    SymptomsThird="Sensitivity to light"
                    SymptomsFourth="Blurred vision"
                    SymptomsFifth="Pain or discomfort in the eye"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Endophthalmitis Symptoms:"
                    SymptomsFirst="Severe eye pain"
                    SymptomsSecond="Redness"
                    SymptomsThird="Vision loss or blurred vision"
                    SymptomsFourth="Swelling around the eye"
                    SymptomsFifth="Pus or discharge from the eye"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Chlamydia Eye Infection (Trachoma) Symptoms:"
                    SymptomsFirst="Redness and irritation of the eye"
                    SymptomsSecond="Blurry vision"
                    SymptomsThird="Scarring of the cornea (if untreated)"
                    SymptomsFourth="Swollen eyelids"
                    SymptomsFifth="Eye discharge"
                />
            </div>
        </div>
    )
}

export default EyeTreatement
