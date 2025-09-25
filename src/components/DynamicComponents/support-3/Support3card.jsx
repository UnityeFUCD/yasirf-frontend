import React from 'react'

const Support3card = ({Icon,heading}) => {
  return (
    <>
      <div className="py-6 px-5 bg-[linear-gradient(180deg,#1A1D30_0%,rgba(26,29,48,0.72)_50%,rgba(26,29,48,0.51)_78%,rgba(26,29,48,0.00)_100%)] cursor-pointer w-[208px] h-[144px] outline outline-1 outline-transparent hover:outline-primaryColor duration-300 ease-in-out">
       <Icon/>
       <h2 className="text-[20px] font-medium uppercase text-[#FBFBFF] leading-[18px] pt-6">
          {heading}
        </h2>
      </div>
    </>
  )
}

export default Support3card
