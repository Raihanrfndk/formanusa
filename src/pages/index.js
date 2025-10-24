import AboutSection from '@/components/about'
import HeroSection from '@/components/banner'
import Cutscene from '@/components/cutscene'
import Footer from '@/components/footer'
import GallerySection from '@/components/gallery'
import LatestWorksSection from '@/components/latest-work'
import Navbar from '@/components/navbar'
import OurTeam from '@/components/our-team'
import PracticeSection from '@/components/practice'
import ServiceSection from '@/components/service-page'
import WhereAbout from '@/components/where-about'
import React from 'react'

const homepage = () => {
  return (
    <div>
      <Cutscene/>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServiceSection/>
      <PracticeSection/>
      <LatestWorksSection/>
      <GallerySection/>
      <OurTeam/>
      <WhereAbout/>
      <Footer/>
    </div>
  )
}

export default homepage
