import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import SubHeading from '../components/SubHeading'
import FooterLogo from '../assets/logo.png'
import FooterListItem from '../components/FooterListItem'

const Footer = () => {
  return (
    <footer className='pt-150'>
        <Container>
            <Flex>
                <div className='w-4/12 '>
                <Image src={FooterLogo}/>
                <SubHeading className='w-[356px] pt-[30px]' text="I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority."/>

                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-third font-inter font-semibold '>About</strong>
                <ul className='flex flex-col gap-y-5 mt-10'>
                   <FooterListItem text="About Us"/>
                   <FooterListItem text="Features"/>
                   <FooterListItem text="News"/>
                   <FooterListItem text="Careers"/>
                  
                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-third font-inter font-semibold '>Company</strong>
                <ul className='flex flex-col gap-y-5 mt-10'>
                   <FooterListItem text="Our Team"/>
                   <FooterListItem text="Partner With Us"/>
                   <FooterListItem text="FAQ"/>
                   <FooterListItem text="Blog"/>
                  
                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-third font-inter font-semibold '>About</strong>
                <ul className='flex flex-col gap-y-5 mt-10'>
                   <FooterListItem text="About Us"/>
                   <FooterListItem text="Features"/>
                   <FooterListItem text="News"/>
                   <FooterListItem text="Careers"/>
                  
                </ul>
                </div>
                <div className='w-2/12'>
                <strong className='text-xl text-third font-inter font-semibold '>About</strong>
                <ul className='flex flex-col gap-y-5 mt-10'>
                   <FooterListItem text="About Us"/>
                   <FooterListItem text="Features"/>
                   <FooterListItem text="News"/>
                   <FooterListItem text="Careers"/>
                  
                </ul>
                </div>
                
            </Flex>
            <div className='border-t border-[#E8E8E8] mt-12 pt-5 pb-[46px]'>
                 <p className='text-center text-[#D0D0D0] text-base font-inter font-normal'>All credit goes to @agence.com</p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer
