import React from 'react'

const Passioncard = ({ title, subtitle,Icon}) => {
  return (
    <>
      <div className="w-[267px] h-[276px] bg-[rgba(251,251,255,0.08)] p-6 rounded-[8px] group hover:border-b hover:border-primaryColor cursor-pointer">
      {Icon && <Icon  className="stroke-white group-hover:stroke-primaryColor"/>}
        <h3 className='pt-[24px] pb-[8px] text-[20px] text-[#FBFBFF] uppercase font-bold'>{title}</h3>
        <p className='text-[18px] text-[#FBFBFF] font-normal leading-[24px]'>{subtitle}</p>
      </div>
    </>
  )
}

export default Passioncard
