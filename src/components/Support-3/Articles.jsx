import Container from '@/pages/Shared/Container'
import React from 'react'
import Articleaccordion from '../DynamicComponents/support-3/Articleaccordion'

const Articles = () => {
  return (
    <section className='bg-[#05091D] pt-[68px] pb-[134px]'>
      <Container>
        <h2 className='text-[56px] text-[#FBFBFF] font-semibold uppercase text-center pb-9'> articles on payment issue</h2>
        <div className="flex flex-col gap-4 w-[715px] mx-auto">
            <Articleaccordion/>
        </div>
      </Container> 
    </section>
  )
}

export default Articles
