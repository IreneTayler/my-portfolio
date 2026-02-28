import About from '@/components/About'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/Projects'
import ServicesSection from '@/components/Services'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <div className='font-Roboto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <ServicesSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page
