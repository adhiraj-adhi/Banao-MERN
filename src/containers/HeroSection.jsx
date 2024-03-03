import React, { useContext, useState } from 'react'
import Hero from '../components/Hero/Hero'
import { IsLoggedInContext } from '../App';


const HeroSection = () => {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  return (
    <>
      {
        !isLoggedIn &&
        <Hero />
      }
    </>
  )
}

export default HeroSection