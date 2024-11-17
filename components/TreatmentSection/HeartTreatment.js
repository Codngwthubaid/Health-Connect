import React from 'react'
import Heart from "@/public/Heart.png"
import Image from 'next/image'
import DiseaseTemplate from './DiseaseTemplate'

const EyeTreatement = (props) => {
    return (
        <div href="#" className="flex items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
            <Image
                className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={Heart}
                alt="Heart"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{props.DiseaseName}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.DiseaseDetails}
                </p>
                <DiseaseTemplate
                    DiseaseSymptoms="Coronary Artery Disease (CAD) Symptoms:"
                    SymptomsFirst="Chest pain or discomfort (angina)"
                    SymptomsSecond="Nausea or sweating (especially with exertion)"
                    SymptomsThird="Fatigue"
                    SymptomsFourth="Dizziness or lightheadedness"
                    SymptomsFifth="Shortness of breath"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Heart Attack (Myocardial Infarction) Symptoms:"
                    SymptomsFirst="Severe chest pain or pressure (may feel like a squeezing sensation)"
                    SymptomsSecond="Pain radiating to the arm, jaw, neck, back, or stomach"
                    SymptomsThird="Dizziness or lightheadedness"
                    SymptomsFourth="Fatigue"
                    SymptomsFifth="Shortness of breath"
                    SymptomsSixth="Cold sweats"
                    SymptomsSeventh="Nausea or vomiting"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Heart Failure (Congestive Heart Failure) Symptoms:"
                    SymptomsFirst="Shortness of breath, especially with exertion or when lying down"
                    SymptomsSecond="Reduced ability to exercise"
                    SymptomsThird="Persistent cough or wheezing (with frothy, pink-tinged mucus)"
                    SymptomsFourth="Rapid or irregular heartbeat"
                    SymptomsFifth="Fatigue and weakness"
                    SymptomsSixth="Swelling in the legs, ankles, or feet (edema)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Arrhythmia (Abnormal Heart Rhythm) Symptoms:"
                    SymptomsFirst="Palpitations (feeling like the heart is racing or fluttering)"
                    SymptomsSecond="Shortness of breath"
                    SymptomsThird="Chest discomfort or pain"
                    SymptomsFourth="Fainting or near-fainting"
                    SymptomsFifth="Dizziness or lightheadedness"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Valvular Heart Disease Symptoms:"
                    SymptomsFirst="Shortness of breath, especially during physical activity or when lying down"
                    SymptomsSecond="Fatigue"
                    SymptomsThird="Swelling in the ankles, legs, or abdomen"
                    SymptomsFourth="Chest pain or palpitations"
                    SymptomsFifth="Dizziness or fainting"
                    SymptomsSixth="Heart murmur (heard by a doctor during a physical exam)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Hypertension (High Blood Pressure) Symptoms:"
                    SymptomsFirst="Often no symptoms until it becomes severe"
                    SymptomsSecond="Headaches"
                    SymptomsThird="Nosebleeds"
                    SymptomsFourth="Shortness of breath"
                    SymptomsFifth="Dizziness or lightheadedness"
                    SymptomsSixth="Chest pain or irregular heartbeat (if hypertension leads to heart failure or other complications)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Pericarditis Symptoms:"
                    SymptomsFirst="Sharp, stabbing chest pain (often worsens with deep breaths or lying down)"
                    SymptomsSecond="Swelling in the abdomen or legs"
                    SymptomsThird="Fatigue"
                    SymptomsFourth="Fever"
                    SymptomsFifth="Shortness of breath"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Aortic Aneurysm Symptoms:"
                    SymptomsFirst="Sudden, severe chest or back pain (especially with a ruptured aneurysm)"
                    SymptomsSecond="Shortness of breath"
                    SymptomsThird="Difficulty swallowing (if the aneurysm is near the chest)"
                    SymptomsFourth="A pulse near the belly button (in abdominal aneurysms)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Cardiomyopathy Symptoms:"
                    SymptomsFirst="Shortness of breath"
                    SymptomsSecond="Chest pain (in some cases)"
                    SymptomsThird="Irregular heartbeats or palpitations"
                    SymptomsFourth="Swelling in the legs, ankles, or feet"
                    SymptomsFifth="Fatigue"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Angina Pectoris Symptoms:"
                    SymptomsFirst="Chest pain or discomfort, usually triggered by physical exertion or stress"
                    SymptomsSecond="Dizziness"
                    SymptomsThird="Nausea or sweating"
                    SymptomsFourth="Shortness of breath"
                    SymptomsFifth="Pain may radiate to the arms, neck, jaw, or back"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Endocarditis Symptoms:"
                    SymptomsFirst="Fever"
                    SymptomsSecond="Night sweats"
                    SymptomsThird="Fatigue"
                    SymptomsFourth="Shortness of breath"
                    SymptomsFifth="Heart murmur"
                    SymptomsSixth="Swelling in the legs or abdomen"
                    SymptomsSeventh="Unexplained weight loss"
                />
            </div>
        </div>
    )
}

export default EyeTreatement
