import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import AgencyCard from '../components/AgencyCard'
import IconOne from '../assets/agencyIcon.png'
import AgencyBanner from '../assets/agency.png'
import Image from '../components/Image'

const Agency = () => {
  return (
    <section className='pb-[150px]'>
        <Container>
            <Flex className='items-end !block md:!flex'>
                <div className='md:w-7/12'>
                <Heading className='w-[508px]' text="Why You Should Choose Agenc"/>
                <SubHeading className='w-[480px] pt-5 pb-[85px]' text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." />

                <Flex className='!block md:!flex'>
                    <AgencyCard image={IconOne} title="Innovative Ideas" text="Because each project is different, we adapt to your business model."/>
                   <AgencyCard className="mt-10" image={IconOne} title="Dedicated Support" text="Because each project is different, we adapt to your business model."/>
                </Flex>
                
                <div className='md:ml-[200px] mt-[50px]'> 
                   <AgencyCard image={IconOne} title="Innovative Ideas" text="Because each project is different, we adapt to your business model."/>
                </div>
              

                </div>
                <div className='md:w-5/12'>
                <Image src={AgencyBanner}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Agency
