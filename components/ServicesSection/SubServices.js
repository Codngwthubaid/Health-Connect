import React from 'react'

const SubServices = (props) => {
  return (
    <div className='flex h-60 gap-y-1 bg-[#caf0f8] flex-col justify-start items-start w-[90vw] sm:w-[45vw] lg:w-[30vw] p-5 rounded-2xl '>
      <div className='text-2xl text-[#0096c7] font-semibold'>{props.title}</div>
      <p className='text-slate-500'>{props.desc}</p>
    </div>
  )
}

export default SubServices
