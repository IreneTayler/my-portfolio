import About from '@/components/About'
import AIHelper from '@/components/AIHelper'
import ContactSection from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ProjectsSection from '@/components/Projects'
import ExperienceSection from '@/components/Experience'
import Skills from '@/components/Skills'
import WorkApproach from '@/components/WorkApproach'
import React from 'react'

const page = () => {
  return (
    <div className='font-Roboto'>
      <Navbar/>
      <Hero/>
      <About/>
      <WorkApproach/>
      <Skills/>
      <ExperienceSection/>
      <ProjectsSection/>
      <AIHelper/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default page
