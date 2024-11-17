import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const DiseaseTemplate = (props) => {
    return (
        <>
            <div>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="hover:no-underline">
                            <div className='font-medium text-base'>{props.DiseaseSymptoms}
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className='text-slate-500 text-base m-3'>
                                <li>{props.SymptomsFirst}</li>
                                <li>{props.SymptomsSecond}</li>
                                <li>{props.SymptomsThird}</li>
                                <li>{props.SymptomsFourth}</li>
                                <li>{props.SymptomsFifth}</li>
                                <li>{props.SymptomsSixth}</li>
                                <li>{props.SymptomsSeventh}</li>
                                <li>{props.SymptomsEight}</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    )
}

export default DiseaseTemplate
