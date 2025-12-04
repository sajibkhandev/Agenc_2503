import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import IconOne from '../assets/serviceIcon.png'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import ServiceCard from '../components/ServiceCard'

const Service = () => {
  return (
    <section className=' pb-[103px]'>
        <Container>
            <Heading text="Our Provided Services" className='text-center'/>
            <SubHeading text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form." className='text-center w-[590px] mx-auto pt-5 leading-[26px]'/>
           <Flex className='flex-wrap gap-6 pt-[50px]'>
               <ServiceCard image={IconOne} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
               <ServiceCard image={IconOne} title="UI/UX Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
               <ServiceCard image={IconOne} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
               <ServiceCard image={IconOne} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
               <ServiceCard image={IconOne} title="UI/UX Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
               <ServiceCard image={IconOne} title="Web Design" text="There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look."/>
              
           </Flex>
        </Container>
      
    </section>
  )
}

export default Service
