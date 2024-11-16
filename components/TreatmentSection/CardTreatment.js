import React from 'react'
import Image from 'next/image'
import Nose from "@/public/Nose.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const pages = () => {
    return (
        <>
            <div href="#" className="flex items-start bg-white border border-gray-200 rounded-xl shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 h-fit">
                <Image
                    className="object-contain w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                    src={Nose}
                    alt="Nose"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#0096c7] dark:text-white">{DiseaseName}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{DiseaseDetails}
                    </p>
                    <div>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="hover:no-underline">Read More</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pages
