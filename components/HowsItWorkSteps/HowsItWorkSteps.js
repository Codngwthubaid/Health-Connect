import React from 'react'

const HowsItWorkSteps = (props) => {
    return (
        <>
            <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 h-10 px-5 rounded w-fit bg-[#0096c7] inline-flex items-center justify-center text-white relative z-10">{props.StepNumber}</div>
                <div className="flex-grow pl-4">
                    <h2 className="font-semibold title-font text-xl text-[#0096c7] mb-1 tracking-wider">{props.Head}</h2>
                    <p className="leading-relaxed">{props.Desc}</p>
                </div>
            </div>
        </>
    )
}

export default HowsItWorkSteps
