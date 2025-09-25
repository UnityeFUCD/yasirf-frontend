import React from 'react'
import Container from '@/pages/Shared/Container'
import { Net } from '@/assets'

const Hero = () => {
  return (
    <section className=''>
      <Container className="pt-[229px] pb-[177px] lg:px-0 px-4 bg-[#05091D] relative overflow-hidden">
        <h2 className='text-center lg:text-[100px] text-[56px] text-[#FBFBFF] font-normal uppercase lg:leading-[90px]'>about <span className='text-primaryColor font-bold'>us</span></h2>
        <p className='lg:text-[28px] text-[18px] font-normal text-[#FBFBFF] font-Manpore text-center lg:pt-4'>We help busy Gamers to dominate the community!</p>
        <img src={Net} alt="Net" className='absolute lg:-top-10 lg:-right-16 -bottom-10 -right-28'/>
      <div className="absolute -top-20 right-[30%] size-[200px] bg-primaryColor blur-[200px]" />
      </Container>
      
    </section>
  )
}

export default Hero
