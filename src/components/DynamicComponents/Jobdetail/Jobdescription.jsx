import React from 'react'

const Jobdescription = ({heading, subheading}) => {
  return (
    <>
      <div className="">
        <h5 className='pt-4 pb[6px] text-[#C8FF00] lg:text-[18px] text-[16px] font-bold'>{heading}</h5>
        <p className=' text-[#FBFBFF] lg:text-[18px] text-[16px] font-normal lg:w-[713px] w-full'>{subheading}</p>
      </div>
    </>
  )
}

export default Jobdescription
