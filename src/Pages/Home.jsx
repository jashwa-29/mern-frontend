import React from 'react'
import Hero from '../Components/Hero'
import { Newcollection } from '../Components/Newcollection'
import Testimonials from '../Components/Testimonials'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'

const Home = ({spro , setSpro , phead , setPhead }) => {
  return (
    <>
      <Hero/>
      <Newcollection spro={spro} setSpro={setSpro}   phead={phead} setPhead={setPhead}/>
      <Testimonials/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default Home