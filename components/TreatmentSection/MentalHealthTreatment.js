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
                    SymptomsFirst="Excessive worry or fear that is difficult to control"
                    SymptomsSecond="Panic attacks (sudden episodes of intense fear, heart palpitations, shortness of breath)"
                    SymptomsThird="Difficulty concentrating or sleeping"
                    SymptomsFourth="Muscle tension and rapid heart rate"
                    SymptomsFifth="Restlessness, feeling on edge, or irritability"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Bipolar Disorder Symptoms:"
                    SymptomsFirst="Extreme mood swings ranging from manic (euphoric, excessively energetic) episodes to depressive episodes."
                    SymptomsSecond="Increased activity"
                    SymptomsThird="Talkativeness"
                    SymptomsFourth="Risky behavior during manic episodes"
                    SymptomsFifth="Low energy"
                    SymptomsSixth="Sadness"
                    SymptomsSeventh="withdrawal during depressive episodes"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Obsessive-Compulsive Disorder (OCD) Symptoms:"
                    SymptomsFirst="Persistent, unwanted thoughts (obsessions) leading to repetitive behaviors (compulsions)"
                    SymptomsSecond="Compulsions are performed to alleviate the distress caused by obsessions (e.g., excessive hand washing, checking locks repeatedly)"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Post-Traumatic Stress Disorder (PTSD) Symptoms:"
                    SymptomsFirst="Flashbacks"
                    SymptomsSecond="Nightmares"
                    SymptomsThird="intrusive memories related to a traumatic event"
                    SymptomsFourth="Avoidance of reminders of the trauma"
                    SymptomsFifth="Hypervigilance"
                    SymptomsSixth="Irritability"
                    SymptomsSeventh="difficulty sleeping"
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Schizophrenia Symptoms:"
                    SymptomsFirst="Hallucinations (seeing or hearing things that aren't there)."
                    SymptomsSecond="Delusions (false beliefs, often with paranoia)."
                    SymptomsThird="Withdrawal from social activities and decreased emotional expression."
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Eating Disorders Symptoms:"
                    SymptomsFirst="Extreme concern with body weight and shape."
                    SymptomsSecond="Restricting food intake or binge-eating followed by purging."
                    SymptomsThird="Obsession with food, calories, and dieting."
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Attention-Deficit/Hyperactivity Disorder (ADHD) Symptoms:"
                    SymptomsFirst="Difficulty maintaining attention and focus."
                    SymptomsSecond="Hyperactivity and impulsive behavior."
                    SymptomsThird="Difficulty organizing tasks and completing work."
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Personality Disorders Symptoms:"
                    SymptomsFirst="Patterns of unstable relationships, self-image, and emotions."
                    SymptomsSecond="Impulsive behaviors and intense fear of abandonment."
                    SymptomsThird="Difficulty managing emotions and stress."
                />
                <DiseaseTemplate
                    DiseaseSymptoms="Utism Spectrum Disorder (ASD) Symptoms:"
                    SymptomsFirst="Difficulty with social interactions and communication."
                    SymptomsSecond="Repetitive behaviors and restricted interests."
                    SymptomsThird="Sensitivity to sensory stimuli."
                />
            </div>
        </div>
    )
}

export default MentalHealthTreatment
