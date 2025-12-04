import React from 'react'
import LandingHero from './(components)/LandingHero'
import Story from './(components)/Story'
import Message from './(components)/CoreMessage'
import Testimonials from './(components)/Testimonials'
import Contact from './(components)/Contact'
import MiddleImageSection from './(components)/MiddleImageSection'

const LandingPage = () => {
  return (
    <>
    <LandingHero/>
    <Story/>
    <Message/>
    <MiddleImageSection/>
    <Testimonials/>
    <Contact/>
    </>
  )
}

export default LandingPage