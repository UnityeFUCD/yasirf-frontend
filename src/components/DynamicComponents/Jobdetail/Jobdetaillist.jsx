import React from 'react'

const Jobdetaillist = ({listitem}) => {
  return (
    <div className='flex gap-x-[8px] items-center'>
    <div className="size-[5.5px] rounded-full bg-primaryColor flex-shrink-0"></div>
     <p className='lg:text-[18px] text-[16px] text-[#FBFBFF] font-normal flex-shrink-0 lg:w-full w-full'>{listitem}</p>
    </div>
  )
}

export default Jobdetaillist
