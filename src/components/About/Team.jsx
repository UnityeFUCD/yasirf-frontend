import Container from '@/pages/Shared/Container'
import React from 'react'
import Teamcard from '../DynamicComponents/about/Teamcard'

const Team = () => {
  return (
    <section className=''>
      <Container className='bg-[#05091D] lg:pb-[182px] lg:px-[150px] px-[54px] lg:pt-0 py-[96px]'>
      <h2 className="lg:text-[56px] text-[32px] font-normal text-[#FBFBFF] uppercase  leading-[61px] lg:text-start text-center">
      the  <span className="font-bold"> team</span>
          </h2>
          <div className="flex flex-wrap gap-6 justify-between mt-[41px]">
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
          </div>
      </Container>
    </section>
  )
}

export default Team
